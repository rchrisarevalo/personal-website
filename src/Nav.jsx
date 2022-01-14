import React from "react";
import { IoIosMenu, IoIosInformationCircleOutline } from "react-icons/io";
import { IoSendOutline, IoCloseOutline, IoMegaphoneOutline, IoArchiveOutline } from "react-icons/io5";

import { Link, HashRouter } from "react-router-dom";
import ReactDOMServer from 'react-dom/server';

const Nav = () => {

  function activateNav() {
    var nav = document.querySelector(".nav-list")
    var burger_icon = document.querySelector(".burger-icon");
    var clicked = false;

    if (clicked === false && nav.classList.toggle("is_active") === true) {
      clicked = true;
      burger_icon.innerHTML = ReactDOMServer.renderToString(<IoCloseOutline id="burger-style" size="28px" color="white"/>);
    } else {
      clicked = false;
      burger_icon.innerHTML = ReactDOMServer.renderToString(<IoIosMenu id="burger-style" size="28px" color="white" />)
    }

  }

  function displayNotif() {
    var e = document.getElementById("warning-notif-2")

    e.classList.toggle("active")

    setTimeout(function () {
      e.classList.remove("active")
    }, 5000)
  }

  return (
    <nav className="nav-bar">

      <div className="burger-icon" onClick={activateNav}>
        <IoIosMenu id="burger-style" size="28px" color="white" />
      </div>
      <div className="logo">
        <a href={"./"}>Ruben C. Arevalo</a>
      </div>
      <div className="contact-icon" onClick={displayNotif}>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1nR8hmOAMRTU3fDZsbLRGkjzKvA9uRLZW_YdvsyBEctqDOw/viewform" target="_blank" rel="noreferrer"><IoSendOutline id="contact-style" color="white" /></a>
      </div>

      <ul className="nav-list">
        <HashRouter>
          <li><Link to="/about"><IoIosInformationCircleOutline id="nav-icons-style" size="18px" />About Me</Link></li>
          <li><Link to="/announcements"><IoMegaphoneOutline id="nav-icons-style" size="18px" />Announcements</Link></li>
          <li><Link to="/archives"><IoArchiveOutline id="nav-icons-style" size="18px" />Archives</Link></li>
        </HashRouter>
        <div className="button" onClick={displayNotif} id="mobile-remove">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1nR8hmOAMRTU3fDZsbLRGkjzKvA9uRLZW_YdvsyBEctqDOw/viewform" target="_blank" rel="noreferrer"><IoSendOutline size="22px" id="report-icon" />Contact Me</a>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
