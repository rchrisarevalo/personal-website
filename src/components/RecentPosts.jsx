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
                    By: Ruben Christopher Arevalo. Posted on 03/07/2022, 3:08 PM.
                </p>
                <p id="post-content">
                    That is all I have for today. I hope you all have a great rest of the week!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/07/2022, 3:08 PM.
                </p>
                <p id="post-content">
                    In other news, spring break is coming up next week, and I will have a little bit more time
                    to continue to maintain this website provided that I don't have that much homework to begin
                    with.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/07/2022, 3:08 PM.
                </p>
                <p id="post-content">
                    Happy Monday, everyone! I hope you all had a good start to the week so far and will continue to
                    have a good week!
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;