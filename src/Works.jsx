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

import dating_app_work_1 from './images/work_14.png';
import dating_app_work_2 from './images/work_15.png';
import dating_app_work_3 from './images/work_16.png';
import dating_app_work_4 from './images/work_17.png';
import dating_app_work_5 from './videos/Dating Web App Demo (May 2024) - Made with Clipchamp.mp4';

import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'

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
            <br></br>
            <h5 id="works-title" style={{textDecoration: 'underline', textAlign: 'center'}}>Personal Projects</h5>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={work1}
                        alt="Work 1"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>Sample of my CV website, with the image displaying the "Education" section in the site.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={work2}
                        alt="Work 2"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>Sample of my parent's photography business website, which was never release due to operations ceasing due to the COVID-19 pandemic.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={dating_app_work_1}
                        alt="Dating App Work 1"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>A picture depicting my account's profile account settings in my dating web app.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={dating_app_work_2}
                        alt="Dating App Work 2"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>The search page viewed from my account in my dating web app.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={dating_app_work_3}
                        alt="Dating App Work 3"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>Another part of the search page viewed from my account in my dating web app.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={dating_app_work_4}
                        alt="Dating App Work 4"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>The profile page of a user's account in my dating web app that is viewed once the user logs in or navigates to it.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10% '}}>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
                    <h4 style={{ width: '80%', fontWeight: '900' }}>Dating Web App Demo</h4>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'center', zIndex: 2 }}>
                    <video height="450" width="1050" controls controlsList="nodownload" id="works-video" loop autoPlay>
                        <source src={dating_app_work_5} type="video/mp4"></source>
                    </video>
                </Col>
            </Row>
            <br></br>
            <hr></hr>
            <br></br>
            <h5 id="works-title" style={{textDecoration: 'underline', textAlign: 'center'}}>Personal Photography</h5>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={work3}
                        alt="Work 3"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>One of the first nature photography photos I have taken out, with the picture containing one of the palms in my house with the sun setting in the background.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={work4}
                        alt="Work 4"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>Another photo I took of the sky, with another one of the palms I had at home looming over in the photo.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={work5}
                        alt="Work 5"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>Yet another photo I took of the sky, with two palms being shown as opposed to the previous two photos, which contained only one palm each.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={work6}
                        alt="Work 6"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>A photo I took of the sky, with three palms looming over my home.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={work7}
                        alt="Work 7"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>A photo of the sky, with clouds looming in the background along with two palms.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={work8}
                        alt="Work 8"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>A photo of the sky, just before the sun set fully, with palms in the background along with two, separate trails left by planes that passed by.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={work9}
                        alt="Work 9"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>A photo taken from the third floor of one of the buildings of the university I attended from 2019 to 2023.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={work10}
                        alt="Work 10"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>A clear sky's day with two palms in my home hanging in the background.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={work11}
                        alt="Work 11"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>A view of the sky, with clouds hanging above, along with the inclusion of a tree coming from my backyard, where this photo was taken from.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={work12}
                        alt="Work 12"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>A photo of the skyline that I took while I was heading to school during the Fall 2022 semester.</i>
                </Col>
            </Row>
            <Row style={{ marginLeft: '10%', marginRight: '10%' }}>
                <Col>
                    <img
                        className="works-display"
                        src={work13}
                        alt="Work 13"
                        id="works-image"
                    />
                </Col>
                <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', textAlign: 'left' }}>
                    <i style={{ width: '80%' }}>A photo of the skyline taken during a beautiful, sunny day, with clouds in the background, in addition to three or four palm trees, the latter of which is partially shown on the right.</i>
                </Col>
            </Row>
        </div>
    );
}

export default Works;