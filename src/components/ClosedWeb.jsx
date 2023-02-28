import React from 'react';

const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();
const currentYear = new Date().getFullYear();

function currentDate() {

    var stringMonth = " ";

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    for (var i = 0; i < months.length; i++) {
        if (i === currentMonth)
            stringMonth = months[i];
    }

    return [stringMonth, " ", currentDay, ", ", currentYear];
}

const ClosedWeb = () => {
    return (
        <div className="center-container">
            <div className="center-message">
                <p id="closed-msg">Today's date: <i><b>{currentDate()}</b></i></p>
                <p id="closed-msg">
                    This website will be closed in observance of Easter.
                </p>
                <br />
                <p id="closed-msg">Contact me if you have any questions or concerns.</p>
                <br />
                <div id="closed-button">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1nR8hmOAMRTU3fDZsbLRGkjzKvA9uRLZW_YdvsyBEctqDOw/viewform" rel="noreferrer" target="_blank">Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default ClosedWeb;