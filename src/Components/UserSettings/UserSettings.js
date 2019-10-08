import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getSession,
  getProfPic,
  addProfPic
} from "../../redux/reducers/userReducer";
import Header from "../Header/Header";
import "../../styles/partials/UserSettings/UserSettings.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

class UserSettings extends Component {
  constructor() {
    super();
    this.state = {
      url: ""
    };
  }

  checkUploadResult = (error, resultEvent) => {
    if (resultEvent.event === "success") {
      this.setState({ url: resultEvent.info.url });
    }
  };

  componentDidMount() {
    const { url } = this.props;
    this.setState({
      url
    });
  }

  handleAdd = () => {
    const { userId } = this.props;
    const { url } = this.state;
    const newPic = { userId, url };
    this.props.addProfPic(newPic);
  };

  render() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "skinrou",
        uploadPreset: "oo1xr8dd",
        sources: ["local", "url", "dropbox", "facebook", "instagram"],
        cropping: true,
        cropping_aspect_ratio: 1
      },
      (error, result) => {
        this.checkUploadResult(error, result);
      }
    );

    const { username, firstName, lastName, age, phoneNum } = this.props;

    return (
      <div>
        <Header />
        <div className="UserSettings-container">
          <h1>My Settings</h1>
          {this.state.url != null ? (
            <img
              src={this.state.url}
              alt={`${this.props.username}'s profile pic`}
              className="Settings-img"
            />
          ) : (
            <FontAwesomeIcon icon={faUserCircle} color="#9e9e9e" size="6x" />
          )}
          <main>
            <button onClick={() => widget.open()}>
              <h1>Upload photo</h1>
            </button>
            <button onClick={() => this.handleAdd()}>
              <h1>Set Picture</h1>
            </button>
          </main>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userId: reduxState.userReducer.userId,
    username: reduxState.userReducer.username,
    url: reduxState.userReducer.url,
    firstName: reduxState.userReducer.firstName,
    lastName: reduxState.userReducer.lastName,
    age: reduxState.userReducer.age,
    phoneNum: reduxState.userReducer.phoneNum
  };
};

export default connect(
  mapStateToProps,
  {
    getSession,
    getProfPic,
    addProfPic
  }
)(UserSettings);
