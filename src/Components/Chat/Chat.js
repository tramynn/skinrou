import React, { useEffect, useRef } from "react";
import Header from "../../Components/Header/Header";
import "../../styles/partials/Chat/Chat.scss";
import Paper from "@material-ui/core/Paper";
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
    fontFamily: "Raleway, sans-serif",
    fontWeight: "bold",
    marginTop: "8.5vh"
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

function Chat() {
  const classes = useStyles();
  const username = useSelector(
    initialState => initialState.userReducer.username
  );
  const [messages, setMessages] = React.useState([]);
  let [userMessage, setUserMessage] = React.useState("");
  const [socket, setSocket] = React.useState(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    setSocket(io("/chat"));
  }, []);

  useEffect(() => {
    messagesEndRef.current.scrollTop = messagesEndRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (socket) {
      socket.on("connect", () => {
        socket.emit("addUser", username);
      });

      socket.on("userEntered", data => {
        const userEnteredMsg = data.messages;
        setMessages(userEnteredMsg);
      });

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

  const clearInput = () => {
    setUserMessage("");
  };

  return (
    <div className="Chatrooms-container">
      <Header />
      <Paper className={classes.chatbox}>
        <nav className={classes.chatboxLeft}>
          <h1>Chatrooms</h1>
          <hr />
          Users in the chat:
        </nav>
        <span className={classes.chatboxRight}>
          <header className={classes.chatboxRightTitle}>
            <h1>General</h1>
          </header>
          <main className={classes.chatboxRightMessages} ref={messagesEndRef}>
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
          <span>
            <form className={classes.chatboxRightMessageSend}>
              <input
                placeholder="Message.."
                className={classes.input}
                value={"" || `${userMessage}`}
                onChange={e => setUserMessage(e.target.value)}
              />
              <button
                className={classes.button}
                type="submit"
                onClick={e => {
                  e.preventDefault();
                  let message = {
                    username: username,
                    message: userMessage
                  };
                  socket.emit("sendMsg", message);
                  clearInput();
                }}
              ></button>
            </form>
          </span>
        </span>
      </Paper>
    </div>
  );
}

export default Chat;
