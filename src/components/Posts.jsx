import React from 'react';

import Nav from "../Nav.jsx";
import NewFooter from "../NewFooter.jsx";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Posts = () => {
    return (
        <div className = "posts-main">
            <Nav/>
            <div className = "notification" id="warning-notif-2">
                <div className = "notification-content" id="notif-2">
                    <p>A contact form is being set up. I sincerely apologize for the delay.</p>
                </div>
            </div>
            <div className = "posts-container">
                <h1 id = "posts-title">My Posts</h1>
                <br></br>
                <div className="posts-catalog">
                    <div className = "posts-month">
                        <DropdownButton
                            id="dropdown-button-dark-example2"
                            variant="secondary"
                            menuVariant="dark"
                            title="2021"
                            className="mt-2 rounded disabled"
                        >
                            <Dropdown.Item href="#/posts/2021/august" active>
                            August
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2" disabled>September</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" disabled>October</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <br></br>
                <p id = "posts-description">
                    This is the page where I will be posting regular updates that are being made to this site.
                    Old posts will be <b>archived</b> in 30 days. Any posts that have not reached this deadline yet
                    will stay on this page.
                </p>
                <div className="post">
                        <p id = "post-content">
                            Hi, y'all! I regret to inform everyone using this website that the dark/light theme toggler
                            has been removed. I made this decision because I thought a darker theme would be more
                            appealing and interesting for those who visit, in addition to most internet users that preferred
                            a dark mode more as the years have passed by. I replaced the dark/light theme icon with a
                            message icon, which will take you to a contact form (which I am still creating) that will 
                            allow you to ask questions instead of having to use the report form to do so.
                        </p>
                        <p id = "post-content">
                            If you have any questions, please feel free to contact me through my email!
                        </p>
                        <p id = "post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id = "post-date">
                            Posted on 8/25/2021 at 10:36 AM.
                        </p>
                </div>
                <div className="post">
                        <p id = "post-content">
                            I am posting this to let y'all know that today is the first time I go back to college
                            in person since the pandemic started last March. What this means is that I won't be able
                            to update this website regularly like I used to during the summer. So expect this website
                            to be updated every 2-3 weeks or so (if time permits). Thank you for understanding!
                        </p>
                        <p id = "post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id = "post-date">
                            Posted on 8/23/2021 at 10:21 AM.
                        </p>
                </div>
                <div className="post">
                    <p id = "post-content">
                        Good evening, everyone! I am happy to announce that I have made some new updates to this
                        site. I included a notificiation like message that pops up whenever you interact with one 
                        of my works displayed on the "About Me" page. Another fun fact about this update (even though
                        it's relatively minor), is that I added a close button for the update message in the "About Me"
                        page. I will continue to update this website as soon as I have time since I am about to start
                        my third year of college. Thank you and have a great evening!
                    </p>
                    <p id = "post-content">
                        -- Ruben Christopher Arevalo
                    </p>
                    <p id = "post-date">
                        Posted on 8/22/2021 at 8:50 PM.
                    </p>
                </div>
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