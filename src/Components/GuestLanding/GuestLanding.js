import React, { Component } from "react";
import logo from "../../images/main-logo.svg";
import { Link } from "react-router-dom";
import "../../styles/partials/GuestLanding/GuestLanding.css";

export default class GuestLanding extends Component {
  render() {
    return (
      <div className="GuestLanding-Body">
        <img src={logo} width={320} alt="SKINROU" />
        <p className="tagline">
          Beauty starts with a routine;
          <br />
          treat your skin with priority.
        </p>
        <div className="GuestLanding-Buttons">
          <Link to="/login">
            <button className="Login-btn">Log In</button>
          </Link>
          <p>or</p>
          <Link to="/register">
            <button className="Register-btn">Register</button>
          </Link>
        </div>
      </div>
    );
  }
}
