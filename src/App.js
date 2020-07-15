import React from "react";
import { Jumbotron, Container } from "react-bootstrap";
import "./App.css";
import "./Components/Welcome";
import ExerciseLog from "./Components/ExerciseLog";
import SignUp from "./Components/SignUp";
import Login from "./Components/Login";
import {BrowserRouter, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <Jumbotron>
          <Container>
            <h1>Exercise Tracker</h1>
              <p>Keep up with your goals and track your exercise!</p>
          </Container>
        </Jumbotron>
        <Route path="/exercise">
          <ExerciseLog />
        </Route>
        <Route path="/signup">
          <SignUp />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        </BrowserRouter>
    </div>
  );
}

export default App;
