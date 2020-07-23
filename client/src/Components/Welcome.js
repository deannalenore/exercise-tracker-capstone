import React, { Component } from "react";
import "./Welcome.css";
const axios = require("axios");
const parse = require("html-react-parser");

//var logo=require(".././Assets/Images/weights.jpg");
//figure out why image won't render in background

//export const DailyExercise = () => (

export class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      exerciseLogs: [],
    };
  }

  componentDidMount() {
    axios
      .get(`/exercise/${localStorage.getItem("id")}/log`)
      .then((response) => {
        this.setState({
          renderLogs: response.data,
        });
      });
  }

  render() {
    if (this.state.renderLogs) {
      var string = "";
      this.state.renderLogs.forEach((element, index) => {
        let i = 0;
        while (i < element.length) {
          if (i === 0) {
            string += `<div>Date: ${element[i].date}<br/>`;
          } else {
            string += ` Exercise: ${element[i].exercise} Information: ${element[i].information}`;
          }
          i++;
        }
        string += "</div>";
      });
      console.log(string);
      var parsedString = parse(`<div>${string}</div>`);
    }
    return (
      <>
        <div>
          <header className="Log-header">
            <h2>Exercise Logs</h2>
          </header>
          {/* {parsedString} */}
        </div>
        <div class="card">
          <div class="card-body">
            <p class="card-text">{parsedString}</p>
          </div>
        </div>
      </>
    );
  }
}

//<img src={logo} alt="logo"/>
//main page
//link for login & sign-up on this page

export default Welcome;
