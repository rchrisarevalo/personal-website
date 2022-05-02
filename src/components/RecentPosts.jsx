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
                    By: Ruben Christopher Arevalo. Posted on 05/02/2022, 10:25 AM.
                </p>
                <p id="post-content">
                    Other than that, I should be good. I will see you all later! Have a great rest of the week everyone!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/02/2022, 10:25 AM.
                </p>
                <p id="post-content">
                    I am almost done with the semester. I have a final to study for this week, so I am going to divert all of my attention to that
                    in addition to other pending assignments that I need to complete.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/02/2022, 10:25 AM.
                </p>
                <p id="post-content">
                    Good morning, everyone! I apologize for updating this page late. I was really busy this weekend, and I did not have enough time
                    to get rid of last month's announcements. Regardless, the archive link should be open for the announcements from April 2022.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;