import React from 'react';

const ContactForm = () => {
    return (
        <div className="form-container">
            {/* This form is from formspree.io, which was given to me when I registered for my account */}
            <form
                action="https://formspree.io/f/mayvaojd"
                method="POST"
                id="contact-form"
            >
                <div className="contact-subcontainer">
                    <h1>Contact Me</h1>
                    <label>
                        <p>Enter your email address:</p>
                    </label>
                    <br></br>
                    <input type="email" name="email" id="contact-email" size="40" autocomplete="off" required></input>
                    <br></br>
                    <label>
                        <p>Type your message (360 character limit):</p>
                    </label>
                    <br></br>
                    <textarea name="message" id="contact-message" autocomplete="off" maxlength="360" required></textarea>
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