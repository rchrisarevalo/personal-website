import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import ContactForm from './ContactForm.jsx';
import NavContact from '../NavContact.jsx';
import NewFooter from '../NewFooter.jsx';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

import nprogress from "nprogress";
import "nprogress/nprogress.css";

var current_mode = localStorage.getItem("d_l_mode")
var dark_media_mode = localStorage.getItem("dark_media_theme")
var light_media_mode = localStorage.getItem("light_media_theme")

const Contact = () => {

    useEffect(() => {
        nprogress.configure({ minimum: 0.1, showSpinner: false, easing: 'ease', speed: 800, trickleSpeed: 200 });
        nprogress.start();
        nprogress.set(0.5);
        nprogress.inc(0.5);
        nprogress.done(true);

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="contact-page-container">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Contact Form</title>
            </Helmet>
            <NavContact />
            <div className="contact-page-form">
                <h1 id="contact-title">Contact Form</h1>
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
                <Row id="contact-steps-row">
                    {(current_mode === "default_dark" || current_mode === "dark" || (dark_media_mode === "true" && light_media_mode === "false")) &&
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
                    }
                    {(current_mode === "default_light" || current_mode === "light" || current_mode === "halloween"  || (dark_media_mode === "false" && light_media_mode === "true")) &&
                        <div>
                            <Row id="contact-steps-row">
                                <Col id="contact-steps-col">
                                    <figure id="contact-steps-dark">
                                        <div id="contact-steps-container">
                                            <h1><u>WHAT TO DO</u></h1>
                                            <br></br>
                                            <li>When contacting me, <b>please state your name and occupation</b> so that I can know who I am talking to.</li>
                                            <br></br>
                                            <li>Feel free to write me a message! However, please state it as clearly as you can. The reason for this is because vague messages can cause me, like others, to be confused, which will leave me unable to properly comprehend the details of your message.</li>
                                            <br></br>
                                            <li>Ask any questions or concerns you might have about the website or the content! I am happy to answer to answer them as best as I can to address your concerns..</li>
                                        </div>
                                    </figure>
                                </Col>
                                <Col id="contact-steps-col">
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
                    }
                </Row>
                <br></br>
                <br></br>
                <br></br>
                <NewFooter />
            </div>

        </div>
    )
}

export default Contact;