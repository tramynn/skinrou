import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getSession,
  getProfPic,
  addProfPic
} from "../../redux/reducers/userReducer";

class UserSettings extends Component {
  constructor() {
    super();
    this.state = {
      url: ""
    };
  }

  checkUploadResult = (error, resultEvent) => {
    if (resultEvent.event === "success") {
      console.log("Picture uploaded successfully");
      console.log(resultEvent.info.url);
      this.setState({ url: resultEvent.info.url });
    }
  };

  componentDidMount() {
    const { url } = this.props;
    console.log(url);
    this.setState({
      url
    });
  }

  handleAdd = () => {
    const { userId } = this.props;
    const { url } = this.state;
    console.log(typeof url);
    console.log(userId);
    const newPic = { userId, url };
    this.props.addProfPic(newPic);
  };

  render() {
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: "skinrou",
        uploadPreset: "oo1xr8dd",
        sources: ["local", "url", "dropbox", "facebook", "instagram"]
      },
      (error, result) => {
        this.checkUploadResult(error, result);
      }
    );

    return (
      <div>
        <header>
          <h1>My Settings</h1>
        </header>
        <img
          src={this.state.url}
          alt={`${this.props.username}'s profile pic`}
        />
        <main>
          <button onClick={() => widget.open()}>
            <h1>Upload photo</h1>
          </button>
          <button onClick={() => this.handleAdd()}>
            <h1>Set Picture</h1>
          </button>
        </main>
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
