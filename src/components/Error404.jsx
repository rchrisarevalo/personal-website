import React from "react";
import { Link } from "react-router-dom";

import { IoWarningSharp } from "react-icons/io5"

const Error404 = () => {
    return (
        <div className="center-container">
            <div className="center-message">
                <IoWarningSharp size="15vh"></IoWarningSharp>
                <h1>404</h1>
                <p>Oops! It looks like what you were looking for does not exist on this website!</p>
                <p>Here are some links below that can help you resolve this issue:</p>
                <br></br>
                <Link to="/about">About Me</Link>
                <Link to="/announcements">Announcements</Link>
                <Link to="/contact">Contact Me</Link>
                <Link to="/archives">Archives</Link>
                <Link to="/settings">Settings</Link>
            </div>
        </div>
    );
}

export default Error404;