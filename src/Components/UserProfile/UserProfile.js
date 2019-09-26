import React, { Component } from "react";
import Header from "../Header/Header";
import "../../styles/partials/UserProfile/UserProfile.scss";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="UserProfile-container">
        <Header />
        <header>
          <h1>My Profile</h1>
        </header>
        <main></main>
      </div>
    );
  }
}

export default UserProfile;
