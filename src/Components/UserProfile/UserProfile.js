import React, { Component } from "react";
import Header from "../Header/Header";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import "../../styles/partials/UserProfile/UserProfile.scss";
import "../../styles/partials/Routines/Routines.scss";
import "../../styles/partials/Body/Body.scss";
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
  faEllipsisH,
  faUserCircle
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
      routines,
      url
    } = this.props;

    const userRoutines = this.props.routines.map((routine, i) => {
      return (
        <div key={i} className="Routines">
          <div>
            <div className="Routine-top">
              <table className="Routine-user">
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
              </table>
            </div>
            <table className="Routine-info">
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
                <td className="Routine-right-col">{routine.first_cleanser}</td>
              </tr>
              <tr>
                <td className="Routine-left-col">
                  <label>Second Cleanser</label>
                </td>
                <td className="Routine-right-col">{routine.second_cleanser}</td>
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
                <td className="Routine-right-col">{routine.eye_moisturizer}</td>
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
            </table>
          </div>
          <div className="Routine-bottom">
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
            <div className="Edit-delete-container">
              <div
                aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={this.handleOpen}
                size={2}
                className="Edit-delete-menu"
              >
                <FontAwesomeIcon icon={faEllipsisH} color="#777777" size="1x" />
              </div>
              <Menu
                id="simple-menu"
                anchorEl={this.state.anchorEl}
                keepMounted
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
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="UserProfile-container">
        <Header />
        {/* <div className="UserProfile-left">
          <div>
            <header>
              <ul>
                <li>{username}</li>
                <li>
                  {firstName} {lastName}
                </li>
              </ul>
            </header>
            <main>
              <ul>
                <li>Age: {age}</li>
                <li>Phone Number: {phoneNum}</li>
              </ul>
            </main>
          </div>
        </div> */}
        <div className="Body-container">
          <div className="Routines-wrapper">
            <main className="Routines-container">
              <header className="User-routines-tile">my routines.</header>
              <div className="Routines-body">{userRoutines}</div>
            </main>
          </div>
        </div>
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
