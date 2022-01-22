import React from 'react';

const RecentPosts = () => {
    return (
        <div className="posts-container-intro">
            <h1 id="posts-title-intro" data-aos="fade-down">Recent Announcements</h1>
            <p id="posts-description-intro" data-aos="fade-right" data-aos-delay="500">
                The last three recent posts will be posted here. This page will be updated daily.
                To view all posts, click on "Announcements" on the navigation bar.
            </p>
            <div className="post" id="post-margin" data-aos="fade" data-aos-delay="500">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 01/22/2022, 10:55 AM.
                </p>
                <p id="post-content">
                    Good morning! I am leaving this here to let y'all know that I made it through the first week of this
                    semester fine, even though I have to do 1 or 2 homework assignments that are due next week. I made
                    some bug fixes to this website for components that allow it to work. It should be working by now
                    for some of you. If any issues arise, please contact me.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos="fade" data-aos-delay="500">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 01/17/2022, 5:39 PM.
                </p>
                <p id="post-content">
                    Hello everyone! I am leaving this announcement here to let you all know that starting tomorrow,
                    you will not see post or make updates on this Site as much as during the break. The reason being
                    is because I will be starting my Spring semester tomorrow, and I will most likely be bombarded with
                    homework as soon as the semester starts.
                </p>
                <p id="post-content">
                    If any of you happen to read this, thank you for your patience!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos="fade" data-aos-delay="500">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 01/14/2022, 5:22 AM.
                </p>
                <p id="post-content">
                    Before I forget, I introduced a new policy that can be found in the link
                    "Archival" in the footer of this Site. Again, it is not a legal document,
                    but an outline that represents how the archival process of announcements
                    like these works. If the language in the page happens to confuse you, please
                    let me know, and I will try my best to make some clarifications to the outline
                    to make it easier for you and other users to understand.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;