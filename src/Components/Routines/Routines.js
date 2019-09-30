import React, { Component } from "react";
import { connect } from "react-redux";
import { getRoutinesByCategories } from "../../redux/reducers/routinesReducer";

class Routines extends Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    this.props.getRoutinesByCategories(this.props.match.params.categoryId);
    console.log(typeof this.props.match.params.categoryId);
  }

  render() {
    return (
      <div>
        { this.props.match.params.categoryId === "1" ? 
        
         : null}
        {

        }
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
