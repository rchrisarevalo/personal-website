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
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 02/04/2022, 7:19 PM.
                </p>
                <p id="post-content">
                    Also, I am pretty busy right now. The writing of these announcements may seem rushed, but again, the reason is due
                    to college, and homework and tests are already piling on top of my plate fast. I will do my very best to overcome
                    this heavy workload that is giving me little time to do other things outside of school, like spending time with
                    family and friends. Feel free to contact me if you have any questions!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 02/04/2022, 7:19 PM.
                </p>
                <p id="post-content">
                    I am leaving this here to let y'all know that a winter storm has approached my state of Texas since yesterday. However,
                    site operations will continue to run as planned, as it has not affected the area where I live (in terms of blackouts and
                    other damages). I will continue to monitor the progress of the storm, as temperatures are expected to drop a little more
                    lower than yesterday's. If there happened to be a blackout and damage as a result of it, then I will shut down this Site
                    for about a week or two depending on the circumstances and in accordance to the Site Operation policy implemented last
                    month.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 02/01/2022, 12:00 AM.
                </p>
                <p id="post-content">
                    Good morning, everyone! It's going to be a great month as Valentine's day is approaching! Anyways, this is the first post for this month, so
                    there is not much except the aforementioned greeting. Have a great rest of the week!
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;