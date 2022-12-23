import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

import NavArchives from "../../NavArchives.jsx";
import NewFooter from "../../NewFooter.jsx";

const December2021Posts = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    return (
        <div class="posts-main">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Announcements (December 2021)</title>
            </Helmet>
            <NavArchives />
            <div class="posts-container">
                <Link to="/announcements/2021/November"><IoArrowBackCircleOutline id="posts-arrow-left" title="November 2021 Posts" size="40px" /></Link>
                <Link to="/announcements/2022/January"><IoArrowForwardCircleOutline id="posts-arrow-right" title="January 2022 Announcements" size="40px"/></Link>
                <h1 id="posts-title">Announcements (December 2021)</h1>
                <br></br>
                <p id="posts-description">
                    These are all the posts for December 2021 that were archived on this page. None of these posts will
                    be deleted or edited unless I decide otherwise.
                </p>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 12/14/2021, 12:54 AM.
                    </p>
                    <p id="post-content">
                        I will try to read all of your messages after my 2 week hiatus is up. The same will apply
                        after New Year's Eve and New Year's. Have a wonderful day and Merry Christmas!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 12/14/2021, 12:54 AM.
                    </p>
                    <p id="post-content">
                        I will be working on the website and design a user interface as we approach the next new year
                        (2022). So if I don't post any announcements for the majority of this month, it's because I
                        am on break in addition to making updates to this website. I sincerely apologize for any
                        inconvenience that might occur along the way, such as not responding to messages from y'all
                        in a timely manner.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 12/14/2021, 12:54 AM.
                    </p>
                    <p id="post-content">
                        Good evening, everyone. I know I am on a hiatus right now for the next two weeks, but I wanted
                        to leave this message here for anyone visiting this website to let y'all know that I am not
                        going to be posting any content here during the holidays, especially right now.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 12/06/2021, 11:43 AM.
                    </p>
                    <p id="post-content">
                        As you all may have noticed, another font change has occurred. I did this because I thought
                        that the old font used for the previous 2-3 months was boring, and I thought it was time for
                        a change. But it looks good, and hopefully y'all enjoy it as well!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 12/03/2021, 9:40 PM.
                    </p>
                    <p id="post-content">
                        Anyways, that's all I have to say at the moment. Again, if you have any questions or suggestions
                        as to how to update this site, please let me know by clicking on the "Contact Me" button on the
                        top right corner of the page (or the paper plane icon in the mobile version of this site).
                    </p>
                    <p id="post-content">
                        Thank you and have a great rest of the evening!
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 12/03/2021, 9:40 PM.
                    </p>
                    <p id="post-content">
                        After that's all said and done, I will focus on providing a new user interface for this website
                        sometime during January or February, if time permits, as I will be back in school for another
                        semester during that time.
                    </p>
                </div>
                <div className="post" id="post-margin">
                    <p id="post-info">
                        By: Ruben Christopher Arevalo. Posted on 12/03/2021, 9:40 PM.
                    </p>
                    <p id="post-content">
                        Hi everyone! Sorry for the late changes, but I was busy with college as finals are already
                        approaching. In addition, I might not post as often as I do this month because I have decided
                        to take a 2-week hiatus from updating this site starting on December 13 and ending on December 27,
                        right after Christmas.
                    </p>
                </div>
            </div>
            <NewFooter />
        </div>
    )
}

export default December2021Posts;