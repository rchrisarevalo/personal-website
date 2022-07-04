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
    )
}

export default CurrentPosts;