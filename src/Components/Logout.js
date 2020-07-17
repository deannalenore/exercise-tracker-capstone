import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export class Logout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: true
        }
    }

    componentDidMount() {
            axios.get("/logout")
            .then(response => {
            console.log(response.data);
            this.setState({
                loggedIn: "false"
            })
        })
    }
    
    render() {
        if(this.state.loggedIn === "false") {
            return <Redirect to={{
                pathname: "/login",
                state: { loggedIn: false }
            }} />
        }
        return null;
    }
}

export default Logout;