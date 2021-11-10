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
                    Now that I am done delivering these announcements, I wish you all a good day. Please
                    be happy and stay safe!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 11/10/2021 at 8:55 AM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    Also, next week, I will announce some big changes as to how this website is going to
                    operate (well, one big change).
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 11/10/2021 at 8:55 AM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    However, that doesn't take away my time to announce that I will put up a Thanksgiving
                    decoration makeup here on my website. During the week of Thanksgiving, I am going to
                    be working on applying the decoration the week before the holidays, and making sure
                    it is enjoyable for people visiting this website.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 11/10/2021 at 8:55 AM.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;