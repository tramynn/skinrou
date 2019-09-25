import React, { Component } from "react";
import Header from "../Header/Header";
import "../../styles/partials/Home/Home.scss";

class UserLanding extends Component {
  render() {
    return (
      <div className="Home-container">
        <Header />
        <div>
          <aside className="Home-left-box"></aside>
          <main className="Home-center-box"></main>
          <aside className="Home-right-box"></aside>
        </div>
      </div>
    );
  }
}
export default UserLanding;
