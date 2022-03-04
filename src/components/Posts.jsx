import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";

import Nav from "../Nav.jsx";
import NewFooter from "../NewFooter.jsx";
import CurrentPosts from './CurrentPosts.jsx';

import nprogress from "nprogress";
import "nprogress/nprogress.css";

const Posts = () => {

    useEffect(() => {
        nprogress.configure({minimum: 0.1, showSpinner: false, easing: 'ease', speed: 800, trickleSpeed: 200});
        nprogress.start();
        nprogress.set(0.5);
        nprogress.inc(0.5);
        nprogress.done(true);

        window.scrollTo(0, 0);
    }, []);

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