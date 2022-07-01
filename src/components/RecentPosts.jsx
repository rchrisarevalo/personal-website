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
                    By: Ruben Christopher Arevalo. Posted on 06/30/2022, 11:29 PM.
                </p>
                <p id="post-content">
                    Anyways, I hope you all had a wonderful June. I am going to be posting less often as I will be working most of the time
                    until the end of July, in addition having to juggle both work and school. For my education, I am a few steps away from
                    attaining my Bachelor's Degree in Computer Engineering. How cool is that? That will be all for this evening.
                    Please stay safe, y'all!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 06/30/2022, 11:29 PM.
                </p>
                <p id="post-content">
                    In other news, this will be the last post of the month. Like I said in my previous post, I am currently working on
                    making sure that some aspects of my website automatically update themselves instead of having to be manually
                    configured everytime should the circumstances change.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 06/30/2022, 11:29 PM.
                </p>
                <p id="post-content">
                    Good evening, everyone! I am currently working on making sure that some components of this website (such as the progress bar and my age)
                    are automatically updated. I decided to work on updating the state of the website automatically as it allows me to save time on manually
                    configuring everything like I would normally do. I have already released a new feature a few days ago whereas the progress bar will
                    automatically update itself every time at 6 AM. Furthermore, the number of hours it has been since it was last updated will also update
                    automatically, and is included below the progress bar and the progress percentage.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;