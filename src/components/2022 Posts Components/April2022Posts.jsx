import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

import NavArchives from "../../NavArchives.jsx";
import NewFooter from "../../NewFooter.jsx";

const April2022Posts = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    });

    return (
        <div class="posts-main">
            <Helmet>
                <title>
                    Ruben C. Arevalo - Personal Website - Announcements (April 2022)
                </title>
            </Helmet>
            <NavArchives />
            <div class="posts-container">
                <Link to="/announcements/2022/March">
                    <IoArrowBackCircleOutline
                        id="posts-arrow-left"
                        title="March 2022 Announcements"
                        size="40px"
                    />
                </Link>
                {Date.now() >= new Date(2022, 5, 1) &&
                    <Link to="/announcements/2022/May">
                        <IoArrowForwardCircleOutline
                            id="posts-arrow-right"
                            title="May 2022 Announcements"
                            size="40px"
                        />
                    </Link>
                }
                <h1 id="posts-title">Announcements (April 2022)</h1>
                <br></br>
                <p id="posts-description">
                    These are all the posts for April 2022 that were archived on this
                    page. None of these posts will be deleted or edited unless I decide
                    otherwise.
                </p>
                <p id="posts-description">
                    Last modified: 6/8/2022 at 1:25 AM. Reason: post timeline sequence corrected.
                </p>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/27/2022, 7:16 PM.
                    </p>
                    <p id="post-content">
                        That is all I have to say for today. I hope you all have a wonderful evening!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/27/2022, 7:16 PM.
                    </p>
                    <p id="post-content">
                        Furthermore, I should be able to continue making updates to this website from this point on, now that the semester is near
                        its end. In further news, I will be making a new feature in the next few months. I still haven't given it some thought,
                        but it's a small feature that I am planning to make. I will reveal in a later announcement what it will be about.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/27/2022, 7:16 PM.
                    </p>
                    <p id="post-content">
                        Aside from having finals next week and the following week, I should have enough time on my hands to make a decision as to whether
                        or not make a blog website or something similar in the future by the end of this month.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/27/2022, 7:16 PM.
                    </p>
                    <p id="post-content">
                        It's been a very difficult 3 weeks. There has been a lot of work piling on me, and it was difficult to keep up with everything,
                        hence my decision to shut down this website for the aforementioned time period. But luckily, I managed to get through most of it,
                        and my workload should be lighter than it has been during these last few weeks.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/27/2022, 7:16 PM.
                    </p>
                    <p id="post-content">
                        Good evening, EVERYONE! I am back! After 3 weeks of a leave of absence, I am happy to say that this website is now open again to
                        the public!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/08/2022, 9:37 PM.
                    </p>
                    <p id="post-content">
                        Today is the last day this website will be available until I take a leave of absence for 3 weeks. I wish you all a great rest of the
                        month and I will see you on April 30!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/07/2022, 5:15 PM.
                    </p>
                    <p id="post-content">
                        That is everything I have to say. Thank you for your patience and I hope to re-open this website once the timeframe has
                        passed. Thank you and have a great day!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/07/2022, 5:15 PM.
                    </p>
                    <p id="post-content">
                        As this is a matter of education, my education in fact, these circumstances qualify for the "Personal Affairs" section to be
                        invoked. This is probably the first time I had to use the Site Operation policy in times like these. In contrast to the section
                        stating that the website won't be necessarily shut down, I am going to have to, at least for the next two to three weeks.
                        This change will take effect on Saturday, April 9, midnight.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/07/2022, 5:15 PM.
                    </p>
                    <p id="post-content">
                        My circumstances have become a little bit complicated. I hope to come back before the end of the month so I can announce whether or
                        not I will be creating a blog. If not, then I will come back in the first week of May. The workload should be lighter by then, except
                        for a poster for a presentation that I have to do.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/07/2022, 5:15 PM.
                    </p>
                    <p id="post-content">
                        Good afternoon. I am announcing that I will be taking a leave of absence for the next 2-3 weeks. The reason for why I am taking
                        this leave of absence is because due to this month being the last full month of the semester before the end of May (when the
                        semester ends), I am going to have to stay focused now more than ever. I have a very important assignment due at the end of the
                        semester, on top of dealing with other homework assignments, quizzes, and exams.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/01/2022, 12:12 AM.
                    </p>
                    <p id="post-content">
                        Despite that, I will try my best to make new features when possible. Have a great rest of the day,
                        and once again, April Fool's!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/01/2022, 12:12 AM.
                    </p>
                    <p id="post-content">
                        But honestly, I am going to continue maintaining this website whenever I have free time in my hands and
                        if I have less work to do than usual. This month will be important as it is the month before finals. I
                        am going to need to use my time wisely if I am going to have a good chance of obtaining my degree next
                        year and pass all my courses.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/01/2022, 12:12 AM.
                    </p>
                    <p id="post-content">
                        Today is April Fool's Day! I know my attempt at an April Fool's joke was
                        kind of lousy. But hey, I tried my best!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/01/2022, 12:12 AM.
                    </p>
                    <p id="post-content">
                        <b>GOTCHA!</b>
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 04/01/2022, 12:12 AM.
                    </p>
                    <p id="post-content">
                        Hello everyone. I am here to announce that I am going <b>to shut down this website permanently.</b>
                        I will no longer be able to maintain this website any longer due to college work.
                    </p>
                </div>
            </div>
            <NewFooter />
        </div>
    );
};

export default April2022Posts;