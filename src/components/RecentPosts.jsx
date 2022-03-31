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
                    By: Ruben Christopher Arevalo. Posted on 03/31/2022, 1:30 PM.
                </p>
                <p id="post-content">
                    This month's announcements will be cleared by the end of today (just before midnight).
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/30/2022, 5:52 PM.
                </p>
                <p id="post-content">
                    I am posting this as a reminder that this month's announcements on this page will be cleared tomorrow
                    before midnight. New announcements for April will be posted following the Archival process of this month's
                    announcements. Have a great day!
                </p>
            </div> 
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/29/2022, 8:41 AM.
                </p>
                <p id="post-content">
                    I hope I will have enough time to continue to update this website. Anyways, thank you all for your patience. Have a
                    wonderful morning and please stay safe!
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;