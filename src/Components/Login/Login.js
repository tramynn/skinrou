import React, { Component } from "react";
import "../../styles/partials/Login-Register/Login-Register.scss";
import { connect } from "react-redux";
import { loginUser } from "../../redux/reducers/userReducer";
import { Redirect } from "react-router-dom";
import TextField from "@material-ui/core/TextField";

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
    return (
      <div className="Login-Register-container">
        <div className="Left-box">
          <h1 className="Welcome-message">Welcome Back.</h1>
          <form
            className="Form-body"
            noValidate
            autoComplete="off"
            onSubmit={this.handleLoginSubmit}
          >
            <TextField
              name="username"
              label="Username"
              className="Login-input"
              value={this.state.username}
              onChange={this.handleLoginInput}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              autoFocus
              required={true}
            />
            <TextField
              name="password"
              label="Password"
              type="password"
              className="Login-input"
              value={this.state.password}
              onChange={this.handleLoginInput}
              margin="normal"
              variant="outlined"
              autoComplete="off"
              required={true}
            />
            <button className="Login-btn login-btn-style" type="submit">
              Log In
            </button>
          </form>
        </div>
        {/* <div className="Right-box"></div> */}
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
