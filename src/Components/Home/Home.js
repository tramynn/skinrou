import React, { Component } from "react";
import Header from "../Header/Header";
import "../../styles/partials/Home/Home.scss";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  getCategories,
  getAllRoutines
} from "../../redux/reducers/routinesReducer";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";

class UserLanding extends Component {
  constructor() {
    super();
    this.state = {
      categories: []
    };
  }
  componentDidMount() {
    this.setState({
      categories: this.props.categories
    });
    this.props.getCategories();
    this.props.getAllRoutines();
  }

  handleChange = () => {};

  render() {
    console.log(this.props.categories, this.state.categories);
    const categoriesMapped = this.state.categories.map((category, i) => {
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
                <br />
                <br />
              </li>
            </ul>
          </Card>
        </div>
      );
    });
    return (
      <div className="Home-container">
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
    getAllRoutines
  }
)(UserLanding);
