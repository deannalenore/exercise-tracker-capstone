import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class ExerciseLog extends Component {
  render() {
    return (
      <div>
        <h1>Daily Exercise Log</h1>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1">
            <Form.Label>Date</Form.Label>
            <Form.Control type="date" placeholder="Enter Date" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1">
            <Form.Label>Exercise</Form.Label>
            <Form.Control as="select">
              <option>Cardio</option>
              <option>Running</option>
              <option>Walking</option>
              <option>Weight Training</option>
              <option>Swimming</option>
            </Form.Control>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}

export default ExerciseLog;
