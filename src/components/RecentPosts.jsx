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
                    Happy Halloween everyone! I hope you all had a wonderful weekend so far! Please keep yourself
                    and others safe!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 10/31/2021 at 1:51 AM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    If you have any questions, please feel free to contact me through the form or my email
                    if you have any suggestions or comments about the design!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 10/23/2021 at 3:06 PM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    Hi everyone! I hope y'all are having a great weekend! I am happy to announce that I have
                    redesigned this website to fit the theme of this year's upcoming Halloween festivites.
                    This design will stay up until November 1st, at 12 AM. After that deadline has passed,
                    then the website will revert to its original design.
                </p>
                <p id="post-content">
                    Thank you and have a great weekend!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 10/23/2021 at 3:06 PM.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;