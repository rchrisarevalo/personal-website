import React from 'react';

const RecentPosts = () => {
    return (
        <div className="posts-container-intro">
            <h1 id="posts-title-intro">Recent Announcements</h1>
            <p id="posts-description-intro">
                The last three recent posts will be posted here. This page will be updated daily.
                To view all posts, click on "Announcements" on the navigation bar.
            </p>
            <div className="post" id="post-margin">
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
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    Huge announcement! "Posts" has been renamed to "Announcements". The latter seems like a more
                    appropriate title because I only release these posts as official announcements for changes
                    that have occurred or are occurring on this website. I also use it for the holidays
                    whenever I get the chance. I hope you enjoy the new change!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 9/18/2021 at 2:07 AM.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;