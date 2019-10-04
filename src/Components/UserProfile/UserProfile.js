import React, { Component } from "react";
import Header from "../Header/Header";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "../../styles/partials/UserProfile/UserProfile.scss";
import {
  getUserRoutines,
  deleteRoutine,
  addLike,
  removeLike
} from "../../redux/reducers/routinesReducer";
import { getSession } from "../../redux/reducers/userReducer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faEllipsisH
} from "@fortawesome/free-solid-svg-icons";

class UserProfile extends Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null
    };
  }

  componentDidMount() {
    this.props.getSession();
    this.props.getUserRoutines(this.props.match.params.userId);
  }

  handleAddLike = routineId => {
    this.props.addLike(routineId);
    this.props.getUserRoutines(this.props.match.params.userId);
  };

  handleRemoveLike = routineId => {
    this.props.removeLike(routineId);
    this.props.getUserRoutines(this.props.match.params.userId);
  };

  handleDelete = routine_id => {
    console.log(routine_id);
    this.props.deleteRoutine(routine_id);
  };

  handleOpen = e => {
    this.setState({
      anchorEl: e.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
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
            </ul>
            <button
              aria-controls="simple-menu"
              aria-haspopup="true"
              onClick={this.handleOpen}
              size={2}
              className="Edit-delete-menu"
            >
              <FontAwesomeIcon icon={faEllipsisH} color="#777777" size="2x" />
            </button>
            <Menu
              id="simple-menu"
              anchorEl={this.state.anchorEl}
              keepMounte
              open={Boolean(this.state.anchorEl)}
              onClose={this.handleClose}
            >
              <Link
                to={`/editRoutine/${routine.routine_id}`}
                style={{ color: "inherit", textDecoration: "inherit" }}
              >
                <MenuItem>Edit</MenuItem>
              </Link>
              <MenuItem
                onClick={() => {
                  this.handleDelete(routine.routine_id);
                }}
              >
                Delete
              </MenuItem>
            </Menu>
            <div>
              {/* <Link to={`/editRoutine/${routine.routine_id}`}>Edit</Link>
              <button
                onClick={() => {
                  this.handleDelete(routine.routine_id);
                }}
              >
                DELETE
              </button> */}
            </div>
            <br />
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
    routines: reduxState.routinesReducer.routines,
    url: reduxState.userReducer.url
  };
};

export default connect(
  mapStateToProps,
  {
    getSession,
    getUserRoutines,
    deleteRoutine,
    addLike,
    removeLike
  }
)(UserProfile);
