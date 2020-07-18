import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./App.css";
import Welcome from "./Components/Welcome";
import ExerciseLog from "./Components/ExerciseLog";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import MainNavBar from "./Components/MainNavBar";
import ProtectedRoute from "./Components/ProtectedRoute";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Logout from "./Components/Logout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MainNavBar />
        <Jumbotron>
          <Container>
            <h1>Exercise Tracker</h1>
            <p>Keep up with your goals and track your exercise!</p>
          </Container>
        </Jumbotron>
        <Switch>
          <Route path="/exercise" component={ExerciseLog} />

          <Route path="/signup" component={SignUp} />

          <Route path="/login" component={Login} />

          <Route path="/logout" component={Logout} />
          <ProtectedRoute
            path="/welcome"
            component={Welcome}
            loggedIn={localStorage.getItem("loggedIn")}
          />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
