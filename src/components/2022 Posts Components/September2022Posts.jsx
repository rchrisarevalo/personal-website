import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

import axios from "axios";
import db from "../database/posts.json"

import NavArchives from "../../NavArchives.jsx";
import NewFooter from "../../NewFooter.jsx";

const September2022Posts = () => {

    const [currentPostNum, setCurrentPostNum] = useState(0)
    const [prevPostNum, setPrevPostNum] = useState(currentPostNum)

    useEffect(() => {
        window.scrollTo(0, 0);

        axios.get("https://rchrisarevalo.github.io/posts.json", db.post).then((res) => {
            setPrevPostNum(db.post.length)
            setCurrentPostNum(db.post.length)
            // console.log("Previous post number: ", prevPostNum)
            // console.log("Current post number: ", currentPostNum)
            if (currentPostNum === prevPostNum) {
                for (var i = db.post.length - 1; i >= 0; i--) {
                    if (db.post[i].month === 9 && db.post[i].year === 2022) {
                        var grandparentDiv = document.getElementById("post-catalogue")
                        var parentDiv;
                        var childDiv;
                        var childDiv2Text;
                        parentDiv = document.createElement('div')
                        childDiv = document.createElement('p')

                        childDiv2Text = document.createElement('p')
                        childDiv2Text.textContent = db.post[i].title
                        childDiv2Text.style.fontSize = '14px'
                        childDiv2Text.style.fontStyle = 'italic'
                        childDiv2Text.style.textAlign = 'left'
                        childDiv2Text.margin = '.7em'

                        childDiv.textContent = db.post[i].postContent
                        childDiv.style.fontSize = '16.5px'
                        childDiv.style.margin = '2em'
                        childDiv.style.textAlign = 'left'

                        childDiv2Text.setAttribute('id', 'post-info-recent')
                        childDiv.setAttribute('id', 'post-content')

                        parentDiv.style.background = '#3a3a3a'
                        parentDiv.style.boxShadow = '0 0 4px black'
                        parentDiv.style.fontWeight = '200'
                        parentDiv.style.color = 'white'
                        parentDiv.style.borderRadius = '5px'
                        parentDiv.style.margin = '2em'
                        parentDiv.style.textAlign = 'left'
                        parentDiv.style.marginLeft = '10%'
                        parentDiv.style.marginRight = '10%'
                        parentDiv.style.paddingTop = '10px'
                        parentDiv.style.paddingBottom = '12px'
                        parentDiv.style.fontSize = '16.5px'

                        parentDiv.style.marginBottom = '50px'
                        parentDiv.style.marginTop = '50px'

                        parentDiv.appendChild(childDiv2Text)
                        parentDiv.appendChild(childDiv)
                        parentDiv.setAttribute('id', `post${i}`)
                        parentDiv.setAttribute('class', 'post')
                        grandparentDiv.appendChild(parentDiv)
                    }
                    setPrevPostNum(db.post.length)
                    setCurrentPostNum(db.post.length + 1)
                }
            }
            else if (currentPostNum > prevPostNum) {
                parentDiv = document.createElement('div')
                childDiv = document.createElement('p')

                console.log("This works!")

                childDiv2Text = document.createElement('p')
                childDiv2Text.textContent = db.post[currentPostNum - 1].title
                childDiv2Text.style.fontSize = '14px'
                childDiv2Text.style.fontStyle = 'italic'
                childDiv2Text.style.textAlign = 'left'
                childDiv2Text.margin = '.7em'

                childDiv.textContent = db.post[currentPostNum - 1].postContent
                childDiv.style.fontSize = '16.5px'
                childDiv.style.margin = '2em'
                childDiv.style.textAlign = 'left'

                childDiv2Text.setAttribute('id', 'post-info-recent')
                childDiv.setAttribute('id', 'post-content')

                parentDiv.style.background = '#3a3a3a'
                parentDiv.style.boxShadow = '0 0 4px black'
                parentDiv.style.fontWeight = '200'
                parentDiv.style.color = 'white'
                parentDiv.style.borderRadius = '5px'
                parentDiv.style.margin = '2em'
                parentDiv.style.textAlign = 'left'
                parentDiv.style.marginLeft = '10%'
                parentDiv.style.marginRight = '10%'
                parentDiv.style.paddingTop = '10px'
                parentDiv.style.paddingBottom = '12px'
                parentDiv.style.fontSize = '16.5px'
                parentDiv.style.marginBottom = '50px'
                parentDiv.style.marginTop = '50px'

                parentDiv.appendChild(childDiv2Text)
                parentDiv.appendChild(childDiv)
                parentDiv.setAttribute('id', `post${currentPostNum - 1}`)
                document.getElementById("post-catalogue").insertBefore(parentDiv, document.getElementById(`post${currentPostNum - 2}`))
                setPrevPostNum(parseInt(prevPostNum) + parseInt(1))
            }
        })
    }, []);

    return (
        <div class="posts-main">
            <Helmet>
                <title>
                    Ruben C. Arevalo - Personal Website - Announcements (September 2022)
                </title>
            </Helmet>
            <NavArchives />
            <div class="posts-container">
                <Link to="/announcements/2022/August">
                    <IoArrowBackCircleOutline
                        id="posts-arrow-left"
                        title="August 2022 Announcements"
                        size="40px"
                    />
                </Link>
                <Link to="/announcements/2022/October">
                    <IoArrowForwardCircleOutline
                        id="posts-arrow-right"
                        title="October 2022 Announcements"
                        size="40px"
                    />
                </Link>
                <h1 id="posts-title">Announcements (September 2022)</h1>
                <br></br>
                <p id="posts-description">
                    These are all the posts for September 2022 that were archived on this
                    page. None of these posts will be deleted or edited unless I decide
                    otherwise.
                </p>
                <div id="post-catalogue"></div>
            </div>
            <NewFooter />
        </div>
    );
};

export default September2022Posts;