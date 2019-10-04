require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
const app = express();
// Socket
const http = require("http").createServer(app);
const io = require("socket.io")(http);
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
app.get("/api/routines/like/:userId", routinesController.userLiked);
app.post("/api/routines/like/:routineId", routinesController.likeRoutine);
app.put("/api/routines/like/:routineId", routinesController.unlikeRoutine);

// Cloudinary
app.get("/api/profile", profController.getProfPic);
app.post("/api/profile", profController.addProfPic);

// Socket messages
let messages = [];

// Socket listener
const chat = io.of("/chatrooms");
chat.on("connect", socket => {
  console.log("A user is connected");

  socket.on("greet", data => {
    console.log(data);
    socket.emit("respond", { message: "Hello Ms. Client!" });
  });

  socket.on("sendMsg", data => {
    console.log(`Message received: ${data.username}: ${data.message}`);
    const { username, message } = data;
    messages.push({ username, message });
    console.log(messages);
    chat.emit("newMsg", { messages });
  });

  // When user disconnects
  socket.on("disconnect", () => {
    console.log("User disconnected.");
  });
});

http.listen(SERVER_PORT, () => {
  console.log(`SERVER LISTENING ON PORT: ${SERVER_PORT}`);
});
