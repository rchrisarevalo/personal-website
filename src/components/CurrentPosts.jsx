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
                    By: Ruben Christopher Arevalo. Posted on 05/02/2022, 10:25 AM.
                </p>
                <p id="post-content">
                    Other than that, I should be good. I will see you all later! Have a great rest of the week everyone!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 05/02/2022, 10:25 AM.
                </p>
                <p id="post-content">
                    I am almost done with the semester. I have a final to study for this week, so I am going to divert all of my attention to that
                    in addition to other pending assignments that I need to complete.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 05/02/2022, 10:25 AM.
                </p>
                <p id="post-content">
                    Good morning, everyone! I apologize for updating this page late. I was really busy this weekend, and I did not have enough time
                    to get rid of last month's announcements. Regardless, the archive link should be open for the announcements from April 2022.
                </p>
            </div>
        </div>
    )
}

export default CurrentPosts;