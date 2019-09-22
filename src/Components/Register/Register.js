import React, { Component } from "react";
import "../../styles/partials/Login-Register/Login-Register.scss";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <div className="Login-Register-container">
        <div className="Left-box">
          <h1 className="Welcome-message">
            Welcome,
            <br />
            please sign-up.
          </h1>
        </div>
        <div className="Right-box">
          <form className="Form-body">
            <input type="text" placeholder="First Name" autoFocus required />
            <input type="text" placeholder="Last Name" required />
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <input type="number" placeholder="Age" required />
            <input type="text" placeholder="Phone #" required />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Register;
