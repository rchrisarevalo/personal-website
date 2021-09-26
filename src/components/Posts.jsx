import React from 'react';
import { Helmet } from "react-helmet";

import Nav from "../Nav.jsx";
import NewFooter from "../NewFooter.jsx";
import CurrentPosts from './CurrentPosts.jsx';

const Posts = () => {
    return (
        <div className="posts-main">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Current Announcements</title>
            </Helmet>
            <Nav />
            <div className="notification" id="warning-notif-2">
                <div className="notification-content" id="notif-2">
                    <p>Redirecting to contact form page...</p>
                </div>
            </div>
            <CurrentPosts />
            <NewFooter />
        </div>
    )
}

export default Posts;