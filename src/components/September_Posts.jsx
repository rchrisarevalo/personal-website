import React from 'react';
import { Helmet } from "react-helmet";

import Nav from "../Nav.jsx";
import NewFooter from "../NewFooter.jsx";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const September_Posts = () => {

    return (
        <div class="posts-main">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Posts (September 2021)</title>
            </Helmet>
            <Nav />
            <div class="posts-container">
                <h1 id="posts-title">Posts (September 2021)</h1>
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
                            <Dropdown.Item href="#/posts">All Posts</Dropdown.Item>
                            <Dropdown.Item href="#/posts/2021/august">
                                August
                            </Dropdown.Item>
                            <Dropdown.Item href="#/posts/2021/september" active>September</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" disabled>October</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <br></br>
                <p id="posts-description">
                    These are all the posts for September 2021 that were archived on this page. None of these posts will
                    be deleted or edited unless I decide otherwise.
                </p>
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
    );
}

export default September_Posts;