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
                    By: Ruben Christopher Arevalo. Posted on 05/24/2022, 10:18 PM.
                </p>
                <p id="post-content">
                    As of today, the website will be closing in 5 days in observance of Memorial Day. An update has
                    already been provided in the "About Me" page. Thank you and have a wonderful evening!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/20/2022, 9:04 PM.
                </p>
                <p id="post-content">
                    Aside from a few style changes made to this site, this is everything I have to share for the day. Have a great rest of the weekend and please
                    stay safe!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/20/2022, 9:04 PM.
                </p>
                <p id="post-content">
                    Furthermore, I added a graduation date countdown. The reason for this is because I am graduating next year, and I thought it'd be best
                    to let others know when I am going to graduate, which is May of next year (2023).
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;