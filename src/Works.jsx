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

import { Gallery } from 'react-grid-gallery';
import Carousel from 'react-bootstrap/Carousel'

const gallery_images = [
    {
        src: work1,
        width: 2220,
        height: 2000,
        caption: "Test image"
    },
    {
        src: work2,
        width: 2220,
        height: 2000,
        caption: "Test image"
    },
    {
        src: work3,
        width: 2220,
        height: 2000,
        caption: "Test image"
    },
    {
        src: work4,
        width: 2220,
        height: 2000,
        caption: "Test image"
    },
    {
        src: work5,
        width: 2220,
        height: 2000,
        caption: "Test image"
    },
    {
        src: work6,
        width: 2220,
        height: 2000,
        caption: "Test image"
    },
    {
        src: work7,
        width: 2220,
        height: 2000,
        caption: "Test image"
    },
    {
        src: work8,
        width: 2220,
        height: 2000,
        caption: "Test image"
    },
    {
        src: work9,
        width: 2220,
        height: 2000,
        caption: "Test image"
    },
    {
        src: work10,
        width: 2220,
        height: 2000,
        caption: "Test image"
    },
    {
        src: work11,
        width: 2220,
        height: 2000,
        caption: "Test image"
    }
]

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
            <Carousel indicators={false}>
                <Carousel.Item interval={5000}>
                    <img
                        className="works-display"
                        src={work1}
                        alt="Work 1"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="works-display"
                        src={work2}
                        alt="Work 2"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="works-display"
                        src={work3}
                        alt="Work 3"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="works-display"
                        src={work4}
                        alt="Work 4"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="works-display"
                        src={work5}
                        alt="Work 5"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="works-display"
                        src={work6}
                        alt="Work 6"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="works-display"
                        src={work7}
                        alt="Work 7"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="works-display"
                        src={work8}
                        alt="Work 8"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="works-display"
                        src={work9}
                        alt="Work 9"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="works-display"
                        src={work10}
                        alt="Work 10"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="works-display"
                        src={work11}
                        alt="Work 11"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="works-display"
                        src={work12}
                        alt="Work 12"
                    />
                </Carousel.Item>
                <Carousel.Item interval={5000}>
                    <img
                        className="works-display"
                        src={work13}
                        alt="Work 13"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Works;