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
                    By: Ruben Christopher Arevalo. Posted on 07/16/2022, 2:24 AM.
                </p>
                <p id="post-content">
                    I will continue to maintain this website whenever I have time and when the chance occurs, as I will be busy these
                    next couple of weeks due to school and work, mainly the former. That will be all for today. Thank you and have a
                    wonderful weekend, everyone!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 07/16/2022, 2:24 AM.
                </p>
                <p id="post-content">
                    The last item on the list is not necessarily a new feature, but rather, an improvement to an already existing feature.
                    That's right. Whenever one enters this website, the theme will automatically configure itself depending on how you set
                    up your OS (operating system) settings for your devices, whether it'd be your phone, PC, etc. However, I can't
                    guarantee that it will work as expected, as bugs can appear at any time.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 07/16/2022, 2:24 AM.
                </p>
                <p id="post-content">
                    Huge announcement! The following updates have been made during the course of the week:
                    <br/>
                    <li>Bug fixes to the UI and the state of the website.</li>
                    <li>A new feature added to the "Settings" page.</li>
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;