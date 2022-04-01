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
                    By: Ruben Christopher Arevalo. Posted on 04/01/2022, 12:12 AM.
                </p>
                <p id="post-content">
                    Despite that, I will try my best to make new features when possible. Have a great rest of the day,
                    and once again, April Fool's!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 04/01/2022, 12:12 AM.
                </p>
                <p id="post-content">
                    But honestly, I am going to continue maintaining this website whenever I have free time in my hands and
                    if I have less work to do than usual. This month will be important as it is the month before finals. I
                    am going to need to use my time wisely if I am going to have a good chance of obtaining my degree next
                    year and pass all my courses.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 04/01/2022, 12:12 AM.
                </p>
                <p id="post-content">
                    Today is April Fool's Day! I know my attempt at an April Fool's joke was
                    kind of lousy. But hey, I tried my best!
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;