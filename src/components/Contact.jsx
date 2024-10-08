import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

import ContactForm from './ContactForm.jsx';
import Nav from '../Nav.jsx';
import NewFooter from '../NewFooter.jsx';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import nprogress from "nprogress";
import "nprogress/nprogress.css";

const Contact = () => {

    useEffect(() => {
        nprogress.configure({ minimum: 0.1, showSpinner: false, easing: 'ease', speed: 800, trickleSpeed: 200 });
        nprogress.start();
        nprogress.set(0.5);
        nprogress.inc(0.5);
        nprogress.done(true);

        window.scrollTo(0, 0);
    }, []);

    const [currentMode, setCurrentMode] = useState(localStorage.getItem("d_l_mode"))
    const [darkMediaMode, setDarkMediaMode] = useState(localStorage.getItem("dark_media_theme"))
    const [lightMediaMode, setLightMediaMode] = useState(localStorage.getItem("light_media_theme"))

    var current_theme = localStorage.getItem("d_l_mode")

    useEffect(() => {
        setCurrentMode(localStorage.getItem("d_l_mode"))
        setDarkMediaMode(darkMediaMode)
        setLightMediaMode(lightMediaMode)
    }, [current_theme, darkMediaMode, lightMediaMode])

    var route = useLocation().pathname
    localStorage.setItem("current_link", `${route}`)

    if (currentMode === "default_dark" || currentMode === "dark" || (darkMediaMode === "true" && lightMediaMode === "false")) {
        return (
            <div className="contact-page-container">
                <Helmet>
                    <title>Ruben C. Arevalo - Personal Website - Contact Form</title>
                </Helmet>
                <Nav />
                <div className="contact-page-form">
                    <h1 id="contact-title">Contact Form</h1>
                    <br></br>
                    <br></br>
                    <Row id="contact-steps-row">
                        <div>
                            <Row id="contact-steps-row">
                                <Col xs>
                                    <figure id="contact-steps">
                                        <div id="contact-steps-container">
                                            <h1><u>WHAT TO DO</u></h1>
                                            <br></br>
                                            <li>When contacting me, <b>please state your name and occupation</b> so that I can know who I am talking to.</li>
                                            <br></br>
                                            <li>Feel free to write me a message! However, please state it as clearly as you can. The reason for this is because vague messages can cause me, like others, to be confused, which will leave me unable to properly comprehend the details of your message.</li>
                                            <br></br>
                                            <li>Ask any questions or concerns you might have about the website or the content! I am happy to answer to answer them as best as I can to address your concerns.</li>
                                        </div>
                                    </figure>
                                </Col>
                                <Col xs>
                                    <figure id="contact-steps">
                                        <div id="contact-steps-container">
                                            <h1><u>WHAT NOT TO DO</u></h1>
                                            <br></br>
                                            <li>Please do <b>NOT</b> try and attempt to publish messages with the malicious intent to cause trouble. Such messages will not be read and will be deleted.</li>
                                            <br></br>
                                            <li>Furthermore, messages of a discriminatory and/or violent nature are <b>PROHIBITED</b> and will not receive a reply whatsoever.</li>
                                            <br></br>
                                            <li>Do not try to send more than 10 messages a day unless it is a really long message that exceeds the character limit and requires you to enter another message.</li>
                                        </div>
                                    </figure>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                    <br></br>
                    <div className="contact-description">
                        <i id="contact-page-description">
                            If you have any questions, complaints, or other concerns you might like to
                            share, feel free to fill out the form below! However, do <b>NOT</b> attempt to send
                            spam or other potentially dangerous messages.
                        </i>
                        <br></br>
                        <br></br>
                        <i id="contact-page-description">
                            Please fill out all the required fields. Otherwise, your message will not be sent when you
                            attempt to submit the form.
                        </i>
                    </div>
                    <br></br>
                    <br></br>
                    <ContactForm />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <NewFooter />
                </div>
            </div>
        )
    } else if (currentMode === "default_light" || currentMode === "light" || currentMode === "halloween" || (darkMediaMode === "false" && lightMediaMode === "true")) {
        return (
            <div className="contact-page-container">
                <Helmet>
                    <title>Ruben C. Arevalo - Personal Website - Contact Form</title>
                </Helmet>
                <Nav />
                <div className="contact-page-form">
                    <h1 id="contact-title">Contact Form</h1>
                    <br></br>
                    <br></br>
                    <Row id="contact-steps-row">
                        <div>
                            <Row id="contact-steps-row">
                                <Col xs>
                                    <figure id="contact-steps-dark">
                                        <div id="contact-steps-container">
                                            <h1><u>WHAT TO DO</u></h1>
                                            <br></br>
                                            <li>When contacting me, <b>please state your name and occupation</b> so that I can know who I am talking to.</li>
                                            <br></br>
                                            <li>Feel free to write me a message! However, please state it as clearly as you can. The reason for this is because vague messages can cause me, like others, to be confused, which will leave me unable to properly comprehend the details of your message.</li>
                                            <br></br>
                                            <li>Ask any questions or concerns you might have about the website or the content! I am happy to answer to answer them as best as I can to address your concerns.</li>
                                        </div>
                                    </figure>
                                </Col>
                                <Col xs>
                                    <figure id="contact-steps-dark">
                                        <div id="contact-steps-container">
                                            <h1><u>WHAT NOT TO DO</u></h1>
                                            <br></br>
                                            <li>Please do <b>NOT</b> try and attempt to publish messages with the malicious intent to cause trouble. Such messages will not be read and will be deleted.</li>
                                            <br></br>
                                            <li>Furthermore, messages of a discriminatory and/or violent nature are <b>PROHIBITED</b> and will not receive a reply whatsoever.</li>
                                            <br></br>
                                            <li>Do not try to send more than 10 messages a day unless it is a really long message that exceeds the character limit and requires you to enter another message.</li>
                                        </div>
                                    </figure>
                                </Col>
                            </Row>
                        </div>
                    </Row>
                    <br></br>
                    <div className="contact-description">
                        <i id="contact-page-description">
                            If you have any questions, complaints, or other concerns you might like to
                            share, feel free to fill out the form below! However, do <b>NOT</b> attempt to send
                            spam or other potentially dangerous messages.
                        </i>
                        <br></br>
                        <br></br>
                        <i id="contact-page-description">
                            Please fill out all the required fields. Otherwise, your message will not be sent when you
                            attempt to submit the form.
                        </i>
                    </div>
                    <br></br>
                    <br></br>
                    <ContactForm />
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <NewFooter />
                </div>
            </div>
        )
    }
}

export default Contact;