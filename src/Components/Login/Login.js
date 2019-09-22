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
      <div className="Login-Register-Body">
        <header>
          <h1>Welcome Back.</h1>
        </header>
        <main>
          <form className="Form-body">
            <input type="text" placeholder="Username" autoFocus required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Log In</button>
          </form>
        </main>
      </div>
    );
  }
}

export default Login;
