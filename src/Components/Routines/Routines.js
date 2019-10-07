import React, { Component } from "react";
import Header from "../Header/Header";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getRoutinesByCategories } from "../../redux/reducers/routinesReducer";
import "../../styles/partials/Body/Body.scss";
import "../../styles/partials/RoutineNav/RoutineNav.scss";

class Routines extends Component {
  componentDidMount() {
    this.props.getRoutinesByCategories(this.props.match.params.categoryId);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.match.params.categoryId === "2" ? (
          <div className="Body-container">
            <div className="Category-bg-routines">
              <div className="top-row">
                <div>
                  <h1>Routines by Age</h1>
                </div>
                <div className="Category-nav-container">
                  <Link
                    to="/routines/age/15"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <h1 className="Category-nav-links">15+</h1>
                  </Link>
                </div>
              </div>
              <div className="middle-row">
                <div className="Category-nav-container">
                  <Link
                    to="/routines/age/20"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <h1 className="Category-nav-links">20s</h1>
                  </Link>
                </div>
                <div className="Category-nav-container">
                  <Link
                    to="/routines/age/30"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <h1 className="Category-nav-links">30s</h1>
                  </Link>
                </div>
              </div>

              <div className="bottom-row">
                <div className="Category-nav-container">
                  <Link
                    to="/routines/age/40"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <h1 className="Category-nav-links">40s</h1>
                  </Link>
                </div>
                <div className="Category-nav-container">
                  <Link
                    to="/routines/age/50"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <h1 className="Category-nav-links">50+</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
        {this.props.match.params.categoryId === "1" ? (
          <div className="Body-container">
            <div className="Category-bg-routines">
              <div className="top-row">
                <div>
                  <h1>Routines by Skin Type</h1>
                </div>
                <div className="Category-nav-container">
                  <Link
                    to="/routines/skintype/combination"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <h1 className="Category-nav-links">Combination</h1>
                  </Link>
                </div>
              </div>
              <div className="middle-row">
                <div className="Category-nav-container">
                  <Link
                    to="/routines/skintype/dry"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <h1 className="Category-nav-links">Dry</h1>
                  </Link>
                </div>
                <div className="Category-nav-container">
                  <Link
                    to="/routines/skintype/oily"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <h1 className="Category-nav-links">Oily</h1>
                  </Link>
                </div>
              </div>
              <div className="bottom-row">
                <div className="Category-nav-container">
                  <Link
                    to="/routines/skintype/sensitive"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <h1 className="Category-nav-links">Sensitive</h1>
                  </Link>
                </div>
                <div className="Category-nav-container">
                  <Link
                    to="/routines/skintype/normal"
                    style={{ color: "inherit", textDecoration: "inherit" }}
                  >
                    <h1 className="Category-nav-links">Normal</h1>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    routines: reduxState.routinesReducer.routines
  };
};
export default connect(
  mapStateToProps,
  {
    getRoutinesByCategories
  }
)(Routines);
