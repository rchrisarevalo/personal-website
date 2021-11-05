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
                    With those two announcements out of the way, if you have any questions, please feel free to
                    contact me! Thank you and have a great rest of the day!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 11/4/2021 at 10:59 AM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    Secondly and lastly, some of you may have noticed that new icons have appeared on the navigation
                    bar next to the title of the links. I decided that including the links by themselves with no
                    aesthetic wasn't appealing, as a good portion of the sites on the internet have icons next to
                    the links on the navigation bar.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 11/4/2021 at 10:59 AM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    Good morning! I made a few fixes last night, as well making a minor design change to the
                    UI of this page.
                </p>
                <p id="post-content">
                    First, it has come to my attention that several of the dependencies that make up the codebase
                    of this website have been found to have several vulnerabilities, most of them being severe
                    and one of them at most being critical. Thankfully, I managed to fix the issue by upgrading
                    the dependencies to their latest versions.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 11/4/2021 at 10:59 AM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    I will also be changing how this website operates, especially during the holidays. I will
                    elaborate further in another post after Halloween is over. About a week before Thanksgiving,
                    I will provide my explanation as to what changes will be made to this website.
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