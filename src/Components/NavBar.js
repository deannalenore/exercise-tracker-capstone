import React from 'react';
import {NavLink} from 'react-router-dom';
import { Nav } from 'react-bootstrap';


function NavBar() {
    return(
        <div className="App">

          <Nav className="justify-content-end" activeKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Plan a Workout</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Log Exercise</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/logout" eventKey="link-2">Logout</Nav.Link>
            </Nav.Item>
          </Nav>
      </div>
    )
}
export default NavBar;
//Add links to pages