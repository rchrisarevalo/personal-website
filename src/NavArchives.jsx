import React from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoSettingsOutline, IoMegaphoneOutline, IoArchiveSharp, IoMailOutline } from "react-icons/io5";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from "react-router-dom";

const NavArchives = () => {

  return (
    // From React-Bootstrap
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="logo">
          <Navbar.Brand href={"./personal-website"}>Ruben C. Arevalo</Navbar.Brand>
        </div>
        <Link to="/settings"><IoSettingsOutline size="25px" id="setting-btn-icon" /></Link>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Item>
              <Nav.Link><Link to="/about"><IoIosInformationCircleOutline id="nav-icons-style" size="16px" />About Me</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/announcements"><IoMegaphoneOutline id="nav-icons-style" size="16px" />Announcements</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link><Link to="/contact"><IoMailOutline id="nav-icons-style" size="16px" />Contact Me</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item id="current-link">
              <Nav.Link><Link to="/archives"><IoArchiveSharp id="nav-icons-style" size="16px" /><b>Archives</b></Link></Nav.Link>
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

export default NavArchives;