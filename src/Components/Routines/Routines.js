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
  }

  render() {
    // const routinesMapped = this.props.routines.map((routine, i) => {
    //   return (
    //     <div key={i}>
    //       <h1>{routine.username}</h1>
    //       <h3>{routine.skin_type}</h3>
    //       <h3>{routine.age}</h3>
    //       <h3>{routine.time}</h3>
    //     </div>
    //   );
    // });

    return <div>{/* <h1>{routinesMapped}</h1> */}</div>;
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
