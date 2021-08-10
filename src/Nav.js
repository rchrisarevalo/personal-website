import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";
import { IoIosMenu } from "react-icons/io";

import {Link} from "react-router-dom";

const Nav = () => {

  function change_theme(){
    var change_background = document.querySelector(".change-theme")

      if (change_background.classList.toggle("active") === true){
        document.body.style.cssText = 'background: white; color: black; transition: .5s;'
      } else {
        document.body.style.cssText = 'transition: .5s;'
      }

  }

  function activateNav(){
    var nav = document.querySelector(".nav-list")

      if (nav.classList.toggle("is_active") === true){
        document.body.style.cssText = 'overflow: hidden;'
      } else {
        document.body.style.cssText = ' '
      }

  }

  function change_theme_web(){
    var web_change = document.querySelector(".button-theme")

      if (web_change.classList.toggle("is-active")){
        document.body.style.cssText = 'background: white; color: black; transition: .5s;'
      } else {
        document.body.style.cssText = 'background: #24252B; color: white; transition: .5s;'
      }
  }

  return (
    <nav className = "nav-bar">

      <div className = "burger-icon" onClick={activateNav}>
        <IoIosMenu size = "27px" color = "white"/>
      </div>
      <div className = "logo">
        <a href = {"./"}>Ruben C. Arevalo</a>
      </div>
      <div className = "change-theme" onClick={change_theme}>
        <IoPartlySunnyOutline size = "25px" color = "white" id="change-theme-style"/>
      </div>

      <ul className = "nav-list">
        <li><Link to = "/personal-website/">About Me</Link></li>
        <li><Link to = "/personal-website/works">Works</Link></li>
        <li><Link to = "/personal-website/posts">Posts</Link></li>
        <li><Link to = "/personal-website/contact">Contact Me</Link></li>
        <div className = "button">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSu_sZqwO_m42GKlmXKrA30hyTglQQY1N3V2PIcdGc87WbXg/viewform" rel="noopener noreferrer" target="_blank"><IoWarningOutline size="22px" id="report-icon"/>Report</a>
        </div>
        <div className = "button-theme" onClick={change_theme_web}>
          <a href="#change-theme" rel="noopener noreferrer" title="Click twice to activate!"><IoPartlySunnyOutline size="22px" id="report-icon"/>Light/Dark</a>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
