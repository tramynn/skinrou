import React from "react";
import Header from "../../Components/Header/Header";
import "../../styles/partials/Chatrooms/Chatrooms.scss";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
const io = require("socket.io-client");

const useStyles = makeStyles(() => ({
  chatbox: {
    backgroundColor: "#6497b1",
    color: "white",
    width: "90vw",
    height: "90vh",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: "15px",
    fontFamily: "Raleway, sans-serif",
    fontWeight: "bold"
  },
  chatboxLeft: {
    width: "33%",
    height: "90%",
    padding: "10px",
    borderRight: "1px solid white"
  },
  chatboxRight: {
    width: "67%",
    height: "95%",
    padding: "10px"
  },
  chatboxRightTitle: {
    textAlign: "center"
  },
  chatboxRightMessages: {
    height: "90%",
    width: "100%"
  },
  chatboxRightMessageSend: {
    display: "flex",
    justifyContent: "flex-start",
    height: "5%"
  },
  input: {
    width: "90%"
  },
  button: {
    width: "10%"
  }
}));

function Chatrooms() {
  const classes = useStyles();
  const username = useSelector(
    initialState => initialState.userReducer.username
  );
  const [messages, setMessages] = React.useState([]);
  const [userMessage, setUserMessage] = React.useState("");
  const [socket, setSocket] = React.useState(null);

  React.useEffect(() => {
    setSocket(io("http://localhost:4242/chatrooms"));
  }, []);

  // socket.on("Welcome", msg => {
  //   console.log("Received: ", msg);
  // });
  // socket.on("newUser", res => console.log(res));
  // socket.on("err", err => {
  //   console.log(err);
  // });
  // socket.on("success", res => console.log(res));

  // socket.emit("joinRoom", "General");

  // Mount and watched socket
  React.useEffect(() => {
    if (socket) {
      socket.on(
        "newMessage",
        data => console.log(data) || setMessages(data.messages)
      );
    }
  }, [socket]);

  return (
    <div className="Chatrooms-container">
      <Header />
      <Paper className={classes.chatbox}>
        <nav className={classes.chatboxLeft}>
          <h1>Chatrooms</h1>
          <hr />
          <List className="Chatroom-topics">
            {["General", "Skincare by Skin Type", "Skincare by Concerns"].map(
              topic => (
                <ListItem key={topic} button>
                  <ListItemText primary={topic} />
                </ListItem>
              )
            )}
          </List>
        </nav>
        <span className={classes.chatboxRight}>
          <header className={classes.chatboxRightTitle}>
            <h1>General</h1>
          </header>
          <main className={classes.chatboxRightMessages}>
            {messages.map(message => {
              return (
                <div>
                  <ul>
                    <div className="Username">
                      <li>{message.username}</li>
                    </div>
                    <div className="User-message">
                      <li>{message.message}</li>
                    </div>
                  </ul>
                </div>
              );
            })}
          </main>
          <span className={classes.chatboxRightMessageSend}>
            <input
              placeholder="Message.."
              className={classes.input}
              onChange={e => setUserMessage(e.target.value)}
            />
            <button
              className={classes.button}
              onClick={() => {
                socket.emit("sendMsg", {
                  username: username,
                  message: userMessage
                });
              }}
            >
              Send
            </button>
          </span>
        </span>
      </Paper>
    </div>
  );
}

export default Chatrooms;
