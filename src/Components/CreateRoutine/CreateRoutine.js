import React, { Component } from "react";
import Header from "../Header/Header";
import "../../styles/partials/CreateRoutine/CreateRoutine.scss";

class CreateRoutine extends Component {
  constructor() {
    super();
    this.state = {
      
    };
  }

  render() {
    return (
      <div className="CreateRoutine-container">
        <Header />
        <div className="CreateRoutine-main">
          <div className="CreateRoutine-left-box">Hello</div>
          <div className="CreateRoutine-right-box">
            <h1>YOUR SKINROU</h1>
            <form>
              <table>
                <tr>
                  <td class="Left-col">
                    <label>Time:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="Day or Night" />
                  </td>
                </tr>
                <tr>
                  <td class="Left-col">
                    <label>Skin Type:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="Combo/Dry/Oily/Normal" />
                  </td>
                </tr>
                <tr>
                  <td class="Left-col">
                    <label>Step 1:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="First Cleanser" />
                  </td>
                </tr>
                <tr>
                  <td class="Left-col">
                    <label>Step 2:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="Second Cleanser" />
                  </td>
                </tr>
                <tr>
                  <td class="Left-col">
                    <label>Step 3:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="Exfoliator" />
                  </td>
                </tr>
                <tr>
                  <td class="Left-col">
                    <label>Step 4:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="Toner" />
                  </td>
                </tr>
                <tr>
                  <td class="Left-col">
                    <label>Step 5:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="Essence" />
                  </td>
                </tr>
                <tr>
                  <td class="Left-col">
                    <label>Step 6:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="Eye Serum" />
                  </td>
                </tr>
                <tr>
                  <td class="Left-col">
                    <label>Step 7:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="Eye Moisturizer" />
                  </td>
                </tr>
                <tr>
                  <td class="Left-col">
                    <label>Step 8:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="Face Serum" />
                  </td>
                </tr>
                <tr>
                  <td class="Left-col">
                    <label>Step 9:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="Face Moisturizer" />
                  </td>
                </tr>
                <tr>
                  <td class="Left-col">
                    <label>Step 10:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="Neck Serum" />
                  </td>
                </tr>
                <tr>
                  <td class="Left-col">
                    <label>Step 11:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="Neck Moisturizer" />
                  </td>
                </tr>
                <tr>
                  <td class="Left-col">
                    <label>Step 12:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="Mask" />
                  </td>
                </tr>
                <tr>
                  <td class="Left-col">
                    <label>Step 13:</label>
                  </td>
                  <td class="Right-col">
                    <input placeholder="Sunscreen" />
                  </td>
                </tr>
              </table>
              <button>Create Routine</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default CreateRoutine;
