import React from "react";
import {Link} from "react-router-dom";

const Error404 = () => {
    return (
        <div className = "error-container">
            <div className = "error-message">
                <h1>ERROR 404!</h1>
                <p>Oops! It looks like what you were looking for does not exist!</p>
                <p>Go back to the <Link to="/">Home</Link> page to reset this session.</p>
            </div>
        </div>
    );
}

export default Error404;