import React from 'react';
import { Link } from 'react-router-dom';

const CurrentPosts = () => {
    return (
        <div className="posts-container">
            <h1 id="posts-title">Announcements</h1>
            <br></br>
            <p id="posts-description">
                This is the page where I will be posting regular updates that are being made to this site.
                Old announcements will be <b>archived</b> on the last day of each month. This means that after the
                last day of each month has come to pass, then this whole page (minus the archive page) will
                be wiped out completely and be replaced with announcements for the new month.
            </p>
            <p id="posts-description">
                <i>
                    To view past announcements, click on the link that will take you to the <Link to="/archives">Archives</Link> page
                    (or the link on the navigation bar). The Archives page gets updated every month for the duration of this Site.
                </i>
            </p>
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
    )
}

export default CurrentPosts;