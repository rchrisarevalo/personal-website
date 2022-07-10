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
                    By: Ruben Christopher Arevalo. Posted on 07/10/2022, 1:23 AM.
                </p>
                <p id="post-content">
                    I am still working on making sure that some aspects of this website, as I have stated
                    in previous announcements, are automatically updated (for instance, the progress
                    countdown feature). That will be all for this evening. Thank you everyone, and have a
                    wonderful rest of the weekend!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 07/10/2022, 1:23 AM.
                </p>
                <p id="post-content">
                    Good evening, everyone! For the past week, I have been making bug fixes on the
                    progress countdown feature in the "About Me" page (the first page the user is
                    directed to when entering the website the first time). Everything should be fixed,
                    but I cannot make any promises when I say that as other bugs can arise in the
                    future.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 07/03/2022, 8:34 PM.
                </p>
                <p id="post-content">
                    If you have any questions about anything pertaining to the site, please
                    feel free to fill the contact form by clicking the "Contact Me"
                    link in the navigation bar on the top, or by clicking the three
                    dashed lines in the mobile version of this site.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;