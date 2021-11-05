import React from "react";
import { IoIosMenu, IoIosInformationCircleOutline, IoIosContact } from "react-icons/io";
import { IoSendOutline, IoMegaphoneOutline } from "react-icons/io5";

import { Link } from "react-router-dom";

const Nav = () => {

  function activateNav() {
    var nav = document.querySelector(".nav-list")

    if (nav.classList.toggle("is_active") === true) {
      document.body.style.cssText = ' '
    } else {
      document.body.style.cssText = 'overflow: scroll;'
    }

  }

  function displayNotif() {
    var e = document.getElementById("warning-notif-2")

    e.classList.toggle("active")

    setTimeout(function () {
      e.classList.remove("active")
    }, 3000)
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
        <li><Link to="/about"><IoIosInformationCircleOutline id="nav-icons-style" size="18px"/>About Me</Link></li>
        <li><Link to="/announcements"><IoMegaphoneOutline id="nav-icons-style" size="18px"/>Announcements</Link></li>
        <li><Link to="/contact-info"><IoIosContact id="nav-icons-style" size="18px"/>Contact Info</Link></li>
        <div className="button" onClick={displayNotif} id="mobile-remove">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1nR8hmOAMRTU3fDZsbLRGkjzKvA9uRLZW_YdvsyBEctqDOw/viewform" target="_blank" rel="noreferrer"><IoSendOutline size="22px" id="report-icon" />Contact Me</a>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
