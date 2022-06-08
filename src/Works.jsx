import React from "react";
import thumb1 from './images/cv-website-education.png';
import thumb2 from './images/look-website.png';
import skyshot1 from './images/sky-september-2020.jpg';
import skyshot2 from './images/sky-palm-shot-november-2020.jpg';
import skyshot3 from './images/sky-palm-march-2021.jpg';
import skyshot4 from './images/sky-palm-july2021.jpg';
import skyshot5 from './images/palm tree photo dec 2021.jpg';
import skyshot6 from './images/Dec 5 2021.JPEG';
import skyshot7 from './images/IMG-2012.jpg';
import skyshot8 from './images/SKYFEB2022.JPEG';
import skyshot9 from './images/SKYMAY2022.JPEG';

const Works = () => {
    return (
        <div className="works-container">
            <h1 id="works-title" data-aos="fade-down">Portfolio</h1>
            <p id="work-description" data-aos="fade-right" data-aos-delay="500">
                I enjoy doing certain hobbies whenever I have free time during the day. I have also taken some
                pictures in the outdoors during a sunny day and created other projects outside from
                photography, such as developing websites for a local photography business and a CV website
                for myself. These pictures represent some of the things I have done so far in my free time,
                and I enjoyed doing it (and still continue to do so).
            </p>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={thumb1} alt="work-1"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={thumb2} alt="work-2"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={skyshot1} alt="work-3"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={skyshot2} alt="work-4"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={skyshot3} alt="work-5"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={skyshot4} alt="work-6"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={skyshot5} alt="work-7"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={skyshot6} alt="work-8"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={skyshot7} alt="work-9"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={skyshot8} alt="work-10"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={skyshot9} alt="work-11"></img>
            </div>
        </div>
    );
}

export default Works;