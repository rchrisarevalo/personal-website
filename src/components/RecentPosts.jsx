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
                    By: Ruben Christopher Arevalo. Posted on 06/17/2022, 8:52 PM.
                </p>
                <p id="post-content">
                    Anyways, that was everything I wanted to show you all. I hope y'all have a wonderful rest of the weekend and as always,
                    I will continue to maintaining and updating this website to keep it up-to-date!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 06/17/2022, 8:52 PM.
                </p>
                <p id="post-content">
                    Originally, major holidays that lasted for any time period were included on the original version.
                    The new changes that were made recently in the Site Operation policy page now state that major holidays whose break period lasts more than one day
                    (e.g. the Christmas/New Year's break, as well as Easter and Thanksgiving break) will only be considered for website closure.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 06/17/2022, 8:52 PM.
                </p>
                <p id="post-content">
                    Hello everyone. There has been a major change for the Site Operation policy located
                    in the footer below of every page in this site. In it, some details have been revised
                    in the "Holidays" section of the policy.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;