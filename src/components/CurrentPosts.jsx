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
                    By: Ruben Christopher Arevalo. Posted on 03/07/2022, 3:08 PM.
                </p>
                <p id="post-content">
                    That is all I have for today. I hope you all have a great rest of the week!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 03/07/2022, 3:08 PM.
                </p>
                <p id="post-content">
                    In other news, spring break is coming up next week, and I will have a little bit more time
                    to continue to maintain this website provided that I don't have that much homework to begin
                    with.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 03/07/2022, 3:08 PM.
                </p>
                <p id="post-content">
                    Happy Monday, everyone! I hope you all had a good start to the week so far and will continue to
                    have a good week!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 03/05/2022, 1:12 PM.
                </p>
                <p id="post-content">
                    For those of you that haven't noticed, there have been some style changes I made to the UI of this website.
                    A white border surrounding one of the links is an indicator of the page you are currently in. As usual,
                    I will continue to maintain this website whenever I have time. Thank you for your patience.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 03/01/2022, 12:00 AM.
                </p>
                <p id="post-content">
                    Apart from that, I am nevertheless excited by the idea of creating a blog since it allows me to express
                    myself a little bit more. I am expected to make a final decision regarding my blog by the end of the month.
                    That's all the announcements I have for today! Have a great rest of the day!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 03/01/2022, 12:00 AM.
                </p>
                <p id="post-content">
                    Should I decide to create new blog, it won't probably be ready until October 2022. The reason for
                    this is because I am going to be a senior in college. When that happens, I will be more busier as
                    I am going to be building a senior project that I need to do if I want to graduate. Whatever happens,
                    and if time permits, then I will continue working on the blog. Again, keep in mind that what I mentioned
                    above will only occur if I decide to create it.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 03/01/2022, 12:00 AM.
                </p>
                <p id="post-content">
                    Welcome to the new month, everyone! I hope you all enjoy this month as spring is approaching
                    fast. In other news, I want to remind you all who have been keeping up with the recent announcements
                    that I will decide whether or not to create a new blog.
                </p>
            </div>
        </div>
    )
}

export default CurrentPosts;