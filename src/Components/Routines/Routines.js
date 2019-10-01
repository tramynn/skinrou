import React, { Component } from "react";
import { connect } from "react-redux";
import { getRoutinesByCategories } from "../../redux/reducers/routinesReducer";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
// import AgeRoutines from "../AgeRoutines/AgeRoutines";

class Routines extends Component {
  componentDidMount() {
    this.props.getRoutinesByCategories(this.props.match.params.categoryId);
  }

  render() {
    // const ageRou = this.props.routines.map((age, i) => {
    //   return (
    //     <Link to={`/routines/age/${age}`} key={i}>
    //       <h3 key={i}>{age}</h3>
    //     </Link>
    //   );
    // });
    return (
      <div>
        <Header />
        {this.props.match.params.categoryId === "2" ? (
          <div>
            <Link to="/routines/age/15">
              <h1>15+</h1>
            </Link>
            <Link to="/routines/age/20">
              <h1>20s</h1>
            </Link>
            <Link to="/routines/age/30">
              <h1>30s</h1>
            </Link>
            <Link to="/routines/age/40">
              <h1>40s</h1>
            </Link>
            <Link to="/routines/age/50">
              <h1>50+</h1>
            </Link>
            {/* <AgeRoutines /> */}
          </div>
        ) : null}
        {/* {this.props.match.params.categoryId === "2" ? (
          <div>{ageRou}</div>
        ) : null} */}
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
