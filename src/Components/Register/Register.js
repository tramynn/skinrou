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
      <div className="Login-Register-Body">
        <header>
          <h1>Welcome, please sign-up.</h1>
        </header>
        <main>
          <form>
            <input type="text" placeholder="First Name" autoFocus required />
            <input type="text" placeholder="Last Name" required />
            <input type="text" placeholder="Username" required />
            <input type="password" placeholder="Password" required />
            <input type="number" placeholder="Age" required />
            <input type="text" placeholder="Phone #" required />
            <button type="submit">Register</button>
          </form>
        </main>
      </div>
    );
  }
}

export default Register;
