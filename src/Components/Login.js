import React, { Component } from 'react';
import { useFormik } from 'formik';
const axios = require('axios');

export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            firstName: "",
            lastName: "",
            errorMessage: ""
        }
    }

    LoginForm = () => {
        // Notice that we have to initialize ALL of fields with values. These
        // could come from props, but since we don't want to prefill this form,
        // we just use an empty string. If you don't do this, React will yell
        // at you.
        const formik = useFormik({
          initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
          },
          onSubmit: values => {
            axios.post('/login', {
                email: values.email,
                password: values.password
            })
            .then(response => {
                this.setState({
                    loggedIn: true,
                    firstName: response.data.first,
                    lastName: response.data.last,
                })
                formik.resetForm();
            })
            .catch(error => {
                if(error.response) {
                    this.setState({
                        errorMessage: error.response.data.message
                    })
                }
            });
          },
        });
        return (
          <form onSubmit={formik.handleSubmit}>
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
            <button type="submit">Submit</button>
          </form>
        );
      };

    render() {
        return(
            <this.LoginForm />
        )
    }
}
 

 export default Login;