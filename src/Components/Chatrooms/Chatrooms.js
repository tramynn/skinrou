import React, { Component } from "react";
import Header from "../../Components/Header/Header";
import "../../styles/partials/Chatrooms/Chatrooms.scss";
import Paper from "@material-ui/core/Paper";

class Chatrooms extends Component {
  render() {
    return (
      <div className="Chatrooms-container">
        <Header />
        <Paper className="Chatbox">
          <nav className="Chatrooms-left-box">
            <h1>Chatrooms</h1>
            <hr />
            <ul>
              <li>General</li>
              <li>Skincare by Skin Type</li>
              <li>Skincare by Age</li>
              <li>Skincare by Concerns</li>
            </ul>
          </nav>
          <span className="Chatrooms-right-box">
            <header className="Chat-title">
              <h1>General</h1>
            </header>
            <main className="Chat-messages">
              Tramy: Hello
              <br />
              Jacob: Hi
            </main>
            <span className="Chat-message-send">
              <input placeholder="Message.." />
              <button>Send</button>
            </span>
          </span>
        </Paper>
      </div>
    );
  }
}

export default Chatrooms;
