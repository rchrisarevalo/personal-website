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
                    By: Ruben Christopher Arevalo. Posted on 06/26/2022, 12:40 AM.
                </p>
                <p id="post-content">
                    That is everything I have to share for today. Have a wonderful rest of the weekend
                    and see you all later!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 06/26/2022, 12:40 AM.
                </p>
                <p id="post-content">
                    Good morning, everyone! I am writing this to let y'all know that on the contact form,
                    anyone can resize the text box to any size they desire. I decided to include it back
                    again as some users might have difficulty reading the contents of their message.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 06/23/2022, 11:41 PM.
                </p>
                <p id="post-content">
                    If there are any problems, please let me know by contacting me in the "Contact Me" page. Have a wonderful evening!
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;