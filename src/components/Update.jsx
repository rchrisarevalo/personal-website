import React from 'react';
import { BsExclamationCircle } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";

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
                <BsExclamationCircle size="18px" id="update-icon" /> UPDATE:
            </p>
            <p>
                This is a test update using a separate component that will make it easier to modify this page. It works!
            </p>
            <br></br>
        </div>
    );
}

export default Update;