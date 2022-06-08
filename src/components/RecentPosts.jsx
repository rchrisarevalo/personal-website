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
                    By: Ruben Christopher Arevalo. Posted on 06/08/2022, 1:20 AM.
                </p>
                <p id="post-content">
                    Good morning (or evening) everyone! I want to announce that I added new images in the "Portfolio"
                    section in the "About Me" page! Go ahead and take a look of the photos I took! Please let me know
                    if there any issues.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 06/02/2022, 6:01 AM.
                </p>
                <p id="post-content">
                    Fortunately, that bug managed to be fixed, and it is safe to say that the progress countdown
                    feature should be working as intended. If there are any issues, feel free to contact me
                    by clicking the "Contact Me" link in the navigation bar! Have a wonderful rest of the day!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 06/02/2022, 6:01 AM.
                </p>
                <p id="post-content">
                    Good morning, everyone! I know it's a little bit early for me to be posting announcements
                    at this time. I am writing this announcement to let y'all know that I made some fixes to
                    the graduation countdown feature in the "About Me" page. Apparently, while I was testing
                    the countdown feature, the progress percentage that is shown below the progress bar
                    gave me unusual numbers, such as over 1000% whenever I set today's date a day before
                    the graduation date.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;