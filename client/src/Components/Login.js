import React, { Component } from "react";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";
import { useFormik } from "formik";
import "./Login_Logout.css";
const axios = require("axios");

export class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      firstName: "",
      lastName: "",
      errorMessage: "",
    };
  }

  componentDidMount() {
    //if this.props.state exists, login was redirected to by loggout route. Clear local state.
    if (this.props.location.state && this.props.location.state.loggedIn === "false") {
      this.setState({
        loggedIn: false,
      });
    }
  }

  LoginForm = () => {
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
          .post(`${process.env.REACT_APP_URL}/login`, {
            email: values.email,
            password: values.password,
          })
          .then((response) => {
            this.setState({
              loggedIn: true,
              firstName: response.data.first,
              lastName: response.data.last,
              id: response.data.id,
            });
            localStorage.setItem("firstname", this.state.firstName);
            localStorage.setItem("lastname", this.state.lastName);
            localStorage.setItem("loggedIn", this.state.loggedIn);
            localStorage.setItem("id", this.state.id);
            formik.resetForm();
          })
          .catch((error) => {
            if (error.response) {
              this.setState({
                errorMessage: error.response.data.message,
              });
            }
          });
      },
    });
    return (
      <form onSubmit={formik.handleSubmit}>
        <div class="login-form">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </div>
        <div class="login-button">
          <button type="submit">Submit</button>
        </div>
      </form>
    );
  };

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/exercise" />;
    }

    return <this.LoginForm />;
  }
}

export default withRouter(Login);
