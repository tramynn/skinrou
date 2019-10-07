import React, { Component } from "react";
import Header from "../Header/Header";
import "../../styles/partials/Home/Home.scss";
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
      <div>
        <ScrollToTopOnMount />
        <Header />
        <div className="Home-container">
          <header className="Category-bg">
            {categoriesMapped}
            <FontAwesomeIcon
              icon={faArrowDown}
              color="#FFFFFF"
              size="2x"
              className="Arrow-down"
            />
          </header>
          <div className="Home-body">
            <header className="Home-header">All routines.</header>
            {allRoutinesMapped}
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
