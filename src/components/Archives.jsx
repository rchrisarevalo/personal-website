import React from 'react';
import { Helmet } from "react-helmet";
import { Link, HashRouter } from "react-router-dom";

import Nav from "../Nav.jsx";

const Archives = () => {
    return (
        <div className="archives-container">
            <Helmet>
                Ruben C. Arevalo - Archives
            </Helmet>
            <Nav />
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
                </HashRouter>
            </div>
            <br></br>
            <br></br>
            <div className="center-message">
                <p id="archive-message">
                    I will continue adding to this page as time progresses. But for now, this page will contain
                    virtually nothing aside from the archives of the announcements associated with that particular
                    year and month. Just like every month, I will wipe the <b>Announcements</b> page clean after
                    the end of the month and will store the posts from the previous month into its own page.
                    However, I will store up to only 3 years of previous announcements. Once the mentioned deadline has expired,
                    then the old announcements will be permanently removed from this website, never to be seen
                    again.
                </p>
            </div>
            <br></br>
            <hr></hr>
        </div>
    )
}

export default Archives;