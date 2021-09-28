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
                   Hello everyone. I am leaving this here to let y'all know that I had to remove the description boxes
                   for each of my works in the "About Me" page. I had to do this because I noticed huge styling errors
                   that made it appear worse in other devices. Thankfully, I managed to fix this issue, and even though
                   I am sad to remove the descriptions, it was for the best. I apologize for the inconvenience.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 9/28/2021 at 1:12 AM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    Hi everyone! I am leaving this announcement here to let y'all know that this website underwent a UI
                    (user interface) design change once again. I changed the color of the navigation bar, the posts, and
                    redesigned the "Works" section in the "About Me" page. I hope you all enjoy the new design!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 9/26/2021 at 3:43 PM.
                </p>
            </div>
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
        </div>
    );
}

export default RecentPosts;