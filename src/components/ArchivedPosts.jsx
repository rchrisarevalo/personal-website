import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import axios from "axios";

import NavArchives from "../NavArchives.jsx";
import NewFooter from "../NewFooter.jsx";

const ArchivedPosts = ({monthNum, yearNum, monthName}) => {

    const [currentPosts, setCurrentPosts] = useState([""])
    const [loaded, setLoaded] = useState(false)

    var route = useLocation().pathname
    localStorage.setItem("current_link", `${route}`)

    useEffect(() => {
        window.scrollTo(0, 0);

        if (currentPosts.length !== 0) {
            setCurrentPosts([""])
        }

        axios.post("https://test-server-o898.onrender.com/retrieve_posts", { month: monthNum, year: yearNum }).then((res) => {
            if (res.data !== "") {
                setCurrentPosts(res.data)
                setLoaded(true)
            }
        }).catch((error) => {
            console.log(error)
        })
    }, [monthNum, yearNum]);

    var posts = currentPosts.map(posts =>
        <div className="post" id="post-margin">
            <p id="post-info">{`${posts["title"]}`}</p>
            <p id="post-content">{`${posts["post_content"]}`}</p>
        </div>
    )

    return (
        <div class="posts-main">
            <Helmet>
                <title>
                    {`Ruben C. Arevalo - Personal Website - Announcements (${monthName} ${yearNum})`}
                </title>
            </Helmet>
            <NavArchives />
            <div class="posts-container">
                <h1 id="posts-title">Announcements ({`${monthName} ${yearNum}`})</h1>
                <br></br>
                <p id="posts-description">
                    These are all the posts for {`${monthName} ${yearNum}`} that were archived on this
                    page. None of these posts will be deleted or edited unless I decide
                    otherwise.
                </p>
                <div id="post-catalogue">
                    {loaded ?
                        <>
                        {posts.length !== 0 ?
                            posts
                            :
                            <p>Oops! It looks like there were no posts!</p>
                        }
                        </>
                        :
                        <h5 style={{marginTop: '20vh', marginBottom: '20vh'}}>Loading...</h5>
                    }
                </div>
            </div>
            <NewFooter />
        </div>
    );
};

export default ArchivedPosts;