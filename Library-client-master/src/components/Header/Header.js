import React from 'react';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Login from '../Login/login';
import Signin from '../Signin/Signin';
import Image from 'react-bootstrap/Image'

export default function Footer() {
    return (
        <Navbar className="study-portal_navbar"  expand="lg">
            <Navbar.Brand  className="study-portal_navbar_text"  href="#home">Study Portal</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto study-portal_navbar_text">
                    <Nav.Link className="study-portal_navbar_text" href="#home">Home</Nav.Link>
                    <Nav.Link className="study-portal_navbar_text" href="#link">Link</Nav.Link>
                    <NavDropdown className="study-portal_navbar_text"  title="Dropdown" id="basic-nav-dropdown">

                        <NavDropdown.Item  href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link className="study-portal_navbar_text" href="#home"></Nav.Link>
                </Nav>
                <div className="lecturer-avatar"><Image className="lecturer-avatar_img" src='/team-1.jpg' alt={"team-1"} /></div>
                <Login/>
                <Signin/>
            </Navbar.Collapse>
        </Navbar>


    )
}
