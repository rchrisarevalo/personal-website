import React from "react";
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

import dating_app_work_1 from './images/work_14.png';
import dating_app_work_2 from './images/work_15.png';
import dating_app_work_3 from './images/work_16.png';
import dating_app_work_4 from './images/work_17.png';

import pw_work_1 from './images/pw_work_1.png';
import pw_work_2 from './images/pw_work_2.png';
import pw_work_3 from './images/pw_work_3.png';
import pw_work_4 from './images/pw_work_4.png';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Carousel } from "react-bootstrap";
import MediaQuery from "react-responsive";

const Works = () => {
    {
        /* 
            The carousel component from the React Bootstrap library 
            and documentation has been used for this page.
             
            Reference used to help build this page: 
            https://react-bootstrap.netlify.app/docs/components/carousel/
        */
    }
    return (
        <div className="works-container">
            <h1 id="works-title" data-aos="fade-down">Portfolio</h1>
            <p id="work-description" data-aos="fade-right" data-aos-delay="500">
                I enjoy doing certain hobbies whenever I have free time during the day. I have also taken some
                pictures in the outdoors during a sunny day and created other projects outside from
                photography, like developing website such as this one and my CV website. These pictures represent
                some of the things I have done so far in my free time, and I enjoyed doing it (and still continue to do so).
            </p>
            <br></br>
            <MediaQuery minWidth={1024}><h5 id="works-title" style={{ textDecoration: 'underline', textAlign: 'left', marginLeft: '10%', marginRight: '10%' }}>Personal Projects</h5></MediaQuery>
            <MediaQuery maxWidth={1024}><h5 id="works-title" style={{ textDecoration: 'underline', textAlign: 'left' }}>Personal Projects</h5></MediaQuery>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <Row>
                        <header style={{ width: '80%', paddingTop: '20px', paddingBottom: '20px' }}><b><i>Dating Web App</i></b></header>
                        <ul>
                            <li>Developing a dating web app with React.js, CSS, and TypeScript, along with FastAPI, Express.js and PostgreSQL for backend processes.</li>
                            <li>Creating a design that will emphasize self-esteem and lay the foundation for a successful relationship.</li>
                            <li>Designing a matching algorithm that matches people based on attributes, such as location and bio, with planned future refinements that will improve the user experience with the selection of 10 random matches.</li>
                        </ul>
                    </Row>
                </Col>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={dating_app_work_1}
                                alt="Dating App Work 1"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={dating_app_work_2}
                                alt="Dating App Work 2"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={dating_app_work_3}
                                alt="Dating App Work 3"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={dating_app_work_4}
                                alt="Dating App Work 4"
                                id="works-image"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <Row>
                        <header style={{ width: '80%', paddingTop: '20px', paddingBottom: '20px' }}><b><i>Personal Website</i></b></header>
                        <ul>
                            <li>Created a website using React.js as the main framework while also using CSS and React Bootstrap to stylize the UI.</li>
                            <li>Integrated a RESTful API with FastAPI to handle and display announcements on website, with 3 of the most recent ones displayed in the 'About Me' page.</li>
                            <li>Designed a portfolio page that displays 7 samples from various personal projects in addition to 11 samples of photos taken as part of personal hobbies.</li>
                        </ul>
                    </Row>
                </Col>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={pw_work_1}
                                alt="Personal Website Work 1"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={pw_work_2}
                                alt="Personal Website Work 2"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={pw_work_3}
                                alt="Personal Website Work 3"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={pw_work_4}
                                alt="Personal Website Work 4"
                                id="works-image"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <br></br>
            <hr></hr>
            <br></br>
            <MediaQuery minWidth={1024}><h5 id="works-title" style={{ textDecoration: 'underline', textAlign: 'left', marginLeft: '10%', marginRight: '10%' }}>Personal Photography</h5></MediaQuery>
            <MediaQuery maxWidth={1024}><h5 id="works-title" style={{ textDecoration: 'underline', textAlign: 'left' }}>Personal Photography</h5></MediaQuery>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <Row>
                        <ul>
                            <li>Took photos of nature during my personal time.</li>
                            <li>Photos were taken throughout various times of each day.</li>
                        </ul>
                    </Row>
                </Col>
                <Col>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={work3}
                                alt="Work 3"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={work4}
                                alt="Work 4"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={work5}
                                alt="Work 5"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={work6}
                                alt="Work 6"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={work7}
                                alt="Work 7"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={work8}
                                alt="Work 8"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={work9}
                                alt="Work 9"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={work10}
                                alt="Work 10"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={work11}
                                alt="Work 11"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={work12}
                                alt="Work 12"
                                id="works-image"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="works-display"
                                src={work13}
                                alt="Work 13"
                                id="works-image"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
        </div>
    );
}

export default Works;