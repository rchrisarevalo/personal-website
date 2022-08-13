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
                    By: Ruben Christopher Arevalo. Posted on 08/13/2022, 2:01 PM.
                </p>
                <p id="post-content">
                    That will be it for today. I hope you all have a wonderful weekend, and please stay safe, everyone!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 08/13/2022, 2:01 PM.
                </p>
                <p id="post-content">
                    In other news, I have been gone for over a week, mainly due to college. Since I am about to approach the end of my semester,
                    I will only have a week left of break before the new Fall semester starts at the end of the month. That means I will try to
                    make any necessary changes and bug fixes that affect this website.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 08/13/2022, 2:01 PM.
                </p>
                <p id="post-content">
                    Good afternoon, y'all! Since last night, I made a few tweaks to the website. One of these features includes adding an automatic redirect feature
                    that will take you back to a previous page in 5 seconds if y'all ended up in the Error 404 page.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;