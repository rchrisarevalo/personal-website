import React from 'react';
import { IoCloseCircleOutline, IoAlertCircleOutline } from "react-icons/io5";

var one_time_msg = localStorage.getItem("one-time");

function closeUpdateMsg() {
    var e = document.querySelector(".update-message");
    e.classList.toggle("close");
    localStorage.setItem("one-time", "enabled");
}

var closeDate = 9;
var currentDate = new Date().getDate();

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
                        Hi everyone! This website will be closing in {Math.abs(currentDate - closeDate)} day(s) as I am taking a leave of absence for the next 3 weeks. For more information, please read
                        my recent announcements below in the "Recent Announcements" section, or in the "Announcements" page.
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