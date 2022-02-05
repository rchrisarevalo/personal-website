import React from 'react';

const RecentPosts = () => {
    return (
        <div className="posts-container-intro">
            <h1 id="posts-title-intro" data-aos="fade-down">Recent Announcements</h1>
            <p id="posts-description-intro" data-aos="fade-right" data-aos-delay="500">
                The last three recent posts will be posted here. This page will be updated daily.
                To view all posts, click on "Announcements" on the navigation bar.
            </p>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 02/05/2022, 3:00 PM.
                </p>
                <p id="post-content">
                    I will continue to make improvements whenever I had time. It seems like I had time today to make these improvements and add a new Settings
                    page that will allow for the user to decide their experience on this Site. Have a wonderful afternoon, everyone!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 02/05/2022, 3:00 PM.
                </p>
                <p id="post-content">
                    In other, but unfortunate news, I have sadly had to take down the contact form. From what I have seen, not many people
                    have been using it since its introduction. Another reason why I took down the link is due to security reasons. People
                    with malicious intentions might find a loophole with the form and send spam messages that contain links to malicious
                    sites that I am in no part supporting.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 02/05/2022, 3:00 PM.
                </p>
                <p id="post-content">
                    Good afternoon! I made some significant changes and added a few features (and Settings page) to this Site. Some of these features include
                    the ability to clear your local storage on this website only, which will save certain features of this site (such as
                    the one-time message that you get when you first visit this site), a dark/light mode that I have scrapped months earlier
                    (and now is available after a few improvements), and the ability to save these changes by simply clicking a button that
                    will allow you to refresh these changes. How cool is that?
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;