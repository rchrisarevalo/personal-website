import React from 'react';

var num_days = 0;

function currentDate() {
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const year = new Date().getFullYear();

    var stringMonth = " ";

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    for (var i = 0; i < months.length; i++) {
        if (i === month)
            stringMonth = months[i];
    }

    return [stringMonth, " ", day, ", ", year];
}

var mem_day_date = new Date(2022, 4, 30)
var today_date = Date.now()
var ms = mem_day_date - today_date

// The total number of days from today until my expected graduation date
num_days = ms * (0.001 / 1) * (1 / 60) * (1 / 60) * (1 / 24)
num_days = num_days.toFixed(0)

const ClosedWeb = () => {
    return (
        <div className="center-container">
            <div className="center-message">
                <p id="closed-msg">Today's date: <i>{currentDate()}</i></p>
                <p id="closed-msg">Days left until re-opening: <i><b>{`${num_days}`}</b></i></p>
                <p id="closed-msg">
                    In accordance to Site Operation policy under the "Personal Affairs" section, I will
                    be taking a leave of absence that will took effect on April 9, midnight. This
                    website will re-open on <b>April 30th</b>.
                </p>
                <br />
                <p id="closed-msg">Have a wonderful rest of the month! Contact me if you have any questions!</p>
                <br />
                <div id="closed-button">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1nR8hmOAMRTU3fDZsbLRGkjzKvA9uRLZW_YdvsyBEctqDOw/viewform" rel="noreferrer" target="_blank">Contact Me</a>
                </div>
            </div>
        </div>
    )
}

export default ClosedWeb;