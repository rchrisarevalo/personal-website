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
                    By: Ruben Christopher Arevalo. Posted on 06/23/2022, 11:41 PM.
                </p>
                <p id="post-content">
                    If there are any problems, please let me know by contacting me in the "Contact Me" page. Have a wonderful evening!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 06/23/2022, 11:41 PM.
                </p>
                <p id="post-content">
                    Furthermore, the automatic resizing of the window in the mobile version of the website has been corrected.
                    The font size has been adjusted to limit the resizing bug.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 06/23/2022, 11:41 PM.
                </p>
                <p id="post-content">
                    I have made some changes to the user interface of the page. The navigation bar has been changed, 
                    as well as the color of the buttons in the popup messages that appear whenever one wants to
                    change the settings for the website.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;