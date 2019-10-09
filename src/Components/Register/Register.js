import React, { Component } from "react";
import { connect } from "react-redux";
import { registerUser } from "../../redux/reducers/userReducer";
import { Redirect } from "react-router-dom";
import "../../styles/partials/Login-Register/Login-Register.css";
import TextField from "@material-ui/core/TextField";

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
          <form
            className="Form-body"
            noValidate
            autoComplete="off"
            onSubmit={this.handleRegisterSubmit}
          >
            <table>
              <tr>
                <td>
                  {" "}
                  <TextField
                    name="firstName"
                    label="First Name"
                    className="Register-input"
                    value={this.state.firstName}
                    onChange={this.handleRegisterInput}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    autoFocus
                    required
                  />
                </td>
                <td>
                  <TextField
                    name="lastName"
                    label="Last Name"
                    className="Register-input"
                    value={this.state.lastName}
                    onChange={this.handleRegisterInput}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    required
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <TextField
                    name="age"
                    label="Age"
                    type="age"
                    className="Register-input"
                    value={this.state.age}
                    onChange={this.handleRegisterInput}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    required
                  />
                </td>
                <td>
                  <TextField
                    name="phoneNum"
                    label="Phone #"
                    className="Register-input"
                    value={this.state.phoneNum}
                    onChange={this.handleRegisterInput}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    required
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <TextField
                    name="username"
                    label="Username"
                    className="Register-input"
                    value={this.state.username}
                    onChange={this.handleRegisterInput}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    required
                  />
                </td>
                <td>
                  <TextField
                    name="password"
                    label="Password"
                    type="password"
                    className="Register-input"
                    value={this.state.password}
                    onChange={this.handleRegisterInput}
                    margin="normal"
                    variant="outlined"
                    autoComplete="off"
                    required
                  />
                </td>
              </tr>
            </table>
            <div className="register">
              <button className="Login-btn register-btn" type="submit">
                Register
              </button>
            </div>
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
    registerUser
  }
)(Register);
