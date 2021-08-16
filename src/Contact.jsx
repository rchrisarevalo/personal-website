import React from "react";
import Nav from "./Nav.jsx";
import NewFooter from "./NewFooter.jsx";

const Contact = () => (
    <div className = "contact">
        <Nav/>
        <div className = "contact-info">
            <br></br>
            <h1>Contact Information</h1>
            <p>
                If you have any questions, please feel free to contact me through my email, <a href="mailto:rubenplayer105@gmail.com" id="contact-link"><b>rubenplayer105@gmail.com</b></a>,
                LinkedIn, or Github. The links for both my LinkedIn and Github profiles are located on the footer below.
            </p>
            <p>
                If you have any complaints or issues with this website, please feel free to click on the
                report button on the web version. On the mobile version, click on the three bars on the
                top left of the header to access the navigation menu, and click on the report button.
            </p>
            <p>
                I will most likely respond to complaints/reports in about 3-5 days. If I am super available
                (meaning if I literally have nothing to do), then I might respond to your issue much earlier 
                than anticipated response time provided above.
            </p>
            <p>
                Have a nice day, everyone!
            </p>
        </div>
        <NewFooter/>
    </div>
);

export default Contact;