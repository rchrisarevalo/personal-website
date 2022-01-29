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
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 01/29/2022, 12:03 AM.
                </p>
                <p id="post-content">
                    Fortunately, this will not limit my ability to keep making updates to this website when needed.
                    Speaking of updates, I am planning to start a blog on my own page sometime later this year, most likely during the
                    summer or the fall of this year. Creating and designing the blog page will take some time,
                    as it takes a lot of effort to make sure it is set up well and that there are no bugs
                    during the creation process.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;