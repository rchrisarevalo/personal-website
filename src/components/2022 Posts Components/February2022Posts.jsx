import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link, HashRouter } from "react-router-dom";

import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

import NavArchives from "../../NavArchives.jsx";
import NewFooter from "../../NewFooter.jsx";

const February2022Posts = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0);
    })

    return (
        <div class="posts-main">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Announcements (February 2022)</title>
            </Helmet>
            <NavArchives />
            <div className="notification" id="warning-notif-2">
                <div className="notification-content" id="notif-2">
                    <p>Redirecting to contact form page...</p>
                </div>
            </div>
            <div class="posts-container">
                <HashRouter>
                    <Link to="/announcements/2022/January"><IoArrowBackCircleOutline id="posts-arrow-left" title="January 2022 Announcements" size="40px" /></Link>
                    <Link to="/announcements/2022/March"><IoArrowForwardCircleOutline id="posts-arrow-right" title="March 2022 Announcements" size="40px" /></Link>
                </HashRouter>
                <h1 id="posts-title">Announcements (February 2022)</h1>
                <br></br>
                <p id="posts-description">
                    These are all the posts for February 2022 that were archived on this page. None of these posts will
                    be deleted or edited unless I decide otherwise.
                </p>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 02/22/2022, 9:50 AM.
                    </p>
                    <p id="post-content">
                        Hello. I am writing to let you all know that whenever you decide to clear the local storage values from this website
                        to save space on your browser on the "Settings" page and you save the changes, the "Clear" button will be disabled.
                        However, to reactivate the "Clear" button, you have to pick a theme (e.g. dark mode or light mode if you switched from
                        the latter). Once that is done, you save the changes you made and the "Clear" button should be enabled.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 02/18/2022, 2:01 PM.
                    </p>
                    <p id="post-content">
                        I hope you all had a wonderful week! I am writing to this to let y'all know that I am thinking about
                        whether or not I am making a blog. I announced this idea last month and I expect to make a final decision
                        by the end of March. That is all I have for today. Have a good afternoon, everyone!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 02/14/2022, 7:22 AM.
                    </p>
                    <p id="post-content">
                        Happy Valentine's Day, everyone! I hope you all spend time with your loved ones, whether it'd be your family, your friends,
                        partners, or spouses! Have a wonderful rest of the day!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 02/13/2022, 4:11 PM.
                    </p>
                    <p id="post-content">
                        I hope you all had a wonderful weekend and have a great Valentine's Day tomorrow!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 02/13/2022, 4:11 PM.
                    </p>
                    <p id="post-content">
                        In other news, tomorrow is Valentine's Day! I hope you all spend tomorrow with your loved ones in spite of everything
                        that has been going on (the pandemic, school, work, etc.). If you don't see an announcement from me tomorrow, I am either
                        busy with college work and/or spending my day with my loved ones. However, while I may not guarantee it, I will post
                        an announcement here saying "Happy Valentine's Day, everyone!". Again, if this doesn't happen, I will post a similar,
                        but subsequent announcement post-Valentine's Day.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 02/13/2022, 4:11 PM.
                    </p>
                    <p id="post-content">
                        Good afternoon. I am writing this announcement to let you all know that I will continue to update this Site whenever.
                        This week has been pretty busy, not going to lie. However, during the weekend, I found some time to update the color
                        of the scroll bar to make it more visible regardless of the theme color (light or dark theme that was re-introduced
                        last week and is located in the Settings page).
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 02/05/2022, 3:00 PM.
                    </p>
                    <p id="post-content">
                        I will continue to make improvements whenever I had time. It seems like I had time today to make these improvements and add a new Settings
                        page that will allow for the user to decide their experience on this Site. Have a wonderful afternoon, everyone!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 02/05/2022, 3:00 PM.
                    </p>
                    <p id="post-content">
                        In other, but unfortunate news, I have sadly had to take down the contact form. From what I have seen, not many people
                        have been using it since its introduction. Another reason why I took down the link is due to security reasons. People
                        with malicious intentions might find a loophole with the form and send spam messages that contain links to malicious
                        sites that I am in no part supporting.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 02/05/2022, 3:00 PM.
                    </p>
                    <p id="post-content">
                        Good afternoon! I made some significant changes and added a few features (and Settings page) to this Site. Some of these features include
                        the ability to clear your local storage on this website only, which will save certain features of this site (such as
                        the one-time message that you get when you first visit this site), a dark/light mode that I have scrapped months earlier
                        (and now is available after a few improvements), and the ability to save these changes by simply clicking a button that
                        will allow you to refresh these changes. How cool is that?
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 02/04/2022, 7:19 PM.
                    </p>
                    <p id="post-content">
                        Also, I am pretty busy right now. The writing of these announcements may seem rushed, but again, the reason is due
                        to college, and homework and tests are already piling on top of my plate fast. I will do my very best to overcome
                        this heavy workload that is giving me little time to do other things outside of school, like spending time with
                        family and friends. Feel free to contact me if you have any questions!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
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
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 02/01/2022, 12:00 AM.
                    </p>
                    <p id="post-content">
                        Good morning, everyone! It's going to be a great month as Valentine's day is approaching! Anyways, this is the first post for this month, so
                        there is not much except the aforementioned greeting. Have a great rest of the week!
                    </p>
                </div>
            </div>
            <NewFooter />
        </div>
    )
}

export default February2022Posts;