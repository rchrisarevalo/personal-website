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
                    By: Ruben Christopher Arevalo. Posted on 04/08/2022, 9:37 PM.
                </p>
                <p id="post-content">
                    Today is the last day this website will be available until I take a leave of absence for 3 weeks. I wish you all a great rest of the
                    month and I will see you on April 30!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 04/07/2022, 5:15 PM.
                </p>
                <p id="post-content">
                    That is everything I have to say. Thank you for your patience and I hope to re-open this website once the timeframe has
                    passed. Thank you and have a great day!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 04/07/2022, 5:15 PM.
                </p>
                <p id="post-content">
                    As this is a matter of education, my education in fact, these circumstances qualify for the "Personal Affairs" section to be
                    invoked. This is probably the first time I had to use the Site Operation policy in times like these. In contrast to the section
                    stating that the website won't be necessarily shut down, I am going to have to, at least for the next two to three weeks.
                    This change will take effect on Saturday, April 9, midnight.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;