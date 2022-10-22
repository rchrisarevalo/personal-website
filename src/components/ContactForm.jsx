import React, { useEffect } from 'react';
import { IoSendOutline } from 'react-icons/io5';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import nprogress from "nprogress";
import "nprogress/nprogress.css";

var total_char_counter = 360
var msg_text;
var char_counter_text;
var current_char_counter = 0;

var current_mode = localStorage.getItem("d_l_mode")
var dark_media_mode = localStorage.getItem("dark_media_theme")
var light_media_mode = localStorage.getItem("light_media_theme")

function charCounter() {
    msg_text = document.getElementById("msg_txt").value
    char_counter_text = document.getElementById("char-counter")
    current_char_counter = total_char_counter - msg_text.toString().length

    if (msg_text !== "") {
        char_counter_text.innerHTML = [`<br/><b>You have ${current_char_counter} characters left.</b>`]

        if (current_char_counter === 0) {
            char_counter_text.innerHTML = [`<br/><b>You ran out of characters!</b>`]
        }
    }
    else {
        char_counter_text.innerHTML = [``]
    }
}

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
            {(current_mode === "default_dark" || current_mode === "dark" || (dark_media_mode === "true" && light_media_mode === "false")) &&
                <form
                    action="https://formspree.io/f/mayvaojd"
                    method="POST"
                    id="contact-form"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    onChange={charCounter}
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
                            <p>Please enter your first name:</p>
                        </label>
                        <br></br>
                        <input type="text" name="first_name" autocomplete="off" size="35" maxlength="40" required></input>
                        <br></br>
                        <br></br>
                        <label>
                            <p>If applicable, enter your middle name:</p>
                        </label>
                        <br></br>
                        <input type="text" name="middle_name" autocomplete="off" size="35" maxlength="40" required></input>
                        <br></br>
                        <br></br>
                        <label>
                            <p>Please enter your last name:</p>
                        </label>
                        <br></br>
                        <input type="text" name="last_name" autocomplete="off" size="35" maxlength="40" required></input>
                        <br></br>
                        <br></br>
                        <label>
                            <p>Type your message (360 character limit):</p>
                        </label>
                        <br></br>
                        <textarea name="message" id="msg_txt" autocomplete="off" rows="10" cols="47" maxlength="360" required></textarea>
                        <br></br>
                        <label id="char-counter"></label>
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
            }
            {(current_mode === "default_light" || current_mode === "light" || current_mode === "halloween" || (dark_media_mode === "false" && light_media_mode === "true")) &&
                <form
                    action="https://formspree.io/f/mayvaojd"
                    method="POST"
                    id="contact-form-dark"
                    data-aos="fade-up"
                    data-aos-delay="500"
                    onChange={charCounter}
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
                            <p>Please enter your first name:</p>
                        </label>
                        <br></br>
                        <input type="text" name="first_name" autocomplete="off" size="35" maxlength="40" required></input>
                        <br></br>
                        <br></br>
                        <label>
                            <p>If applicable, enter your middle name:</p>
                        </label>
                        <br></br>
                        <input type="text" name="middle_name" autocomplete="off" size="35" maxlength="40" required></input>
                        <br></br>
                        <br></br>
                        <label>
                            <p>Please enter your last name:</p>
                        </label>
                        <br></br>
                        <input type="text" name="last_name" autocomplete="off" size="35" maxlength="40" required></input>
                        <br></br>
                        <br></br>
                        <label>
                            <p>Type your message (360 character limit):</p>
                        </label>
                        <br></br>
                        <textarea name="message" id="msg_txt" autocomplete="off" rows="10" cols="47" maxlength="360" required></textarea>
                        <br></br>
                        <label id="char-counter"></label>
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
            }
            <br></br>
        </div>
    )
}

export default ContactForm;