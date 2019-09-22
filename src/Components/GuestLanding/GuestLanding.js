import React, { Component } from "react";
import headerLogo from "../../images/main-logo.svg";
import { Link } from "react-router-dom";
import "../../styles/partials/GuestLanding/GuestLanding.css";

export default class GuestLanding extends Component {
  render() {
    return (
      <div className="GuestLanding-Body">
        <img src={headerLogo} width={320} alt="SKINROU" />
        <p className="tagline">
          Beauty starts with a routine;
          <br />
          treat your skin with priority.
        </p>
        <div className="GuestLanding-Buttons">
          <div className="GL-buttons-container">
            <Link to="/login">
              <button>Log In</button>
            </Link>
          </div>
          <p>or</p>
          <div className="GL-buttons-container">
            <Link to="/register">
              <button>Register</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
