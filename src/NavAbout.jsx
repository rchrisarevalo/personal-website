import React from "react";
import { IoIosMenu, IoIosInformationCircle } from "react-icons/io";
import { IoSettingsOutline, IoCloseOutline, IoMegaphoneOutline, IoArchiveOutline, IoMailOutline } from "react-icons/io5";

import { Link } from "react-router-dom";
import ReactDOMServer from 'react-dom/server';

const NavAbout = () => {

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
          <li><Link to="/about" id="current-link"><IoIosInformationCircle id="nav-icons-style" size="16px" /><b>About Me</b></Link></li>
          <li><Link to="/announcements"><IoMegaphoneOutline id="nav-icons-style" size="16px" />Announcements</Link></li>
          <li><Link to="/contact"><IoMailOutline id="nav-icons-style" size="16px" />Contact Me</Link></li>
          <li><Link to="/archives"><IoArchiveOutline id="nav-icons-style" size="16px" />Archives</Link></li>
          <li><Link to="/settings"><IoSettingsOutline id="nav-icons-style" size="16px" />Settings</Link></li>
      </ul>
    </nav>
  );
}

export default NavAbout;
