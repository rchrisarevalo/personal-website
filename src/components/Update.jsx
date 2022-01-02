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
                Hi everyone! I am here to announce that a new policy has been introduced for this
                Site. The policy that is titled "Website Operation" can be found at the bottom of
                the page (at the footer). The policy covers what times the Site can and cannot
                operate, as well as what circumstances would qualify for a temporary closure.
                Depending on the type of situation that can occur, the Site may close for a specific
                time period or not be updated at all until the situation is resolved.
            </p>
            <p>
                For more details, please feel free to click the "Website Operation" in the "Policies"
                column at the bottom of the page. Have a great rest of the week, everyone!
            </p>
            <p>
                <i>-- Ruben Christopher Arevalo</i>
            </p>
            <br></br>
        </div>
    );
}

export default Update;