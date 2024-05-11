import React, { useState } from "react";
import { IoIosInformationCircleOutline, IoIosInformationCircle } from "react-icons/io";
import { IoSettingsOutline, IoMailOutline, IoMailOpenSharp, IoMegaphoneOutline, IoMegaphoneSharp, IoArchiveOutline, IoArchiveSharp, IoFolderOutline, IoFolderOpenSharp } from "react-icons/io5";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';

import ThemeChangerButton from "./components/ThemeChangerButton.jsx";
import ClearLocalStorage from "./components/ClearLocalStorage.jsx";

import { Link, useLocation } from "react-router-dom";

const NavMain = () => {

  const getRoute = useLocation().pathname

  // From React Bootstrap documentation when closing and opening modal.
  const [noticeShow, setNoticeShow] = useState(false)
  const handleNoticeClose = () => setNoticeShow(false)
  const handleNoticeShow = () => setNoticeShow(true)

  return (
    <Navbar expand="lg" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div className="logo">
          <Navbar.Brand href="./">Ruben C. Arevalo</Navbar.Brand>
        </div>
        <button onClick={handleNoticeShow} className="settings-nav-btn-mobile"><IoSettingsOutline size="25px" id="setting-btn-icon" /></button>
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
          <Nav>
            {getRoute === "/" ?
              <Nav.Item id="current-link">
                <Nav.Link><Link to="/"><IoIosInformationCircle id="nav-icons-style" size="16px" /><b>About Me</b></Link></Nav.Link>
              </Nav.Item>
              :
              <Nav.Item>
                <Nav.Link><Link to="/"><IoIosInformationCircleOutline id="nav-icons-style" size="16px" />About Me</Link></Nav.Link>
              </Nav.Item>
            }
            {getRoute === "/announcements" ?
              <Nav.Item id="current-link">
                <Nav.Link><Link to="/announcements"><IoMegaphoneSharp id="nav-icons-style" size="16px" /><b>Announcements</b></Link></Nav.Link>
              </Nav.Item>
              :
              <Nav.Item>
                <Nav.Link><Link to="/announcements"><IoMegaphoneOutline id="nav-icons-style" size="16px" />Announcements</Link></Nav.Link>
              </Nav.Item>
            }
            {getRoute === "/portfolio" ?
              <Nav.Item id="current-link">
                <Nav.Link><Link to="/portfolio"><IoFolderOpenSharp id="nav-icons-style" size="16px" /><b>Portfolio</b></Link></Nav.Link>
              </Nav.Item>
              :
              <Nav.Item>
                <Nav.Link><Link to="/portfolio"><IoFolderOutline id="nav-icons-style" size="16px" />Portfolio</Link></Nav.Link>
              </Nav.Item>
            }
            {getRoute === "/contact" ?
              <Nav.Item id="current-link">
                <Nav.Link><Link to="/contact"><IoMailOpenSharp id="nav-icons-style" size="16px" /><b>Contact Me</b></Link></Nav.Link>
              </Nav.Item>
              :
              <Nav.Item>
                <Nav.Link><Link to="/contact"><IoMailOutline id="nav-icons-style" size="16px" />Contact Me</Link></Nav.Link>
              </Nav.Item>
            }
            {(getRoute === "/archives" || getRoute.split("/")[1] === "archives") ?
              <Nav.Item id="current-link">
                <Nav.Link><Link to="/archives"><IoArchiveSharp id="nav-icons-style" size="16px" /><b>Archives</b></Link></Nav.Link>
              </Nav.Item>
              :
              <Nav.Item>
                <Nav.Link><Link to="/archives"><IoArchiveOutline id="nav-icons-style" size="16px" />Archives</Link></Nav.Link>
              </Nav.Item>
            }
          </Nav>
        </Navbar.Collapse>
        <div className="settings-option-web">
          <button onClick={handleNoticeShow} className="settings-nav-btn-web"><IoSettingsOutline size="13px" id="setting-btn-icon-web" />Settings</button>
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
  )
}

export default NavMain;
