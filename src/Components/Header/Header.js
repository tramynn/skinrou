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
  faBars
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
      this.state.menuOpenStatus === "side-menu-close" ||
      this.state.menuOpenStatus === "side-menu"
    ) {
      this.setState({ menuOpenStatus: "side-menu-open" });
    } else if (this.state.menuOpenStatus === "side-menu-close") {
      this.setState({ menuOpenStatus: "side-menu-close" });
    }
  };

  render() {
    const { firstName, userId } = this.props;

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
          <span className="Menu-bar hidden-by-default">
            <FontAwesomeIcon
              icon={faBars}
              color="#FFFFFF"
              size="2x"
              className="Hamburger"
            />
          </span>
        </div>
        <nav className="Nav-collapsed-container hidden-by-default">
          <ul className="Nav-collapsed-links">
            <Link
              to="/home"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li className="Nav-collapsed-links">
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
              <li className="Nav-collapsed-links">
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
              <li className="Nav-collapsed-links">
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
              <li className="Nav-collapsed-links">
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
              <li className="Nav-collapsed-links" onClick={this.handleLogout}>
                <span>
                  <FontAwesomeIcon icon={faSignOutAlt} color="#FFFFFF" />
                </span>
                Log Out
              </li>
            </Link>
            <li>
              <hr />
            </li>
            <li className="Header-message">Hello, {firstName}</li>
            <Link
              to={`/profile/user/${userId}`}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <li className="Nav-collapsed-links">
                <span>
                  <FontAwesomeIcon icon={faUserCircle} color="#FFFFFF" />
                </span>
                Profile
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
