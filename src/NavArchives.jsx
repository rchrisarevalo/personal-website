import React, { useState } from "react";
import { IoIosInformationCircleOutline } from "react-icons/io";
import { IoSettingsOutline, IoMegaphoneOutline, IoArchiveSharp, IoMailOutline } from "react-icons/io5";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';

import ThemeChangerButton from "./components/ThemeChangerButton.jsx";
import ClearLocalStorage from "./components/ClearLocalStorage.jsx";

import { Link } from "react-router-dom";

const NavArchives = () => {

  // From React Bootstrap documentation when closing and opening modal.
  const [noticeShow, setNoticeShow] = useState(false)
  const handleNoticeClose = () => setNoticeShow(false)
  const handleNoticeShow = () => setNoticeShow(true)

  return (
    // From React-Bootstrap
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="logo">
          <Navbar.Brand href="./">Ruben C. Arevalo</Navbar.Brand>
        </div>
        <button onClick={handleNoticeShow} className="settings-nav-btn-mobile"><IoSettingsOutline size="25px" id="setting-btn-icon" /></button>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
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
          </Nav>
        </Navbar.Collapse>
        <div className="settings-option-web">
          <button onClick={handleNoticeShow} className="settings-nav-btn-web"><IoSettingsOutline size="16px" id="setting-btn-icon-web" style={{transform: 'translateY(-7%)'}} />Settings</button>
        </div>
      </Container>

      {/* Clear local storage modal (modal from React Bootstrap) */}
      <Modal
        show={noticeShow}
        onHide={handleNoticeClose}
        keyboard={false}
        centered
        id="modal-text-clear"
        className="settings-options"
      >
        <Modal.Header closeButton id='closeButton-modal'>
          <Modal.Title><b>Settings</b></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div id="clear-notice">Choose from the settings below:</div>
          <br></br>
          <div id="clear-notice"><i>Clear all your local storage saved for this website:</i></div>
          <br></br>
          <ClearLocalStorage />
          <br></br>
          <br></br>
          <div id="clear-notice"><i>Switch to light mode, dark mode, or your configured device theme:</i></div>
          <br></br>
          <ThemeChangerButton />
          <br></br>
          <br></br>
        </Modal.Body>
      </Modal>
    </Navbar>
  );
}

export default NavArchives;