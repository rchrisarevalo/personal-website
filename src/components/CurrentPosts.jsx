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
                        <Dropdown.Item href="#/announcements/2021/November">November</Dropdown.Item>
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
                    Anyways, that's all I have to say at the moment. Again, if you have any questions or suggestions
                    as to how to update this site, please let me know by clicking on the "Contact Me" button on the
                    top right corner of the page (or the paper plane icon in the mobile version of this site).
                </p>
                <p id="post-content">
                    Thank you and have a great rest of the evening!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 12/03/2021 at 9:40 PM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    After that's all said and done, I will focus on providing a new user interface for this website
                    sometime during January or February, if time permits, as I will be back in school for another
                    semester during that time.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 12/03/2021 at 9:40 PM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    Hi everyone! Sorry for the late changes, but I was busy with college as finals are already
                    approaching. In addition, I might not post as often as I do this month because I have decided
                    to take a 2-week hiatus from updating this site starting on December 13 and ending on December 27,
                    right after Christmas.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 12/03/2021 at 9:40 PM.
                </p>
            </div>
        </div>
    )
}

export default CurrentPosts;