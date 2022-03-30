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
                    By: Ruben Christopher Arevalo. Posted on 03/30/2022, 5:52 PM.
                </p>
                <p id="post-content">
                    I am posting this as a reminder that this month's announcements on this page will be cleared tomorrow
                    before midnight. New announcements for April will be posted following the Archival process of this month's
                    announcements. Have a great day!
                </p>
            </div> 
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/29/2022, 8:41 AM.
                </p>
                <p id="post-content">
                    I hope I will have enough time to continue to update this website. Anyways, thank you all for your patience. Have a
                    wonderful morning and please stay safe!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/29/2022, 8:41 AM.
                </p>
                <p id="post-content">
                    In other news, I will announce my decision as to whether or not to create a blog next month. Originally, I was going to
                    announce by the end of this month. However, as I stated before, I would not able to do so right now because I have to deal
                    with the last few weeks of this semester. Even though by the end of April I would be prepping for finals, there won't be
                    much homework aside from a project that I have to work on before the end of that month.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/29/2022, 8:41 AM.
                </p>
                <p id="post-content">
                    Good morning, everyone! I want to let you all know that I am doing well. Last week has been really busy, as there was
                    back-to-back homework assignments and a test I had to take. The workload should be a little lighter this week, which
                    means that I might be able to modify this website and archive this month's announcements before the 31st.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;