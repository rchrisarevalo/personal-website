import React, { useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

var num_days = 0;
var num_hours = 0;
var days_passed;
var progress_countdown, prev_progress_countdown, rate;
var days_title = ""
var time_string = ""

var currentHour = new Date().getHours()
var currentMinute = new Date().getMinutes()
var currentMonth = new Date().getMonth()
var currentYear = new Date().getFullYear()
var currentDay = new Date().getDate()

// 2 was added to the number of seconds to try and stay in sync with the real-time clock
var currentSeconds = new Date().getSeconds() + 2

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
    const [minutes, setMinutes] = useState(currentMinute)
    const [seconds, setSeconds] = useState(currentSeconds)
    const [hours, setHours] = useState(currentHour)
    const [date, setDate] = useState(currentDay)
    const [month, setMonth] = useState(currentMonth)
    const [year, setYear] = useState(currentYear)
    const [prevHours, setPrevHours] = useState(hours - 6)
    const [daysString, setDaysString] = useState(days_title)
    const [timeString, setTimeString] = useState(time_string)

    /* The state will automatically update the time, which will provide for other states to be
       updated automatically. */
    setTimeout(() => {
        setHours(hours)
        setMinutes(minutes)
        setSeconds(seconds + 1)
        setDate(date)
        setPrevHours(prevHours)
        setTimeString(timeString)

        console.log(new Date(year, month, date, hours, minutes, seconds))

        // Once the number of seconds reaches 59, the number of minutes will be set
        // back to 0.
        if (seconds === 59) {
            setHours(hours)
            setMinutes(minutes + 1)
            setSeconds(0)
            setPrevHours(prevHours)
            setMonth(month)
            setYear(year)

            // Once the number of minutes reaches 60, 1 will be added to the number of hours
            // while the number of seconds and minutes is set back to 0.
        } if (minutes === 59 && seconds === 59) {
            setHours(hours + 1)
            setMinutes(0)
            setSeconds(0)
            setPrevHours(parseInt(prevHours) + 1)
            setMonth(month)
            setYear(year)

            // Once midnight approaches, everything (the number of hours, minutes, and seconds) will
            // be set to 0.
        } if (hours === 23 && minutes === 59 && seconds === 59) {
            setHours(0)
            setMinutes(0)
            setSeconds(0)
            setDate(date + 1)
            setMonth(month)
            setYear(year)
        } 

        if (hours >= 0 && hours <= 6) {
            setPrevHours(prevHours + 24)

            if (prevHours >= 19 && prevHours <= 23) {
                setPrevHours(prevHours)
            }

            if (minutes === 59 && seconds === 59) {
                setPrevHours(prevHours + 1)
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
        if (prevHours >= 1) 
            setTimeString("hours")
        else
            setTimeString("minutes")
        
    }, 1000)

    setTimeout(() => {
        setTimeLeft(timeLeft)
        setProgressPercentage(progressPercentage)

        // This section will automatically update the number of days as well as the progress percentage
        // shown in the front page.
        if (hours === 6 && minutes === 0 && seconds === 0) {
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
        </div>
    )
}

export default ProgressCountdown;