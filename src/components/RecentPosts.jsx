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
                    A new profile pic has been added. I hope you all like it!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 10/4/2021 at 2:23 PM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
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
            <div className="post" id="post-intro-margin">
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
        </div>
    );
}

export default RecentPosts;