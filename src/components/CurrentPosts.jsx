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
                        <Dropdown.Item href="#/announcements/2021/august">
                            August
                        </Dropdown.Item>
                        <Dropdown.Item href="#/announcements/2021/september">September</Dropdown.Item>
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
                    A new profile pic has been added. I hope you all like it!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 10/4/2021 at 2:23 PM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    A new profile pic has been added. I hope you all like it!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 10/4/2021 at 2:23 PM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    I hope you are all having a good day today! I will be here to make a small update probably
                    later this week when my schedule is hopefully not so full.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 10/4/2021 at 1:59 PM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    In addition, I will be having midterms around this month. So I don't expect to be writing
                    announcements as much nor making updates at the same rate as I am right now. However, I
                    will try my best to make time so I can maintain this site on a 1 to 2 week basis (or even
                    shorter). Have a great rest of the day!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 10/1/2021 at 12:00 AM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    Hi everyone! Today is the first day of a new month, October! Make sure you all have ideas as
                    to what to wear for this year's Halloween celebrations. Please stay safe as there is still a
                    pandemic happening right now, as well as the other dangers that accompany the exciting, but
                    spooky holiday at the end of the month.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 10/1/2021 at 12:00 AM.
                </p>
            </div>
        </div>
    )
}

export default CurrentPosts;