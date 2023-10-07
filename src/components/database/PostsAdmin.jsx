/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import axios from "axios";
import { socket_client_conn } from '../../App';

var post_input;

var hours_23_system = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
var hours_12_system = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
var hour = 0
var hourString = ''

const PostEnter = () => {
    const [currentPostInput, setCurrentPostInput] = useState("")
    const [authenticated, setAuthenticated] = useState(false)
    const [message, setMessage] = useState("")

    // eslint-disable-next-line no-unused-vars
    const [connection, setConnection] = useState(socket_client_conn)

    useEffect(() => {
        console.log(document.cookie.length)
        axios.post("http://localhost:5000/check_session", { msg: "Hi there!" }, { withCredentials: true })
            .then((res) => {
                console.log(res.data)
                if (res.data["message"] === "Validated") {
                    setAuthenticated(true)
                } else {
                    setAuthenticated(false)
                }
            }).catch((error) => {
                setAuthenticated(false)
            })
    }, [])

    setInterval(() => {
        for (var i = 0; i < hours_23_system.length; i++) {
            if (new Date().getHours() === hours_23_system[i]) {
                hour = hours_12_system[i]
            }

            if (new Date().getHours() === 0) {
                if (new Date().getMinutes() >= 0 && new Date().getMinutes() <= 9) {
                    hourString = `${hour}:0${new Date().getMinutes()} AM`
                } else if (new Date().getMinutes() >= 10 && new Date().getMinutes() <= 59) {
                    hourString = `${hour}:${new Date().getMinutes()} AM`
                }
            }
            else if (new Date().getHours() >= 1 && new Date().getHours() <= 9) {
                if (new Date().getMinutes() >= 0 && new Date().getMinutes() <= 9) {
                    hourString = `0${hour}:0${new Date().getMinutes()} AM`
                } else if (new Date().getMinutes() >= 10 && new Date().getMinutes() <= 59) {
                    hourString = `0${hour}:${new Date().getMinutes()} AM`
                }
            } else if (new Date().getHours() >= 10 && new Date().getHours() <= 11) {
                if (new Date().getMinutes() >= 0 && new Date().getMinutes() <= 9) {
                    hourString = `${hour}:0${new Date().getMinutes()} AM`
                } else {
                    hourString = `${hour}:${new Date().getMinutes()} AM`
                }
            } else if (new Date().getHours() === 12) {
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

    function handlePostInput() {
        var postInput = document.getElementById("post-input").value
        setCurrentPostInput(postInput)
    }

    function writePost(event) {
        event.preventDefault()
        post_input = document.getElementById("post-input").value

        if (post_input !== "") {
            axios.post("https://personal-website-server-icob.onrender.com/check_session", {}, { withCredentials: true })
                .then((res) => {
                    if (res.status === 200) {
                        axios.post("https://personal-website-server-icob.onrender.com/insert_posts", {
                            title: `By: Ruben Christopher Arevalo. Posted on ${new Date().getMonth() + 1}/${new Date().getDate()}/${new Date().getFullYear()}, ${hourString}.`,
                            postContent: post_input,
                            month: new Date().getMonth() + 1,
                            date: new Date().getDate(),
                            year: new Date().getFullYear()
                        }).then((res) => {
                            setCurrentPostInput("")
                            connection.emit('update-posts', "Go!")
                        }).catch((error) => {
                            console.log(error)
                        })
                    }
                    else {
                        setAuthenticated(false)
                    }
                })
        }
    }

    // function deletePost() {
    //     var postID = document.getElementById("postid").value

    //     axios.delete(`http://localhost:8000/post/${postID}`).then((res) => {
    //         console.log(res)
    //         console.log(`Post ${postID} successfully deleted!`)
    //     }).catch((error) => {
    //         console.log(error)
    //         console.log(`Post ${postID} either failed to delete or was not found.`)
    //     })
    // }

    // function updateNewsMessage() {
    //     var updateMsgInput = document.getElementById("update-msg-input").value

    //     var beginMonth = document.getElementById("beginMonth").value
    //     var beginDate = document.getElementById("beginDate").value
    //     var beginYear = document.getElementById("beginYear").value

    //     var endMonth = document.getElementById("endMonth").value
    //     var endDate = document.getElementById("endDate").value
    //     var endYear = document.getElementById("endYear").value

    //     var beginHour = document.getElementById("beginHour").value
    //     var beginMinute = document.getElementById("beginMinute").value
    //     var endHour = document.getElementById("endHour").value
    //     var endMinute = document.getElementById("endMinute").value

    //     if (updateMsgInput !== "" && beginMonth !== "" && beginDate !== "" && beginYear !== "" && endMonth !== "" && endDate !== "" && endYear !== "") {
    //         axios.put("http://localhost:7000/update/1", {
    //             updateMessageText: updateMsgInput,
    //             beginMonth: beginMonth,
    //             beginDate: beginDate,
    //             beginYear: beginYear,
    //             endMonth: endMonth,
    //             endDate: endDate,
    //             endYear: endYear,
    //             beginHour: beginHour,
    //             beginMinute: beginMinute,
    //             endHour: endHour,
    //             endMinute: endMinute
    //         }).then((res) => {
    //             console.log(res);
    //         }).catch((error) => {
    //             console.log(error);
    //         })
    //     }
    // }

    // function setArchiveDate() {
    //     var beginMonth = document.getElementById("beginMonth").value
    //     var beginDate = document.getElementById("beginDate").value
    //     var beginYear = document.getElementById("beginYear").value

    //     var endMonth = document.getElementById("endMonth").value
    //     var endDate = document.getElementById("endDate").value
    //     var endYear = document.getElementById("endYear").value

    //     var beginHour = document.getElementById("beginHour").value
    //     var beginMinute = document.getElementById("beginMinute").value
    //     var endHour = document.getElementById("endHour").value
    //     var endMinute = document.getElementById("endMinute").value

    //     if (beginMonth !== "" && beginDate !== "" && beginYear !== "" && endMonth !== "" && endDate !== "" && endYear !== "") {
    //         axios.put("http://localhost:7000/archive/1", {
    //             beginMonth: parseInt(beginMonth),
    //             beginDate: parseInt(beginDate),
    //             beginYear: parseInt(beginYear),
    //             endMonth: parseInt(endMonth),
    //             endDate: parseInt(endDate),
    //             endYear: parseInt(endYear),
    //             beginHour: parseInt(beginHour),
    //             beginMinute: parseInt(beginMinute),
    //             endHour: parseInt(endHour),
    //             endMinute: parseInt(endMinute)
    //         }).then((res) => {
    //             console.log(res);
    //         }).catch((error) => {
    //             console.log(error);
    //         })
    //     }
    // }

    function handleLoginSubmission(event) {
        event.preventDefault()

        var username = document.getElementById("username").value
        var password = document.getElementById("password").value

        axios.post("https://personal-website-server-icob.onrender.com/generate_token", { username: username }, { withCredentials: true })
            .then((res) => {
                const tok = res.data["token"]
                console.log(tok)
                if (tok !== "") {
                    console.log(document.cookie.length)
                    axios.post("https://personal-website-server-icob.onrender.com/login", { username: username, password: password },
                        { headers: { Authorization: `Bearer ${tok}` } })
                        .then((res) => {
                            setMessage("Logging in...")
                            if (res.data["message"] === true) {
                                setAuthenticated(true)
                            }
                        }).catch((error) => {
                            console.log(error)
                            setMessage("Failed to login!")
                        }).finally(() => {
                            username = ""
                            password = ""
                        })
                }
                else {
                    console.log("Missing CSRF token!")
                }
            }).catch((error) => {
                console.log(error)
                setMessage("Failed to login!")
            })
    }

    function handleLogOut(event) {
        event.preventDefault()

        axios.post("http://localhost:5000/logout", {}, { withCredentials: true })
        .then((res) => {
            console.log(res.data)
            window.location.reload()
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <>
            {!authenticated ?
                <div className="login-form">
                    <form onSubmit={handleLoginSubmission}>
                        <label>Username</label>
                        <input required id="username" />
                        <br></br>
                        <br></br>
                        <label>Password</label>
                        <input type="password" required id="password" />
                        <br></br>
                        <br></br>
                        <button type="submit">Login</button>
                        {message.length !== 0 ? <><br></br><br></br><span>{`${message}`}</span></> : <></>}
                    </form>
                </div>
                :
                <div className="postInputContainer">
                    <button><a href="#/about">Home</a></button>
                    <button onClick={handleLogOut}>Logout</button>
                    <br></br>
                    <br></br>
                    <h2>Posts input</h2>
                    <form onSubmit={writePost}>
                        <br></br>
                        <textarea placeholder="Write your post" id="post-input" rows="10" cols="36" value={currentPostInput} onChange={handlePostInput}></textarea>
                        <br></br>
                        <br></br>
                        <button onClick={writePost}>Create Post</button>
                        <br></br>
                        <br></br>
                        {/* <input placeholder="Enter id number of post to delete" size="40" id="postid"></input> */}
                        {/* <br></br>
                        <br></br>
                        <button onClick={deletePost}>Delete Post</button> */}
                        <br></br>
                    </form>
                    {/* <br></br>
                    <br></br>
                    <hr></hr>
                    <br></br>
                    <br></br>
                    <h2>Update message input/Set archive availability</h2>
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
                        <br></br>
                        <br></br>
                        <button onClick={setArchiveDate}>Set archive availability</button>
                    </form> */}
                </div>
            }
        </>
    )
}

export default PostEnter;