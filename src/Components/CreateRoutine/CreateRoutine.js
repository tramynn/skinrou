import React, { Component } from "react";
import Header from "../Header/Header";
import "../../styles/partials/CreateRoutine/CreateRoutine.scss";
import { connect } from "react-redux";
import { addRoutine } from "../../redux/reducers/routinesReducer";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
// import FormHelperText from "@material-ui/core/FormHelperText";
import num1 from "../../images/1.png";
import num2 from "../../images/2.png";
import num3 from "../../images/3.png";
import num4 from "../../images/4.png";
import num5 from "../../images/5.png";
import num6 from "../../images/6.png";
import num7 from "../../images/7.png";
import num8 from "../../images/8.png";
import num9 from "../../images/9.png";
import num10 from "../../images/10.png";
import num11 from "../../images/11.png";
import num12 from "../../images/12.png";
import num13 from "../../images/13.png";
import num14 from "../../images/14.png";
import num15 from "../../images/15.png";
import num16 from "../../images/16.png";
import num17 from "../../images/17.png";

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

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { userId } = this.props;
    const {
      categoryId,
      skinType,
      time,
      firstCleanser,
      secondCleanser,
      exfoliator,
      toner,
      essence,
      eyeSerum,
      eyeMoisturizer,
      faceSerum,
      faceMoisturizer,
      neckSerum,
      neckMoisturizer,
      mask,
      sunscreen,
      note
    } = this.state;
    const newRoutine = {
      userId,
      categoryId,
      skinType,
      time,
      firstCleanser,
      secondCleanser,
      exfoliator,
      toner,
      essence,
      eyeSerum,
      eyeMoisturizer,
      faceSerum,
      faceMoisturizer,
      neckSerum,
      neckMoisturizer,
      mask,
      sunscreen,
      note
    };
    // if (!time || !skinType || !categoryId) {
    //   alert("Please make sure you select a time, skin type, and category.");
    // }
    if (userId) {
      this.props.addRoutine(newRoutine);
    }
    this.props.history.push(`/home`);
  };

  render() {
    return (
      <div className="CreateRoutine-container">
        <Header />
        <div className="CreateRoutine-main">
          <div className="CreateRoutine-left-box"></div>
          <div className="CreateRoutine-right-box">
            <h1>your skinrou.</h1>
            <form onSubmit={this.handleSubmit}>
              <table>
                <tbody>
                  <tr>
                    <td className="Left-col">
                      <img src={num1} width={50} alt="1" />
                    </td>
                    <td className="Right-col">
                      <FormControl className="Create-form">
                        <InputLabel className="Create-label">Time</InputLabel>
                        <Select
                          name="time"
                          value={this.state.time}
                          onChange={this.handleInput}
                          className="Create-text"
                        >
                          {/* <MenuItem>
                            <em>Select One</em>
                          </MenuItem> */}
                          <MenuItem value={``}>Select One</MenuItem>
                          <MenuItem value={`Day`}>Day</MenuItem>
                          <MenuItem value={`Night`}>Night</MenuItem>
                        </Select>
                        {/* <FormHelperText>
                          Time you would like to do your skincare.
                        </FormHelperText> */}
                      </FormControl>
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num2} alt="2" width="50" />
                    </td>
                    <td className="Right-col">
                      <FormControl className="Create-form">
                        <InputLabel className="Create-label">
                          Skin Type
                        </InputLabel>
                        <Select
                          name="skinType"
                          value={this.state.skinType}
                          onChange={this.handleInput}
                          className="Create-text"
                        >
                          <MenuItem value={``}>Select One</MenuItem>
                          <MenuItem value={`Combo`}>Combo</MenuItem>
                          <MenuItem value={`Dry`}>Dry</MenuItem>
                          <MenuItem value={`Oily`}>Oily</MenuItem>
                          <MenuItem value={`Sensitive`}>Sensitive</MenuItem>
                          <MenuItem value={`Normal`}>Normal</MenuItem>
                        </Select>
                        {/* <FormHelperText></FormHelperText> */}
                      </FormControl>
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num3} alt="3" width="50" />
                    </td>
                    <td className="Right-col">
                      <FormControl className="Create-form">
                        <InputLabel className="Create-label">
                          Category
                        </InputLabel>
                        <Select
                          name="categoryId"
                          value={this.state.categoryId}
                          onChange={this.handleInput}
                          className="Create-text"
                        >
                          <MenuItem value={``}>Select One</MenuItem>
                          <MenuItem value={`1`}>Skincare by Skin Type</MenuItem>
                          <MenuItem value={`2`}>Skincare by Age</MenuItem>
                        </Select>
                      </FormControl>
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num4} alt="4" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="firstCleanser"
                        placeholder="First Cleanser"
                        value={this.state.firstCleanser}
                        onChange={this.handleInput}
                        className="Create-input"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num5} alt="5" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="secondCleanser"
                        placeholder="Second Cleanser"
                        value={this.state.secondCleanser}
                        onChange={this.handleInput}
                        className="Create-input"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num6} alt="6" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="exfoliator"
                        placeholder="Exfoliator"
                        value={this.state.exfoliator}
                        onChange={this.handleInput}
                        className="Create-input"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num7} alt="7" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="toner"
                        placeholder="Toner"
                        value={this.state.toner}
                        onChange={this.handleInput}
                        className="Create-input"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num8} alt="8" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="essence"
                        placeholder="Essence"
                        value={this.state.essence}
                        onChange={this.handleInput}
                        className="Create-input"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num9} alt="9" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="eyeSerum"
                        placeholder="Eye Serum"
                        value={this.state.eyeSerum}
                        onChange={this.handleInput}
                        className="Create-input"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num10} alt="10" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="eyeMoisturizer"
                        placeholder="Eye Moisturizer"
                        value={this.state.eyeMoisturizer}
                        onChange={this.handleInput}
                        className="Create-input"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num11} alt="11" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="faceSerum"
                        placeholder="Face Serum"
                        value={this.state.faceSerum}
                        onChange={this.handleInput}
                        className="Create-input"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num12} alt="12" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="faceMoisturizer"
                        placeholder="Face Moisturizer"
                        value={this.state.faceMoisturizer}
                        onChange={this.handleInput}
                        className="Create-input"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num13} alt="13" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="neckSerum"
                        placeholder="Neck Serum"
                        value={this.state.neckSerum}
                        onChange={this.handleInput}
                        className="Create-input"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num14} alt="14" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="neckMoisturizer"
                        placeholder="Neck Moisturizer"
                        value={this.state.neckMoisturizer}
                        onChange={this.handleInput}
                        className="Create-input"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num15} alt="15" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="mask"
                        placeholder="Mask"
                        value={this.state.mask}
                        onChange={this.handleInput}
                        className="Create-input"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num16} alt="16" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="sunscreen"
                        placeholder="Sunscreen"
                        value={this.state.sunscreen}
                        onChange={this.handleInput}
                        className="Create-input"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num17} alt="17" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="note"
                        placeholder="Note"
                        value={this.state.note}
                        onChange={this.handleInput}
                        className="Create-input"
                        multiline
                        rows="4"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button className="Create-btn">Create Routine</button>
            </form>
          </div>
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
  { addRoutine }
)(CreateRoutine);
