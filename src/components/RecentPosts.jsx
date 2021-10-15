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
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    Also, I am not going to be updating this website as frequently as I did in the past three months.
                    Since I am a college student, I am a critical point of the semester where I must be focusing on
                    passing my courses so as to ensure my continued progress on attaining my bachelor's degree.
                    I hope that I make enough time to work on this website and most likely restyle it for this upcoming
                    Halloween on October 31st.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 10/15/2021 at 9:54 AM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    So if you want to contact me at any given moment for any issue you have or to leave a comment, please
                    feel free to press the "Contact Me" button on the top right of the navigation bar (or the message icon
                    on the top right on the mobile version of this site.
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