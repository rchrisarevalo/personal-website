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
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/20/2022, 9:04 PM.
                </p>
                <p id="post-content">
                    Good evening, everyone! I know I have said that I was going to take a small break, but today, I felt like adding new stuff
                    to my site and making some changes, such as adding a new, separate page for the contact form that was originally in the
                    "About Me" page.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/20/2022, 6:42 PM.
                </p>
                <p id="post-content">
                    I am going to take a small break for the next 2 weeks as I want to get rest. However, this does not mean that I will shut down
                    this website completely. I will <i>occasionally</i> update this site whenever I feel like doing so. I should be back in full
                    energy after the aforementioned time period. Anyways, and again, have a wonderful summer, and I hope to reach out again!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/20/2022, 6:42 PM.
                </p>
                <p id="post-content">
                    Hi everyone! As of right now, I am currently doing nothing in terms of resting and regaining my energy after a difficult
                    semester of full of hard work and stress. Therefore, I might not be as active as I was before, as I want to get my mind ready to
                    do various things, such as introducing new features to this site, partially set up my personal blog site, etc.
                    For those of you who are in college, I hope you all have a wonderful summer!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/17/2022, 1:41 PM.
                </p>
                <p id="post-content">
                    Good afternoon. I am writing this announcement to let y'all know that I changed the icon of the website. The icon
                    of this page resembles a palm tree from one of the pictures that I took and displayed in the "About Me" page. I
                    hope you all enjoy it!
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;