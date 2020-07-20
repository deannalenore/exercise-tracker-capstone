import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./ExerciseLog.css";
const axios = require("axios");

export class ExerciseLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      exercise: "",
      information: "",
      logs: []
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let logArray = this.state.logs.concat({exercise: this.state.exercise, information: this.state.information});
    
    console.log(this.state);
    this.setState({
      date: "",
      exercise: "",
      information: "",
      logs: logArray
    });
    console.log(this.state);
  };

  submitToDatabase = () => {
    axios.post('/exercise/log', {
      userId: localStorage.getItem("id"),
      log: this.state.logs
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div class="exercise-header">
        <h1>Daily Exercise Log</h1>
        <div class="container">
          <div className="form">
            <Form onSubmit={this.handleSubmit}>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Date</Form.Label>
                <Form.Control
                  onChange={this.handleChange}
                  value={this.state.date}
                  type="date"
                  name="date"
                  placeholder="Enter Date"
                />
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlSelect1">
                <Form.Label>Exercise</Form.Label>
                <Form.Control
                  as="select"
                  name="exercise"
                  onChange={this.handleChange}
                  value={this.state.exercise}
                >
                  <option value="cardio">Cardio</option>
                  <option value="running">Running</option>
                  <option value="walking">Walking</option>
                  <option value="weight training">Weight Training</option>
                  <option value="swimming">Swimming</option>
                </Form.Control>
              </Form.Group>
              <Form.Group controlId="exampleForm.ControlTextarea1">
                <Form.Label>Add Info</Form.Label>
                <Form.Control
                  as="textarea"
                  rows="5"
                  name="information"
                  onChange={this.handleChange}
                  value={this.state.information}
                />
              </Form.Group>
              <div class="button">
                <Button variant="primary" type="submit">
                  Add Entry
                </Button>
                <Button variant="primary" type="submit" onClick={this.submitToDatabase}>
                  Save
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default ExerciseLog;
