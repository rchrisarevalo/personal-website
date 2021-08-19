import React from "react";
import {Link} from "react-router-dom";

const Error404 = () => {
    return (
        <div className = "error-container">
            <div className = "error-message">
                <h1>ERROR 404!</h1>
                <p>Oops! It looks like what you were looking for does not exist!</p>
                <p>Here are some links below that can help you resolve the issue:</p>
                <br></br>
                <Link to="/about">About Me</Link>
                <Link to="/posts">Posts</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    );
}

export default Error404;