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
                    I already implemented the Thanksgiving decoration for this website, just as I promised.
                    The decoration just contains only the colors of the holiday to fit in with the Thanksgiving
                    theme. Have a wonderful holiday and stay safe!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 11/21/2021 at 4:01 PM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    Despite this, I will leave a "Contact" button where everyone is able to leave me a message that I
                    can respond to after the holidays are over. I hope you all have a fantastic Thanksgiving!
                    Please stay safe and enjoy!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 11/20/2021 at 11:00 AM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    In addition, the website navigation bar for each page will be removed so as to indicate my point
                    that the website is closed for the holidays.
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