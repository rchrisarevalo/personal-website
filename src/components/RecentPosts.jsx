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
                    By: Ruben Christopher Arevalo. Posted on 06/01/2022, 12:00 AM.
                </p>
                <p id="post-content">
                    Good evening, everyone! This announcement will be the first one for this month. As usual,
                    I am going to continue updating this website to keep it in top shape! Anyways, that will
                    be it for today, and I hope you all have a wonderful rest of the week!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/31/2022, 8:40 AM.
                </p>
                <p id="post-content">
                    That is all for today! I hope you all had a wonderful month and will have a wonderful
                    June!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/31/2022, 8:40 AM.
                </p>
                <p id="post-content">
                    I will be clearing these announcements at the end of the day before midnight. By then, everything should
                    be gone except for a new post for the new month (which is June).
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;