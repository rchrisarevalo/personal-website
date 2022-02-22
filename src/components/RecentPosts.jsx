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
                    By: Ruben Christopher Arevalo. Posted on 02/22/2022, 9:50 AM.
                </p>
                <p id="post-content">
                    Hello. I am writing to let you all know that whenever you decide to clear the local storage values from this website
                    to save space on your browser on the "Settings" page and you save the changes, the "Clear" button will be disabled.
                    However, to reactivate the "Clear" button, you have to pick a theme (e.g. dark mode or light mode if you switched from
                    the latter). Once that is done, you save the changes you made and the "Clear" button should be enabled.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 02/18/2022, 2:01 PM.
                </p>
                <p id="post-content">
                    I hope you all had a wonderful week! I am writing to this to let y'all know that I am thinking about
                    whether or not I am making a blog. I announced this idea last month and I expect to make a final decision
                    by the end of March. That is all I have for today. Have a good afternoon, everyone!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 02/14/2022, 7:22 AM.
                </p>
                <p id="post-content">
                    Happy Valentine's Day, everyone! I hope you all spend time with your loved ones, whether it'd be your family, your friends,
                    partners, or spouses! Have a wonderful rest of the day!
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;