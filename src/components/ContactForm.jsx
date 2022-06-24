import React, { useEffect } from 'react';
import { IoSendOutline } from 'react-icons/io5';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import nprogress from "nprogress";
import "nprogress/nprogress.css";

var textValues = document.getElementById("contact-message")

const ContactForm = () => {

    useEffect(() => {
        nprogress.configure({ minimum: 0.1, showSpinner: false, easing: 'ease', speed: 800, trickleSpeed: 200 });
        nprogress.start();
        nprogress.set(0.5);
        nprogress.inc(0.5);
        nprogress.done(true);

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="form-container">
            {/* This form is from formspree.io, which was given to me when I registered for my account */}
            <form
                action="https://formspree.io/f/mayvaojd"
                method="POST"
                id="contact-form"
                data-aos="fade-up"
                data-aos-delay="500"
            >
                <div className="contact-subcontainer">
                    <br></br>
                    <h2><IoSendOutline size="25px" id="contact-form-icon" />Contact Me</h2>
                    <label>
                        <p>Enter your email address:</p>
                    </label>
                    <br></br>
                    <input type="email" name="email" autocomplete="off" size="35" maxlength="320" required></input>
                    <br></br>
                    <br></br>
                    <label>
                        <p>Type your message (360 character limit):</p>
                    </label>
                    <br></br>
                    <textarea name="message" autocomplete="off" rows="3" cols="45" maxlength="360" required></textarea>
                    <br></br>
                    <br></br>
                </div>
                <div className="contact-button-container">
                    <Row id="form-btn-row">
                        <Col id="form-btn-col"><button type="submit">Submit</button></Col>
                        <Col id="form-btn-col"><button type="reset">Clear</button></Col>
                    </Row>
                    <br></br>
                </div>
            </form>
            <br></br>
        </div>
    )
}

export default ContactForm;