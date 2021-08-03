import React from "react";
import { FaRegFlag } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa";

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
    var web_change = document.querySelector(".theme-changer-web")
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
        <FaCloudSun size = "25px" color = "white"/>
      </div>
      <div className = "logo">
        <a href={"./"}>Ruben C. Arevalo</a>
      </div>
      <div className = "mobile-report">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSu_sZqwO_m42GKlmXKrA30hyTglQQY1N3V2PIcdGc87WbXg/viewform" rel="noopener noreferrer" target="_blank" title="Report an issue"><FaRegFlag size="25px"/></a>
      </div>
      <ul className = "nav-list">
        <li><a href="#about">About Me</a></li>
        <li><a href="#work">Works</a></li>
        <li><a href="#contacts">Contact Me</a></li>
        <div className = "button">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeSu_sZqwO_m42GKlmXKrA30hyTglQQY1N3V2PIcdGc87WbXg/viewform" rel="noopener noreferrer" target="_blank">Report</a>
        </div>
        <div className = "theme-changer-web" onClick={change_theme_web}>
          <FaCloudSun size = "25px" color="white"/>
        </div>
      </ul>
    </nav>
  );
}

export default Nav;
