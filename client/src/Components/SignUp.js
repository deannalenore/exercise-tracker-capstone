import React, { Component } from "react";
import { useFormik } from "formik";
import "./SignUp.css";
const axios = require("axios");

export class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      firstName: "",
      lastName: "",
    };
  }

  SignupForm = () => {
    // Notice that we have to initialize ALL of fields with values. These
    // could come from props, but since we don't want to prefill this form,
    // we just use an empty string. If you don't do this, React will yell
    // at you.
    const formik = useFormik({
      initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        axios
          .post("process.env.REACT_APP_URL/login", {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
          })
          .then((response) => {
            this.setState({
              loggedIn: true,
              firstName: response.data.first,
              lastName: response.data.last,
            });
            localStorage.setItem("firstname", this.state.firstName);
            localStorage.setItem("lastname", this.state.lastName);
            localStorage.setItem("loggedIn", this.state.loggedIn);
            formik.resetForm();
          });
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <div class="signup-form">
          <label
            style={{ color: "#F1F4F7" }}
            htmlFor="firstName"
            className="col-2"
          >
            {" "}
            {/*changed to col-2 to get First Name horizontal*/}
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.firstName}
          />
          <label style={{ color: "#F1F4F7" }} htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.lastName}
          />
          <label style={{ color: "#F1F4F7" }} htmlFor="email">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label style={{ color: "#F1F4F7" }} htmlFor="password">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div class="button">
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  };

  render() {
    return <this.SignupForm />;
  }
}

export default SignUp;
