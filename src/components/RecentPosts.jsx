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
                    With those two announcements out of the way, if you have any questions, please feel free to
                    contact me! Thank you and have a great rest of the day!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 11/4/2021 at 10:59 AM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    Secondly and lastly, some of you may have noticed that new icons have appeared on the navigation
                    bar next to the title of the links. I decided that including the links by themselves with no
                    aesthetic wasn't appealing, as a good portion of the sites on the internet have icons next to
                    the links on the navigation bar.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 11/4/2021 at 10:59 AM.
                </p>
            </div>
            <div className="post" id="post-intro-margin">
                <p id="post-content">
                    Good morning! I made a few fixes last night, as well making a minor design change to the
                    UI of this page.
                </p>
                <p id="post-content">
                    First, it has come to my attention that several of the dependencies that make up the codebase
                    of this website have been found to have several vulnerabilities, most of them being severe
                    and one of them at most being critical. Thankfully, I managed to fix the issue by upgrading
                    the dependencies to their latest versions.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 11/4/2021 at 10:59 AM.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;