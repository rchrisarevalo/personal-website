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
                    I will try to read all of your messages after my 2 week hiatus is up. The same will apply
                    after New Year's Eve and New Year's. Have a wonderful day and Merry Christmas!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 12/14/2021 at 12:54 AM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    I will be working on the website and design a user interface as we approach the next new year
                    (2022). So if I don't post any announcements for the majority of this month, it's because I
                    am on break in addition to making updates to this website. I sincerely apologize for any
                    inconvenience that might occur along the way, such as not responding to messages from y'all
                    in a timely manner.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 12/14/2021 at 12:54 AM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    Good evening, everyone. I know I am on a hiatus right now for the next two weeks, but I wanted
                    to leave this message here for anyone visiting this website to let y'all know that I am not
                    going to be posting any content here during the holidays, especially right now.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 12/14/2021 at 12:54 AM.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;