import React, { Component } from "react";
import Header from "../Header/Header";
import "../../styles/partials/Body/Body.scss";
import "../../styles/partials/RoutineNav/RoutineNav.scss";
import "../../styles/partials/Routines/Routines.scss";
import { connect } from "react-redux";
import {
  getAgeRoutines,
  addLike,
  removeLike
} from "../../redux/reducers/routinesReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faUserCircle
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
        <div key={i} className="Routines">
          <div>
            <div className="Routine-top">
              <table className="Routine-user">
                <thead>
                  <tr>
                    <td className="User-avatar">
                      <FontAwesomeIcon icon={faUserCircle} color="#FFFFFF" />
                    </td>
                    <td className="Routine-username">{routine.username}</td>
                  </tr>
                  <tr>
                    <td className="Routine-age">{routine.age}</td>
                    <td className="Routine-skintype">{routine.skin_type}</td>
                  </tr>
                </thead>
              </table>
            </div>
            <table className="Routine-info">
              <tbody>
                <tr>
                  <td className="Routine-left-col">
                    <label>Routine Time</label>
                  </td>
                  <td className="Routine-right-col">{routine.time}</td>
                </tr>
                <tr>
                  <td className="Routine-left-col">
                    <label>First Cleanser</label>
                  </td>
                  <td className="Routine-right-col">
                    {routine.first_cleanser}
                  </td>
                </tr>
                <tr>
                  <td className="Routine-left-col">
                    <label>Second Cleanser</label>
                  </td>
                  <td className="Routine-right-col">
                    {routine.second_cleanser}
                  </td>
                </tr>
                <tr>
                  <td className="Routine-left-col">
                    <label>Exfoliator</label>
                  </td>
                  <td className="Routine-right-col">{routine.exfoliator}</td>
                </tr>
                <tr>
                  <td className="Routine-left-col">
                    <label>Toner</label>
                  </td>
                  <td className="Routine-right-col">{routine.toner}</td>
                </tr>
                <tr>
                  <td className="Routine-left-col">
                    <label>Essence</label>
                  </td>
                  <td className="Routine-right-col">{routine.essence}</td>
                </tr>
                <tr>
                  <td className="Routine-left-col">
                    <label>Eye Serum</label>
                  </td>
                  <td className="Routine-right-col">{routine.eye_serum}</td>
                </tr>
                <tr>
                  <td className="Routine-left-col">
                    <label>Eye Moisturizer</label>
                  </td>
                  <td className="Routine-right-col">
                    {routine.eye_moisturizer}
                  </td>
                </tr>
                <tr>
                  <td className="Routine-left-col">
                    <label>Face Serum</label>
                  </td>
                  <td className="Routine-right-col">{routine.face_serum}</td>
                </tr>
                <tr>
                  <td className="Routine-left-col">
                    <label>Face Moisturizer</label>
                  </td>
                  <td className="Routine-right-col">
                    {routine.face_moisturizer}
                  </td>
                </tr>
                <tr>
                  <td className="Routine-left-col">
                    <label>Neck Serum</label>
                  </td>
                  <td className="Routine-right-col">{routine.neck_serum}</td>
                </tr>
                <tr>
                  <td className="Routine-left-col">
                    <label>Neck Moisturizer</label>
                  </td>
                  <td className="Routine-right-col">
                    {routine.neck_moisturizer}
                  </td>
                </tr>
                <tr>
                  <td className="Routine-left-col">
                    <label>Mask</label>
                  </td>
                  <td className="Routine-right-col">{routine.mask}</td>
                </tr>
                <tr>
                  <td className="Routine-left-col">
                    <label>Sunscreen</label>
                  </td>
                  <td className="Routine-right-col">{routine.sunscreen}</td>
                </tr>
                <tr>
                  <td className="Routine-left-col">
                    <label>Note</label>
                  </td>
                  <td className="Routine-right-col">{routine.note}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="Like-btns">
            <div onClick={() => this.handleAddLike(routine.routine_id)}>
              <FontAwesomeIcon
                icon={faArrowAltCircleUp}
                color="#777777"
                className="like-unlike"
              />
            </div>
            <div className="Routine-likes">{routine.likes}</div>
            <div onClick={() => this.handleRemoveLike(routine.routine_id)}>
              <FontAwesomeIcon
                icon={faArrowAltCircleDown}
                color="#777777"
                className="like-unlike"
              />
            </div>
          </div>
        </div>
      );
    });
    return (
      <div>
        <Header />
        <div className="Body-container">
          <div className="Routines-wrapper">
            <main className="Routines-container">
              <header className="Category-subtitle">
                {this.props.match.params.age}
              </header>
              <div className="Routines-body">{ageRoutines}</div>
            </main>
          </div>
        </div>
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
