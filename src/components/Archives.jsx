import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link, HashRouter } from "react-router-dom";

import NavArchives from "../NavArchives.jsx";
import NewFooter from "../NewFooter.jsx";

import nprogress from "nprogress";
import "nprogress/nprogress.css";

const Archives = () => {

    useEffect(() => {
        nprogress.configure({minimum: 0.1, showSpinner: false, easing: 'ease', speed: 800, trickleSpeed: 200});
        nprogress.start();
        nprogress.set(0.5);
        nprogress.inc(0.5);
        nprogress.done(true);

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="archives-container">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Archives</title>
            </Helmet>
            <NavArchives />
            <div className="notification" id="warning-notif-2">
                <div className="notification-content" id="notif-2">
                    <p>Redirecting to contact form page...</p>
                </div>
            </div>
            <div className="center-message">
                <p id="archive-message">
                    <br></br>
                    <h1 id="archive-header">Archives Log</h1>
                    <br></br>
                    Hello everyone! This is an archives log that stores old announcements from different
                    years and months throughout the duration of this website's history. This page was made
                    to make it easily accessible from anywhere on this website in case users want to view
                    old announcements from different times and months.
                </p>
                <br></br>
                <p id="archive-message">
                    Select the month of the associated year below to access the announcement archive for that
                    time period:
                </p>
            </div>
            <br></br>
            <div className="archive-row-2021">
                <HashRouter>
                    <li><b id="archive-year">2021:</b></li>
                    <li><Link to="/announcements/2021/August">August</Link></li>
                    <li><Link to="/announcements/2021/September">September</Link></li>
                    <li><Link to="/announcements/2021/October">October</Link></li>
                    <li><Link to="/announcements/2021/November">November</Link></li>
                    <li><Link to="/announcements/2021/December">December</Link></li>
                </HashRouter>
            </div>
            <br></br>
            <br></br>
            <div className="archive-row-2021">
                <HashRouter>
                    <li><b id="archive-year">2022:</b></li>
                    <li><Link to="/announcements/2022/January">January</Link></li>
                    <li><Link to="/announcements/2022/February">February</Link></li>
                </HashRouter>
            </div>
            <br></br>
            <br></br>
            <div className="center-message">
                <p id="archive-message">
                    I will continue adding to this page as time progresses. Just like every month, I will wipe the <b>Announcements</b> page clean after
                    the end of the month and will store the posts from the previous month into its own page.
                    I will store up to only 3 years of previous announcements in accordance to the archival process policy I implemented. 
                    Once the mentioned deadline has expired, then the old announcements will be permanently removed from this website, never to be seen
                    again.
                </p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <NewFooter/>
        </div>
    )
}

export default Archives;