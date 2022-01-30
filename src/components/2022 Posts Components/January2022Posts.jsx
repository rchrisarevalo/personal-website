import React from 'react';
import { Helmet } from "react-helmet";
import { Link, HashRouter } from "react-router-dom";

import { IoArrowBackCircleOutline } from "react-icons/io5";

import Nav from "../../Nav.jsx";
import NewFooter from "../../NewFooter.jsx";

const January2022Posts = () => {
    return (
        <div class="posts-main">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Announcements (January 2022)</title>
            </Helmet>
            <Nav />
            <div className="notification" id="warning-notif-2">
                <div className="notification-content" id="notif-2">
                    <p>Redirecting to contact form page...</p>
                </div>
            </div>
            <div class="posts-container">
                <HashRouter>
                    <Link to="/announcements/2021/December"><IoArrowBackCircleOutline id="posts-arrow-left" title="December 2021 Announcements" size="40px" /></Link>
                </HashRouter>
                <h1 id="posts-title">Announcements (January 2022)</h1>
                <br></br>
                <p id="posts-description">
                    These are all the posts for January 2022 that were archived on this page. None of these posts will
                    be deleted or edited unless I decide otherwise.
                </p>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 01/29/2022, 12:03 AM.
                    </p>
                    <p id="post-content">
                        That's all I have to say today. If you see this, have a good rest of the day!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 01/29/2022, 12:03 AM.
                    </p>
                    <p id="post-content">
                        I will keep you all updated on this idea! I will make my final decision at the end of March. However,
                        just because I made a final decision on this project that doesn't guarantee that it will appear on
                        time or at all. However, this heavily depends on the circumstances, whether it's external factors, or
                        other situations that require the use of my time.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 01/29/2022, 12:03 AM.
                    </p>
                    <p id="post-content">
                        Fortunately, this will not limit my ability to keep making updates to this website when needed.
                        Speaking of updates, I am planning to start a blog on my own page sometime later this year, most likely during the
                        summer or the fall of this year. Creating and designing the blog page will take some time,
                        as it takes a lot of effort to make sure it is set up well and that there are no bugs
                        during the creation process.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 01/29/2022, 12:03 AM.
                    </p>
                    <p id="post-content">
                        Hey everyone. I am sorry for not posting as much as I usually do whenever I am on break. I am really
                        busy with college right now, given that the semester started about a week ago. So yeah, the workload
                        has been pretty hectic but it was manageable.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 01/22/2022, 10:55 AM.
                    </p>
                    <p id="post-content">
                        Good morning! I am leaving this here to let y'all know that I made it through the first week of this
                        semester fine, even though I have to do 1 or 2 homework assignments that are due next week. I made
                        some bug fixes to this website for components that allow it to work. It should be working by now
                        for some of you. If any issues arise, please contact me.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 01/17/2022, 5:39 PM.
                    </p>
                    <p id="post-content">
                        Hello everyone! I am leaving this announcement here to let you all know that starting tomorrow,
                        you will not see post or make updates on this Site as much as during the break. The reason being
                        is because I will be starting my Spring semester tomorrow, and I will most likely be bombarded with
                        homework as soon as the semester starts.
                    </p>
                    <p id="post-content">
                        If any of you happen to read this, thank you for your patience!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 01/14/2022, 5:22 AM.
                    </p>
                    <p id="post-content">
                        Before I forget, I introduced a new policy that can be found in the link
                        "Archival" in the footer of this Site. Again, it is not a legal document,
                        but an outline that represents how the archival process of announcements
                        like these works. If the language in the page happens to confuse you, please
                        let me know, and I will try my best to make some clarifications to the outline
                        to make it easier for you and other users to understand.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 01/14/2022, 5:22 AM.
                    </p>
                    <p id="post-content">
                        I made a typo while I made a change to the Website Operation policy. I forgot to update the
                        date where it was last modified (3 days ago at the time of writing this announcement). It
                        should be fixed now.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 01/06/2022, 1:40 AM.
                    </p>
                    <p id="post-content">
                        A minor change to the Website Operation policy has been made. There was a typo in the last description
                        near the footer in the page. That mistake has been corrected.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 01/03/2022, 12:00 AM.
                    </p>
                    <p id="post-content">
                        That's all for now. Have a great rest of the week and please stay safe!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 01/03/2022, 12:00 AM.
                    </p>
                    <p id="post-content">
                        Now that I am done covering the new "Website Operation" policy, I also wanted to let y'all know
                        that I am back and will be maintaining this site as before. However, expect my activity to dwindle
                        down a little bit on January 18th and afterwards, as the Spring semester of my university starts
                        that day. Despite that, I will continue to make an effort to maintain this Site and keep it running
                        without any bugs or any regressions that might be introduced in the future.
                    </p>
                    <p id="post-content">
                        Since I am speaking about bugs right now, I will also keep an eye out on issues that might be caused
                        by a vulnerability with Log4j, which is widely used in many pieces of software around the world, such
                        as our smart phones, computers, video games, etc. As this website is running on GitHub Pages, I am
                        going to do my best to make sure that this Site does not fall prey to any hacking attempts that might
                        occur in the future, depending on the circumstances surrounding the Log4j vulnerability.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 01/03/2022, 12:00 AM.
                    </p>
                    <p id="post-content">
                        In addition, I wanted to remind you all that I introduced a new policy that determines what
                        time this Site can and cannot operate. The new policy was introduced in November 2021, just
                        before I closed this website for the Thanksgiving holiday. However, I forgot to specifically
                        outline when and what times the website can operate.
                    </p>
                    <p id="post-content">
                        Fortunately, I drafted an outline as to how this Site will operate from now on. Keep in mind
                        that the new policy that is titled "Website Operation Policy" is not a legal document per se,
                        but rather, to explain what is going to happen to the operations of this Site. The page containing
                        that policy will explain what circumstances would warrant the closure of this Site, along with
                        other additional details. For more information, please feel free to click on the "Website Operation"
                        link on the footer in the "Policies" column.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 01/03/2022, 12:00 AM.
                    </p>
                    <p id="post-content">
                        Happy New Year's, y'all! This is the beginning of a new year, 2022, and I hope that you all
                        can make the best out of it as much as you can! As some of you may have noticed, I made
                        significant changes to this Site throughout the course of the break. These changes range
                        from UI changes, the introduction of a new "Archives" page, etc.
                    </p>
                </div>
            </div>
            <NewFooter />
        </div>
    )
}

export default January2022Posts;