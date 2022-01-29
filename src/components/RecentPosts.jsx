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
                    By: Ruben Christopher Arevalo. Posted on 02/01/2022, 12:00 AM.
                </p>
                <p id="post-content">
                    Good morning, everyone! It's going to be a great month as Valentine's day is approaching! I hope everyone
                    spends time with their loved ones on this cherished day! Anyways, this is the first post for this month, so
                    there is not much except the aforementioned greeting. Have a great rest of the week!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 01/29/2022, 12:03 AM.
                </p>
                <p id="post-content">
                    That's all I have to say today. If you see this, have a good rest of the day!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 01/29/2022, 12:03 AM.
                </p>
                <p id="post-content">
                    I will keep you all updated on this idea! I will make my final decision at the end of March. However,
                    just because I made a final decision on this project that doesn't guarantee that it will appear on
                    time or at all. However, this heavily depends on the circumstances, whether it's external factors, or
                    other situations that require the use of my time.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;