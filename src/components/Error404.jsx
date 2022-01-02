import React from "react";
import { Link, HashRouter } from "react-router-dom";

const Error404 = (props) => {
    return (
        <div className="center-container">
            <div className="center-message">
                <h1>ERROR 404!</h1>
                <p>Oops! It looks like what you were looking for does not exist on this website!</p>
                <p>Here are some links below that can help you resolve this issue:</p>
                <br></br>
                <HashRouter>
                    <Link to="/about">About Me</Link>
                    <Link to="/announcements">Announcements</Link>
                    <Link to="/archives">Archives</Link>
                </HashRouter>
            </div>
        </div>
    );
}

export default Error404;