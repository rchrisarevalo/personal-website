import React, { useState } from 'react';

var currentYear = new Date().getFullYear(),
    currentDate = new Date().getDate(),
    currentMonth = new Date().getMonth(),
    currentHour = new Date().getHours(),
    currentMinute = new Date().getMinutes(),
    currentSeconds = new Date().getSeconds() + 2

var hour_times = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
var other_hour_times = []

var firstDigitSecondsString = '', firstDigitMinutesString = '', firstDigitHoursString = ''

if (currentSeconds >= 0 && currentSeconds < 9) {
     firstDigitSecondsString = '0'
} else {
     firstDigitMinutesString = ''
}

if (currentMinute >= 0 && currentMinute < 9) {
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
    if (k === currentHour) {
        currentHour = hour_times[k]
    }
}

const TimeCountdown = () => {

    const [year, setYear] = useState(currentYear)
    const [date, setDate] = useState(currentDate)
    const [month, setMonth] = useState(currentMonth)
    const [hour, setHour] = useState(currentHour)
    const [minute, setMinute] = useState(currentMinute)
    const [seconds, setSeconds] = useState(currentSeconds)
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

        if (hour >= 0 && hour < 9) {
            setFirstDigitHours('0')
        } else {
            setFirstDigitHours('')
        }

        if (minute >= 0 && minute < 9) {
            setFirstDigitMinutes('0')
        } else {
            setFirstDigitMinutes('')
        }

        if (seconds >= 0 && seconds < 9) {
            setFirstDigitSeconds('0')
        } else {
            setFirstDigitSeconds('')
        }

        if (seconds === 59)
        {
            setSeconds(0)
            setMinute(minute + 1)
            setFirstDigitSeconds('0')
        }

        if (minute === 59 && seconds === 59)
        {
            setSeconds(0)
            setMinute(0)
            setHour(hour + 1)
        }
    }, 1000)

    return (
        <div className="time-countdown-container">
            <div className="time-countdown">
                <p>Current time: {`${firstDigitHours}${hour}:${firstDigitMinutes}${minute}:${firstDigitSeconds}${seconds}`}</p>
            </div>
        </div>
    )
}

export default TimeCountdown;