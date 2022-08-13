import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IoWarningSharp } from "react-icons/io5"

const Error404 = () => {

    const [seconds, setSeconds] = useState(new Date().getSeconds())
    const [fiveSecondsCounter, setFiveSecondsCounter] = useState(5)
    const nav = useNavigate()

    setTimeout(() => {
        setSeconds(new Date().getSeconds())
        setFiveSecondsCounter(60 - new Date().getSeconds())

        if (seconds % 1 === 0) {
            setFiveSecondsCounter(fiveSecondsCounter - 1)
        }

        if (fiveSecondsCounter === 1) {
            nav(-1)
        }
    }, 1000)

    return (
        <div className="center-container">
            <div className="center-message">
                <IoWarningSharp size="7vh"></IoWarningSharp>
                <h1>404</h1>
                <p>Oops! It looks like what you were looking for does not exist on this website!</p>
                <p>Here are some links below that can help you resolve this issue:</p>
                <br></br>
                <Link to="/about">About Me</Link>
                <Link to="/announcements">Announcements</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="/archives">Archives</Link>
                <Link to="/settings">Settings</Link>
                <br></br>
                <p>{`You will be redirected to the previous page in ${fiveSecondsCounter} seconds.`}</p>
            </div>
        </div>
    );
}

export default Error404;