import React from "react";
import { IoIosMenu, IoIosInformationCircleOutline } from "react-icons/io";
import { IoCloseOutline, IoMegaphoneSharp, IoArchiveSharp, IoSettingsSharp } from "react-icons/io5";

import { Link, HashRouter } from "react-router-dom";
import ReactDOMServer from 'react-dom/server';

const NavSettings = () => {

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
        <Link to="/settings"><IoSettingsSharp id="contact-style" color="white" /></Link>
      </div>

      <ul className="nav-list">
        <HashRouter>
          <li><Link to="/about"><IoIosInformationCircleOutline id="nav-icons-style" size="16px" />About Me</Link></li>
          <li><Link to="/announcements"><IoMegaphoneSharp id="nav-icons-style" size="16px" />Announcements</Link></li>
          <li><Link to="/archives"><IoArchiveSharp id="nav-icons-style" size="16px" />Archives</Link></li>
          <li><Link to="/settings" id="current-link"><IoSettingsSharp id="nav-icons-style" size="16px" /><b>Settings</b></Link></li>
        </HashRouter>
      </ul>
    </nav>
  );
}

export default NavSettings;