import React from "react";
import { Helmet } from "react-helmet";

import Nav from "../Nav.jsx";
import NewFooter from "../NewFooter.jsx";

const Contact = () => (
    <div className="contact">
        <Helmet>
            <title>Ruben C. Arevalo - Personal Website - Contact Me</title>
        </Helmet>
        <Nav />
        <div className="notification" id="warning-notif-2">
            <div className="notification-content" id="notif-2">
                <p>Redirecting to contact form page...</p>
            </div>
        </div>
        <div className="contact-info">
            <br></br>
            <h1>Contact Information</h1>
            <br></br>
            <p>
                You can now contact me by clicking the "Contact Me" button the navigation bar on the web version of
                this site. On the mobile version, you can click on the paper airplane icon to access the contact form
                page to leave a message.
            </p>
            <p>
                If you have any questions, please feel free to contact me through my email, <a href="mailto:rubenplayer105@gmail.com" id="contact-link"><b>rubenplayer105@gmail.com</b></a>,
                LinkedIn, or Github. The links for both my LinkedIn and Github profiles are located on the footer below.
            </p>
            <p>
                I will most likely respond to sent messages in about 3-5 days. If I am super available
                (meaning if I literally have nothing to do), then I might respond to your issue much earlier
                than anticipated response time provided above.
            </p>
            <p>
                <strong>
                    Since the footer is not being pushed to the bottom of the page like any other regular website would,
                    I am going to fill this section with a bunch of filler until the footer is pushed to the bottom. You
                    can ignore this particular section of the page since it's just me typing a bunch of nonsense here.
                    But anyways...
                </strong>
            </p>
            <p>
                <strong>
                    I am going to include my official contact info here, along with a few references:
                </strong>
            </p>
            <p>
                Email: <a href="mailto:rubenplayer105@gmail.com" id="contact-link">rubenplayer105@gmail.com</a>
            </p>
            <p>
                Social media: <a href="https://github.com/rchrisarevalo" id="contact-link">Github</a> and <a href="https://www.linkedin.com/in/ruben-arevalo-4944251b7/" id="contact-link">Linkedin</a>
            </p>
            <p>
                Have a nice day, everyone!
            </p>
        </div>
        <NewFooter />
    </div>
);

export default Contact;