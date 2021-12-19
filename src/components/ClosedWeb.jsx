import React from 'react';

const ClosedWeb = () => {
    return (

        <div className="error-container">
            <div className="error-message">
                <p id="closed-msg">
                    In accordance to the new website operation policy I have implemented in the last month,
                    I decided to close this website today on December 19, 2021. This website will most likely
                    re-open on <b>December 26th at 12 AM</b> (though it may be extended until after New Year's is over).
                </p>
                <br />
                <p id="closed-msg">Have a wonderful Merry Christmas and stay safe!</p>
                <br/>
                <div id="closed-button">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1nR8hmOAMRTU3fDZsbLRGkjzKvA9uRLZW_YdvsyBEctqDOw/viewform" rel="noreferrer" target="_blank">Contact Me</a>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default ClosedWeb;