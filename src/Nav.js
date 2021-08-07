import React from "react";
import { IoWarningOutline } from "react-icons/io5";
import { IoPartlySunnyOutline } from "react-icons/io5";

const Nav = () => {

 function change_theme(){
    var change_background = document.querySelector(".change-theme")
    change_background.addEventListener("click", () => {

      if (change_background.classList.toggle("active") === true){
        document.body.style.cssText = 'background: white; color: black; transition: .5s;'
      } else {
        document.body.style.cssText = 'background: #24252B; color: white; transition: .5s;'
      }

    });
  }

  function change_theme_web(){
    var web_change = document.querySelector(".button-theme")
    web_change.addEventListener("click", () => {

      if (web_change.classList.toggle("is-active")){
        document.body.style.cssText = 'background: white; color: black; transition: .5s;'
      } else {
        document.body.style.cssText = 'background: #24252B; color: white; transition: .5s;'
      }

    });
  }

  return (
    <nav className = "nav-bar">
      <div className = "change-theme" onClick={change_theme}>
        <IoPartlySunnyOutline size = "25px" color = "white"/>
      </div>
      <div className = "logo">
        <a href={"./home"}>Ruben C. Arevalo</a>
      </div>
      <div className = "mobile-report">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSu_sZqwO_m42GKlmXKrA30hyTglQQY1N3V2PIcdGc87WbXg/viewform" rel="noopener noreferrer" target="_blank" title="Report an issue"><IoWarningOutline size="25px"/></a>
      </div>
      <ul className = "nav-list">
        <li><a href="#about">About Me</a></li>
        <li><a href="#work">Works</a></li>
        <li><a href="#contacts">Contact Me</a></li>
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
