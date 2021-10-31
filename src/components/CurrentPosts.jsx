import React from 'react';

import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const CurrentPosts = () => {
    return (
        <div className="posts-container">
            <h1 id="posts-title">Current Announcements</h1>
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
                        <Dropdown.Item href="#/announcements" active>Announcements</Dropdown.Item>
                        <Dropdown.Item href="#/announcements/2021/August">
                            August
                        </Dropdown.Item>
                        <Dropdown.Item href="#/announcements/2021/September">September</Dropdown.Item>
                        <Dropdown.Item href="#/announcements/2021/October">October</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <br></br>
            <p id="posts-description">
                This is the page where I will be posting regular updates that are being made to this site.
                Old posts will be <b>archived</b> on the last day of each month. This means that after the
                last day of each month has come to pass, then this whole page (minus the archive page) will
                be wiped out completely and be replaced with posts for the new month.
            </p>
            <div className="post" id="post-margin">
                <p id="post-content">
                    Hi everyone! This is the first post for this month, and sticking with the Thanksgiving theme,
                    I am thankful to introduce it here. As I have said in a previous post about a week ago, I will
                    make a major announcement as to how this website operates, especially during the holidays,
                    just before Thanksgiving later this month.
                </p>
                <p id="post-content">
                    If you have any questions, don't be afraid to contact me through my email or the contact form
                    on the navigation bar!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 11/1/2021 at 12:00 AM.
                </p>
            </div>
        </div>
    )
}

export default CurrentPosts;