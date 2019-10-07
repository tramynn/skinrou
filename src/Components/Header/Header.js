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
  faCommentDots,
  faBars,
  faTimes
} from "@fortawesome/free-solid-svg-icons";
import { getSession, logoutUser } from "../../redux/reducers/userReducer";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";

class Header extends Component {
  constructor() {
    super();
    this.state = {
      menuOpenStatus: "side-menu"
    };
  }

  componentDidMount() {
    this.props.getSession();
  }

  handleLogout = () => {
    this.props.logoutUser();
    this.props.history.push("/");
  };

  toggleMenu = () => {
    if (
      this.state.menuOpenStatus === "side-menu" ||
      this.state.menuOpenStatus === "side-menu-close"
    ) {
      this.setState({ menuOpenStatus: "side-menu-open" });
    } else if (this.state.menuOpenStatus === "side-menu-open") {
      this.setState({ menuOpenStatus: "side-menu-close" });
    }
  };

  render() {
    const { userId, username, firstName, lastName } = this.props;

    return (
      <div>
        <div className="Header-main-container">
          <img src={navLogo} width={200} alt="SKINROU" />
          {/* MAIN MENU */}
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
                </li>
              </Link>
              <li>
                <span>
                  <FontAwesomeIcon icon={faGripLinesVertical} color="#FFFFFF" />
                </span>
              </li>
              <li className="Header-message">
                <span>Hello, {firstName}</span>
              </li>
              <Link
                to={`/profile/user/${userId}`}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <li className="Nav-links">
                  <span>
                    <FontAwesomeIcon icon={faUserCircle} color="#FFFFFF" />
                  </span>
                  <div className="Header-profile">{username}</div>
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
                </li>
              </Link>
            </ul>
          </nav>
          <span
            className="Menu-bar hidden-by-default"
            onClick={this.toggleMenu}
          >
            <FontAwesomeIcon
              icon={faBars}
              color="#FFFFFF"
              size="2x"
              className="Hamburger"
            />
          </span>
        </div>
        {/* SIDE MENU */}
        <nav className={this.state.menuOpenStatus}>
          <div onClick={this.toggleMenu}>
            <FontAwesomeIcon
              icon={faTimes}
              color="#FFFFFF"
              size="lg"
              className="Menu-close"
            />
          </div>
          <ul className="side-menu">
            <Link
              to={`/profile/user/${userId}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <div className="Header-profile-side">
                <div className="Header-username">
                  <span>
                    <FontAwesomeIcon icon={faUserCircle} color="#FFFFFF" />
                  </span>
                  {username}
                </div>
              </div>
            </Link>
            <span className="Nav-collapsed-links">
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
              <li>
                <hr />
              </li>
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
            </span>
          </ul>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userId: reduxState.userReducer.userId,
    username: reduxState.userReducer.username,
    firstName: reduxState.userReducer.firstName,
    lastName: reduxState.userReducer.lastName
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
