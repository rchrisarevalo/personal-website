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
                    By: Ruben Christopher Arevalo. Posted on 05/05/2022, 8:14 AM.
                </p>
                <p id="post-content">
                    Now that I am done with my announcements for today, I hope you all have a wonderful day! I hope to have a good one
                    as well!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/05/2022, 8:14 AM.
                </p>
                <p id="post-content">
                    Creating a website like that requires a lot of work, so I am not sure how long it will exactly take, as I need to prep
                    for my last year at the university and my senior design project. Nevertheless, I will do my <b>VERY BEST</b> to make sure that it comes out as I intend it to be and how I visualize it.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/05/2022, 8:14 AM.
                </p>
                <p id="post-content">
                    By <i>partially</i>, I mean I am not going to construct the blog site fully yet. I need to plan out the type of blog
                    site it will be. I am still in the planning stages yet, and I have to find out how to set up a comment system, as well
                    as setting up a reaction system as well, similar to the ones used in today's social media applications. And since this
                    will be my first time setting one up, I thought it'd be best to learn through experience, which may take a while
                    depending on other external circumstances I might encounter along the way.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;