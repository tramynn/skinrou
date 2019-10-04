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
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import ScrollToTopOnMount from "../../ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

class UserLanding extends Component {
  componentDidMount() {
    this.props.getCategories();
    this.props.getAllRoutines();
  }

  handleAddLike = routineId => {
    this.props.addLike(routineId);
  };

  handleRemoveLike = routineId => {
    this.props.removeLike(routineId);
  };

  render() {
    const categoriesMapped = this.props.categories.map((category, i) => {
      return (
        <div key={i} className="Category-name">
          <Link
            style={{ textDecoration: "none" }}
            to={`/routines/${category.category_id}`}
          >
            <Paper>
              <h1>{category.category_name}</h1>
            </Paper>
          </Link>
        </div>
      );
    });

    const allRoutinesMapped = this.props.routines.map((routine, i) => {
      return (
        <div key={i} className="All-routines">
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
                <button onClick={() => this.handleAddLike(routine.routine_id)}>
                  <span>
                    <FontAwesomeIcon icon={faHeart} color="#cf3548" />
                  </span>
                </button>
                <button
                  onClick={() => this.handleRemoveLike(routine.routine_id)}
                >
                  <span>
                    <FontAwesomeIcon icon={faHeart} color="#999999" />
                  </span>
                </button>
                {routine.likes}
              </li>
              <br />
              <br />
            </ul>
          </Card>
        </div>
      );
    });

    return (
      <div className="Home-container">
        <ScrollToTopOnMount />
        <Header />
        <nav>{categoriesMapped}</nav>
        <div>
          <aside className="Home-left-box"></aside>
          <main className="Home-center-box">{allRoutinesMapped}</main>
          <aside className="Home-right-box"></aside>
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
