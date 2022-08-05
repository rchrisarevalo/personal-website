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
                    By: Ruben Christopher Arevalo. Posted on 08/05/2022, 2:34 PM.
                </p>
                <p id="post-content">
                    That's all I wanted to announce for today, as it is only a change to the way the Save button
                    works when, again, making changes to the settings in the 'Settings' page. Thank you and have
                    a wonderful weekend, y'all!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 08/05/2022, 2:34 PM.
                </p>
                <p id="post-content">
                    In addition, when making the change and selecting the original setting that was either pre-configured by
                    default or by yourself, the Save button will be disabled until you select a different one.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 08/05/2022, 2:34 PM.
                </p>
                <p id="post-content">
                    Good afternoon, everyone. I am writing this to announce that I made a few upgrades when saving changes
                    in the 'Settings' page. When clicking the 'Save' button without actually making any changes to it will
                    return an error message saying that you have to make them before clicking on the Save button once more.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;