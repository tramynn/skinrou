require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();
// Socket
var server = require("http").createServer(app);
const sockets = require("socket.io");
const io = sockets(server);
// Controllers
const authController = require("./controllers/authController");
const routinesController = require("./controllers/routinesController");
const profController = require("./controllers/profController");
// Dotenv
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

// Middleware
app.use(express.json());

app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

// Connect to database
massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected :D");
});

// Auth Endpoints
app.get("/auth/user", authController.getUser);
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);
app.post("/auth/logout", authController.logout);
// edit user profile
// delete user profile

// Routines Endpoints
app.get("/api/categories", routinesController.categories);
app.get("/api/routines", routinesController.routines);
app.get("/api/routines/:categoryId", routinesController.routinesByCategory);
app.get("/api/routines/age/:age", routinesController.age);
app.get("/api/routines/skintype/:type", routinesController.skintype);
app.get("/api/routines/user/:userId", routinesController.userRoutines);
app.post("/api/routines", routinesController.addRoutine);
app.put("/api/routines/:routineId", routinesController.editRoutine);
app.delete("/api/routines/:routine_id", routinesController.deleteRoutine);

// Cloudinary
app.get("/api/profile", profController.getProfPic);
app.post("/api/profile", profController.addProfPic);

// Sockets
let messages = [
  { username: "sam", message: "hello" },
  { username: "sam", message: "hello" },
  { username: "sam", message: "bananas" }
];
// const chatRooms = ["General", "Skintype", "Concerns"];

// Server listener

const chatrooms = io.of("/chatrooms");
chatrooms.on("connection", socket => {
  console.log("User connected");
  socket.emit("Welcome", "Hello, welcome to the main chat.");

  // socket.on("joinRoom", roomName => {
  //   if (chatRooms.includes(roomName)) {
  //     socket.join(roomName);
  //     io.of("/chatrooms")
  //       .in(roomName)
  //       .emit("newUser", "New user has joined " + roomName + " room.");
  //     return socket.emit("success", "You have successfully joined this room.");
  //   } else {
  //     return socket.emit("err", "No Room named " + roomName);
  //   }
  // });
  socket.on("sendMsg", data => {
    console.log(
      `New message received from the user: ${data.username}: ${data.message}`
    );
    const { username, message } = data;
    messages.push({ username, message });
    console.log(messages);
  });

  chatrooms.emit("newMessage", { messages });

  socket.on("Disconnected", () => {
    console.log("User disconnected.");
  });
});

server.listen(SERVER_PORT, () => {
  console.log(`SERVER LISTENING ON PORT: ${SERVER_PORT}`);
});

// app.listen(SERVER_PORT, () => {
//   console.log(`SERVER LISTENING ON PORT: ${SERVER_PORT}`);
// });
