import React from "react";
import thumb1 from './images/cv-website-education.png';
import thumb2 from './images/look-website.png';
import skyshot1 from './images/sky-september-2020.jpg';
import skyshot2 from './images/sky-palm-shot-november-2020.jpg'

function displayNotif(){
    var e = document.getElementById("warning-notif")
    e.classList.toggle("active")
    setTimeout(function(){
        e.classList.remove("active")
    }, 3000)
}

const Works = () => {

    return (
        <div className = "works-container">
            <h1 id = "works-title">Works</h1>
            <p id = "work-description">
                While I enjoy certain hobbies, such as taking photos in the outdoors, I am mostly proud
                of creating software projects. These projects have allowed me to develop my programming
                skills, and I am going to try to improve as much as I can.
            </p>
            <div className = "works-1" onClick={displayNotif}>
                <h3><i>Curriculum Vitae (CV) Website</i></h3>
                <img src={thumb1} alt="work-1"></img>
            </div>
            <div className = "works-2" onClick={displayNotif}>
                <h3><i>Look Video and Photography Website</i></h3>
                <img src={thumb2} alt="work-2"></img>
            </div>
            <div className = "works-3" onClick={displayNotif}>
                <h3><i>A Sky and Palm Background</i></h3>
                <img src={skyshot1} alt="work-2"></img>
            </div>
            <div className = "works-4" onClick={displayNotif}>
                <h3><i>Clear Sky with a Palm Background</i></h3>
                <img src={skyshot2} alt="work-2"></img>
            </div>
        </div>
    );
}

export default Works;