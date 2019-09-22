import React, { Component } from "react";
import headerLogo from "../../images/main-logo.svg";
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
            <button>Log In</button>
          </div>
          <p>or</p>
          <div className="GL-buttons-container">
            <button>Register</button>
          </div>
        </div>
      </div>
    );
  }
}
