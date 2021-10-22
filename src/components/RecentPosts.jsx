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
                    I will also be changing how this website operates, especially during the holidays. I will
                    elaborate further in another post after Halloween is over. About a week before Thanksgiving,
                    I will provide my explanation as to what changes will be made to this website.
                </p>
                <p id="post-content">
                    Thank you and have a great weekend!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 10/22/2021 at 6:07 PM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    Hi everyone! I am just leaving this here to wish y'all a good weekend! I had a very
                    busy week, working on assignments and quizzes assigned to me as usual. I want to
                    let you all know that I will start working on the Halloween decor for this website
                    as part of Halloween.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 10/22/2021 at 6:07 PM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    In addition, I will be updating this page for this upcoming Halloween at the
                    end of the month. The page will temporarily have the colors of Halloween,
                    such as orange, black, purple, etc. While it may not look pretty in the end,
                    I will try my best to make it look good.
                </p>
                <p id="post-content">
                    Have a great day, everyone!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 10/18/2021 at 12:06 PM.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;