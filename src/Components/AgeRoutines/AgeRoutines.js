import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getAgeRoutines,
  addLike,
  removeLike
} from "../../redux/reducers/routinesReducer";
import Header from "../Header/Header";
import Card from "@material-ui/core/Card";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown
} from "@fortawesome/free-solid-svg-icons";

class AgeRoutines extends Component {
  componentDidMount() {
    this.props.getAgeRoutines(this.props.match.params.age);
  }

  handleAddLike = routineId => {
    this.props.addLike(routineId);
    this.props.getAgeRoutines(this.props.match.params.age);
  };

  handleRemoveLike = routineId => {
    this.props.removeLike(routineId);
    this.props.getAgeRoutines(this.props.match.params.age);
  };

  render() {
    const ageRoutines = this.props.routines.map((routine, i) => {
      return (
        <div key={i}>
          <Card className="Routine">
            <h1>{routine.username}</h1>
            <h3>{routine.skin_type}</h3>
            <h3>{routine.age}</h3>
            <h3>{routine.time}</h3>
            <ul>
              <li>{routine.first_cleanser}</li>
              <li>{routine.second_cleanser}</li>
              <li>{routine.exfoliator}</li>
              <li>{routine.toner}</li>
              <li>{routine.essence}</li>
              <li>{routine.eye_serum}</li>
              <li>{routine.eye_moisturizer}</li>
              <li>{routine.face_serum}</li>
              <li>{routine.face_moisturizer}</li>
              <li>{routine.neck_serum}</li>
              <li>{routine.neck_moisturizer}</li>
              <li>{routine.mask}</li>
              <li>{routine.sunscreen}</li>
              <li>{routine.note}</li>
              <div className="Like-btns">
                <span onClick={() => this.handleAddLike(routine.routine_id)}>
                  <FontAwesomeIcon icon={faArrowAltCircleUp} color="#777777" />
                </span>
                {routine.likes}
                <span onClick={() => this.handleRemoveLike(routine.routine_id)}>
                  <FontAwesomeIcon
                    icon={faArrowAltCircleDown}
                    color="#777777"
                  />
                </span>
              </div>
              <br />
              <br />
            </ul>
          </Card>
        </div>
      );
    });
    return (
      <div>
        <Header />
        <h3>{this.props.match.params.age}</h3>
        {ageRoutines}
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
    getAgeRoutines,
    addLike,
    removeLike
  }
)(AgeRoutines);
