import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class ExerciseLog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      exercise: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target);
  };

  render() {
    return (
      <div>
        <h1>Daily Exercise Log</h1>
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
              <Form.Control as="textarea" rows="5" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Add Entry
            </Button>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default ExerciseLog;
