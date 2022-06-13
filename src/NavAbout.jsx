import React from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { IoSettingsOutline, IoMegaphoneOutline, IoArchiveOutline, IoMailOutline } from "react-icons/io5";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom";

const NavAbout = () => {

  return (
    // From React-Bootstrap
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle bg="light" aria-controls="basic-navbar-nav" />
        <div className="logo">
          <Navbar.Brand href={"./personal-website"}>Ruben C. Arevalo</Navbar.Brand>
        </div>
        <Link to="/settings"><IoSettingsOutline size="25px" id="setting-btn-icon" /></Link>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item id="current-link">
              <Nav.Link><Link to="/about"><IoIosInformationCircle id="nav-icons-style" size="16px" /><b>About Me</b></Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/announcements"><IoMegaphoneOutline id="nav-icons-style" size="16px" />Announcements</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/contact"><IoMailOutline id="nav-icons-style" size="16px" />Contact Me</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/archives"><IoArchiveOutline id="nav-icons-style" size="16px" />Archives</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/settings"><IoSettingsOutline id="nav-icons-style" size="16px" />Settings</Link></Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavAbout;
