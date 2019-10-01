// Require dotenv, express, massive, and session
require("dotenv").config();
const express = require("express");
const massive = require("massive");
const session = require("express-session");
// Require authController and routinesController
const authController = require("./controllers/authController");
const routinesController = require("./controllers/routinesController");
// Destructure SERVER_PORT, CONNECTION_STRING, and SESSION SECRET from dotenv
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;
// Invoke express
const app = express();

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
app.get("/api/routines/user/:userId", routinesController.myRoutines);
app.post("/api/routines", routinesController.addRoutine);
app.put("/api/routines/:routineId", routinesController.editRoutine);
app.delete(
  "/api/routines/:routineId/:userId",
  routinesController.deleteRoutine
);

// Socketss
// var http = require("http").createServer(app);
// app.get("/chat/general", )
// const general = io.of("/chat/")

app.listen(SERVER_PORT, () => {
  console.log(`SERVER LISTENING ON PORT: ${SERVER_PORT}`);
});
