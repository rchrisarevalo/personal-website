import React from 'react';
import { Helmet } from "react-helmet";

import Nav from "../Nav.jsx";
import NewFooter from "../NewFooter.jsx";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Posts = () => {
    return (
        <div className="posts-main">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Current Posts</title>
            </Helmet>
            <Nav />
            <div className="notification" id="warning-notif-2">
                <div className="notification-content" id="notif-2">
                    <p>Redirecting to contact form page...</p>
                </div>
            </div>
            <div className="posts-container">
                <h1 id="posts-title">Current Posts</h1>
                <br></br>
                <div className="posts-catalog">
                    <div className="posts-month">
                        <DropdownButton
                            id="dropdown-button-dark-example2"
                            variant="secondary"
                            menuVariant="dark"
                            title="2021"
                            className="mt-1 rounded disabled"
                        >
                            <Dropdown.Item href="#/posts" active>Current posts</Dropdown.Item>
                            <Dropdown.Item href="#/posts/2021/august">
                                August
                            </Dropdown.Item>
                            <Dropdown.Item href="#/posts/2021/september" disabled>September</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" disabled>October</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <br></br>
                <p id="posts-description">
                    This is the page where I will be posting regular updates that are being made to this site.
                    Old posts will be <b>archived</b> on the last day of each month. Any posts that have not reached
                    this deadline yet will stay on this page.
                </p>
                <div className="post">
                    <p id="post-content">
                        This will be brief. I updated the website's font to make it more appealing for users visiting
                        this site. I hope you enjoy this update!
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 9/15/2021 at 1:12 AM.
                    </p>
                </div>
                <div className="post">
                    <p id="post-content">
                        I am leaving this here to let y'all know that I am doing fine! I am really busy doing
                        college work and I am currently bombarded by a lot of homework. I am trying my best to
                        have some free time between college and maintaining this website.
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 9/14/2021 at 8:39 PM.
                    </p>
                </div>
                <div className="post">
                    <p id="post-content">
                        Happy Labor Day, everyone! I hope y'all have a wonderful one!
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 9/6/2021 at 1:19 AM.
                    </p>
                </div>
                <div className="post">
                    <p id="post-content">
                        I want to make another major announcement regarding my post archival policy. I have decided to
                        archive all posts <b>by the last day of each month</b>. In other words, I will completely wipe off
                        the main "Posts" page at 11:59 PM on the last day of each month and move them into a separate
                        page that contains posts for that month only (e.g. August). This will take effect immediately.
                    </p>
                    <p id="post-content">
                        In addition, I will disable the current month's selection option. For instance, if it's September,
                        then the link to view archived posts for this month will be disabled until October. After that deadline
                        has expired, and as I have mentioned before, I will move the posts from that month into their own
                        separate page. Then, the link will be available afterwards.
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 9/1/2021 at 12:00 AM.
                    </p>
                </div>
            </div>
            <NewFooter />
        </div>
    )
}

export default Posts;