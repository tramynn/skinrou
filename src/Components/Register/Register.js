import React, { Component } from "react";
import "../../styles/partials/Login-Register/Login-Register.css";
import { connect } from "react-redux";
import { registerUser } from "../../redux/reducers/userReducer";
import { Redirect } from "react-router-dom";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      age: "",
      phoneNum: "",
      username: "",
      password: ""
    };
  }

  handleRegisterSubmit = e => {
    e.preventDefault();
    const {
      firstName,
      lastName,
      age,
      phoneNum,
      username,
      password
    } = this.state;
    const { registerUser } = this.props;
    registerUser({ firstName, lastName, age, phoneNum, username, password });
  };

  handleRegisterInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.props.userId) {
      return <Redirect to="/home" />;
    }

    return (
      <div className="Login-Register-container">
        <div className="Left-box">
          <h1 className="Welcome-message">
            Welcome,
            <br />
            please sign-up.
          </h1>
        </div>
        <div className="Right-box">
          <form className="Form-body" onSubmit={this.handleRegisterSubmit}>
            <input
              name="firstName"
              type="text"
              placeholder="First Name"
              onChange={this.handleRegisterInput}
              autoFocus
              required
            />
            <input
              name="lastName"
              type="text"
              placeholder="Last Name"
              onChange={this.handleRegisterInput}
              required
            />
            <input
              name="age"
              type="number"
              placeholder="Age"
              onChange={this.handleRegisterInput}
              required
            />
            <input
              name="phoneNum"
              type="text"
              placeholder="Phone #"
              onChange={this.handleRegisterInput}
              required
            />
            <input
              name="username"
              type="text"
              placeholder="Username"
              onChange={this.handleRegisterInput}
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleRegisterInput}
              required
            />
            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userId: reduxState.userReducer.userId
  };
};

export default connect(
  mapStateToProps,
  {
    registerUser
  }
)(Register);
