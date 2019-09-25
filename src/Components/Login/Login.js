import React, { Component } from "react";
import "../../styles/partials/Login-Register/Login-Register.css";
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducers/userReducer";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  handleLoginSubmit = e => {
    e.preventDefault();
    const { username, password } = this.state;
    const { loginUser } = this.props;
    loginUser({ username, password });
  };

  handleLoginInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.props.userId) {
      return <Redirect to="/home" />;
    }
    console.log(this.props.userId);
    return (
      <div className="Login-Register-container">
        <div className="Left-box">
          <h1 className="Welcome-message">Welcome Back.</h1>
        </div>
        <div className="Right-box">
          <form className="Form-body" onSubmit={this.handleLoginSubmit}>
            <input
              name="username"
              type="text"
              placeholder="Username"
              onChange={this.handleLoginInput}
              autoFocus
              required
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              onChange={this.handleLoginInput}
              required
            />
            <button type="submit">Log In</button>
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
    loginUser
  }
)(Login);
