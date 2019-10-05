import React, { Component } from "react";
import "../../styles/partials/Header/Header.scss";
import navLogo from "../../images/logo-white.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faPlusCircle,
  faUserCircle,
  faSignOutAlt,
  faCog,
  faGripLinesVertical,
  faCommentDots
} from "@fortawesome/free-solid-svg-icons";
import { getSession, logoutUser } from "../../redux/reducers/userReducer";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class Header extends Component {
  componentDidMount() {
    this.props.getSession();
  }

  handleLogout = () => {
    this.props.logoutUser();
    this.props.history.push("/");
  };

  render() {
    const { firstName, userId } = this.props;

    return (
      <div>
        <div className="Header-container">
          <img src={navLogo} width={200} alt="SKINROU" />
          <nav className="Nav-default-container">
            <ul className="Nav-default-links">
              <Link
                to="/home"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li className="Nav-links">
                  <span>
                    <FontAwesomeIcon icon={faHome} color="#FFFFFF" />
                  </span>
                  Home
                </li>
              </Link>
              <Link
                to="/createRoutine"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li className="Nav-links">
                  <span>
                    <FontAwesomeIcon icon={faPlusCircle} color="#FFFFFF" />
                  </span>
                  Routine
                </li>
              </Link>
              <Link
                to="/chat"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li className="Nav-links">
                  <span>
                    <FontAwesomeIcon icon={faCommentDots} color="#FFFFFF" />
                  </span>
                  Chat
                </li>
              </Link>
              <Link
                to="/settings"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li className="Nav-links">
                  <span>
                    <FontAwesomeIcon icon={faCog} color="#FFFFFF" />
                  </span>
                  <span className="Link">Settings</span>
                </li>
              </Link>
              <Link
                to="/"
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li className="Nav-links" onClick={this.handleLogout}>
                  <span>
                    <FontAwesomeIcon icon={faSignOutAlt} color="#FFFFFF" />
                  </span>
                  Log Out
                </li>
              </Link>
              <li>
                <FontAwesomeIcon icon={faGripLinesVertical} color="#FFFFFF" />
              </li>
              <li className="Header-message">Hello, {firstName}</li>
              <Link
                to={`/profile/user/${userId}`}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li className="Nav-links">
                  <span>
                    <FontAwesomeIcon icon={faUserCircle} color="#FFFFFF" />
                  </span>
                  Profile
                </li>
              </Link>
            </ul>
          </nav>
        </div>
        {/* <nav className="Nav-collapsed-container">
          <ul className="Nav-collapsed-links">
            <li>
              <FontAwesomeIcon icon={faHome} /> Home
            </li>
            <li>
              <FontAwesomeIcon icon={faPlusCircle} /> Create Routine
            </li>
            <li>
              <FontAwesomeIcon icon={faUserCircle} /> My Profile
            </li>
            <li>
              <hr />
            </li>
            <li>
              <FontAwesomeIcon icon={faCog} /> User Settings
            </li>
            <li>
              <FontAwesomeIcon icon={faSignOutAlt} /> Log Out
            </li>
          </ul>
        </nav> */}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userId: reduxState.userReducer.userId,
    firstName: reduxState.userReducer.firstName
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    {
      getSession,
      logoutUser
    }
  )(Header)
);
