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
            <div className="post" id="post-intro-margin">
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
            <div className="post" id="post-intro-margin">
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
        </div>
    );
}

export default RecentPosts;