import React from 'react';

const Posts = () => {
    return (
        <div className = "posts-container">
            <h1 id = "posts-title">Posts</h1>
            <br></br>
            <p id = "posts-description">
                This is the page where I will be posting regular updates that are being made to this site.
                Old posts will be removed in 30 days. Any posts that have not reached this deadline yet
                will stay on this page.
            </p>
            <div className = "post">
                <p id = "post-content">
                    Hi everyone! This is a test post to keep y'all updated on upcoming updates and
                    new features. I don't know how long this post will be, so I will try my best to
                    write a long one like this (and I am deliberately stalling to see if this feature
                    works).
                </p>
                <p id = "post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id = "post-date">
                   Posted on 8/8/2021 at 4:55 PM.
                </p>
            </div>
            <div className = "post">
                <p id = "post-content">
                    And the post feature works!
                </p>
                <p id = "post-content">
                    Keep in mind that I am the only one that will be posting on this website, sort of like my
                    own personal blog to share any updates I will be making.
                </p>
                <p id = "post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id = "post-date">
                    Posted on 8/8/2021 at 4:56 PM.
                </p>
            </div>
        </div>
    )
}

export default Posts;