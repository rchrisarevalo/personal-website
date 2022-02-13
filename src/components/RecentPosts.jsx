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
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 02/13/2022, 4:11 PM.
                </p>
                <p id="post-content">
                    I hope you all had a wonderful weekend and have a great Valentine's Day tomorrow!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 02/13/2022, 4:11 PM.
                </p>
                <p id="post-content">
                    In other news, tomorrow is Valentine's Day! I hope you all spend tomorrow with your loved ones in spite of everything
                    that has been going on (the pandemic, school, work, etc.). If you don't see an announcement from me tomorrow, I am either
                    busy with college work and/or spending my day with my loved ones. However, while I may not guarantee it, I will post
                    an announcement here saying "Happy Valentine's Day, everyone!". Again, if this doesn't happen, I will post a similar,
                    but subsequent announcement post-Valentine's Day.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 02/13/2022, 4:11 PM.
                </p>
                <p id="post-content">
                    Good afternoon. I am writing this announcement to let you all know that I will continue to update this Site whenever.
                    This week has been pretty busy, not going to lie. However, during the weekend, I found some time to update the color
                    of the scroll bar to make it more visible regardless of the theme color (light or dark theme that was re-introduced
                    last week and is located in the Settings page).
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;