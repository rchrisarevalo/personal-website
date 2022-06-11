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
                    By: Ruben Christopher Arevalo. Posted on 06/11/2022, 3:22 PM.
                </p>
                <p id="post-content">
                    In addition, I will be developing a new, small feature for this website soon. I still
                    don't have an idea of what it is going to be, but eventually I will get there! Thank you
                    and have a wonderful weekend y'all!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 06/11/2022, 3:22 PM.
                </p>
                <p id="post-content">
                    I hope you all are having a wonderful weekend! I am leaving this here to let y'all know that my mini-break will
                    be over in 4 days. After that, I will be back to fully maintaining this website.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 06/08/2022, 1:20 AM.
                </p>
                <p id="post-content">
                    Good morning (or evening) everyone! I want to announce that I added new images in the "Portfolio"
                    section in the "About Me" page! Go ahead and take a look of the photos I took! Please let me know
                    if there any issues.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;