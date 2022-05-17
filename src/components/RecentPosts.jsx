import React from 'react';

const RecentPosts = () => {
    return (
        <div className="posts-container-intro">
            <h1 id="posts-title-intro" data-aos="fade-down">Recent Announcements</h1>
            <p id="posts-description-intro" data-aos="fade-right" data-aos-delay="500">
                The last three recent announcements will be posted here. This page will be updated whenever there are new announcements.
                To view all announcements, click on "Announcements" on the navigation bar.
            </p>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/17/2022, 1:41 PM.
                </p>
                <p id="post-content">
                    Good afternoon. I am writing this announcement to let y'all know that I changed the icon of the website. The icon
                    of this page resembles a palm tree from one of the pictures that I took and displayed in the "About Me" page. I
                    hope you all enjoy it!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/15/2022, 11:06 PM.
                </p>
                <p id="post-content">
                    Good evening. I am writing this announcement to share that I have included the link to my CV website. The link can be
                    located in the front page (the "About Me" page) of the site. As always, have a wonderful rest of the upcoming week!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/11/2022, 7:01 PM.
                </p>
                <p id="post-content">
                    Those are all the announcements I have for today. Thank you and have a wonderful evening and great rest of the week!
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;