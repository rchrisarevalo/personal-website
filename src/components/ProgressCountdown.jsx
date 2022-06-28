import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

var num_days = 0;
var num_hours = 0;
var days_passed;
var progress_countdown, progress_decimal = 0.28;
var days_title = ""

var currentHour = new Date().getHours();
var currentMinute = new Date().getMinutes();
var currentSeconds = new Date().getSeconds()

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

// Calculates the total number of days that have passed since the beginning of the set date
days_passed = days_year - num_days

// Gives percentage of how many days have passed between today and May 13, 2023 (graduation day)
progress_countdown = (days_passed / days_year) * 100

if (num_days < 1) {
    num_days = [`Graduation day in ${num_hours} hours!`]
} else {
    num_days = [`${num_days}`]
}

const ProgressCountdown = () => {

    const [timeLeft, setTimeLeft] = useState(num_days)
    const [progressPercentage, setProgressPercentage] = useState(progress_countdown)
    const [minutes, setMinutes] = useState(currentMinute)
    const [seconds, setSeconds] = useState(currentSeconds)
    const [hours, setHours] = useState(currentHour)
    const [daysString, setDaysString] = useState(days_title)

    /* The state will automatically update the time, which will provide for other states to be
       updated automatically. */
    setTimeout(() => {
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds + 1)

        // Once the number of seconds reaches 59, the number of minutes will be set
        // back to 0.
        if (seconds === 59) {
            setHours(hours)
            setMinutes(minutes + 1)
            setSeconds(0)
        
        // Once the number of minutes reaches 60, 1 will be added to the number of hours
        // while the number of seconds is set back to 0.
        } else if (minutes === 60) {
            setHours(hours + 1)
            setMinutes(0)
            setSeconds(0)

        // Once midnight approaches, everything (the number of hours, minutes, and seconds) will
        // be set to 0.
        } else if (hours === 23 && minutes === 60 && seconds === 59) {
            setHours(0)
            setMinutes(0)
            setSeconds(0)
        }

        if (timeLeft > 1)
        {
            setDaysString("days!")
        } else {
            setDaysString("day!")
        }
    }, 1000)

    setTimeout(() => {
        setTimeLeft(timeLeft)
        setProgressPercentage(progressPercentage)

        // This section will automatically update the number of days as well as the progress percentage
        // shown in the front page.
        if (hours === 6 && minutes === 0 && seconds === 0)
        {
            setTimeLeft(parseInt(timeLeft) - parseInt(1))
            setProgressPercentage(parseFloat(progressPercentage) + parseFloat(progress_decimal))
        }

    }, 1000)

    return (
        <div className="progress-countdown-container">
            <br></br>
            <p id="graduation-countdown" data-aos="flip-up" data-aos-delay="2000">
                Time left before graduation: <b>{`${timeLeft} ${daysString}`}</b>
            </p>
            <ProgressBar animated now={`${progressPercentage.toFixed(2)}`} id="progress-bar" data-aos="fade" data-aos-delay="2200" />
            <p id="progress-count" data-aos="fade" data-aos-delay="2400">Progress until graduation day: {`${progressPercentage.toFixed(2)}`}%</p>
            <p id="progress-count" data-aos="fade" data-aos-delay="2400">This section will automatically update each day at 6 AM in the morning.</p>
            <br></br>
        </div>
    )
}

export default ProgressCountdown;