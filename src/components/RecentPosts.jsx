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
                    By: Ruben Christopher Arevalo. Posted on 04/27/2022, 7:16 PM.
                </p>
                <p id="post-content">
                    That is all I have to say for today. I hope you all have a wonderful evening!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 04/27/2022, 7:16 PM.
                </p>
                <p id="post-content">
                    Furthermore, I should be able to continue making updates to this website from this point on, now that the semester is near
                    its end. In further news, I will be making a new feature in the next few months. I still haven't given it some thought,
                    but it's a small feature that I am planning to make. I will reveal in a later announcement what it will be about.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 04/27/2022, 7:16 PM.
                </p>
                <p id="post-content">
                    Aside from having finals next week and the following week, I should have enough time on my hands to make a decision as to whether
                    or not make a blog website or something similar in the future by the end of this month.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;