import React, { Component } from "react";
import Header from "../Header/Header";
import "../../styles/partials/Home/Home.scss";
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
  faArrowAltCircleDown
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
        <div key={i}>
          <div className="Category-nav">
            <Link
              className="Category-name"
              style={{ textDecoration: "none" }}
              to={`/routines/${category.category_id}`}
            >
              <h1>{category.category_name}</h1>
            </Link>
          </div>
        </div>
      );
    });

    const allRoutinesMapped = this.props.routines.map((routine, i) => {
      return (
        <div key={i} className="All-routines">
          <div>
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
            </ul>
            <div className="Like-btns">
              <span onClick={() => this.handleAddLike(routine.routine_id)}>
                <FontAwesomeIcon icon={faArrowAltCircleUp} color="#777777" />
              </span>
              {routine.likes}
              <span onClick={() => this.handleRemoveLike(routine.routine_id)}>
                <FontAwesomeIcon icon={faArrowAltCircleDown} color="#777777" />
              </span>
            </div>
            <br />
            <br />
          </div>
        </div>
      );
    });

    return (
      <div className="Home-container">
        <ScrollToTopOnMount />
        <nav>
          <Header />
        </nav>
        <header className="Category-header">{categoriesMapped}</header>
        <div className="Home-body">
          <header>All routines.</header>
          {allRoutinesMapped}
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
