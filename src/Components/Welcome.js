import React, { Component } from "react";
import {Nav} from 'react-bootstrap';
import MainNavBar from './MainNavBar';
import './Welcome.css';

//var logo=require(".././Assets/Images/weights.jpg");
//figure out why image won't render in background

//export const DailyExercise = () => (

export class Welcome extends Component {
  render() {
    return (
     <MainNavBar />
    );
  }
}

//<img src={logo} alt="logo"/>
//main page
//link for login & sign-up on this page

export default Welcome;
