import React, { useState } from 'react';

var num_days = 0;
var num_hours = 0;
var num_seconds = 0;
var num_minutes = 0
var time_left = 0

const currentMonth = new Date().getMonth();
const currentDay = new Date().getDate();
const currentYear = new Date().getFullYear();
const currentHours = new Date().getHours();
const currentMinutes = new Date().getMinutes();
const currentSeconds = new Date().getSeconds();

function currentDate() {

    var stringMonth = " ";

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    for (var i = 0; i < months.length; i++) {
        if (i === currentMonth)
            stringMonth = months[i];
    }

    return [stringMonth, " ", currentDay, ", ", currentYear];
}

var reopen_date = new Date(2022, 6, 12, 5)
var today_date = Date.now()
var ms = reopen_date - today_date

// The total number of days from today
num_days = ms * (0.001 / 1) * (1 / 60) * (1 / 60) * (1 / 24)
num_days = num_days.toFixed(0)

// The total number of hours left
num_hours = ms * (0.001 / 1) * (1 / 60) * (1 / 60)
num_hours = num_hours.toFixed(0)

console.log(num_days)

if (num_days > 0) {
    if (num_days <= 1) {
        time_left = [`${num_days} day`]
    } else {
        time_left = [`${num_days} days`]
    }
}

if (num_days <= 0)
{
    if (num_hours > 1)
    {
        time_left = [`${num_hours} hours`]
    }
    else
        time_left = [`${num_hours} hour`]
}


const ClosedWeb = () => {

    const [seconds, setSeconds] = useState(currentSeconds)
    const [minutes, setMinutes] = useState(currentSeconds)
    const [hours, setHours] = useState(currentHours)
    const [days, setDays] = useState(currentDay)
    const [time, setTime] = useState(time_left)

    setTimeout(() => {
        setMinutes(parseInt(minutes))
        setDays(days)
        setSeconds(seconds - 1)
        setHours(hours)
        setTime(time)

        if (seconds === 0) {
            setSeconds(60)
            setMinutes(parseInt(minutes) - 1)
        }
    }, 1000)

    return (
        <div className="center-container">
            <div className="center-message">
                <p id="closed-msg">Today's date: <i><b>{currentDate()}</b></i></p>
                <p id="closed-msg">Time left until re-opening: <i><b>{`${seconds}`}</b></i></p>
                <p id="closed-msg">
                    This website will be closed in observance of Memorial Day. It will be reopened on <b>{`${reopen_date}`}</b> at midnight.
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