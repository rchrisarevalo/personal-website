import React from 'react';

const ClosedWeb = () => {
    return (

        <div className="error-container">
            <div className="error-message">
                <h1>Happy Thanksgiving, everyone!</h1>
                <p>
                    As part of a new website operating policy, I have deciced to close this website
                    for today due to the holidays. If you have any questions, please feel free to
                    contact me by clicking the "Contact Me" button below the description.
                </p>
                <p>
                    This website will re-open on November 26th, 12:00 AM.
                </p>
                <br />
                <p>Have a wonderful holiday and stay safe!</p>
                <br/>
                <div className="button" id="mobile-remove">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1nR8hmOAMRTU3fDZsbLRGkjzKvA9uRLZW_YdvsyBEctqDOw/viewform" target="_blank" rel="noreferrer">Contact Me</a>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default ClosedWeb;