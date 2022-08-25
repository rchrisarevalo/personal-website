import React, { useEffect } from 'react';
import { IoCloseCircleOutline, IoAlertCircleOutline } from "react-icons/io5";
import axios from 'axios';
import db from "./database/update.json";

var one_time_msg = localStorage.getItem("one-time");

function closeUpdateMsg() {
    var e = document.querySelector(".update-message");
    e.classList.toggle("close");
    localStorage.setItem("one-time", "enabled");
}

// var ms = Math.abs(Date.now() - new Date(2022, 4, 30, 0));

// var num_days = ms * (0.001 / 1) * (1 / 60) * (1 / 60) * (1 / 24)
// num_days = num_days.toFixed(0);

// var num_hours = ms * (0.001 / 1) * (1 / 60) * (1 / 60)
// num_hours = num_hours.toFixed(0);

// var remaining = 0;

// if (num_days > 1)
//     remaining = [`${num_days} days`]
// else
// {
//     remaining = [`${num_hours} hours`]
// }

var message = "";
var beginDate = 0;
var beginMonth = 0;
var beginYear = 0;
var endDate = 0;
var endMonth = 0;
var endYear = 0;
var beginHour = 0;
var beginMinute = 0;
var endHour = 0;
var endMinute = 0;

const Update = () => {

    useEffect(() => {
        axios.get("http://localhost:7000/update").then((res) => {
            message = db.update[0].updateMessageText;
            beginDate = db.update[0].beginDate;
            beginMonth = db.update[0].beginMonth;
            beginYear = db.update[0].beginYear;
            endDate = db.update[0].endDate;
            endMonth = db.update[0].endMonth;
            endYear = db.update[0].endYear;
            beginHour = db.update[0].beginHour;
            beginMinute = db.update[0].beginMinute;
            endHour = db.update[0].endHour;
            endMinute = db.update[0].endMinute;
        })
    }, [])

    return (
        <div className="update-msg-container">
            { one_time_msg !== "enabled" && (Date.now() >= new Date(beginYear, beginMonth - 1, beginDate, beginHour, beginMinute) && Date.now() <= new Date(endYear, endMonth - 1, endDate, endHour, endMinute)) &&
                <div className="update-message" id="close-msg">
                    <IoCloseCircleOutline onClick={closeUpdateMsg} id="close-icon" />
                    <p id="update-title">
                        <IoAlertCircleOutline size="23px" id="update-icon" /> UPDATE {`(expires on ${endMonth}/${endDate}/${endYear})`}
                    </p>
                    <p>
                        {`${message}`}
                    </p>
                    <p>
                        <i>-- Ruben Christopher Arevalo</i>
                    </p>
                    <br></br>
                </div>
            }
        </div>
    );
}

export default Update;