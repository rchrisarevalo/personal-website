import React from 'react';

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
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 02/04/2022, 7:19 PM.
                </p>
                <p id="post-content">
                    Also, I am pretty busy right now. The writing of these announcements may seem rushed, but again, the reason is due
                    to college, and homework and tests are already piling on top of my plate fast. I will do my very best to overcome
                    this heavy workload that is giving me little time to do other things outside of school, like spending time with
                    family and friends. Feel free to contact me if you have any questions!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 02/04/2022, 7:19 PM.
                </p>
                <p id="post-content">
                    I am leaving this here to let y'all know that a winter storm has approached my state of Texas since yesterday. However,
                    site operations will continue to run as planned, as it has not affected the area where I live (in terms of blackouts and
                    other damages). I will continue to monitor the progress of the storm, as temperatures are expected to drop a little more
                    lower than yesterday's. If there happened to be a blackout and damage as a result of it, then I will shut down this Site
                    for about a week or two depending on the circumstances and in accordance to the Site Operation policy implemented last
                    month.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 02/01/2022, 12:00 AM.
                </p>
                <p id="post-content">
                    Good morning, everyone! It's going to be a great month as Valentine's day is approaching! Anyways, this is the first post for this month, so
                    there is not much except the aforementioned greeting. Have a great rest of the week!
                </p>
            </div>
        </div>
    )
}

export default CurrentPosts;