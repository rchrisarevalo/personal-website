import React from "react";
import work1 from './images/work_1.jpg';
import work2 from './images/work_2.jpg';
import work3 from './images/work_3.jpg';
import work4 from './images/work_4.jpg';
import work5 from './images/work_5.jpg';
import work6 from './images/work_6.jpg';
import work7 from './images/work_7.jpg';
import work8 from './images/work_8.jpg';
import work9 from './images/work_9.jpg';
import work10 from './images/work_10.jpg';
import work11 from './images/work_11.jpg';
import work12 from './images/work_12.jpg';
import work13 from './images/work_13.jpg';

const Works = () => {

    return (
        <div className="works-container">
            <h1 id="works-title" data-aos="fade-down">Portfolio</h1>
            <p id="work-description" data-aos="fade-right" data-aos-delay="500">
                I enjoy doing certain hobbies whenever I have free time during the day. I have also taken some
                pictures in the outdoors during a sunny day and created other projects outside from
                photography, like developing website such as this one and my CV website. These pictures represent
                some of the things I have done so far in my free time, and I enjoyed doing it (and still continue to do so).
            </p>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={work1} alt="work-1"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={work2} alt="work-2"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={work3} alt="work-3"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="600">
                <img src={work4} alt="work-4"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="600">
                <img src={work5} alt="work-5"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="600">
                <img src={work6} alt="work-6"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="700">
                <img src={work7} alt="work-7"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="700">
                <img src={work8} alt="work-8"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="700">
                <img src={work9} alt="work-9"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="800">
                <img src={work10} alt="work-10"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="800">
                <img src={work11} alt="work-11"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="800">
                <img src={work12} alt="work-12"></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="800">
                <img src={work13} alt="work-13"></img>
            </div>
        </div>
    );
}

export default Works;