import React from 'react';
import { IoCloseCircleOutline, IoAlertCircleOutline } from "react-icons/io5";

function closeUpdateMsg() {
    var e = document.getElementById("close-msg")
    e.classList.toggle("close")
    localStorage.removeItem("update-message")
    console.log("Message removed.")
}

const Update = () => {
    return (
        <div className="update-message" id="close-msg">
            <IoCloseCircleOutline onClick={closeUpdateMsg} id="close-icon" />
            <p id="update-title">
                <IoAlertCircleOutline size="23px" id="update-icon" /> UPDATE:
            </p>
            <p>
                Hi everyone! I am leaving this message here to let everyone know that I will be in a 
                <b> 2 week hiatus</b> that started yesterday on December 13. I will not be posting anything
                here for the above mentioned duration as not only will I be spending my break with my family
                and friends after a difficult college semester, but I will also be working on updating this
                website as well. I will be designing a new user interface that will be released after New Year's
                is over. For more details as to how my hiatus and the holidays will affect the way how I operate
                this website, please feel free to look at the <b>"Recent Announcements"</b> section of this page, or click
                on the <b>"Announcements"</b> link to view the posts regarding this topic.
            </p>
            <p>
                Thank you everyone! Stay safe and happy holidays!
            </p>
            <p>
                <i>-- Ruben Christopher Arevalo</i>
            </p>
            <br></br>
        </div>
    );
}

export default Update;