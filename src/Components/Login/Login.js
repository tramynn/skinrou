import React, { Component } from "react";
import "../../styles/partials/Login-Register/Login-Register.scss";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="Login-Register-container">
        <div className="Left-box">
          <h1 className="Welcome-message">Welcome Back.</h1>
        </div>
        <div className="Right-box">
          <form className="Form-body">
            <input type="text" placeholder="Username" autoFocus required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
