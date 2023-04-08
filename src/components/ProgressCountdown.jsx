import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var num_days = 0;
var days_passed;
var progress_countdown, prev_progress_countdown, rate, hourly_rate, current_rate, final_progress, current_progress, prev_time;
var days_title = ""
var time_string = ""
var update_minutes_time_string = "", update_seconds_time_string = ""

var grad_date = new Date(2023, 4, 12, 9)
var today_date = Date.now()

var ms = grad_date - today_date

var days_year = 365

// The total number of days from today until my expected graduation date
num_days = ms * (0.001 / 1) * (1 / 60) * (1 / 60) * (1 / 24)
num_days = num_days.toFixed(0)

// Calculates the total number of days that have passed since the beginning of the set date
days_passed = days_year - num_days

// Gives percentage of how many days have passed between today and May 13, 2023 (graduation day)
progress_countdown = (days_passed / days_year) * 100

// Calculates the previous percentage of the day before
prev_progress_countdown = ((days_passed - 1) / days_year) * 100

// Calculates the assumed rate after subtracting the current percentage for today and the previous percentage from yesterday
rate = progress_countdown - prev_progress_countdown

prev_time = new Date().getHours() - 6

hourly_rate = (rate / 24)

current_rate = hourly_rate * prev_time
final_progress = (progress_countdown + current_rate)

// Edge case preventing the percentage from exceeding 100% by over a decimal.
if (final_progress >= 100)
    final_progress = 100

if (num_days < 1) {
    num_days = [`Graduation day!`]
} else {
    num_days = [`${num_days}`]
}

current_progress = final_progress

const ProgressCountdown = () => {

    const [timeLeft, setTimeLeft] = useState(num_days)
    const [progressPercentage, setProgressPercentage] = useState(current_progress)
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())
    const [hours, setHours] = useState(new Date().getHours())
    const [date, setDate] = useState(new Date().getDate())
    const [month, setMonth] = useState(new Date().getMonth())
    const [year, setYear] = useState(new Date().getFullYear())
    const [minutesLeft, setMinutesLeft] = useState(59 - new Date().getMinutes())
    const [secondsLeft, setSecondsLeft] = useState(59 - new Date().getSeconds())
    const [prevTime, setPrevTime] = useState(new Date().getMinutes())
    const [daysString, setDaysString] = useState(days_title)
    const [timeString, setTimeString] = useState(time_string)
    const [updateMinutesTimeString, setUpdateMinutesString] = useState(update_minutes_time_string)
    const [updateSecondsTimeString, setUpdateSecondsString] = useState(update_seconds_time_string)

    /* The state will automatically update the time, which will provide for other states to be
       updated automatically. */
    setTimeout(() => {
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds + 1)
        setDate(date)
        setPrevTime(new Date().getMinutes())
        setTimeString(timeString)
        setMinutesLeft(59 - new Date().getMinutes())
        setSecondsLeft(59 - new Date().getSeconds())
        setUpdateMinutesString(updateMinutesTimeString)
        setUpdateSecondsString(updateSecondsTimeString)

        if (new Date().getMinutes() > 1)
        {
            setTimeString("minutes")
        }
        else if (new Date().getMinutes() === 1)
        {
            setTimeString("minute")
        }

        // Once the number of seconds reaches 59, the number of minutes will be set
        // back to 0.
        if (59 - new Date().getSeconds() === 59) {
            setHours(hours)
            setMinutes(minutes + 1)
            setSeconds(0)

            if (minutesLeft > 0 && minutesLeft <= 59) {
                setMinutesLeft(minutesLeft - 1)
            }

            setMonth(month)
            setYear(year)
            
            if (new Date().getMinutes() === 1 && new Date().getSeconds() === 0)
            {
                setTimeString("minute")
                setPrevTime(1)
            }
            else if (new Date().getMinutes() > 1 && new Date().getSeconds() === 0)
            {
                setPrevTime(new Date().getMinutes())
                setTimeString("minutes")
            }

            // Once the number of minutes reaches 60, 1 will be added to the number of hours
            // while the number of seconds and minutes is set back to 0.
        } if (59 - new Date().getMinutes() === 59 && 59 - new Date().getSeconds() === 59) {
            setMinutesLeft(59)
        }

        if (new Date().getMinutes() === 0)
        {
            setPrevTime(new Date().getSeconds())
        }

        if (new Date().getHours() === 6) {
            setPrevTime(minutes)
        }

        // If number of days are greater than 1, then print "days".
        if (timeLeft > 1) {
            setDaysString("days")

            // Otherwise, print "day" if there is 1 day left.
        } else if (timeLeft === 1){
            setDaysString("day")
        }

        if (minutesLeft > 1 || minutesLeft === 0) {
            setUpdateMinutesString("minutes")
        } if (59 - new Date().getMinutes() === 1) {
            setUpdateMinutesString("minute")
        }

        if (secondsLeft > 1 || (59 - new Date().getSeconds() === 0)) {
            setUpdateSecondsString("seconds")
        }
        if (59 - new Date().getSeconds() === 1) {
            setUpdateSecondsString("second")
        }

        if (new Date().getMinutes() === 0 && (new Date().getSeconds() > 1 || new Date().getSeconds() === 0)) {
            setTimeString("seconds")
        } if (new Date().getMinutes() === 0 && new Date().getSeconds() === 1) {
            setTimeString("second")
        }

    }, 1000)

    setTimeout(() => {
        setTimeLeft(timeLeft)
        setProgressPercentage(progressPercentage)

        // This section will automatically update the number of days as well as the progress percentage
        // shown in the front page.
        if (new Date().getHours() === 6 && new Date().getMinutes() === 0 && new Date().getSeconds() === 0) {
            setTimeLeft(parseInt(timeLeft) - parseInt(1))
        }

        // For every 60 minutes, increase the percentage by the hourly rate.
        if (new Date().getMinutes() % 60 === 0 && new Date().getSeconds() === 0)
        {
            setProgressPercentage(parseFloat(progressPercentage) + parseFloat(hourly_rate))
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
            { Date.now() <= new Date(2023, 4, 13, 6) && 
                <div>
                    <p id="progress-count" data-aos="fade" data-aos-delay="2000">This section will automatically update on an hourly basis.</p>
                    <p id="progress-count" data-aos="fade" data-aos-delay="2000">The number of days left will update each day at 6 AM.</p>
                    <p id="progress-count" data-aos="fade" data-aos-delay="2000"><i>Last updated: {`${prevTime} ${timeString}`} ago</i></p>
                    <p id="progress-count" data-aos="fade" data-aos-delay="2000">Time left before next update:</p>
                    <Row id="time-text-row" data-aos="fade" data-aos-delay="2000">
                        <Col id="time-text">{`${minutesLeft}`}</Col>
                        <Col id="time-text">{`${secondsLeft}`}</Col>
                    </Row>
                    <Row id="time-text-row" data-aos="fade" data-aos-delay="2000">
                        <Col>{`${updateMinutesTimeString}`}</Col>
                        <Col>{`${updateSecondsTimeString}`}</Col>
                    </Row>
                </div>
            }
            <br></br>
        </div>
    )
}

export default ProgressCountdown;