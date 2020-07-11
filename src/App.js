import React from "react";
import { Jumbotron, Container, Nav } from "react-bootstrap";
import "./App.css";
import "./Components/Welcome";
import ExerciseLog from "./Components/ExerciseLog";

function App() {
  return (
    <div className="App">
      <Nav className="justify-content-end" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Plan a Workout</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Log Exercise</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Logout</Nav.Link>
        </Nav.Item>
      </Nav>
      <Jumbotron>
        <Container>
          <h1>Exercise Tracker</h1>
          <p>Keep up with your goals and track your exercise!</p>
        </Container>
      </Jumbotron>

      <ExerciseLog />
    </div>
  );
}

export default App;
