import React, { useState } from "react";
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

import Modal from 'react-bootstrap/Modal';

function handleImageClick()
{
    var work_image = document.getElementById("work")

    work_image.style.pointerEvents = 'none'
}

const Works = () => {

    const [showImg1, setShowImg1] = useState(false);
    const [showImg2, setShowImg2] = useState(false);
    const [showImg3, setShowImg3] = useState(false);
    const [showImg4, setShowImg4] = useState(false);
    const [showImg5, setShowImg5] = useState(false);
    const [showImg6, setShowImg6] = useState(false);
    const [showImg7, setShowImg7] = useState(false);
    const [showImg8, setShowImg8] = useState(false);
    const [showImg9, setShowImg9] = useState(false);
    const [showImg10, setShowImg10] = useState(false);
    const [showImg11, setShowImg11] = useState(false);

    const handleClose1 = () => setShowImg1(false);
    const handleOpen1 = () => setShowImg1(true);

    const handleClose2 = () => setShowImg2(false);
    const handleOpen2 = () => setShowImg2(true);

    const handleClose3 = () => setShowImg3(false);
    const handleOpen3 = () => setShowImg3(true);

    const handleClose4 = () => setShowImg4(false);
    const handleOpen4 = () => setShowImg4(true);

    const handleClose5 = () => setShowImg5(false);
    const handleOpen5 = () => setShowImg5(true);

    const handleClose6 = () => setShowImg6(false);
    const handleOpen6 = () => setShowImg6(true);

    const handleClose7 = () => setShowImg7(false);
    const handleOpen7 = () => setShowImg7(true);

    const handleClose8 = () => setShowImg8(false);
    const handleOpen8 = () => setShowImg8(true);

    const handleClose9 = () => setShowImg9(false);
    const handleOpen9 = () => setShowImg9(true);

    const handleClose10 = () => setShowImg10(false);
    const handleOpen10 = () => setShowImg10(true);

    const handleClose11 = () => setShowImg11(false);
    const handleOpen11 = () => setShowImg11(true);

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
                <img src={work1} alt="work-1" onClick={handleOpen1} onContextMenu={handleOpen1}></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={work2} alt="work-2" onClick={handleOpen2} onContextMenu={handleOpen2}></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="500">
                <img src={work3} alt="work-3" onClick={handleOpen3} onContextMenu={handleOpen3}></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="600">
                <img src={work4} alt="work-4" onClick={handleOpen4} onContextMenu={handleOpen4}></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="600">
                <img src={work5} alt="work-5" onClick={handleOpen5} onContextMenu={handleOpen5}></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="600">
                <img src={work6} alt="work-6" onClick={handleOpen6} onContextMenu={handleOpen6}></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="700">
                <img src={work7} alt="work-7" onClick={handleOpen7} onContextMenu={handleOpen7}></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="700">
                <img src={work8} alt="work-8" onClick={handleOpen8} onContextMenu={handleOpen8}></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="700">
                <img src={work9} alt="work-9" onClick={handleOpen9} onContextMenu={handleOpen9}></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="800">
                <img src={work10} alt="work-10" onClick={handleOpen10} onContextMenu={handleOpen10}></img>
            </div>
            <div className="works-display" data-aos="fade" data-aos-delay="800">
                <img src={work11} alt="work-11" onClick={handleOpen11} onContextMenu={handleOpen11}></img>
            </div>
        </div>
    );
}

export default Works;