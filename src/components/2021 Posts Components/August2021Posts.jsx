import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, HashRouter } from "react-router-dom";

import { IoArrowForwardCircleOutline } from "react-icons/io5";

import Nav from "../../Nav.jsx";
import NewFooter from "../../NewFooter.jsx";

const August2021Posts = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div className="posts-main">
            <Nav />
            <div className="notification" id="warning-notif-2">
                <div className="notification-content" id="notif-2">
                    <p>Redirecting to contact form page...</p>
                </div>
            </div>
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Announcements (August 2021)</title>
            </Helmet>
            <div className="notification" id="warning-notif-2">
                <div className="notification-content" id="notif-2">
                    <p>Redirecting to contact form page...</p>
                </div>
            </div>
            <div className="posts-container">
                <HashRouter>
                    <Link to="/announcements/2021/September"><IoArrowForwardCircleOutline id="posts-arrow-right" title="September 2021 Announcements" size="40px"/></Link>
                </HashRouter>
                <h1 id="posts-title">Announcements (August 2021)</h1>
                <br></br>
                <p id="posts-description">
                    These are all the posts for August 2021 that were archived on this page. None of these posts will
                    be deleted or edited unless I decide otherwise.
                </p>
                <p id="posts-description">
                    Last modified: 9/21/2021 at 4:34 PM. Reason: duplicate post removed.
                </p>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 8/31/2021 at 6:54 PM.
                    </p>
                    <p id="post-content">
                        Today is the last day of the month! I am going to make the September select option
                        available tomorrow by 12:30 AM or earlier!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 8/29/2021 at 11:25 PM.
                    </p>
                    <p id="post-content">
                        Hello everyone:
                    </p>
                    <p id="post-content">
                        As you may have noticed, the UI for the "Works" section in the "About Me" page has been updated,
                        along with the mobile version of this site as well. I decided to organize it a little more by
                        moving the photo of my works to one side and a brief description of it one the other. That way,
                        it looks a little bit more organized and professional for those visiting the site.
                    </p>
                    <p id="post-content">
                        Aside from that, there is nothing new. Just a reminder that 30 day old posts will be archived
                        starting on <b><i>September 7, 2021</i></b>.
                    </p>
                    <p id="post-content">
                        Thank you everyone, and have a great evening!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 8/25/2021 at 10:36 AM.
                    </p>
                    <p id="post-content">
                        Hi, y'all! I regret to inform everyone using this website that the dark/light theme toggler
                        has been removed. I made this decision because I thought a darker theme would be more
                        appealing and interesting for those who visit, in addition to most internet users that preferred
                        a dark mode more as the years have passed by. I replaced the dark/light theme icon with a
                        message icon, which will take you to a contact form (which I am still creating) that will
                        allow you to ask questions instead of having to use the report form to do so.
                    </p>
                    <p id="post-content">
                        If you have any questions, please feel free to contact me through my email!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 8/23/2021 at 10:21 AM.
                    </p>
                    <p id="post-content">
                        I am posting this to let y'all know that today is the first time I go back to college
                        in person since the pandemic started last March. What this means is that I won't be able
                        to update this website regularly like I used to during the summer. So expect this website
                        to be updated every 2-3 weeks or so (if time permits). Thank you for understanding!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 8/22/2021 at 8:50 AM.
                    </p>
                    <p id="post-content">
                        Good evening, everyone! I am happy to announce that I have made some new updates to this
                        site. I included a notificiation like message that pops up whenever you interact with one
                        of my works displayed on the "About Me" page. Another fun fact about this update (even though
                        it's relatively minor), is that I added a close button for the update message in the "About Me"
                        page. I will continue to update this website as soon as I have time since I am about to start
                        my third year of college. Thank you and have a great evening!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 8/19/2021 at 3:41 PM.
                    </p>
                    <p id="post-content">
                        Hi everyone! If any of you have seen my last post, I will retract my policy to delete
                        30 day old posts. I will instead archive these posts into categories sorted
                        by months. This will go in effect on <b>September 7</b>, the same date I originally
                        intended to delete my posts after the specific deadline I mentioned above.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 8/16/2021 at 7:42 PM.
                    </p>
                    <p id="post-content">
                        I have already included a page directory below for the "Posts" page.
                        Each page will have 5 posts. The 30 day post removal policy for
                        posts matching this deadline will take effect on <b>September 7</b>.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 8/16/2021 at 6:29 PM.
                    </p>
                    <p id="post-content">
                        Hi everyone!
                    </p>
                    <p id="post-content">
                        I am just letting y'all know that I am going to update the "Posts" page and move the Posts
                        to separate pages (5 posts per page) to avoid any overflow issues.
                    </p>
                    <p id="post-content">
                        Thank you, and have a great day!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 8/16/2021 at 3:29 AM.
                    </p>
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
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 8/10/2021 at 8:28 PM.
                    </p>
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
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 8/10/2021 at 12:00 AM.
                    </p>
                    <p id="post-content">
                        Hi everyone! The update message has been taken down after
                        appearing on the home screen after three days, as I
                        intended. I am going to include the latest 3 posts on the home
                        page so all of y'all can be up to date with how the website is
                        being operated.
                    </p>
                    <p id="post-content">
                        Anyways, have a wonderful night and have a great rest of the day
                        tomorrow!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 8/8/2021 at 4:56 PM.
                    </p>
                    <p id="post-content">
                        And the post feature works!
                    </p>
                    <p id="post-content">
                        Keep in mind that I am the only one that will be posting on this website, sort of like my
                        own personal blog to share any updates I will be making.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 8/8/2021 at 4:55 PM.
                    </p>
                    <p id="post-content">
                        Hi everyone! This is a test post to keep y'all updated on upcoming updates and
                        new features. I don't know how long this post will be, so I will try my best to
                        write a long one like this (and I am deliberately stalling to see if this feature
                        works).
                    </p>
                </div>
            </div>
            <NewFooter />
        </div>
    );
}

export default August2021Posts;