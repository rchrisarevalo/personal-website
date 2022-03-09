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
                    By: Ruben Christopher Arevalo. Posted on 03/09/2022, 1:20 AM.
                </p>
                <p id="post-content">
                    Here is the link to my CV website: <a href="https://rchrisarevalo.github.io/cv-website" target="_blank" rel="noreferrer"><b>https://rchrisarevalo.github.io/cv-website</b></a>
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/09/2022, 1:20 AM.
                </p>
                <p id="post-content">
                    I might write a short outline similar to the Archive and Website Operation policies that are included
                    on this site, but for how my work is used, sometime in the future. If there are issues or questions you'd like to ask me,
                    please feel free to contact me using the contact form on my CV website. The contact form link on this
                    Site has been disabled until further notice.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/09/2022, 1:20 AM.
                </p>
                <p id="post-content">
                    I updated the copyright notice that is included in the footer below for each page on this website.
                    It now states that the site and the contents that it contains, most notably the images I uploaded
                    onto this Site, are not to be copied through any unauthorized means.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;