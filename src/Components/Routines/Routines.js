import React, { Component } from "react";
import { connect } from "react-redux";
import { getRoutinesByCategories } from "../../redux/reducers/routinesReducer";
import Header from "../Header/Header";

class Routines extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.getRoutinesByCategories(this.props.match.params.categoryId);
  }

  render() {
    return (
      <div>
        <Header />
        {this.props.match.params.categoryId === "2" ? (
          <div>
            <h1>15+</h1>
            <h1>20s</h1>
            <h1>30s</h1>
            <h1>40s</h1>
            <h1>50s</h1>
          </div>
        ) : null}
        {this.props.match.params.categoryId === "1" ? (
          <div>
            <h1>Combination</h1>
            <h1>Dry</h1>
            <h1>Oily</h1>
            <h1>Sensitive</h1>
            <h1>Normal</h1>
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
