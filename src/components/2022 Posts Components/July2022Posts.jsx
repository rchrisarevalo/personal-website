import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

import NavArchives from "../../NavArchives.jsx";
import NewFooter from "../../NewFooter.jsx";

const July2022Posts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    const [dateState, setDateState] = useState(new Date())

    setTimeout(() => {
        setDateState(new Date())
    }, 1000)

    return (
        <div class="posts-main">
            <Helmet>
                <title>
                    Ruben C. Arevalo - Personal Website - Announcements (July 2022)
                </title>
            </Helmet>
            <NavArchives />
            <div class="posts-container">
                <Link to="/announcements/2022/June">
                    <IoArrowBackCircleOutline
                        id="posts-arrow-left"
                        title="June 2022 Announcements"
                        size="40px"
                    />
                </Link>
                {Date.now() >= new Date(2022, 8, 1, 0, 0, 0) &&
                    <Link to="/announcements/2022/August">
                        <IoArrowForwardCircleOutline
                            id="posts-arrow-right"
                            title="August 2022 Announcements"
                            size="40px"
                        />
                    </Link>
                }
                <h1 id="posts-title">Announcements (July 2022)</h1>
                <br></br>
                <p id="posts-description">
                    These are all the posts for July 2022 that were archived on this
                    page. None of these posts will be deleted or edited unless I decide
                    otherwise.
                </p>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/31/2022, 12:17 AM.
                    </p>
                    <p id="post-content">
                        This will be the last announcement for the month. As usual, I am going to wipe this page clean once
                        the first day of the new month has already approached. Thank you all and have a wonderful rest of the weekend!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/30/2022, 1:22 AM.
                    </p>
                    <p id="post-content">
                        Now that I am done rambling (lol), I want to wish you all a great weekend! Please enjoy it and stay safe everyone!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/30/2022, 1:22 AM.
                    </p>
                    <p id="post-content">
                        I am planning to expand my horizons and create new projects either later this year, or next year, as I plan to build a blogging website whenever I have
                        the time to do so. I am going to be very busy starting this Fall, as it is my last year of college, and I have to stay absolutely
                        focused on my academic career if I want to graduate on time!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/30/2022, 1:22 AM.
                    </p>
                    <p id="post-content">
                        Now that I am done delivering the daily announcements, I want to acknowledge that my website is already a year old now!
                        I first created this website since June 2021, which was last year at the time of writing this announcement. This site
                        has come so far in terms of design and improvements, that I cannot wait for what the future has in store!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/30/2022, 1:22 AM.
                    </p>
                    <p id="post-content">
                        In other news, this will also be one of the last few announcements for this month before I clear this page as part of the
                        archival process.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/30/2022, 1:22 AM.
                    </p>
                    <p id="post-content">
                        Hi everyone! I know it's been a week since I last posted an announcement on this website. Anyways, I am just writing this to
                        let y'all know that I am doing well! I am pretty busy with my summer courses, and like always, there is a lot of work!
                        Despite the immense workload, I am ready to give it my very best!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/21/2022, 7:08 PM.
                    </p>
                    <p id="post-content">
                        That will be for all this evening! I will be a little bit busy for the rest of the month as I have school,
                        and I have to put my focus into that at the moment. Despite that, I hope to continue making changes to this
                        website whenever I can. Have a wonderful rest of the day, everyone!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/21/2022, 7:08 PM.
                    </p>
                    <p id="post-content">
                        In addition, I added new tips on the "Contact Me" page that tell you what you can and cannot do when
                        sending a message. This is to ensure that no spam or other malicious content passes through.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/21/2022, 7:08 PM.
                    </p>
                    <p id="post-content">
                        Good evening, everyone! I am happy to announce that I added a character counter to the contact form.
                        I added a limit on the amount of characters when one types their message on the form when it was
                        first established. However, now it's possible to know how many characters you have left when typing
                        out your message!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/16/2022, 2:24 AM.
                    </p>
                    <p id="post-content">
                        I will continue to maintain this website whenever I have time and when the chance occurs, as I will be busy these
                        next couple of weeks due to school and work, mainly the former. That will be all for today. Thank you and have a
                        wonderful weekend, everyone!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/16/2022, 2:24 AM.
                    </p>
                    <p id="post-content">
                        The last item on the list is not necessarily a new feature, but rather, an improvement to an already existing feature.
                        That's right. Whenever one enters this website, the theme will automatically configure itself depending on how you set
                        up your OS (operating system) settings for your devices, whether it'd be your phone, PC, etc. However, I can't
                        guarantee that it will work as expected, as bugs can appear at any time.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/16/2022, 2:24 AM.
                    </p>
                    <p id="post-content">
                        Huge announcement! The following updates have been made during the course of the week:
                        <br />
                        <li>Bug fixes to the UI and the state of the website.</li>
                        <li>A new feature added to the "Settings" page.</li>
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/10/2022, 9:31 PM.
                    </p>
                    <p id="post-content">
                        Just another announcement to let y'all know that I made another round of bug fixes
                        to the progress countdown feature. Furthermore, I also added a countdown for the
                        amount of time left before 6 AM when it automatically updates. That's all! Have a
                        wonderful day!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/10/2022, 1:23 AM.
                    </p>
                    <p id="post-content">
                        I am still working on making sure that some aspects of this website, as I have stated
                        in previous announcements, are automatically updated (for instance, the progress
                        countdown feature). That will be all for this evening. Thank you everyone, and have a
                        wonderful rest of the weekend!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/10/2022, 1:23 AM.
                    </p>
                    <p id="post-content">
                        Good evening, everyone! For the past week, I have been making bug fixes on the
                        progress countdown feature in the "About Me" page (the first page the user is
                        directed to when entering the website the first time). Everything should be fixed,
                        but I cannot make any promises when I say that as other bugs can arise in the
                        future.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/03/2022, 8:34 PM.
                    </p>
                    <p id="post-content">
                        If you have any questions about anything pertaining to the site, please
                        feel free to fill the contact form by clicking the "Contact Me"
                        link in the navigation bar on the top, or by clicking the three
                        dashed lines in the mobile version of this site.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/03/2022, 8:34 PM.
                    </p>
                    <p id="post-content">
                        Furthermore, I will be adding some new features sometime soon in a few months
                        or so. That will be all the announcements for this evening.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 07/03/2022, 8:34 PM.
                    </p>
                    <p id="post-content">
                        Good evening. This will be the first announcement for this month. As I have
                        stated in the previous three announcements, I will be updating this website
                        so that certain components will be updated automatically instead of being
                        manually configured (i.e progress bar, number of days left until graduation,
                        etc.).
                    </p>
                </div>
            </div>
            <NewFooter />
        </div>
    );
};

export default July2022Posts;