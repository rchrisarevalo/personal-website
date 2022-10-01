import React, { useEffect, useState } from 'react';

import axios from "axios";
import db from "./database/posts.json"

const RecentPosts = () => {

    const [currentPostNum, setCurrentPostNum] = useState(0)
    const [prevPostNum, setPrevPostNum] = useState(currentPostNum)

    useEffect(() => {
        // Display the last three recent posts
        axios.get("https://rchrisarevalo.github.io/posts.json", db.post).then((res) => {
            setPrevPostNum(db.post.length)
            setCurrentPostNum(db.post.length)
            // console.log("Previous post number: ", prevPostNum)
            // console.log("Current post number: ", currentPostNum)
            if (currentPostNum === prevPostNum) {
                for (var i = db.post.length - 1; i >= db.post.length - 3; i--) {
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
                    parentDiv.style.marginLeft = '6%'
                    parentDiv.style.marginRight = '6%'
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
                    setPrevPostNum(db.post.length)
                    setCurrentPostNum(db.post.length + 1)
                }
            }
            else if (currentPostNum > prevPostNum) {
                parentDiv = document.createElement('div')
                childDiv = document.createElement('p')

                // console.log("This works!")

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
                parentDiv.style.marginLeft = '6%'
                parentDiv.style.marginRight = '6%'
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
                window.location.reload();
            }
        })
    }, [])

    return (
        <div className="posts-container-intro">
            <h1 id="posts-title-intro" data-aos="fade-down">Recent Announcements</h1>
            <p id="posts-description-intro" data-aos="fade-right" data-aos-delay="500">
                The last three recent announcements will be posted here. This page will be updated whenever there are new announcements.
                To view all announcements, click on "Announcements" on the navigation bar.
            </p>
            <div id="post-catalogue" data-aos="fade-up" data-aos-delay="500"></div>
        </div>
    );
}

export default RecentPosts;