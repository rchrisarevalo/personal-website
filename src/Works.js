import React from "react";
import thumb1 from './images/cv-website-education.png';
import thumb2 from './images/look-website.png';
import skyshot1 from './images/sky-september-2020.jpg';
import skyshot2 from './images/sky-palm-shot-november-2020.jpg'

const Works = () => (
    <div className = "works">
        <h1>Works</h1>
        <p className = "work-description">
            While I enjoy certain hobbies, such as taking photos in the outdoors, I am mostly proud
            of creating software projects. These projects have allowed me to develop my programming
            skills, and I am going to try to improve as much as I can.
        </p>
        <div className = "works-1">
            <h3><i>Curriculum Vitae (CV) Website</i></h3>
            <img src={thumb1} alt="work-1"></img>
            <h4>Created on: June 2021</h4>
            <h4>Online status: Active</h4>
        </div>
        <div className = "works-2">
            <h3><i>Look Video and Photography Website</i></h3>
            <img src={thumb2} alt="work-2"></img>
            <h4>Created on: July 2020</h4>
            <h4>Online status: Not Active</h4>
        </div>
        <div className = "works-3">
            <h3><i>A Sky and Palm Background</i></h3>
            <img src={skyshot1} alt="work-2"></img>
            <h4>Taken on: September 2020</h4>
        </div>
        <div className = "works-4">
            <h3><i>Clear Sky with a Palm Background</i></h3>
            <img src={skyshot2} alt="work-2"></img>
            <h4>Taken on: November 2020</h4>
        </div>
        <div className = "work-update">
            
        </div>
    </div>
);

export default Works;