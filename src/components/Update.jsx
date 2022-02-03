import React from 'react';
import { IoCloseCircleOutline, IoAlertCircleOutline } from "react-icons/io5";

var one_time_msg = localStorage.getItem("one-time");

function closeUpdateMsg() {
    var e = document.querySelector(".update-message");
    e.classList.toggle("close");
    localStorage.setItem("one-time", "enabled");
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
                        Hi everyone! As per usual and in accordance to the Archival Policy, any announcements
                        from the previous month have been stored in its respective archive. Last month's announcements
                        can be found in the "Archives" page in the new 2022 section.
                    </p>
                    <p>
                        Also, when you read this message and decide to close it, it will not appear again the next time you reload
                        this page completely, as a cookie is used to make this description appear once.
                        Don't worry, no cookies are being used to track your personal information as this particular cookie applies
                        to this website only and does not track you across the Web! If you have any problems or doubts, 
                        feel free to contact me so that I can clarify any doubts you have.
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