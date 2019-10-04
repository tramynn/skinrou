import React, { Component } from "react";
import Header from "../Header/Header";
import "../../styles/partials/CreateRoutine/CreateRoutine.scss";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
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
import { connect } from "react-redux";
import { editRoutine } from "../../redux/reducers/routinesReducer";
import { getSession } from "../../redux/reducers/userReducer";
import { Redirect } from "react-router-dom";

class EditRoutine extends Component {
  constructor() {
    super();
    this.state = {
      time: "",
      skinType: "",
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
      faceMask: "",
      sunscreen: "",
      note: ""
    };
  }

  componentDidMount() {
    const matchId = +this.props.match.params.routineId;
    const userRoutines = this.props.routines;

    userRoutines.forEach(matchRoutine => {
      if (matchRoutine.routine_id === matchId) {
        this.setState({
          time: `${matchRoutine["time"]}`,
          skinType: `${matchRoutine["skin_type"]}`,
          firstCleanser: `${matchRoutine["first_cleanser"]}`,
          secondCleanser: `${matchRoutine["second_cleanser"]}`,
          exfoliator: `${matchRoutine["exfoliator"]}`,
          toner: `${matchRoutine["toner"]}`,
          essence: `${matchRoutine["essence"]}`,
          eyeSerum: `${matchRoutine["eye_serum"]}`,
          eyeMoisturizer: `${matchRoutine["eye_moisturizer"]}`,
          faceSerum: `${matchRoutine["face_serum"]}`,
          faceMoisturizer: `${matchRoutine["face_moisturizer"]}`,
          neckSerum: `${matchRoutine["neck_serum"]}`,
          neckMoisturizer: `${matchRoutine["neck_moisturizer"]}`,
          faceMask: `${matchRoutine["mask"]}`,
          sunscreen: `${matchRoutine["sunscreen"]}`,
          note: `${matchRoutine["note"]}`
        });
      }
    });
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleEdit = (e, routineId) => {
    e.preventDefault();
    const { userId } = this.props;
    const {
      time,
      skinType,
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
      faceMask,
      sunscreen,
      note
    } = this.state;

    const updatedRoutine = {
      userId,
      time,
      skinType,
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
      faceMask,
      sunscreen,
      note
    };
    this.props.editRoutine(routineId, updatedRoutine);
  };

  render() {
    console.log(this.props.match.params.routineId);
    const { userId } = this.props;
    if (this.props.shouldRedirect === true) {
      return <Redirect to={`/profile/user/${userId}`} />;
    }
    return (
      <div className="CreateRoutine-container">
        <Header />
        <div className="CreateRoutine-main">
          <div className="CreateRoutine-left-box"></div>
          <div className="CreateRoutine-right-box">
            <h1>your skinrou.</h1>
            <form autoComplete="off">
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
                          <MenuItem value={`combination`}>Combination</MenuItem>
                          <MenuItem value={`dry`}>Dry</MenuItem>
                          <MenuItem value={`oily`}>Oily</MenuItem>
                          <MenuItem value={`sensitive`}>Sensitive</MenuItem>
                          <MenuItem value={`normal`}>Normal</MenuItem>
                        </Select>
                      </FormControl>
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num3} alt="3" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="firstCleanser"
                        placeholder="First Cleanser"
                        value={this.state.firstCleanser}
                        onChange={this.handleInput}
                        className="Create-input"
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num4} alt="4" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="secondCleanser"
                        placeholder="Second Cleanser"
                        value={this.state.secondCleanser}
                        onChange={this.handleInput}
                        className="Create-input"
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num5} alt="5" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="exfoliator"
                        placeholder="Exfoliator"
                        value={this.state.exfoliator}
                        onChange={this.handleInput}
                        className="Create-input"
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num6} alt="6" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="toner"
                        placeholder="Toner"
                        value={this.state.toner}
                        onChange={this.handleInput}
                        className="Create-input"
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num7} alt="7" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="essence"
                        placeholder="Essence"
                        value={this.state.essence}
                        onChange={this.handleInput}
                        className="Create-input"
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num8} alt="8" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="eyeSerum"
                        placeholder="Eye Serum"
                        value={this.state.eyeSerum}
                        onChange={this.handleInput}
                        className="Create-input"
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num9} alt="9" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="eyeMoisturizer"
                        placeholder="Eye Moisturizer"
                        value={this.state.eyeMoisturizer}
                        onChange={this.handleInput}
                        className="Create-input"
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num10} alt="10" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="faceSerum"
                        placeholder="Face Serum"
                        value={this.state.faceSerum}
                        onChange={this.handleInput}
                        className="Create-input"
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num11} alt="11" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="faceMoisturizer"
                        placeholder="Face Moisturizer"
                        value={this.state.faceMoisturizer}
                        onChange={this.handleInput}
                        className="Create-input"
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num12} alt="12" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="neckSerum"
                        placeholder="Neck Serum"
                        value={this.state.neckSerum}
                        onChange={this.handleInput}
                        className="Create-input"
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num13} alt="13" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="neckMoisturizer"
                        placeholder="Neck Moisturizer"
                        value={this.state.neckMoisturizer}
                        onChange={this.handleInput}
                        className="Create-input"
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num14} alt="14" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="faceMask"
                        placeholder="Face Mask"
                        value={this.state.faceMask}
                        onChange={this.handleInput}
                        className="Create-input"
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num15} alt="15" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="sunscreen"
                        placeholder="Sunscreen"
                        value={this.state.sunscreen}
                        onChange={this.handleInput}
                        className="Create-input"
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="Left-col">
                      <img src={num16} alt="16" width="50" />
                    </td>
                    <td className="Right-col">
                      <TextField
                        name="note"
                        placeholder="Note"
                        value={this.state.note}
                        onChange={this.handleInput}
                        className="Create-input"
                        autoComplete="off"
                        multiline
                        rows="4"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <button
                onClick={e =>
                  this.handleEdit(e, this.props.match.params.routineId)
                }
                className="Create-btn"
              >
                Edit Routine
              </button>
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
    routines: reduxState.routinesReducer.routines,
    shouldRedirect: reduxState.routinesReducer.shouldRedirect
  };
};

export default connect(
  mapStateToProps,
  {
    getSession,
    editRoutine
  }
)(EditRoutine);
