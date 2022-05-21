import React from "react";
import { IoIosMenu, IoIosInformationCircleOutline } from "react-icons/io";
import { IoSettingsOutline, IoCloseOutline, IoMegaphoneOutline, IoArchiveOutline, IoMailOpenSharp } from "react-icons/io5";

import { Link, HashRouter } from "react-router-dom";
import ReactDOMServer from 'react-dom/server';

const NavContact = () => {

  function activateNav() {
    var nav = document.querySelector(".nav-list")
    var burger_icon = document.querySelector(".burger-icon");
    var clicked = false;

    if (clicked === false && nav.classList.toggle("is_active") === true) {
      clicked = true;
      burger_icon.innerHTML = ReactDOMServer.renderToString(<IoCloseOutline id="burger-style" size="28px" color="white"/>);
    } else {
      clicked = false;
      burger_icon.innerHTML = ReactDOMServer.renderToString(<IoIosMenu id="burger-style" size="28px" color="white" />);
    }
  }

  return (
    <nav className="nav-bar">
      <div className="burger-icon" onClick={activateNav}>
        <IoIosMenu id="burger-style" size="28px" color="white" />
      </div>
      <div className="logo">
        <a href={"./"}>Ruben C. Arevalo</a>
      </div>
      <div className="contact-icon">
        <Link to="/settings"><IoSettingsOutline id="contact-style" color="white" /></Link>
      </div>

      <ul className="nav-list">
        <HashRouter>
          <li><Link to="/about"><IoIosInformationCircleOutline id="nav-icons-style" size="16px" />About Me</Link></li>
          <li><Link to="/announcements"><IoMegaphoneOutline id="nav-icons-style" size="16px" />Announcements</Link></li>
          <li><Link to="/contact" id="current-link"><IoMailOpenSharp id="nav-icons-style" size="16px" /><b>Contact Me</b></Link></li>
          <li><Link to="/archives"><IoArchiveOutline id="nav-icons-style" size="16px" />Archives</Link></li>
          <li><Link to="/settings"><IoSettingsOutline id="nav-icons-style" size="16px" />Settings</Link></li>
        </HashRouter>
      </ul>
    </nav>
  );
}

export default NavContact;