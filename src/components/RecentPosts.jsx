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
                    Starting this Thanksgiving and any other holiday from that point on, the website will have a 
                    fixed size screen that will tell visitors that operations have ceased for a day due to the holidays
                    and that they will resume as normal after they are over.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 11/20/2021 at 11:00 AM.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;