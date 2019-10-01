import React, { Component } from "react";
import { connect } from "react-redux";
import { getRoutinesByCategories } from "../../redux/reducers/routinesReducer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";

class Routines extends Component {
  componentDidMount() {
    this.props.getRoutinesByCategories(this.props.match.params.categoryId);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.match.params.categoryId === "2" ? (
          <div>
            <Link
              to="/routines/age/15"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <h1>15+</h1>
            </Link>
            <Link
              to="/routines/age/20"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <h1>20s</h1>
            </Link>
            <Link
              to="/routines/age/30"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <h1>30s</h1>
            </Link>
            <Link
              to="/routines/age/40"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <h1>40s</h1>
            </Link>
            <Link
              to="/routines/age/50"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <h1>50+</h1>
            </Link>
          </div>
        ) : null}
        {this.props.match.params.categoryId === "1" ? (
          <div>
            <Link
              to="/routines/skintype/combination"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <h1>Combination</h1>
            </Link>
            <Link
              to="/routines/skintype/dry"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <h1>Dry</h1>
            </Link>
            <Link
              to="/routines/skintype/oily"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <h1>Oily</h1>
            </Link>
            <Link
              to="/routines/skintype/sensitive"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <h1>Sensitive</h1>
            </Link>
            <Link
              to="/routines/skintype/normal"
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <h1>Normal</h1>
            </Link>
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
