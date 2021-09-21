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
                    I am writing this to let y'all know that I expanded the size of the navigation bar for both
                    the web and mobile versions of this site. It's nothing big; just a small change to the
                    UI design of this website.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 9/21/2021 at 4:09 PM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    Huge announcement! "Posts" has been renamed to "Announcements". The latter seems like a more
                    appropriate title because I only release these posts as official announcements for changes
                    that have occurred or are occurring on this website. I also use it for the holidays
                    whenever I get the chance. I hope you enjoy the new change!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 9/18/2021 at 2:07 AM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    Hello everyone! I am here to announce yet another UI change, only this time, the posts appear with a border outline.
                    I added a little bit of touch to the UI of the posts to make it more modern and appealing. There have also been
                    some changes to the mobile app as well, such as centering the "About the Author" section in the "About Me"
                    page since a left text align did not suit well in the mobile version.
                </p>
                <p id="post-content">
                    If you have any issues regarding the user interface or the overall function of this page, please do not hesitate to
                    contact me through either the "Report" or "Contact Me" form by clicking one of the buttons on the top right of
                    the page (or the top right for the former or the "Report" option that can be found in the navigation bar in the
                    mobile version).
                </p>
                <p id="post-content">
                    Have a wonderful rest of the day (if you happen to be awake to see this, yes I stay up late most of the time).
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 9/18/2021 at 1:04 AM.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;