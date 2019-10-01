import React, { Component } from "react";
import Header from "../Header/Header";
import { connect } from "react-redux";
import { getUserRoutines } from "../../redux/reducers/routinesReducer";
import { getSession } from "../../redux/reducers/userReducer";
import Card from "@material-ui/core/Card";
import "../../styles/partials/UserProfile/UserProfile.scss";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getSession();
    this.props.getUserRoutines(this.props.match.params.userId);
  }
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
      return (
        <div key={i} className="User-routines">
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
              <li>
                <br />
                <br />
              </li>
            </ul>
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
              <li>{firstName}</li>
              <li>{lastName}</li>
              <li>{age}</li>
              <li>{phoneNum}</li>
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
    getUserRoutines
  }
)(UserProfile);
