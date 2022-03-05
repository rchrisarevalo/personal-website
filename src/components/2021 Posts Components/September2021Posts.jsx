import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link, HashRouter } from "react-router-dom";

import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

import NavArchives from "../../NavArchives.jsx";
import NewFooter from "../../NewFooter.jsx";

const September2021Posts = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div class="posts-main">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Announcements (September 2021)</title>
            </Helmet>
            <NavArchives />
            <div className="notification" id="warning-notif-2">
                <div className="notification-content" id="notif-2">
                    <p>Redirecting to contact form page...</p>
                </div>
            </div>
            <div class="posts-container">
                <HashRouter>
                    <Link to="/announcements/2021/August"><IoArrowBackCircleOutline id="posts-arrow-left" title="August 2021 Announcements" size="40px"/></Link>
                    <Link to="/announcements/2021/October"><IoArrowForwardCircleOutline id="posts-arrow-right" title="October 2021 Announcements" size="40px"/></Link>
                </HashRouter>
                <h1 id="posts-title">Announcements (September 2021)</h1>
                <br></br>
                <p id="posts-description">
                    These are all the posts for September 2021 that were archived on this page. None of these posts will
                    be deleted or edited unless I decide otherwise.
                </p>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 9/30/2021 at 1:06 AM.
                    </p>
                    <p id="post-content">
                        In addition, this will be the last post for this month. The whole "Announcements"
                        section (with the exception of 'Recent Announcements') will be wiped and replaced
                        with a post (or posts) for the new month (which is October).
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 9/30/2021 at 1:06 AM.
                    </p>
                    <p id="post-content">
                        Hello everyone. I am happy to announce a new UI design for the footer in this page.
                        New information has been included in the copyright notice. This new information
                        should deter any attempts of copyright infringement from people intending to
                        copy this site without permission.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 9/28/2021 at 1:12 AM.
                    </p>
                    <p id="post-content">
                        Hello everyone. I am leaving this here to let y'all know that I had to remove the description boxes
                        for each of my works in the "About Me" page. I had to do this because I noticed huge styling errors
                        that made it appear worse in other devices. Thankfully, I managed to fix this issue, and even though
                        I am sad to remove the descriptions, it was for the best. I apologize for the inconvenience.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 9/26/2021 at 3:43 PM.
                    </p>
                    <p id="post-content">
                        Hi everyone! I am leaving this announcement here to let y'all know that this website underwent a UI
                        (user interface) design change once again. I changed the color of the navigation bar, the posts, and
                        redesigned the "Works" section in the "About Me" page. I hope you all enjoy the new design!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 9/25/2021 at 11:25 AM.
                    </p>
                    <p id="post-content">
                        In addition, I reduced the announcement margins for this page only. The ones in the "Recent Announcements"
                        section in the "About Me" page are not affected by this change. Once again, I made this change so that
                        it can be similar to the posts in the "About Me" page.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 9/25/2021 at 11:24 AM.
                    </p>
                    <p id="post-content">
                        Hi everyone! In case you didn't notice, I renamed the "Contact Information" link to "Contact Info".
                        I shortened it because it was taking up a lot of space on the navigation bar for smaller computers,
                        and that caused the navigation bar to look weird whenever the page is zoomed in. But anyways, I managed
                        to fix that problem (hopefully).
                    </p>
                    <p id="post-content">
                        If you have any issues or concerns, please feel free to contact me by clicking the "Contact Me" button on
                        the top right (or the message icon on the top right of the mobile version). You can also click on the
                        "Report" button as well. Thank you and have a great day!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 9/21/2021 at 4:09 PM.
                    </p>
                    <p id="post-content">
                        I am writing this to let y'all know that I expanded the size of the navigation bar for both
                        the web and mobile versions of this site. It's nothing big; just a small change to the
                        UI design of this website.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 9/18/2021 at 2:07 AM.
                    </p>
                    <p id="post-content">
                        Huge announcement! "Posts" has been renamed to "Announcements". The latter seems like a more
                        appropriate title because I only release these posts as official announcements for changes
                        that have occurred or are occurring on this website. I also use it for the holidays
                        whenever I get the chance. I hope you enjoy the new change!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 9/18/2021 at 1:04 AM.
                    </p>
                    <p id="post-content">
                        Hello everyone! I am here to announce yet another UI change, only this time, the posts appear with a border outline.
                        I added a little bit of touch to the UI of the posts to make it more modern and appealing. There have also been
                        some changes to the mobile app as well, such as centering the "About the Author" section in the "About Me"
                        page since a left text align did not suit well in the mobile version.
                    </p>
                    <p id="post-content">
                        If you have any issues regarding the user interface or the overall function of this page, please do not hesitate to
                        contact me through either the "Report" or "Contact Me" form by clicking one of the buttons on the top right of
                        the page (or the top right for the former or the "Report" option that can be found in the navigation bar in the
                        mobile version).
                    </p>
                    <p id="post-content">
                        Have a wonderful rest of the day (if you happen to be awake to see this, yes I stay up late most of the time).
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 9/15/2021 at 1:12 AM.
                    </p>
                    <p id="post-content">
                        This will be brief. I updated the website's font to make it more appealing for users visiting
                        this site. I hope you enjoy this update!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 9/14/2021 at 8:39 PM.
                    </p>
                    <p id="post-content">
                        I am leaving this here to let y'all know that I am doing fine! I am really busy doing
                        college work and I am currently bombarded by a lot of homework. I am trying my best to
                        have some free time between college and maintaining this website.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 9/6/2021 at 1:19 AM.
                    </p>
                    <p id="post-content">
                        Happy Labor Day, everyone! I hope y'all have a wonderful one!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 9/1/2021 at 12:00 AM.
                    </p>
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
                </div>
            </div>
            <NewFooter />
        </div>
    );
}

export default September2021Posts;