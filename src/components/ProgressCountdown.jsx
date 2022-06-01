import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

var num_days = 0;
var num_hours = 0;
var days_passed;
var progress_countdown;

var grad_date = new Date(2023, 4, 13, 18)
var today_date = Date.now()

var ms = grad_date - today_date

var days_year = 365

// The total number of days from today until my expected graduation date
num_days = ms * (0.001 / 1) * (1 / 60) * (1 / 60) * (1 / 24)
num_days = num_days.toFixed(0)

// The total number of hours from today until my expected graduation date
num_hours = ms * (0.001 / 1) * (1 / 60) * (1 / 60)
num_hours = num_hours.toFixed(0)

days_passed = days_year - num_days

// Gives percentage of how many days have passed between today and May 13, 2023.
progress_countdown = (days_passed / num_days) * 100
progress_countdown = progress_countdown.toFixed(1)

if (num_days < 1) {
    days_passed = [`Graduation day in ${num_hours} hours!`]
}

const ProgressCountdown = () => {
    return (
        <div className="progress-countdown-container">
            <br></br>
            <p id="graduation-countdown" data-aos="flip-up" data-aos-delay="2000">
                Days left before graduation: <b>{`${num_days}`} days!</b>
            </p>
            <ProgressBar animated now={`${progress_countdown}`} id="progress-bar" data-aos="fade" data-aos-delay="2200" />
            <p id="progress-count" data-aos="fade" data-aos-delay="2400">Progress until graduation day: {`${progress_countdown}`}%</p>
            <br></br>
        </div>
    )
}

export default ProgressCountdown;