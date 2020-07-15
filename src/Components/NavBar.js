import React from 'react';
import {NavLink} from 'react-router-dom';
import { Nav, NavItem } from 'react-bootstrap';


function NavBar() {
    return(
        <div className="App">

          <Nav className="justify-content-end" activeKey="/home">
            <NavItem>
              <NavLink href="/home">Plan a Workout</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="link-1">Log Exercise</NavLink>
            </NavItem>
            <NavItem>
              <NavLink eventKey="link-2">Logout</NavLink>
            </NavItem>
          </Nav>
      </div>
    )
}
export default NavBar;
//Add links to pages