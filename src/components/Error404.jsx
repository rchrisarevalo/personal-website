import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IoWarningSharp } from "react-icons/io5"

import nprogress from "nprogress";
import "nprogress/nprogress.css";

const Error404 = () => {

    const [seconds, setSeconds] = useState(new Date().getSeconds())
    const [fiveSecondsCounter, setFiveSecondsCounter] = useState(1000000000)
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

    useEffect(() => {
        nprogress.configure({ minimum: 0.1, showSpinner: false, easing: 'ease', speed: 800, trickleSpeed: 200 });
        nprogress.start();
        nprogress.set(0.5);
        nprogress.inc(0.5);
        nprogress.done(true);

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="error-404-container">
            <div className="error-404-message">
                <IoWarningSharp size="7vh"></IoWarningSharp>
                <h1>404</h1>
                <br></br>
                <p>Oops! It looks like what you were looking for does not exist on this website!</p>
                <p>Here are some links below that can help you resolve this issue:</p>
                <br></br>
                <br></br>
                <Link to="/about">About Me</Link>
                <Link to="/announcements">Announcements</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="/archives">Archives</Link>
                <Link to="/settings">Settings</Link>
                <br></br>
                <br></br>
                <br></br>
                <p>{`You will be redirected to the previous page in ${fiveSecondsCounter} seconds.`}</p>
            </div>
        </div>
    );
}

export default Error404;