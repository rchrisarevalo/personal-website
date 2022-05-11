import React, { useEffect } from 'react';
import nprogress from "nprogress";
import "nprogress/nprogress.css";

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
                    <h1>Contact Me</h1>
                    <label>
                        <p>Enter your email address:</p>
                    </label>
                    <br></br>
                    <input type="email" name="email" id="contact-email" autocomplete="off" size="30" maxlength="320" required></input>
                    <br></br>
                    <label>
                        <p>Type your message (360 character limit):</p>
                    </label>
                    <br></br>
                    <textarea name="message" id="contact-message" autocomplete="off" rows="3" cols="45" maxlength="360" required></textarea>
                    <br></br>
                    <br></br>
                    <button type="submit">Submit</button>
                    <br></br>
                    <br></br>
                </div>
            </form>
        </div>
    )
}

export default ContactForm;