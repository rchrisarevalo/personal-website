import React from "react";
import thumb1 from './images/cv-website-education.png';
import thumb2 from './images/look-website.png';
import skyshot1 from './images/sky-september-2020.jpg';
import skyshot2 from './images/sky-palm-shot-november-2020.jpg';
import skyshot3 from './images/sky-palm-march-2021.jpg';
import skyshot4 from './images/sky-palm-july2021.jpg';

const Works = () => {
    return (
        <div className="works-container">
            <h1 id="works-title">Works</h1>
            <p id="work-description">
                While I enjoy certain hobbies, such as taking photos in the outdoors, I am mostly proud
                of creating software projects. These projects have allowed me to develop my programming
                skills, and I am going to try to improve as much as I can.
            </p>
            <div className="works-1">
                <h3><i>Curriculum Vitae (CV) Website</i></h3>
                <img src={thumb1} alt="work-1"></img>
            </div>
            <div className="works-2">
                <h3><i>Look Video and Photography Website</i></h3>
                <img src={thumb2} alt="work-2"></img>
            </div>
            <div className="works-3">
                <h3><i>A Sky and Palm Background</i></h3>
                <img src={skyshot1} alt="work-3"></img>
            </div>
            <div className="works-4">
                <h3><i>Clear Sky with a Palm Background (November 2021)</i></h3>
                <img src={skyshot2} alt="work-4"></img>
            </div>
            <div className="works-5">
                <h3><i>Clear Sky with a Palm Background (March 2021)</i></h3>
                <img src={skyshot3} alt="work-5"></img>
            </div>
            <div className="works-6">
                <h3><i>Clear Sky with a Palm Background (AGAIN) (July 2021)</i></h3>
                <img src={skyshot4} alt="work-6"></img>
            </div>
        </div>
    );
}

export default Works;