import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import axios from "axios";
import db from "./database/posts.json"

var totalPostNum = 0

const CurrentPosts = () => {

    const [currentPostNum, setCurrentPostNum] = useState(0)
    const [prevPostNum, setPrevPostNum] = useState(currentPostNum)
    const [dateState, setDateState] = useState(new Date())

    setTimeout(() => {
        setDateState(new Date())
    }, 1000)

    useEffect(() => {
        axios.get("https://rchrisarevalo.github.io/posts.json", db.post).then((res) => {
            setPrevPostNum(db.post.length)
            setCurrentPostNum(db.post.length)
            if (currentPostNum === prevPostNum) {
                for (var i = db.post.length - 1; i >= 0; i--) {
                    if (db.post[i].month === new Date().getMonth() + 1) {
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
                        parentDiv.style.marginLeft = '7%'
                        parentDiv.style.marginRight = '7%'
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
                    totalPostNum = currentPostNum
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
                parentDiv.style.marginLeft = '7%'
                parentDiv.style.marginRight = '7%'
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
                totalPostNum = prevPostNum
                window.location.reload()
            }
        })
    }, [])

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
            {totalPostNum === 0 && <div id="post-catalogue-empty"><i>There are no announcements available yet! Come back when new announcements have been made!</i></div>}
            {totalPostNum > 0 && <div id="post-catalogue"></div>}
        </div>
    )
}

export default CurrentPosts;