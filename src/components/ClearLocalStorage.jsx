import React from 'react';
import { IoTrashOutline } from 'react-icons/io5';

var d = localStorage.getItem("d_l_mode");
var one_time_message = localStorage.getItem("one-time")

const ClearLocalStorage = () => {

    function clearLocalStorage() {
        localStorage.clear();
    
        setTimeout(() => {
            window.location.reload();
        }, 1000)
    }

    if (d !== null || one_time_message !== null) {
        return (
            <button onClick={clearLocalStorage} id="clear_button"><IoTrashOutline id="settings-btns" />Clear</button>
        )
    } else if (d === null && one_time_message === null) {
        return (
            <button onClick={clearLocalStorage} id="settings-disabled" disabled><IoTrashOutline id="settings-btns" />Clear</button>
        )
    }
}

export default ClearLocalStorage;