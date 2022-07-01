import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { IoArrowBackCircleOutline } from "react-icons/io5";

import NavArchives from "../../NavArchives.jsx";
import NewFooter from "../../NewFooter.jsx";

const June2022Posts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div class="posts-main">
            <Helmet>
                <title>
                    Ruben C. Arevalo - Personal Website - Announcements (June 2022)
                </title>
            </Helmet>
            <NavArchives />
            <div class="posts-container">
                <Link to="/announcements/2022/May">
                    <IoArrowBackCircleOutline
                        id="posts-arrow-left"
                        title="May 2022 Announcements"
                        size="40px"
                    />
                </Link>
                <h1 id="posts-title">Announcements (June 2022)</h1>
                <br></br>
                <p id="posts-description">
                    These are all the posts for June 2022 that were archived on this
                    page. None of these posts will be deleted or edited unless I decide
                    otherwise.
                </p>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 06/30/2022, 11:29 PM.
                    </p>
                    <p id="post-content">
                        Anyways, I hope you all had a wonderful June. I am going to be posting less often as I will be working most of the time
                        until the end of July, in addition having to juggle both work and school. For my education, I am a few steps away from
                        attaining my Bachelor's Degree in Computer Engineering. How cool is that? That will be all for this evening.
                        Please stay safe, y'all!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 06/30/2022, 11:29 PM.
                    </p>
                    <p id="post-content">
                        In other news, this will be the last post of the month. Like I said in my previous post, I am currently working on
                        making sure that some aspects of my website automatically update themselves instead of having to be manually
                        configured everytime should the circumstances change.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 06/30/2022, 11:29 PM.
                    </p>
                    <p id="post-content">
                        Good evening, everyone! I am currently working on making sure that some components of this website (such as the progress bar and my age)
                        are automatically updated. I decided to work on updating the state of the website automatically as it allows me to save time on manually
                        configuring everything like I would normally do. I have already released a new feature a few days ago whereas the progress bar will
                        automatically update itself every time at 6 AM. Furthermore, the number of hours it has been since it was last updated will also update
                        automatically, and is included below the progress bar and the progress percentage.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 06/26/2022, 12:40 AM.
                    </p>
                    <p id="post-content">
                        That is everything I have to share for today. Have a wonderful rest of the weekend
                        and see you all later!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 06/26/2022, 12:40 AM.
                    </p>
                    <p id="post-content">
                        Good morning, everyone! I am writing this to let y'all know that on the contact form,
                        anyone can resize the text box to any size they desire. I decided to include it back
                        again as some users might have difficulty reading the contents of their message.
                    </p>
                </div>
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
            <NewFooter />
        </div>
    );
};

export default June2022Posts;