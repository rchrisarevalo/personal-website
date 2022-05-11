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
                    By: Ruben Christopher Arevalo. Posted on 05/11/2022, 7:01 PM.
                </p>
                <p id="post-content">
                    Those are all the announcements I have for today. Thank you and have a wonderful evening and great rest of the week!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/11/2022, 7:01 PM.
                </p>
                <p id="post-content">
                    In other news, new changes to the user interface in the "Settings" page and in the footer were made a few days ago and today respectively, especially in the mobile version.
                    When one hovers over the links in the footer, in the "Site Operation" link, the text tends to get out of its borders, which
                    makes the Site appear ugly and uncared for. Luckily, those problems have been solved, and the site should appear a little bit normal than from before.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 05/11/2022, 7:01 PM.
                </p>
                <p id="post-content">
                    Good evening, everyone! I have some great news to share! As you can see in the bottom of the "About Me" page, there is a
                    new contact form up and ready to go! I will most likely move the contact form to a new page at a future date.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;