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
                    By: Ruben Christopher Arevalo. Posted on 08/05/2022, 2:34 PM.
                </p>
                <p id="post-content">
                    That's all I wanted to announce for today, as it is only a change to the way the Save button
                    works when, again, making changes to the settings in the 'Settings' page. Thank you and have
                    a wonderful weekend, y'all!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 08/05/2022, 2:34 PM.
                </p>
                <p id="post-content">
                    In addition, when making the change and selecting the original setting that was either pre-configured by
                    default or by yourself, the Save button will be disabled until you select a different one.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 08/05/2022, 2:34 PM.
                </p>
                <p id="post-content">
                    Good afternoon, everyone. I am writing this to announce that I made a few upgrades when saving changes
                    in the 'Settings' page. When clicking the 'Save' button without actually making any changes to it will
                    return an error message saying that you have to make them before clicking on the Save button once more.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 08/01/2022, 12:00 AM.
                </p>
                <p id="post-content">
                    That will be everything for the evening. Thank you and have a wonderful evening and great
                    rest of the day!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 08/01/2022, 12:00 AM.
                </p>
                <p id="post-content">
                    Good evening, everyone! Like other months before, this will be the very first announcement of
                    August! I am looking forward to what improvements can be made to this website!
                </p>
            </div>
        </div>
    )
}

export default CurrentPosts;