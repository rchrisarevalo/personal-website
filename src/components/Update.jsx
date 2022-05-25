import React from 'react';
import { IoCloseCircleOutline, IoAlertCircleOutline } from "react-icons/io5";

var one_time_msg = localStorage.getItem("one-time");

function closeUpdateMsg() {
    var e = document.querySelector(".update-message");
    e.classList.toggle("close");
    localStorage.setItem("one-time", "enabled");
}

var ms = Math.abs(Date.now() - new Date(2022, 4, 30));
var num_days = ms * (0.001 / 1) * (1 / 60) * (1 / 60) * (1 / 24)
num_days = num_days.toFixed(0);
var remaining_days;

if (num_days > 1)
    remaining_days = [`${num_days} days`]
if (num_days === 1)
{
    remaining_days = [`${num_days} day`]
}

const Update = () => {
    return (
        <div className="update-msg-container">
            { one_time_msg !== "enabled" &&
                <div className="update-message" id="close-msg">
                    <IoCloseCircleOutline onClick={closeUpdateMsg} id="close-icon" />
                    <p id="update-title">
                        <IoAlertCircleOutline size="23px" id="update-icon" /> UPDATE:
                    </p>
                    <p>
                        This website will be closing in <b>{`${remaining_days}`}</b> in observance of Memorial Day.
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