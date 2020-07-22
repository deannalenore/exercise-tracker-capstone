import React, { Component } from "react";
//import MainNavBar from "./MainNavBar";
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
      this.setState({
        renderLogs: response.data
      })
    })
   
  }
  

  render() {
      return(
      
        
      <>
      {console.log(this.state.renderLogs)}
      <div>
        <header className="Log-header">
          <h2>Exercise Logs</h2>
        </header>
      </div>
      
      </>
    )
  }
}

//<img src={logo} alt="logo"/>
//main page
//link for login & sign-up on this page

export default Welcome;
