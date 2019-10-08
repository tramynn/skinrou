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
    const { userId, username, firstName, url } = this.props;

    return (
      <div>
        <div className="Header-main-container">
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
                  {url != null ? (
                    <img
                      src={url}
                      alt={`${username}'s profile pic`}
                      className="User-avatar"
                    />
                  ) : (
                    <span>
                      <FontAwesomeIcon icon={faUserCircle} color="#FFFFFF" />
                    </span>
                  )}
                  <div className="Header-username">{username}</div>
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
        {/* */}
        {/* SIDE MENU */}
        {/*  */}
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
              <li className="Nav-side-links">
                <span className="Side-icons">
                  {url != null ? (
                    <img
                      src={url}
                      alt={`${username}'s profile pic`}
                      className="User-avatar-side"
                    />
                  ) : (
                    <FontAwesomeIcon icon={faUserCircle} color="#FFFFFF" />
                  )}
                </span>
                <div className="Side-username">{username}</div>
              </li>
            </Link>
            <div className="separator-container">
              <div className="separator"></div>
            </div>
            <Link
              to="/home"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li className="Nav-side-links">
                <span className="Side-icons">
                  <FontAwesomeIcon icon={faHome} color="#FFFFFF" />
                </span>
                <div className="Side-links">Home</div>
              </li>
            </Link>
            <Link
              to="/createRoutine"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li className="Nav-side-links">
                <span className="Side-icons">
                  <FontAwesomeIcon icon={faPlusCircle} color="#FFFFFF" />
                </span>
                <div className="Side-links">Routine</div>
              </li>
            </Link>
            <Link
              to="/chat"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li className="Nav-side-links">
                <span className="Side-icons">
                  <FontAwesomeIcon icon={faCommentDots} color="#FFFFFF" />
                </span>
                <div className="Side-links">Chat</div>
              </li>
            </Link>
            <div className="separator-container">
              <div className="separator"></div>
            </div>
            <Link
              to="/settings"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li className="Nav-side-links">
                <span className="Side-icons">
                  <FontAwesomeIcon icon={faCog} color="#FFFFFF" />
                </span>
                <div className="Side-links">Settings</div>
              </li>
            </Link>
            <Link
              to="/"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li className="Nav-side-links" onClick={this.handleLogout}>
                <span className="Side-icons">
                  <FontAwesomeIcon icon={faSignOutAlt} color="#FFFFFF" />
                </span>
                <div className="Side-links">Log Out</div>
              </li>
            </Link>
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
    url: reduxState.userReducer.url
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
