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
                <p id="post-content">
                    Before I forget, I introduced a new policy that can be found in the link
                    "Archival" in the footer of this Site. Again, it is not a legal document,
                    but an outline that represents how the archival process of announcements
                    like these works. If the language in the page happens to confuse you, please
                    let me know, and I will try my best to make some clarifications to the outline
                    to make it easier for you and other users to understand.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 01/14/2022 at 5:22 AM.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos="fade" data-aos-delay="500">
                <p id="post-content">
                    I made a typo while I made a change to the Website Operation policy. I forgot to update the
                    date where it was last modified (3 days ago at the time of writing this announcement). It
                    should be fixed now.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 01/14/2022 at 5:22 AM.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos="fade" data-aos-delay="500">
                <p id="post-content">
                    A minor change to the Website Operation policy has been made. There was a typo in the last description
                    near the footer in the page. That mistake has been corrected.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 01/06/2022 at 1:40 AM.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;