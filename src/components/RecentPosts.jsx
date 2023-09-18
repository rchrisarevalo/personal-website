import React, { useEffect, useState } from 'react';

import axios from "axios";
import db from "./database/posts.json"

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const RecentPosts = () => {

    const [threeRecentPosts, setThreeRecentPosts] = useState([""])

    useEffect(() => {
        // Display the last three recent posts
        axios.post("https://test-server-o898.onrender.com/get_three_recent_posts", db.post).then((res) => {
            if (res.data !== "") {
                setThreeRecentPosts(res.data)
            }
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    var recent_month_posts = threeRecentPosts.filter(posts => posts["month"] === new Date().getMonth() + 1 && posts["year"] === new Date().getFullYear())

    var recent_posts = recent_month_posts.map(posts => 
        <div className="post" id="post-margin">
            <p id="post-info">{`${posts["title"]}`}</p>
            <p id="post-content">{`${posts["post_content"]}`}</p>
        </div>
    )

    if (!window.matchMedia('(max-width: 1024px)').matches) {
        return (
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
                        {recent_posts.length !== 0 ?
                            <div id="post-catalogue" data-aos="fade-up" data-aos-delay="500">{recent_posts}</div>
                            :
                            <><h4>There are no recent posts to display.</h4></>
                        }
                    </Col>
                </Row>
            </div>
        );
    } else {
        return (
            <div className="posts-container-intro">
                <h1 id="posts-title-intro" data-aos="fade-down">Recent Announcements</h1>
                <p id="posts-description-intro" data-aos="fade-right" data-aos-delay="500">
                    The last three recent announcements will be posted here in this section as shown on the right hand side.
                    This section will be regularly updated whenever there are new announcements.
                    To view all announcements, click on "Announcements" on the navigation bar.
                </p>
                <div id="post-catalogue" data-aos="fade-up" data-aos-delay="500">{recent_posts}</div>
            </div>
        );
    }
}

export default RecentPosts;