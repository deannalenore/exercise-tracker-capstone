import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
//import "bootstrap/dist/css/bootstrap-theme.css";
import { LinkContainer } from "react-router-bootstrap";
import "";

class MainNavBar extends React.Component {
  render() {
    return (
      <div className="container">
        <Navbar
          style={{ backgroundColor: "black" }}
          navbar
          navbar-expand-lg
          fluid
          collapseOnSelect
        >
          <Link className="navbar-brand" to="/">
            Welcome
          </Link>
          <Navbar.Toggle />
          <Navbar.Collapse>
            <Nav className="mr-auto" pullRight>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <LinkContainer to="/SignUp">
                    <NavItem>Sign Up</NavItem>
                  </LinkContainer>
                </li>
                <li className="nav-item">
                  <LinkContainer to="/Login">
                    <NavItem>Login</NavItem>
                  </LinkContainer>
                </li>
                <li className="nav-item">
                  <LinkContainer to="/ExerciseLog">
                    <NavItem>Plan a Workout</NavItem>
                  </LinkContainer>
                </li>
                <li className="nav-item">
                  <LinkContainer to="/LogOut">
                    <NavItem>Log Out</NavItem>
                  </LinkContainer>
                </li>
              </ul>
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
