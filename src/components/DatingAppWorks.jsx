import React from "react";

import dating_app_work_1 from '../images/work_14.png';
import dating_app_work_2 from '../images/work_15.png';
import dating_app_work_3 from '../images/work_16.png';
import dating_app_work_4 from '../images/work_17.png';

import Carousel from 'react-bootstrap/Carousel'

const DatingAppWorksDisplay = () => {
    return (
        <div className="dating-app-works-container">
            <h1 id="works-title" data-aos="fade-down">Dating App Pictures</h1>
            <p id="work-description" data-aos="fade-right" data-aos-delay="500">
                As promised, here are some screenshots of the dating app I am currently
                working on.
            </p>
            {((localStorage.getItem("d_l_mode") === "light" || localStorage.getItem("d_l_mode") === "default_light") || (localStorage.getItem("light_media_theme") === "true")) &&
                <>
                    <Carousel indicators={false} variant="light">
                        <Carousel.Item interval={5000}>
                            <img
                                className="dating-app-works-display"
                                src={dating_app_work_1}
                                alt="Work 1"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="dating-app-works-display"
                                src={dating_app_work_2}
                                alt="Work 2"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="dating-app-works-display"
                                src={dating_app_work_3}
                                alt="Work 3"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="dating-app-works-display"
                                src={dating_app_work_4}
                                alt="Work 4"
                            />
                        </Carousel.Item>
                    </Carousel>
                </>
            }
            {((localStorage.getItem("d_l_mode") === "dark" || localStorage.getItem("d_l_mode") === "default_dark") || (localStorage.getItem("dark_media_theme") === "true")) &&
                <>
                    <Carousel indicators={false} variant="light">
                        <Carousel.Item interval={5000}>
                            <img
                                className="dating-app-works-display"
                                src={dating_app_work_1}
                                alt="Work 1"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="dating-app-works-display"
                                src={dating_app_work_2}
                                alt="Work 2"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="dating-app-works-display"
                                src={dating_app_work_3}
                                alt="Work 3"
                            />
                        </Carousel.Item>
                        <Carousel.Item interval={5000}>
                            <img
                                className="dating-app-works-display"
                                src={dating_app_work_4}
                                alt="Work 4"
                            />
                        </Carousel.Item>
                    </Carousel>
                </>
            }
        </div>
    )
}

export default DatingAppWorksDisplay;