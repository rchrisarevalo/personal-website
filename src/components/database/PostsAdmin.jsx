/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from "axios";
import db from "./posts.json"

var post_input;
var totalPosts = 0;

var post_content_list = []
var post_title_list = []

var hours_23_system = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
var hours_12_system = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
var hour = 0
var hourString = ''

const PostEnter = () => {
    const [id, setID] = useState(0)
    const [currentIdx, setCurrentIdx] = useState(0)
    const [postStatus, setPostStatus] = useState(false)

    var totalIndex = db.post.length - 1;

    setTimeout(() => {
        for (var i = 0; i < hours_23_system.length; i++) {
            if (new Date().getHours() === hours_23_system[i]) {
                hour = hours_12_system[i]
            }

            if (new Date().getHours() >= 0 && new Date().getHours() <= 9) {
                if (new Date().getMinutes() >= 0 && new Date().getMinutes() <= 9) {
                    hourString = `0${hour}:0${new Date().getMinutes()} AM`
                } else if (new Date().getHours() >= 10 && new Date().getMinutes() <= 59) {
                    hourString = `0${hour}:${new Date().getMinutes()} AM`
                }
            } else if (new Date().getHours() >= 10 && new Date().getHours() <= 11) {
                if (new Date().getMinutes() >= 0 && new Date().getMinutes() <= 9) {
                    hourString = `${hour}:0${new Date().getMinutes()} AM`
                } else {
                    hourString = `${hour}:${new Date().getMinutes()} AM`
                }
            } else if (new Date().getHours() >= 12) {
                if (new Date().getMinutes() >= 0 && new Date().getMinutes() <= 9) {
                    hourString = `${hour}:0${new Date().getMinutes()} PM`
                } else {
                    hourString = `${hour}:${new Date().getMinutes()} PM`
                }
            } else if (new Date().getHours() >= 13 && new Date().getHours() <= 21) {
                if (new Date().getMinutes() >= 0 && new Date().getMinutes() <= 9) {
                    hourString = `0${hour}:0${new Date().getMinutes()} PM`
                } else {
                    hourString = `0${hour}:${new Date().getMinutes()} PM`
                }
            } else if (new Date().getHours() >= 22 && new Date().getHours() <= 23) {
                if (new Date().getMinutes() >= 0 && new Date().getMinutes() <= 9) {
                    hourString = `${hour}:0${new Date().getMinutes()} PM`
                } else {
                    hourString = `${hour}:${new Date().getMinutes()} PM`
                }
            }
        }
    }, 1000)

    useEffect(() => {
        axios.get("https://rchrisarevalo.github.io/posts.json", db.post).then((res) => {
            if (postStatus === false) {
                for (var i = totalIndex; i >= 0; i--) {
                    console.log(i)
                    var grandparentDiv = document.getElementById("post-catalogue")
                    var parentDiv;
                    var childDiv;
                    var childDiv2;
                    var childDiv2Text;

                    post_title_list.push(db.post[i].title)
                    post_content_list.push(db.post[i].postContent)
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
                    console.log(res)
                    totalPosts++;
                    setCurrentIdx(totalPosts)
                }
                console.log(currentIdx)
            } else if (postStatus === true) {
                console.log("Post statement is true")
                console.log(parseInt(currentIdx))
                post_title_list.push(db.post[parseInt(currentIdx)].title)
                post_content_list.push(db.post[parseInt(currentIdx)].postContent)
                parentDiv = document.createElement('div')
                childDiv = document.createElement('p')
                childDiv2 = document.createElement('div')

                childDiv2Text = document.createElement('p')
                childDiv2Text.textContent = db.post[currentIdx].title
                childDiv2Text.style.fontSize = '14px'
                childDiv2Text.style.fontStyle = 'italic'
                childDiv2Text.style.textAlign = 'left'
                childDiv2Text.margin = '.7em'

                childDiv2.style.marginLeft = '0%'
                childDiv2.style.marginRight = '0%'

                childDiv.textContent = db.post[currentIdx].postContent
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
                parentDiv.setAttribute('id', `post${currentIdx}`)
                document.getElementById("post-catalogue").insertBefore(parentDiv, document.getElementById(`post${currentIdx - 1}`))

                setPostStatus(false)
                setCurrentIdx(currentIdx + 1)
            }
        })
    }, [])

    function writePost() {
        post_input = document.getElementById("post-input").value

        if (post_input !== "") {
            axios.post("http://localhost:8000", {
                title: `By: Ruben Christopher Arevalo. Posted on ${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}, ${hourString}.`,
                postContent: post_input,
                month: new Date().getMonth() + 1,
                date: new Date().getDate(),
                year: new Date().getFullYear()
            })
                .then((res) => {
                    console.log(res.data.id)
                }).catch((error) => {
                    console.log(error)
                })
            setPostStatus(true)
        }
    }
    function deletePost() {
        var postID = document.getElementById("postid").value

        axios.delete(`http://localhost:8000/post/${postID}`).then((res) => {
            console.log(res)
            console.log(`Post ${postID} successfully deleted!`)
        }).catch((error) => {
            console.log(error)
            console.log(`Post ${postID} either failed to delete or was not found.`)
        })
    }

    function updateNewsMessage() {
        var updateMsgInput = document.getElementById("update-msg-input").value

        var beginMonth = document.getElementById("beginMonth").value
        var beginDate = document.getElementById("beginDate").value
        var beginYear = document.getElementById("beginYear").value

        var endMonth = document.getElementById("endMonth").value
        var endDate = document.getElementById("endDate").value
        var endYear = document.getElementById("endYear").value

        var beginHour = document.getElementById("beginHour").value
        var beginMinute = document.getElementById("beginMinute").value
        var endHour = document.getElementById("endHour").value
        var endMinute = document.getElementById("endMinute").value

        if (updateMsgInput !== "" && beginMonth !== "" && beginDate !== "" && beginYear !== "" && endMonth !== "" && endDate !== "" && endYear !== "") {
            axios.put("http://localhost:8000", {
                updateMessageText: updateMsgInput,
                beginMonth: beginMonth,
                beginDate: beginDate,
                beginYear: beginYear,
                endMonth: endMonth,
                endDate: endDate,
                endYear: endYear,
                beginHour: beginHour,
                beginMinute: beginMinute,
                endHour: endHour,
                endMinute: endMinute
            }).then((res) => {
                console.log(res);
            }).catch((error) => {
                console.log(error);
            })
        }
    }

    return (
        <div className="postInputContainer">
            <h2>Posts input</h2>
            <br></br>
            <textarea placeholder="Write your post" id="post-input" rows="10" cols="36"></textarea>
            <br></br>
            <br></br>
            <form>
                <button onClick={writePost}>Create Post</button>
                <br></br>
                <br></br>
                <input placeholder="Enter id number of post to delete" size="40" id="postid"></input>
                <br></br>
                <br></br>
                <button onClick={deletePost}>Delete Post</button>
                <br></br>
            </form>
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>
            <br></br>
            <h2>Update message input</h2>
            <br></br>
            <form>
                <textarea placeholder="Write new update message..." id="update-msg-input" rows="10" cols="36"></textarea>
                <br></br>
                <label>Begin date:</label>
                <br></br>
                <input placeholder="Enter month number: " id="beginMonth"></input>
                <br></br>
                <input placeholder="Enter month date:" id="beginDate"></input>
                <br></br>
                <input placeholder="Enter year:" id="beginYear"></input>
                <br></br>
                <br></br>
                <label>End date:</label>
                <br></br>
                <input placeholder="Enter month number: " id="endMonth"></input>
                <br></br>
                <input placeholder="Enter month date:" id="endDate"></input>
                <br></br>
                <input placeholder="Enter year:" id="endYear"></input>
                <br></br>
                <br></br>
                <label>At what time: <input id="beginHour"></input>:<input id="beginMinute"></input> to <input id="endHour"></input>:<input id="endMinute"></input></label>
                <br></br>
                <br></br>
                <br></br>
                <button onClick={updateNewsMessage}>Update message</button>
                <br></br>
                <br></br>
                <button type="reset">Clear form</button>
            </form>
        </div>
    )
}

export default PostEnter;