import React from 'react';

const RecentPosts = () => {
    return (
        <div className="posts-container-intro">
            <h1 id="posts-title-intro">Recent Announcements</h1>
            <p id="posts-description-intro">
                The last three recent posts will be posted here. This page will be updated daily.
                To view all posts, click on "Announcements" on the navigation bar.
            </p>
            <div className="post" id="post-margin">
                <p id="post-content">
                    As you all may have noticed, another font change has occurred. I did this because I thought
                    that the old font used for the previous 2-3 months was boring, and I thought it was time for
                    a change. But it looks good, and hopefully y'all enjoy it as well!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 12/06/2021 at 11:43 AM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    Anyways, that's all I have to say at the moment. Again, if you have any questions or suggestions
                    as to how to update this site, please let me know by clicking on the "Contact Me" button on the
                    top right corner of the page (or the paper plane icon in the mobile version of this site).
                </p>
                <p id="post-content">
                    Thank you and have a great rest of the evening!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 12/03/2021 at 9:40 PM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    After that's all said and done, I will focus on providing a new user interface for this website
                    sometime during January or February, if time permits, as I will be back in school for another
                    semester during that time.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 12/03/2021 at 9:40 PM.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;