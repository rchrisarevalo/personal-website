import React from 'react';

import Nav from "./Nav.jsx";
import NewFooter from "./NewFooter.jsx";
import {Link} from "react-router-dom";

const Posts = () => {
    return (
        <div className = "posts-main">
            <Nav/>
            <div className = "posts-container">
                <h1 id = "posts-title">Posts</h1>
                <br></br>
                <p id = "posts-description">
                    This is the page where I will be posting regular updates that are being made to this site.
                    Old posts will be <b>archived</b> in 30 days. Any posts that have not reached this deadline yet
                    will stay on this page.
                </p>
                <div className="post">
                    <p id = "post-content">
                        Hi everyone! If any of you have seen my last post, I will retract my policy to delete
                        30 day old posts. I will instead archive these posts into categories sorted
                        by months. This will go in effect on <b>September 7</b>, the same date I originally
                        intended to delete my posts after the specific deadline I mentioned above.
                    </p>
                    <p id = "post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id = "post-date">
                        Posted on 8/19/2021 at 3:41 PM.
                    </p>
                </div>
                <div className="post">
                    <p id = "post-content">
                        I have already included a page directory below for the "Posts" page.
                        Each page will have 5 posts. The 30 day post removal policy for
                        posts matching this deadline will take effect on <b>September 7</b>.
                    </p>
                    <p id = "post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id = "post-date">
                        Posted on 8/16/2021 at 7:42 PM.
                    </p>
                </div>
                <div className="post">
                    <p id="post-content">
                        Hi everyone!
                    </p>
                    <p id = "post-content">
                        I am just letting y'all know that I am going to update the "Posts" page and move the Posts
                        to separate pages (5 posts per page) to avoid any overflow issues.
                    </p>
                    <p id="post-content">
                        Thank you, and have a great day!
                    </p>
                    <p id = "post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id = "post-date">
                        Posted on 8/16/2021 at 6:29 PM.
                    </p>
                </div>
                <div className="post">
                    <p id="post-content">
                        Hello everyone! Today, I have made several updates regarding this website.
                    </p>
                    <p id="post-content">
                        Once again, I made another UI update. This time, the font has changed
                        for the description for each page! Pretty cool, right? I know it sounds
                        like I am bragging, but I am going to get to explaining the real update 
                        right now.
                    </p>
                    <p id="post-content">
                        There have been some issues with the routing of this website, particularly
                        when someone tries to reload a page and instead end up with an "Error 404"
                        message from the server.
                    </p>
                    <p id="post-content">
                        Fortunately, I fixed it, and it should be able to run the way I intended it
                        to be so that all of you can interact with this website with almost no bugs
                        whatsoever. I also added my own custom "Error 404" message so that way it
                        feels more personalized for the site!
                    </p>
                    <p id="post-content">
                        If you have any issues, please feel free to contact me!
                    </p>
                    <p id = "post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id = "post-date">
                        Posted on 8/16/2021 at 3:29 AM.
                    </p>
                </div>
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
                <div class="post-pages">
                    <li>Pages (filtered from recent to past posts):</li>
                    <li><Link to="/posts">1</Link></li>
                    <li><Link to="/posts/2">2</Link></li>
                </div>
            </div>
            <NewFooter/>
        </div>
    )
}

export default Posts;