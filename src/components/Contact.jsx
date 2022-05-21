import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';

import ContactForm from './ContactForm.jsx';
import NavContact from '../NavContact.jsx';
import NewFooter from '../NewFooter.jsx';

import nprogress from "nprogress";
import "nprogress/nprogress.css";

const Contact = () => {

    useEffect(() => {
        nprogress.configure({minimum: 0.1, showSpinner: false, easing: 'ease', speed: 800, trickleSpeed: 200});
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
                        spam or other potentially dangerous messages. The form has reCAPTCHA set up
                        to prevent these types of incidents from occurring on a frequent basis.
                    </i>
                    <br></br>
                    <br></br>
                    <i id="contact-page-description">
                        Once again, if you have any concerns, feel free to send a message!
                    </i>
                </div>
                <br></br>
                <br></br>
                <ContactForm />
                <br></br>
                <br></br>
                <br></br>
                <NewFooter />
            </div>

        </div>
    )
}

export default Contact;