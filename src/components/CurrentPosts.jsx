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
                    By: Ruben Christopher Arevalo. Posted on 02/01/2022, 12:00 AM.
                </p>
                <p id="post-content">
                    Good morning, everyone! It's going to be a great month as Valentine's day is approaching! I hope everyone
                    spends time with their loved ones on this cherished day! Anyways, this is the first post for this month, so
                    there is not much except the aforementioned greeting. Have a great rest of the week!
                </p>
            </div>
        </div>
    )
}

export default CurrentPosts;