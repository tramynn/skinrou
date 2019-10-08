import React, { Component } from "react";
import Header from "../Header/Header";
import "../../styles/partials/Body/Body.scss";
import "../../styles/partials/RoutineNav/RoutineNav.scss";
import "../../styles/partials/Routines/Routines.scss";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCategories,
  getAllRoutines,
  addLike,
  removeLike
} from "../../redux/reducers/routinesReducer";
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowAltCircleUp,
  faArrowAltCircleDown,
  faArrowDown
} from "@fortawesome/free-solid-svg-icons";

class UserLanding extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getAllRoutines();
  }

  handleAddLike = routineId => {
    this.props.addLike(routineId);
    this.props.getAllRoutines();
  };

  handleRemoveLike = routineId => {
    this.props.removeLike(routineId);
    this.props.getAllRoutines();
  };

  render() {
    const categoriesMapped = this.props.categories.map((category, i) => {
      return (
        <div key={i} className="Category-nav-container">
          <Link
            className="Category-nav-links"
            style={{ textDecoration: "none" }}
            to={`/routines/${category.category_id}`}
          >
            <h1>{category.category_name}</h1>
          </Link>
        </div>
      );
    });

    const allRoutinesMapped = this.props.routines.map((routine, i) => {
      return (
        <div key={i} className="Routines">
          <div>
            <table>
              <tr>
                <td className="Routine-username">{routine.username}</td>
              </tr>
              <tr>
                <td className="Routine-age">{routine.age}</td>
                <td className="Routine-skintype">{routine.skin_type}</td>
              </tr>
            </table>
            <hr />
            <table>
              <tr>
                <td>
                  <label>Routine Time</label>
                </td>
                <td>{routine.time}</td>
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
                <td>{routine.second_cleanser}</td>
              </tr>
              <tr>
                <td className="Routine-left-col">
                  <label>Exfoliator</label>
                </td>
                <td>{routine.exfoliator}</td>
              </tr>
              <tr>
                <td className="Routine-left-col">
                  <label>Toner</label>
                </td>
                <td>{routine.toner}</td>
              </tr>
              <tr>
                <td className="Routine-left-col">
                  <label>Essence</label>
                </td>
                <td>{routine.essence}</td>
              </tr>
              <tr>
                <td className="Routine-left-col">
                  <label>Eye Serum</label>
                </td>
                <td>{routine.eye_serum}</td>
              </tr>
              <tr>
                <td className="Routine-left-col">
                  <label>Eye Moisturizer</label>
                </td>
                <td>{routine.eye_moisturizer}</td>
              </tr>
              <tr>
                <td className="Routine-left-col">
                  <label>Face Serum</label>
                </td>
                <td>{routine.face_serum}</td>
              </tr>
              <tr>
                <td className="Routine-left-col">
                  <label>Face Moisturizer</label>
                </td>
                <td>{routine.face_moisturizer}</td>
              </tr>
              <tr>
                <td className="Routine-left-col">
                  <label>Neck Serum</label>
                </td>
                <td>{routine.neck_serum}</td>
              </tr>
              <tr>
                <td className="Routine-left-col">
                  <label>Neck Moisturizer</label>
                </td>
                <td>{routine.neck_moisturizer}</td>
              </tr>
              <tr>
                <td className="Routine-left-col">
                  <label>Mask</label>
                </td>
                <td>{routine.mask}</td>
              </tr>
              <tr>
                <td className="Routine-left-col">
                  <label>Sunscreen</label>
                </td>
                <td>{routine.sunscreen}</td>
              </tr>
              <tr>
                <td className="Routine-left-col">
                  <label>Note</label>
                </td>
                <td>{routine.note}</td>
              </tr>
            </table>
            <div className="Like-btns">
              <span onClick={() => this.handleAddLike(routine.routine_id)}>
                <FontAwesomeIcon icon={faArrowAltCircleUp} color="#777777" />
              </span>
              {routine.likes}
              <span onClick={() => this.handleRemoveLike(routine.routine_id)}>
                <FontAwesomeIcon icon={faArrowAltCircleDown} color="#777777" />
              </span>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <ScrollToTopOnMount />
        <Header />
        <div className="Body-container">
          <header className="Category-bg">
            <div className="">{categoriesMapped}</div>
            <div>
              <FontAwesomeIcon
                icon={faArrowDown}
                color="#024a81"
                size="2x"
                className="Arrow-down"
              />
            </div>
          </header>
          <div className="Routines-wrapper">
            {/* <header className="Routines-header">All routines.</header> */}
            <main className="Routines-container">
              <div className="Routines-body">{allRoutinesMapped}</div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    categories: reduxState.routinesReducer.categories,
    routines: reduxState.routinesReducer.routines
  };
};

export default connect(
  mapStateToProps,
  {
    getCategories,
    getAllRoutines,
    addLike,
    removeLike
  }
)(UserLanding);
