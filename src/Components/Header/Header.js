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
  faGripLinesVertical
} from "@fortawesome/free-solid-svg-icons";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="Header-container">
          <img src={navLogo} width={200} alt="SKINROU" />
          <nav className="Nav-default-container">
            <ul className="Nav-default-links">
              <li className="Nav-links">
                <span>
                  <FontAwesomeIcon icon={faHome} color="#FFFFFF" />
                </span>
                Home
              </li>
              <li className="Nav-links">
                <span>
                  <FontAwesomeIcon icon={faPlusCircle} color="#FFFFFF" />
                </span>
                Create Routine
              </li>
              <li className="Nav-links">
                <span>
                  <FontAwesomeIcon icon={faUserCircle} color="#FFFFFF" />
                </span>
                My Profile
              </li>
              <li className="Nav-links">
                <span>
                  <FontAwesomeIcon icon={faCog} color="#FFFFFF" />
                </span>
                User Settings
              </li>
              <li>
                <FontAwesomeIcon icon={faGripLinesVertical} color="#FFFFFF" />
              </li>
              <li className="Nav-links">
                <span>
                  <FontAwesomeIcon icon={faSignOutAlt} color="#FFFFFF" />
                </span>
                Log Out
              </li>
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

export default Header;
