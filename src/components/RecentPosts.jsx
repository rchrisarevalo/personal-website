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
            <div className="post" id="post-intro-margin">
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
        </div>
    );
}

export default RecentPosts;