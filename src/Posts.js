import React from 'react';

import Nav from "./Nav";
import NewFooter from "./NewFooter";

const Posts = () => {
    return (
        <div className = "posts-main">
            <Nav/>
            <div className = "posts-container">
                <h1 id = "posts-title">Posts</h1>
                <br></br>
                <p id = "posts-description">
                    This is the page where I will be posting regular updates that are being made to this site.
                    Old posts will be removed in 30 days. Any posts that have not reached this deadline yet
                    will stay on this page.
                </p>
                <div className="post">
                    <p id="post-content">
                        I have introduced a new UI (User Interface) for this website. It might look the same,
                        but there a few differences with this update. For instance, there is now a loading
                        screen when you first enter the page. In addition, the content in the "Works" page 
                        has been moved to the "About Me" page. This was due to the difficulties in styling
                        the page after I integrated the Bootstrap spinner components for the loading page.
                    </p>
                    <p id="post-content">
                        If you happen to have any issues, please feel free to contact me by clicking the "Report"
                        button, which can be found on the navigation bar of both the web and mobile versions of
                        this site.
                    </p>
                    <p id = "post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id = "post-date">
                        Posted on 8/10/2021 at 8:28 PM.
                    </p>
                </div>
                <div className = "post">
                    <p id = "post-content">
                        Hi everyone! The update message has been taken down after
                        appearing on the home screen after three days, as I
                        intended. I am going to include the latest 3 posts on the home
                        page so all of y'all can be up to date with how the website is
                        being operated.
                    </p>
                    <p id = "post-content">
                        Anyways, have a wonderful night and have a great rest of the day
                        tomorrow!
                    </p>
                    <p id = "post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id = "post-date">
                        Posted on 8/10/2021 at 12:00 AM.
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
            </div>
            <NewFooter/>
        </div>
    )
}

export default Posts;