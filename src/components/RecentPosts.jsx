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
                    By: Ruben Christopher Arevalo. Posted on 07/30/2022, 1:22 AM.
                </p>
                <p id="post-content">
                    Now that I am done rambling (lol), I want to wish you all a great weekend! Please enjoy it and stay safe everyone!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 07/30/2022, 1:22 AM.
                </p>
                <p id="post-content">
                    I am planning to expand my horizons and create new projects either later this year, or next year, as I plan to build a blogging website whenever I have
                    the time to do so. I am going to be very busy starting this Fall, as it is my last year of college, and I have to stay absolutely
                    focused on my academic career if I want to graduate on time!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 07/30/2022, 1:22 AM.
                </p>
                <p id="post-content">
                    Now that I am done delivering the daily announcements, I want to acknowledge that my website is already a year old now!
                    I first created this website since June 2021, which was last year at the time of writing this announcement. This site
                    has come so far in terms of design and improvements, that I cannot wait for what the future has in store!
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;