import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import "../../styles/partials/Chatrooms/Chatrooms.scss";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/styles";
import { useSelector } from "react-redux";
import io from "socket.io-client";

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
  const [socket, setSocket] = React.useState("");

  useEffect(() => {
    setSocket(
      io("ws://localhost:4242/chatrooms", { transports: ["websocket"] })
    );
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        socket.emit("greet", { message: "Hello Ms. Server!" });
      });

      socket.emit("addUser", username);

      socket.on("newMsg", data => {
        const newMessages = data.messages;
        setMessages(newMessages);
      });

      socket.on("userLeft", data => {
        const userLeftMsg = data.messages;
        setMessages(userLeftMsg);
      });
      
      socket.on("disconnect");
    }
  }, [socket, username]);

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
            {messages.map((message, i) => {
              return (
                <div key={i}>
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
                let message = {
                  username: username,
                  message: userMessage
                };
                socket.emit("sendMsg", message);
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
