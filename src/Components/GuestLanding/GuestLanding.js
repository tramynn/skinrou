import React, { Component } from "react";
import headerLogo from "../../images/main-logo.svg";
import "../../styles/partials/GuestLanding/GuestLanding.css";

export default class GuestLanding extends Component {
  render() {
    return (
      <div className="Body">
        <img src={headerLogo} width={320} alt="SKINROU" />
        <div className="GuestLanding-Buttons">
          <button>Login</button>
          <p>or</p>
          <button>Register</button>
        </div>
      </div>
    );
  }
}
