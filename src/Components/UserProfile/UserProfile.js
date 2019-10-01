import React, { Component } from "react";
import Header from "../Header/Header";
import { connect } from "react-redux";
import {
  getUserRoutines,
  deleteRoutine
} from "../../redux/reducers/routinesReducer";
import { getSession } from "../../redux/reducers/userReducer";
import Card from "@material-ui/core/Card";
import "../../styles/partials/UserProfile/UserProfile.scss";
import { Link } from "react-router-dom";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getSession();
    this.props.getUserRoutines(this.props.match.params.userId);
  }

  handleDelete = routine_id => {
    console.log(routine_id);
    this.props.deleteRoutine(routine_id);
  };

  render() {
    const {
      username,
      firstName,
      lastName,
      age,
      phoneNum,
      routines
    } = this.props;

    const userRoutines = routines.map((routine, i) => {
      // console.log(routine);
      return (
        <div key={i} className="User-routines">
          <Card className="Routine">
            <header>
              <h1>{routine.username}</h1>
              <h3>Skin Type: {routine.skin_type}</h3>
              <h3>Age: {routine.age}</h3>
              <h3>Time: {routine.time}</h3>
            </header>
            <main></main>
            <ul>
              <li>First Cleanser: {routine.first_cleanser}</li>
              <li>Second Cleanser: {routine.second_cleanser}</li>
              <li>Exfoliator: {routine.exfoliator}</li>
              <li>Toner: {routine.toner}</li>
              <li>Essence: {routine.essence}</li>
              <li>Eye Serum: {routine.eye_serum}</li>
              <li>Eye Moisturizer: {routine.eye_moisturizer}</li>
              <li>Face Serum: {routine.face_serum}</li>
              <li>Face Moisturizer: {routine.face_moisturizer}</li>
              <li>Neck Serum: {routine.neck_serum}</li>
              <li>Neck Moisturizer: {routine.neck_moisturizer}</li>
              <li>Face Mask: {routine.mask}</li>
              <li>Sunscreen: {routine.sunscreen}</li>
              <li>Note: {routine.note}</li>
            </ul>
            <span>
              <Link to={`/editRoutine/${routine.routine_id}`}>
                <button>EDIT</button>
              </Link>
              <button
                onClick={() => {
                  // console.log(routine.routine_id);
                  this.handleDelete(routine.routine_id);
                }}
              >
                DELETE
              </button>
            </span>
            <br />
          </Card>
        </div>
      );
    });
    return (
      <div className="UserProfile-container">
        <Header />
        <header>
          <h1>My Profile</h1>
          <main>
            My Information
            <ul>
              <li>{username}</li>
              <li>First Name: {firstName}</li>
              <li>Last Name: {lastName}</li>
              <li>Age: {age}</li>
              <li>Phone Number: {phoneNum}</li>
            </ul>
          </main>
        </header>
        <main>{userRoutines}</main>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userId: reduxState.userReducer.userId,
    username: reduxState.userReducer.username,
    firstName: reduxState.userReducer.firstName,
    lastName: reduxState.userReducer.lastName,
    age: reduxState.userReducer.age,
    phoneNum: reduxState.userReducer.phoneNum,
    routines: reduxState.routinesReducer.routines
  };
};

export default connect(
  mapStateToProps,
  {
    getSession,
    getUserRoutines,
    deleteRoutine
  }
)(UserProfile);
