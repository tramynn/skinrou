import React, { Component } from "react";
import Header from "../Header/Header";
import "../../styles/partials/CreateRoutine/CreateRoutine.scss";
import { connect } from "react-redux";
import { addRoutine } from "../../redux/reducers/routinesReducer";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import FormHelperText from "@material-ui/core/FormHelperText";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-regular-svg-icons";

class CreateRoutine extends Component {
  constructor() {
    super();
    this.state = {
      time: "",
      skinType: "",
      categoryId: "",
      firstCleanser: "",
      secondCleanser: "",
      exfoliator: "",
      toner: "",
      essence: "",
      eyeSerum: "",
      eyeMoisturizer: "",
      faceSerum: "",
      faceMoisturizer: "",
      neckSerum: "",
      neckMoisturizer: "",
      mask: "",
      sunscreen: "",
      note: ""
    };
  }

  handleTimeChange = e => {
    this.setState({
      time: e.target.value
    });
  };

  handleSkinTypeChange = e => {
    this.setState({
      skinType: e.target.value
    });
  };

  handleSubmit = e => {};

  handleInputChange = e => {};

  render() {
    return (
      <div className="CreateRoutine-container">
        <Header />
        <div className="CreateRoutine-main">
          <div className="CreateRoutine-left-box">LEFT BOX</div>
          <div className="CreateRoutine-right-box">
            <h1>YOUR SKINROU</h1>
            <form>
              <table>
                <tbody>
                  <tr>
                    <td className="Left-col">
                      <FontAwesomeIcon icon={faCircle} stack="2x" size="2x" />
                      <FontAwesomeIcon stack="1x" text>
                        1
                      </FontAwesomeIcon>
                    </td>
                    <td className="Right-col">
                      <FormControl>
                        <InputLabel>Time</InputLabel>
                        <Select
                          value={this.state.time}
                          onChange={this.handleTimeChange}
                        >
                          <MenuItem>
                            <em>Select One</em>
                          </MenuItem>
                          <MenuItem
                            value={`Day`}
                            onChange={this.handleTimeChange}
                          >
                            Day
                          </MenuItem>
                          <MenuItem
                            value={`Night`}
                            onChange={this.handleTimeChange}
                          >
                            Night
                          </MenuItem>
                        </Select>
                        <FormHelperText>
                          When you would like to do your skincare.
                        </FormHelperText>
                      </FormControl>
                    </td>
                  </tr>

                  <tr>
                    <td className="Left-col">Skin Type</td>

                    <td className="Right-col">
                      <FormControl>
                        <InputLabel>Skin Type</InputLabel>
                        <Select
                          value={this.state.skinType}
                          onChange={this.handleSkinTypeChange}
                        >
                          <MenuItem>
                            <em>Select One</em>
                          </MenuItem>
                          <MenuItem
                            value={`Combo`}
                            onChange={this.handleSkinTypeChange}
                          >
                            Combo
                          </MenuItem>
                          <MenuItem
                            value={`Dry`}
                            onChange={this.handleSkinTypeChange}
                          >
                            Dry
                          </MenuItem>
                          <MenuItem
                            value={`Oil`}
                            onChange={this.handleSkinTypeChange}
                          >
                            Oily
                          </MenuItem>
                        </Select>
                        <FormHelperText>
                          When you would like to do your skincare.
                        </FormHelperText>
                      </FormControl>
                    </td>
                  </tr>

                  <tr>
                    <td className="Left-col">
                      <label>Step 1:</label>
                    </td>
                    <td className="Right-col">
                      <input placeholder="First Cleanser" />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <label>Step 2:</label>
                    </td>
                    <td className="Right-col">
                      <input placeholder="Second Cleanser" />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <label>Step 3:</label>
                    </td>
                    <td className="Right-col">
                      <input placeholder="Exfoliator" />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <label>Step 4:</label>
                    </td>
                    <td className="Right-col">
                      <input placeholder="Toner" />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <label>Step 5:</label>
                    </td>
                    <td className="Right-col">
                      <input placeholder="Essence" />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <label>Step 6:</label>
                    </td>
                    <td className="Right-col">
                      <input placeholder="Eye Serum" />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <label>Step 7:</label>
                    </td>
                    <td className="Right-col">
                      <input placeholder="Eye Moisturizer" />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <label>Step 8:</label>
                    </td>
                    <td className="Right-col">
                      <input placeholder="Face Serum" />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <label>Step 9:</label>
                    </td>
                    <td className="Right-col">
                      <input placeholder="Face Moisturizer" />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <label>Step 10:</label>
                    </td>
                    <td className="Right-col">
                      <input placeholder="Neck Serum" />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <label>Step 11:</label>
                    </td>
                    <td className="Right-col">
                      <input placeholder="Neck Moisturizer" />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <label>Step 12:</label>
                    </td>
                    <td className="Right-col">
                      <input placeholder="Mask" />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <label>Step 13:</label>
                    </td>
                    <td className="Right-col">
                      <input placeholder="Sunscreen" />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button>Create Routine</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = reduxState => {
  return {
    userId: reduxState.userReducer.userId,
    userReducer: reduxState.userReducer
  };
};

export default connect(
  mapStateToProps,
  { addRoutine }
)(CreateRoutine);
