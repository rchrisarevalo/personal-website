import React, { useEffect, useState } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import MediaQuery from 'react-responsive';

const RecentPosts = () => {

    const [threeRecentPosts, setThreeRecentPosts] = useState([""])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        // Display the last three recent posts.
        fetch("https://pw-api-server.onrender.com/get_three_recent_posts", {
                method: 'POST',
                credentials: 'include',
                body: JSON.stringify({}),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((res) => {
                if (res.ok) {
                    setLoading(false)
                    return res.json()
                }
            }).then((data) => {
                setThreeRecentPosts(data)
            }).catch((error) => {
                console.log(error)
                setLoading(false)
                setError(true)
            })
    }, [])

    var recent_month_posts = threeRecentPosts.filter(posts => posts["month"] === new Date().getMonth() + 1 && posts["year"] === new Date().getFullYear())

    var recent_posts = recent_month_posts.map(posts =>
        <div className="post" id="post-margin">
            <p id="post-info">{`${posts["title"]}`}</p>
            <p id="post-content">{`${posts["post_content"]}`}</p>
        </div>
    )

    return (
        <>
            <MediaQuery minWidth={1024}>
                <div className="posts-container-intro">
                    <h1 id="posts-title-intro" data-aos="fade-down">Recent Announcements</h1>
                    <Row id="posts-row">
                        <Col id="posts-description-col">
                            <p id="posts-description-intro" data-aos="fade-right" data-aos-delay="500">
                                <p>The last three recent announcements will be posted here in this section as shown on the right hand side.
                                    This section will be regularly updated whenever there are new announcements.
                                    To view all announcements, click on "Announcements" on the navigation bar.</p>
                            </p>
                        </Col>
                        <Col xs lg={9}>
                            {!loading ?
                                <>
                                    {!error ?
                                        <>
                                            {recent_posts.length !== 0 ?
                                                <div id="post-catalogue" data-aos="fade-up" data-aos-delay="500">{recent_posts}</div>
                                                :
                                                <><h4>There are no recent announcements to display.</h4></>
                                            }
                                        </>
                                        :
                                        <><h4 style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>Failed to load announcements.</h4></>
                                    }
                                </>
                                :
                                <h4 style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>Loading...</h4>
                            }
                        </Col>
                    </Row>
                </div>
            </MediaQuery>
            <MediaQuery maxWidth={1024}>
                <div className="posts-container-intro">
                    <h1 id="posts-title-intro" data-aos="fade-down">Recent Announcements</h1>
                    <p id="posts-description-intro" data-aos="fade-right" data-aos-delay="500">
                        The last three recent announcements will be posted here in this section as shown on the right hand side.
                        This section will be regularly updated whenever there are new announcements.
                        To view all announcements, click on "Announcements" on the navigation bar.
                    </p>
                    <div id="post-catalogue" data-aos="fade-up" data-aos-delay="500">
                        {!loading ?
                            <>
                                {!error ?
                                    <>
                                        {recent_posts.length !== 0 ?
                                            <div id="post-catalogue" data-aos="fade-up" data-aos-delay="500">{recent_posts}</div>
                                            :
                                            <><h4>There are no recent announcements to display.</h4></>
                                        }
                                    </>
                                    :
                                    <><h4 style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>Failed to load announcements.</h4></>
                                }
                            </>
                            :
                            <h4 style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>Loading...</h4>
                        }
                    </div>
                </div>
            </MediaQuery>
        </>
    );
}

export default RecentPosts;