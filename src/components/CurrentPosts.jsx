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
                    To view past announcements, click on the link that will take you to the <Link to="/archives"><b>Archives</b></Link> page
                    (or the link on the navigation bar). The Archives page gets updated every month for the duration of this Site.
                </i>
            </p>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 06/23/2022, 11:41 PM.
                </p>
                <p id="post-content">
                    If there are any problems, please let me know by contacting me in the "Contact Me" page. Have a wonderful evening!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 06/23/2022, 11:41 PM.
                </p>
                <p id="post-content">
                    Furthermore, the automatic resizing of the window in the mobile version of the website has been corrected.
                    The font size has been adjusted to limit the resizing bug.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 06/23/2022, 11:41 PM.
                </p>
                <p id="post-content">
                    I have made some changes to the user interface of the page. The navigation bar has been changed, 
                    as well as the color of the buttons in the popup messages that appear whenever one wants to
                    change the settings for the website.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 06/23/2022, 11:41 PM.
                </p>
                <p id="post-content">
                    Hello everyone! I am here to share some of the following updates that I have made today.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 06/17/2022, 8:52 PM.
                </p>
                <p id="post-content">
                    Anyways, that was everything I wanted to show you all. I hope y'all have a wonderful rest of the weekend and as always,
                    I will continue to maintaining and updating this website to keep it up-to-date!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 06/17/2022, 8:52 PM.
                </p>
                <p id="post-content">
                    Originally, major holidays that lasted for any time period were included on the original version.
                    The new changes that were made recently in the Site Operation policy page now state that major holidays whose break period lasts more than one day
                    (e.g. the Christmas/New Year's break, as well as Easter and Thanksgiving break) will only be considered for website closure.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 06/17/2022, 8:52 PM.
                </p>
                <p id="post-content">
                    Hello everyone. There has been a major change for the Site Operation policy located
                    in the footer below of every page in this site. In it, some details have been revised
                    in the "Holidays" section of the policy.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 06/11/2022, 3:22 PM.
                </p>
                <p id="post-content">
                    In addition, I will be developing a new, small feature for this website soon. I still
                    don't have an idea of what it is going to be, but eventually I will get there! Thank you
                    and have a wonderful weekend y'all!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 06/11/2022, 3:22 PM.
                </p>
                <p id="post-content">
                    I hope you all are having a wonderful weekend! I am leaving this here to let y'all know that my mini-break will
                    be over in 4 days. After that, I will be back to fully maintaining this website.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 06/08/2022, 1:20 AM.
                </p>
                <p id="post-content">
                    Good morning (or evening) everyone! I want to announce that I added new images in the "Portfolio"
                    section in the "About Me" page! Go ahead and take a look of the photos I took! Please let me know
                    if there any issues.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 06/02/2022, 6:01 AM.
                </p>
                <p id="post-content">
                    Fortunately, that bug managed to be fixed, and it is safe to say that the progress countdown
                    feature should be working as intended. If there are any issues, feel free to contact me
                    by clicking the "Contact Me" link in the navigation bar! Have a wonderful rest of the day!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 06/02/2022, 6:01 AM.
                </p>
                <p id="post-content">
                    Good morning, everyone! I know it's a little bit early for me to be posting announcements
                    at this time. I am writing this announcement to let y'all know that I made some fixes to
                    the graduation countdown feature in the "About Me" page. Apparently, while I was testing
                    the countdown feature, the progress percentage that is shown below the progress bar
                    gave me unusual numbers, such as over 1000% whenever I set today's date a day before
                    the graduation date.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 06/01/2022, 12:00 AM.
                </p>
                <p id="post-content">
                    Good evening, everyone! This announcement will be the first one for this month. As usual,
                    I am going to continue updating this website to keep it in top shape! Anyways, that will
                    be it for today, and I hope you all have a wonderful rest of the week!
                </p>
            </div>
        </div>
    )
}

export default CurrentPosts;