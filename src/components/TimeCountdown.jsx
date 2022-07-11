import React, { useState } from 'react';

var currentHour = new Date().getHours(),
    currentMinute = new Date().getMinutes(),
    currentSeconds = new Date().getSeconds() + 2

var hour_times = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
var other_hour_times = []

var firstDigitSecondsString = '', firstDigitMinutesString = '', firstDigitHoursString = ''

if (currentSeconds >= 0 && currentSeconds <= 9) {
     firstDigitSecondsString = '0'
} else {
     firstDigitMinutesString = ''
}

if (currentMinute >= 0 && currentMinute <= 9) {
    firstDigitMinutesString = '0'
} else {
    firstDigitMinutesString = ''
}

if ((currentHour >= 0 && currentHour < 9) || (currentHour >= 13 && currentHour < 21)) {
    firstDigitHoursString = '0'
} else {
    firstDigitHoursString = ''
}

for (var i = 0; i < 24; i++) {
    other_hour_times.push(i)
}

for (var k = 0; k < other_hour_times.length; k++) {
    if (k === new Date().getHours()) {
        currentHour = hour_times[k]
    }
}

const TimeCountdown = () => {

    const [year, setYear] = useState(new Date().getFullYear())
    const [date, setDate] = useState(new Date().getDate())
    const [month, setMonth] = useState(new Date().getMonth())
    const [hour, setHour] = useState(new Date().getHours())
    const [minute, setMinute] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())
    const [firstDigitSeconds, setFirstDigitSeconds] = useState(firstDigitSecondsString)
    const [firstDigitMinutes, setFirstDigitMinutes] = useState(firstDigitMinutesString)
    const [firstDigitHours, setFirstDigitHours] = useState(firstDigitHoursString)

    setTimeout(() => {
        setYear(year)
        setDate(date)
        setMonth(month)
        setHour(hour)
        setMinute(minute)
        setFirstDigitSeconds(firstDigitSeconds)
        setFirstDigitMinutes(firstDigitMinutes)
        setFirstDigitHours(firstDigitHours)
        setSeconds(seconds + 1)

        if ((new Date().getHours() >= 0 && new Date().getHours() <= 10) || (new Date().getHours() >= 13 && new Date().getHours() <= 21)) {
            setFirstDigitHours('0')
        } else {
            setFirstDigitHours('')
        }

        if (new Date().getMinutes() >= 0 && new Date().getMinutes() < 10) {
            setFirstDigitMinutes('0')
        } else {
            setFirstDigitMinutes('')
        }

        if (new Date().getSeconds() >= 0 && new Date().getSeconds() < 10) {
            setFirstDigitSeconds('0')
        } else {
            setFirstDigitSeconds('')
        }

        if (new Date().getSeconds() === 59)
        {
            setSeconds(0)
            setMinute(minute + 1)
        }

        if (new Date().getMinutes() === 59 && new Date().getSeconds() === 59)
        {
            setSeconds(0)
            setMinute(0)
            setHour(hour + 1)
        }
    }, 1000)

    return (
        <div className="time-countdown-container">
            <div className="time-countdown">
                <p>Current time: {`${firstDigitHours}${currentHour}:${firstDigitMinutes}${new Date().getMinutes()}:${firstDigitSeconds}${new Date().getSeconds()}`}</p>
            </div>
        </div>
    )
}

export default TimeCountdown;