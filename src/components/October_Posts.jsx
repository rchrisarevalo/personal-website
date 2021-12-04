import React from 'react';
import { Helmet } from "react-helmet";

import Nav from "../Nav.jsx";
import NewFooter from "../NewFooter.jsx";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const October_Posts = () => {
    return (
        <div class="posts-main">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Announcements (October 2021)</title>
            </Helmet>
            <Nav />
            <div class="posts-container">
                <h1 id="posts-title">Announcements (October 2021)</h1>
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
                            <Dropdown.Item href="#/announcements">Announcements</Dropdown.Item>
                            <Dropdown.Item href="#/announcements/2021/August">
                                August
                            </Dropdown.Item>
                            <Dropdown.Item href="#/announcements/2021/September">September</Dropdown.Item>
                            <Dropdown.Item href="#/announcements/2021/October" active>October</Dropdown.Item>
                            <Dropdown.Item href="#/announcements/2021/November">November</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <br></br>
                <p id="posts-description">
                    These are all the posts for October 2021 that were archived on this page. None of these posts will
                    be deleted or edited unless I decide otherwise.
                </p>
                <div className="post" id="post-margin">
                    <p id="post-content">
                        Happy Halloween everyone! I hope you all had a wonderful weekend so far! Please keep yourself
                        and others safe!
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 10/31/2021 at 1:51 AM.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-content">
                        If you have any questions, please feel free to contact me through the form or my email
                        if you have any suggestions or comments about the design!
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 10/23/2021 at 3:06 PM.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-content">
                        Hi everyone! I hope y'all are having a great weekend! I am happy to announce that I have
                        redesigned this website to fit the theme of this year's upcoming Halloween festivites.
                        This design will stay up until November 1st, at 12 AM. After that deadline has passed,
                        then the website will revert to its original design.
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 10/23/2021 at 3:06 PM.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-content">
                        I will also be changing how this website operates, especially during the holidays. I will
                        elaborate further in another post after Halloween is over. About a week before Thanksgiving,
                        I will provide my explanation as to what changes will be made to this website.
                    </p>
                    <p id="post-content">
                        Thank you and have a great weekend!
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 10/22/2021 at 6:07 PM.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-content">
                        Hi everyone! I am just leaving this here to wish y'all a good weekend! I had a very
                        busy week, working on assignments and quizzes assigned to me as usual. I want to
                        let you all know that I will start working on the Halloween decor for this website
                        as part of Halloween.
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 10/22/2021 at 6:07 PM.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-content">
                        In addition, I will be updating this page for this upcoming Halloween at the
                        end of the month. The page will temporarily have the colors of Halloween,
                        such as orange, black, purple, etc. While it may not look pretty in the end,
                        I will try my best to make it look good.
                    </p>
                    <p id="post-content">
                        Have a great day, everyone!
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 10/18/2021 at 12:06 PM.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-content">
                        Small change to the page. I changed my LinkedIn profile link and have included the
                        new link in the footer below in each page.
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 10/18/2021 at 12:06 PM.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-content">
                        I will continue to post announcements here occasionally to let y'all know how I am doing with
                        my life so far in case this website has not been updated in the past 7 days or so. So thank you
                        everyone, and have a great and safe weekend!
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 10/15/2021 at 9:54 AM.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-content">
                        Also, I am not going to be updating this website as frequently as I did in the past three months.
                        Since I am a college student, I am a critical point of the semester where I must be focusing on
                        passing my courses so as to ensure my continued progress on attaining my bachelor's degree.
                        I hope that I make enough time to work on this website and most likely restyle it for this upcoming
                        Halloween on October 31st.
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 10/15/2021 at 9:54 AM.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-content">
                        So if you want to contact me at any given moment for any issue you have or to leave a comment, please
                        feel free to press the "Contact Me" button on the top right of the navigation bar (or the message icon
                        on the top right on the mobile version of this site.
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 10/15/2021 at 9:54 AM.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-content">
                        Hi everyone! It is with deep regret that I have decided to remove the 'Report' button from
                        the website. The reason for this decision was because the "Report" form was similar to the
                        to the "Contact Me" form, since they both involve a degree of contact.
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 10/15/2021 at 9:54 AM.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-content">
                        A new profile pic has been added (again). I hope you all like it!
                    </p>
                    <p id="post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id="post-date">
                        Posted on 10/11/2021 at 11:27 AM.
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
            <NewFooter />
        </div>
    );
}

export default October_Posts;