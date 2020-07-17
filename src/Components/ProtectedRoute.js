import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function ProtectedRoute(props) {
    return (
        props.loggedIn === "true" ? <Route path={props.path} component={props.component}></Route> : <Route><Redirect to="/login"></Redirect></Route>
    )
}

export default ProtectedRoute;