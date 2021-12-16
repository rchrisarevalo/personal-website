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
            <h1 id="works-title">Portfolio</h1>
            <p id="work-description">
                I enjoy doing certain hobbies whenever I have free time during the day. I have also taken some
                pictures in the outdoors during a sunny day and created other projects outside from
                photography, such as developing websites for a local photography business and a CV website
                for myself. These pictures represent some of the things I have done so far in my free time,
                and I enjoyed doing it (and still continue to do so).
            </p>
            <div className="works-1">
                <img src={thumb1} alt="work-1"></img>
            </div>
            <div className="works-2">
                <img src={thumb2} alt="work-2"></img>
            </div>
            <div className="works-3">
                <img src={skyshot1} alt="work-3"></img>
            </div>
            <div className="works-4">
                <img src={skyshot2} alt="work-4"></img>
            </div>
            <div className="works-5">
                <img src={skyshot3} alt="work-5"></img>
            </div>
            <div className="works-6">
                <img src={skyshot4} alt="work-6"></img>
            </div>
        </div>
    );
}

export default Works;