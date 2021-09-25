import React from 'react';

const RecentPosts = () => {
    return (
        <div className="posts-container-intro">
            <h1 id="posts-title-intro">Recent Announcements</h1>
            <p id="posts-description-intro">
                The last three recent posts will be posted here. This page will be updated daily.
                To view all posts, click on "Announcements" on the navigation bar.
            </p>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    In addition, I reduced the announcement margins for this page only. The ones in the "Recent Announcements"
                    section in the "About Me" page are not affected by this change. Once again, I made this change so that
                    it can be similar to the posts in the "About Me" page.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 9/25/2021 at 11:25 AM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
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
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 9/25/2021 at 11:24 AM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    I am writing this to let y'all know that I expanded the size of the navigation bar for both
                    the web and mobile versions of this site. It's nothing big; just a small change to the
                    UI design of this website.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 9/21/2021 at 4:09 PM.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;