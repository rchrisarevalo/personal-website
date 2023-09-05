import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

const CurrentPosts = () => {

    const [currentPosts, setCurrentPosts] = useState([""])
    var current_month_posts, posts;

    useEffect(() => {
        axios.post("https://test-server-o898.onrender.com/retrieve_posts", { month: new Date().getMonth() + 1, year: new Date().getFullYear() }).then((res) => {
            setCurrentPosts(res.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    current_month_posts = currentPosts.filter(posts => posts["month"] === new Date().getMonth() + 1 && posts["year"] === new Date().getFullYear())

    posts = current_month_posts.map(posts =>
        <div className="post" id="post-margin">
            <p id="post-info">{`${posts["title"]}`}</p>
            <p id="post-content">{`${posts["postContent"]}`}</p>
        </div>
    )

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
            <div id="post-catalogue">
                {posts.length !== 0 ? posts : <p><br></br>It appears that there are no announcements yet.</p>}
            </div>
        </div>
    )
}

export default CurrentPosts;