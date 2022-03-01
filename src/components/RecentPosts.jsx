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
                    By: Ruben Christopher Arevalo. Posted on 03/01/2022, 12:00 AM.
                </p>
                <p id="post-content">
                    Apart from that, I am nevertheless excited by the idea of creating a blog since it allows me to express
                    myself a little bit more. I am expected to make a final decision regarding my blog by the end of the month.
                    That's all the announcements I have for today! Have a great rest of the day!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/01/2022, 12:00 AM.
                </p>
                <p id="post-content">
                    Should I decide to create new blog, it won't probably be ready until October 2022. The reason for
                    this is because I am going to be a senior in college. When that happens, I will be more busier as
                    I am going to be building a senior project that I need to do if I want to graduate. Whatever happens,
                    and if time permits, then I will continue working on the blog. Again, keep in mind that what I mentioned
                    above will only occur if I decide to create it.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/01/2022, 12:00 AM.
                </p>
                <p id="post-content">
                    Welcome to the new month, everyone! I hope you all enjoy this month as spring is approaching
                    fast. In other news, I want to remind you all who have been keeping up with the recent announcements
                    that I will decide whether or not to create a new blog.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;