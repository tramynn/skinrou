require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const authController = require("./controllers/authController");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

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

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db connected :D");
});

// auth endpoints
app.get("/auth/user");
app.post("/auth/register");
app.post("/auth/login");
app.post("/auth/logout");

// routines endpoints

app.listen(SERVER_PORT, () => {
  console.log(`SERVER LISTENING ON PORT: ${SERVER_PORT}`);
});
