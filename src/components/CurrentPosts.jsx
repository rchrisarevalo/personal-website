import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { socket_client_conn } from '../App';

const CurrentPosts = () => {

    const [currentPosts, setCurrentPosts] = useState([""])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    // eslint-disable-next-line no-unused-vars
    const [connection, setConnection] = useState(socket_client_conn)
    var current_month_posts, posts;

    // Retrieve initial posts for the current month.
    useEffect(() => {
        fetch(`https://personal-website-server-icob.onrender.com/retrieve_posts?m=${new Date().getMonth() + 1}&y=${new Date().getFullYear()}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => {
            if (res.ok) {
                return res.json()
            }
        }).then((data) => {
            setCurrentPosts(data)
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            setLoading(false)
            setError(true)
        })
    }, [])

    // To retrieve updated posts in real-time using Socket.IO.
    useEffect(() => {
        connection.on('update-current-posts', (post_status) => {
            fetch(`https://personal-website-server-icob.onrender.com/retrieve_posts?m=${new Date().getMonth() + 1}&y=${new Date().getFullYear()}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                if (res.ok) {
                    return res.json()
                }
            }).then((data) => {
                setCurrentPosts(data)
            }).catch((error) => {
                console.log(error)
                setError(true)
            })
        })

        return () => {
            connection.off('update-current-posts')
        }
    }, [connection])

    current_month_posts = currentPosts.filter(posts => posts["month"] === new Date().getMonth() + 1 && posts["year"] === new Date().getFullYear())

    posts = current_month_posts.map(posts =>
        <div className="post" id="post-margin">
            <p id="post-info">{`${posts["title"]}`}</p>
            <p id="post-content">{`${posts["post_content"]}`}</p>
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
                {!loading ?
                    <>
                    {!error ?
                        <>
                            {posts.length ? 
                                posts 
                                : 
                                <p><br></br><br></br><br></br><br></br><br></br>It appears that there are no announcements yet.<br></br><br></br><br></br><br></br><br></br></p>
                            }
                        </>
                        :
                        <p><br></br><br></br><br></br><br></br><br></br>There was an error loading the announcements.<br></br><br></br><br></br><br></br><br></br></p>
                    }
                    </>
                    :
                    <h5 style={{marginTop: '15vh', marginBottom: '10vh'}}>Loading...</h5>
                }
            </div>
        </div>
    )
}

export default CurrentPosts;