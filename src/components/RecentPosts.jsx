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
                    By: Ruben Christopher Arevalo. Posted on 07/03/2022, 8:34 PM.
                </p>
                <p id="post-content">
                    If you have any questions about anything pertaining to the site, please
                    feel free to fill the contact form by clicking the "Contact Me"
                    link in the navigation bar on the top, or by clicking the three
                    dashed lines in the mobile version of this site.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 07/03/2022, 8:34 PM.
                </p>
                <p id="post-content">
                    Furthermore, I will be adding some new features sometime soon in a few months
                    or so. That will be all the announcements for this evening.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 07/03/2022, 8:34 PM.
                </p>
                <p id="post-content">
                    Good evening. This will be the first announcement for this month. As I have
                    stated in the previous three announcements, I will be updating this website
                    so that certain components will be updated automatically instead of being
                    manually configured (i.e progress bar, number of days left until graduation,
                    etc.).
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;