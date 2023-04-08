import React, { useState } from 'react'

const ShowProgressButton = () => {

    var show_progress_bar = localStorage.getItem("show_progress")
    var retrieveCurrentState = JSON.parse(show_progress_bar)
    const [status, setStatus] = useState(retrieveCurrentState)

    function handleHideProgress() {
        var show_choice = document.getElementById("show_check").value
    
        if (show_choice === "show") {
            localStorage.setItem("show_progress", "true")
            setStatus(true)
        }
        else {
            localStorage.setItem("show_progress", "false")
            setStatus(false)
        }
    }

    if (Date.now() < new Date(2023, 4, 13)) {
        if (status === true) {
            return (
                <div>
                    <i>Hide progress bar feature <b>(available until May 13, 2023)</b>:</i>
                    <br></br>
                    <br></br>
                    <select id="show_check" onChange={handleHideProgress}>
                        <option value="show" selected>Show</option>
                        <option value="hide">Hide</option>
                    </select>
                </div>
            )
        } else if (status === false) {
            return (
                <div>
                    <i>Hide progress bar feature <b>(available until May 13, 2023)</b>:</i>
                    <br></br>
                    <br></br>
                    <select id="show_check" onChange={handleHideProgress}>
                        <option value="show">Show</option>
                        <option value="hide" selected>Hide</option>
                    </select>
                </div>
            )
        }
    }
}

export default ShowProgressButton;