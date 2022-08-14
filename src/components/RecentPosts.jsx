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
                    By: Ruben Christopher Arevalo. Posted on 08/14/2022, 4:11 PM.
                </p>
                <p id="post-content">
                    I'll let y'all know when it is ready so that way, everything comes out the way it is supposed to.
                    There will still be bugs, but at a reduced level. That is everything for today. Thank y'all for your
                    patience and have a wonderful Sunday!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 08/14/2022, 4:11 PM.
                </p>
                <p id="post-content">
                    More fixes will be included in the next week or the following week, with more focus being put in
                    how long has it been since the previous update, as the section does not take minutes into consideration.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 08/14/2022, 4:11 PM.
                </p>
                <p id="post-content">
                    Good afternoon. I am writing this to announce that I have made a few changes to the progress countdown
                    section in the "About Me" page. Some of these changes include fixing when the counter should update, as well
                    as upgrading the design of the progress countdown feature itself.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;