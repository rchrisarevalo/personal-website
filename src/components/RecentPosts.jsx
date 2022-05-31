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
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/31/2022, 8:40 AM.
                </p>
                <p id="post-content">
                    Hi everyone! This will be the last announcement for this month! I know I have been out for a week
                    as I stated in an earlier post that I was taking a small break.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;