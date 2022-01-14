import React from 'react';
import { Helmet } from "react-helmet";
import { Link, HashRouter } from "react-router-dom";

import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

import Nav from "../../Nav.jsx";
import NewFooter from "../../NewFooter.jsx";

const November2021Posts = () => {
    return (
        <div class="posts-main">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Announcements (November 2021)</title>
            </Helmet>
            <Nav />
            <div className="notification" id="warning-notif-2">
                <div className="notification-content" id="notif-2">
                    <p>Redirecting to contact form page...</p>
                </div>
            </div>
            <div class="posts-container">
                <HashRouter>
                    <Link to="/announcements/2021/October"><IoArrowBackCircleOutline id="posts-arrow-left" size="40px"/></Link>
                    <Link to="/announcements/2021/December"><IoArrowForwardCircleOutline id="posts-arrow-right" size="40px"/></Link>
                </HashRouter>
                <h1 id="posts-title">Announcements (November 2021)</h1>
                <br></br>
                <p id="posts-description">
                    These are all the posts for November 2021 that were archived on this page. None of these posts will
                    be deleted or edited unless I decide otherwise.
                </p>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 11/21/2021, 4:01 PM.
                    </p>
                    <p id="post-content">
                        I already implemented the Thanksgiving decoration for this website, just as I promised.
                        The decoration just contains only the colors of the holiday to fit in with the Thanksgiving
                        theme. Have a wonderful holiday and stay safe!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 11/20/2021, 11:00 AM.
                    </p>
                    <p id="post-content">
                        Despite this, I will leave a "Contact" button where everyone is able to leave me a message that I
                        can respond to after the holidays are over. I hope you all have a fantastic Thanksgiving!
                        Please stay safe and enjoy!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 11/20/2021, 11:00 AM.
                    </p>
                    <p id="post-content">
                        In addition, the website navigation bar for each page will be removed so as to indicate my point
                        that the website is closed for the holidays.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 11/20/2021, 11:00 AM.
                    </p>
                    <p id="post-content">
                        Starting this Thanksgiving and any other holiday from that point on, the website will have a
                        fixed size screen that will tell visitors that operations have ceased for a day due to the holidays
                        and that they will resume as normal after they are over.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 11/20/2021, 11:00 AM.
                    </p>
                    <p id="post-content">
                        Hello everyone! As promised, I am prepared to make an announcement that will potentially
                        change as to how this website operates. Instead of being open during the holidays, this
                        website, along with my CV website, will close during the holidays.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 11/10/2021 at 8:55 AM.
                    </p>
                    <p id="post-content">
                        Now that I am done delivering these announcements, I wish you all a good day. Please
                        be happy and stay safe!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 11/10/2021 at 8:55 AM.
                    </p>
                    <p id="post-content">
                        Also, next week, I will announce some big changes as to how this website is going to
                        operate (well, one big change).
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 11/10/2021 at 8:55 AM.
                    </p>
                    <p id="post-content">
                        However, that doesn't take away my time to announce that I will put up a Thanksgiving
                        decoration makeup here on my website. During the week of Thanksgiving, I am going to
                        be working on applying the decoration the week before the holidays, and making sure
                        it is enjoyable for people visiting this website.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 11/10/2021 at 8:55 AM.
                    </p>
                    <p id="post-content">
                        As I am a college student, finals are a few weeks ahead, and I have to catch up with the
                        material for each of my classes. So if I don't post here that often, this is the reason
                        why.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 11/10/2021 at 8:55 AM.
                    </p>
                    <p id="post-content">
                        Good morning! I am leaving this here to let y'all know that I am going to be a little
                        bit busier this month and the weeks that follow.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 11/5/2021 at 10:59 AM.
                    </p>
                    <p id="post-content">
                        With those two announcements out of the way, if you have any questions, please feel free to
                        contact me! Thank you and have a great rest of the day!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 11/5/2021 at 10:59 AM.
                    </p>
                    <p id="post-content">
                        Secondly and lastly, some of you may have noticed that new icons have appeared on the navigation
                        bar next to the title of the links. I decided that including the links by themselves with no
                        aesthetic wasn't appealing, as a good portion of the sites on the internet have icons next to
                        the links on the navigation bar.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 11/5/2021 at 10:59 AM.
                    </p>
                    <p id="post-content">
                        Good morning! I made a few fixes last night, as well making a minor design change to the
                        UI of this page.
                    </p>
                    <p id="post-content">
                        First, it has come to my attention that several of the dependencies that make up the codebase
                        of this website have been found to have several vulnerabilities, most of them being severe
                        and one of them at most being critical. Thankfully, I managed to fix the issue by upgrading
                        the dependencies to their latest versions.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 11/1/2021 at 12:00 AM.
                    </p>
                    <p id="post-content">
                        I will also be changing how this website operates, especially during the holidays. I will
                        elaborate further in another post after Halloween is over. About a week before Thanksgiving,
                        I will provide my explanation as to what changes will be made to this website.
                    </p>
                    <p id="post-content">
                        If you have any questions, don't be afraid to contact me through my email or the contact form
                        on the navigation bar!
                    </p>
                </div>
            </div>
            <NewFooter />
        </div>
    );
}

export default November2021Posts;