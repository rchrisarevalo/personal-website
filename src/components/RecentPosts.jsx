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
                   In addition, this will be the last post for this month. The whole "Announcements"
                   section (with the exception of 'Recent Announcements') will be wiped and replaced
                   with a post (or posts) for the new month (which is October).
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 9/30/2021 at 1:06 AM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                   Hello everyone. I am happy to announce a new UI design for the footer in this page.
                   New information has been included in the copyright notice. This new information
                   should deter any attempts of copyright infringement from people intending to
                   copy this site without permission.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 9/30/2021 at 1:06 AM.
                </p>
            </div>
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
        </div>
    );
}

export default RecentPosts;