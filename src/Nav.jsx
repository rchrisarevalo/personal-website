import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";
import { IoSendOutline } from "react-icons/io5";

import {Link} from "react-router-dom";

const Nav = () => {

  function activateNav(){
    var nav = document.querySelector(".nav-list")

      if (nav.classList.toggle("is_active") === true){
        document.body.style.cssText = ' '
      } else {
        document.body.style.cssText = 'overflow: scroll;'
      }

  }

  function displayNotif(){
    var e = document.getElementById("warning-notif-2")
    e.classList.toggle("active")

    setTimeout(function(){
        e.classList.remove("active")
    }, 5000)
  }

  return (
    <nav className = "nav-bar">
    
      <div className = "burger-icon" onClick={activateNav}>
        <IoIosMenu id="burger-style" size = "28px" color = "white"/>
      </div>
      <div className = "logo">
        <a href = {"./"}>Ruben C. Arevalo</a>
      </div>
      <div className = "contact-icon" onClick={displayNotif}>
        <IoSendOutline id="contact-style"/>
      </div>

      <ul className = "nav-list">
        <li><Link to = "/about">About Me</Link></li>
        <li><Link to = "/posts">Posts</Link></li>
        <li><Link to = "/contact">Contact Me</Link></li>
        <div className = "button">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSu_sZqwO_m42GKlmXKrA30hyTglQQY1N3V2PIcdGc87WbXg/viewform" rel="noopener noreferrer" target="_blank"><IoWarningOutline size="22px" id="report-icon"/>Report</a>
        </div>
        <div className = "button" onClick={displayNotif} id="mobile-remove">
          <Link to = "/about"><IoSendOutline size="22px" id="report-icon"/>Contact Form</Link>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
