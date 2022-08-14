import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var num_days = 0;
var num_hours = 0;
var days_passed;
var progress_countdown, prev_progress_countdown, rate;
var days_title = ""
var time_string = ""
var update_minute_time_string = ""

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

// Calculates the previous percentage of the day before
prev_progress_countdown = ((days_passed - 1) / days_year) * 100

// Calculates the assumed rate after subtracting the current percentage for today and the previous percentage from yesterday
rate = progress_countdown - prev_progress_countdown

if (num_days < 1) {
    num_days = [`Graduation day in ${num_hours} hours!`]
} else {
    num_days = [`${num_days}`]
}

const ProgressCountdown = () => {

    const [timeLeft, setTimeLeft] = useState(num_days)
    const [progressPercentage, setProgressPercentage] = useState(progress_countdown)
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())
    const [hours, setHours] = useState(new Date().getHours())
    const [date, setDate] = useState(new Date().getDate())
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())
    const [prevHours, setPrevHours] = useState(hours - 6)
    const [updateHoursLeft, setUpdateHoursLeft] = useState(23 - prevHours)
    const [minutesLeft, setMinutesLeft] = useState(59 - new Date().getMinutes())
    const [daysString, setDaysString] = useState(days_title)
    const [timeString, setTimeString] = useState(time_string)
    const [updateMinuteTimeString, setUpdateMinuteTimeString] = useState(update_minute_time_string)

    /* The state will automatically update the time, which will provide for other states to be
       updated automatically. */
    setTimeout(() => {
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds + 1)
        setDate(date)
        setPrevHours(prevHours)
        setUpdateHoursLeft(updateHoursLeft)
        setTimeString(timeString)
        setMinutesLeft(minutesLeft)
        setUpdateMinuteTimeString(updateMinuteTimeString)

        // Once the number of seconds reaches 59, the number of minutes will be set
        // back to 0.
        if (new Date().getSeconds() === 59) {
            setHours(hours)
            setMinutes(minutes + 1)
            setSeconds(0)
            setPrevHours(prevHours)
            setMinutesLeft(minutesLeft - 1)
            setMonth(month)
            setYear(year)

          // Once the number of minutes reaches 60, 1 will be added to the number of hours
          // while the number of seconds and minutes is set back to 0.
        } if (new Date().getMinutes() === 59 && new Date().getSeconds() === 59) {
            setPrevHours(parseInt(prevHours) + 1)
            setUpdateHoursLeft(parseInt(updateHoursLeft) - 1)
        }

        // From 12 AM to 6 AM, this section will add 24 hours back to accommodate the time change into the
        // new day. Originally, after 12 AM, the number of hours after the progress countdown has been
        // last updated would be displayed as "-6 hours/minutes ago", etc.

        // This statement will add 24 to the negative value (e.g. -6 hours + 24 hours = 18 hours ago),
        // which is the real amount of time that has passed since 6 AM in the morning.
        if (new Date().getHours() >= 0 && new Date().getHours() <= 6) {
            // If the number of previous hours is between 18-23, then that amount will
            // remain the same.
            if (prevHours === -6 || prevHours === -5 || prevHours === -4 || prevHours === -3 || prevHours === -2 || prevHours === -1) {
                setPrevHours(prevHours + 24)
                setUpdateHoursLeft(updateHoursLeft - 24)
            }

            // This was added as the original statement doesn't want to add to the
            // number of previous hours due to the logical syntax of the if statements above and here. 
            // This is the same statement from above. However, it had to be added to properly update 
            // the number of previous hours.
            if (new Date().getMinutes() === 59 && new Date().getSeconds() === 59) {
                setPrevHours(prevHours + 1)
                setUpdateHoursLeft(parseInt(updateHoursLeft) - 1)
            }
        }

        if (new Date().getHours() === 6) {
            setPrevHours(minutes)
            if (seconds === 59) {
                setPrevHours(minutes + 1)
            }
        }

        // If number of days are greater than 1, then print "days".
        if (timeLeft > 1) {
            setDaysString("days!")

            // Otherwise, print "day" if there is 1 day left.
        } else {
            setDaysString("day!")
        }

        // If number of previous hours is greater than 1, then print "hours" instead of minutes
        if (prevHours > 1) {
            setTimeString("hours")
        } else if (prevHours === 1) {
            setTimeString("hour")
        }
        else {
            setTimeString("minutes")
        }

        if (updateHoursLeft > 1) {
            setUpdateMinuteTimeString("hours")
        } else if (updateHoursLeft === 1) {
            setUpdateMinuteTimeString("hour")
        }
        
    }, 1000)

    setTimeout(() => {
        setTimeLeft(timeLeft)
        setProgressPercentage(progressPercentage)

        // This section will automatically update the number of days as well as the progress percentage
        // shown in the front page.
        if (new Date().getHours() === 6 && new Date().getMinutes() === 0 && new Date().getSeconds() === 0) {
            setTimeLeft(parseInt(timeLeft) - parseInt(1))
            setProgressPercentage(parseFloat(progressPercentage) + parseFloat(rate))
        }

    }, 1000)

    return (
        <div className="progress-countdown-container">
            <br></br>
            <p id="graduation-countdown" data-aos="flip-up" data-aos-delay="2000">
                Time left before graduation: <b>{`${timeLeft} ${daysString}`}</b>
            </p>
            <ProgressBar animated now={`${progressPercentage.toFixed(2)}`} id="progress-bar" data-aos="fade" data-aos-delay="2200" />
            <p id="progress-count" data-aos="fade" data-aos-delay="2000">Progress until graduation day: {`${progressPercentage.toFixed(2)}`}%</p>
            <p id="progress-count" data-aos="fade" data-aos-delay="2000">This section will automatically update each day at 6 AM in the morning.</p>
            <p id="progress-count" data-aos="fade" data-aos-delay="2000"><i>Last updated: {`${prevHours} ${timeString}`} ago</i></p>
            <p id="progress-count" data-aos="fade" data-aos-delay="2000">Time left before next update:</p>
            <Row id="time-text-row" data-aos="fade" data-aos-delay="2000">
                <Col id="time-text">{`${updateHoursLeft}`}</Col>
                <Col id="time-text">{`${59 - new Date().getMinutes()}`}</Col>
                <Col id="time-text">{`${59 - new Date().getSeconds()}`}</Col>
            </Row>
            <Row id="time-text-row" data-aos="fade" data-aos-delay="2000">
                <Col>{`${updateMinuteTimeString}`}</Col>
                <Col>{`minutes`}</Col>
                <Col>{`seconds`}</Col>
            </Row>
        </div>
    )
}

export default ProgressCountdown;