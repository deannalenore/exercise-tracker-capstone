import React, { Component } from "react";
import MainNavBar from "./MainNavBar";
import "./Welcome.css";
const axios = require("axios");

//var logo=require(".././Assets/Images/weights.jpg");
//figure out why image won't render in background

//export const DailyExercise = () => (

export class Welcome extends Component {
  constructor(props) {
    super(props)
    this.state = {
      exerciseLogs: []
    }
  }

  componentDidMount() {
    axios.get(`/exercise/${localStorage.getItem("id")}/log`)
    .then((response) => {
      console.log(response.data);
    })
    /* let newArray = [{date: "07/20/2020"}, {exercise: "running"}, {information: "ran 5 miles"}];
    this.setState({
      exerciseLogs: newArray
    }) */
  }

  render() {
    /* let logs = this.state.exerciseLogs.map((log, index) => {
      if(index === 0) {
        return `date: ${log.date}`;
      } else if(index === 1){
        return ` exercise: ${log.exercise}`;
      } else {
        return ` information: ${log.information}`
      }
    }) */
    
    return (
      <>
      <MainNavBar />
      {/* {logs} */}
      </>
    )
  }
}

//<img src={logo} alt="logo"/>
//main page
//link for login & sign-up on this page

export default Welcome;
