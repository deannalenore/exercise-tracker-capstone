import React from 'react';
import {NavLink, Router, Link} from 'react-router-dom';
import { Nav, Navbar, NavItem} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/css/bootstrap-theme.css";
import { LinkContainer } from "react-router-bootstrap";

class MainNavBar extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar fluid collapseOnSelect>
            <Navbar.Brand>
              <Link to="/">Welcome</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
         <Navbar.Collapse>
         <Nav pullRight>
              <LinkContainer to="/SignUp">
                <NavItem>Sign UP</NavItem>
              </LinkContainer>
              <LinkContainer to="/Login">
                <NavItem>Login</NavItem>
              </LinkContainer>
              <LinkContainer to="/ExerciseLog">
                <NavItem>Plan a Workout</NavItem>
              </LinkContainer>
              <LinkContainer to="/LogOut">
                <NavItem>Log Out</NavItem>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Navbar> 
      
      </div>
    );
  }
}


export default MainNavBar;
//Add links to pages
//NavBar.Collapse to ensure links collapse on mobile devicess