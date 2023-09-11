import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";

import axios from "axios";

import NavArchives from "../NavArchives.jsx";
import NewFooter from "../NewFooter.jsx";

const ArchivedPosts = ({monthNum, yearNum, monthName}) => {

    const [currentPosts, setCurrentPosts] = useState([""])

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
            }
        }).catch((error) => {
            console.log(error)
        })
    }, [monthNum, yearNum]);

    var posts = currentPosts.map(posts =>
        <div className="post" id="post-margin">
            {(typeof posts["title"] !== "undefined" && typeof posts["post_content"] !== "undefined") ?
                <>
                <p id="post-info">{`${posts["title"]}`}</p>
                <p id="post-content">{`${posts["post_content"]}`}</p>
                </>
                :
                <p id="post-content">{`Loading...`}</p>
            }
        </div>
    )

    return (
        <div class="posts-main">
            <Helmet>
                <title>
                    {`Ruben C. Arevalo - Personal Website - Announcements (${monthName} 2022)`}
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
                <div id="post-catalogue">{posts}</div>
            </div>
            <NewFooter />
        </div>
    );
};

export default ArchivedPosts;