import React from "react";
import { Helmet } from 'react-helmet';
import profilepic from '../images/August 2021 Profile Pic 2.jpg';
import { BsExclamationCircle } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";

import Nav from "../Nav.jsx";
import Footer from "../Footer.jsx";
import Works from "../Works.jsx";
import Notification from "./Notification.jsx";

function closeUpdateMsg() {
    var e = document.getElementById("close-msg")
    e.classList.toggle("close")
    localStorage.removeItem("update-message")
    console.log("Message removed.")
}

const Intro = () => {
    return (
        <div className="intro">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - About Me</title>
            </Helmet>
            <Nav />
            <Notification />
            <div className="intro-container" id="about">
                <div className="update-message" id="close-msg">
                    <IoCloseCircleOutline onClick={closeUpdateMsg} id="close-icon" />
                    <p id="update-title">
                        <BsExclamationCircle size="18px" id="update-icon" /> UPDATE:
                    </p>
                    <p>
                        A major policy update for the archival of posts displayed on this page has been made.
                        The updated policy will take effect immediately on September 1, 2021 at 12:00 AM.
                        For more details, view <b>"Recent Posts"</b> on this page or visit the <b>"Posts"</b> page.
                    </p>
                    <p>
                        New changes have been made to the user interface, as the text is now aligning to the left
                        to make it appear more modern and appealing to users visiting this site.
                    </p>
                    <br></br>
                </div>
                <img src={profilepic} alt="profile-pic"></img>
                <h1>About the Author</h1>
                <p>
                    Hi everyone! My name is Ruben Christopher Arevalo, and I am a third-year student attending the University of Texas-Rio Grande Valley.
                    I am currently pursuing my bachelor's degree in computer engineering with my concentration focusing on software.
                    Since I was a high school student, I always found the concept of programming intriguing, thinking about how
                    much several lines of code can change the world in so many ways. This led to me to develop a huge interest in
                    learning about software development, since there are so many software programs out there in the Internet,
                    whether they'd be web applications, server-side applications, etc. Without them, we wouldn't be where we are
                    today in terms of how much technology has impacted our lives and changed the world for the better.
                </p>
                <p>
                    Feel free to contact me through either Github or Linkedin. The profile links are attached in the footer below
                    the page. You may also feel free to contact me through my email at <a href="mailto:rubenplayer105@gmail.com">rubenplayer105@gmail.com</a>.
                </p>
                <br></br>
                <hr></hr>
                <br></br>
                <div className="posts-container-intro">
                    <h1 id="posts-title-intro">Recent Posts</h1>
                    <p id="posts-description-intro">
                        The last three recent posts will be posted here. This page will be updated daily.
                        To view all posts, click on "Posts" on the navigation bar.
                    </p>
                    <div className="post">
                        <p id="post-content">
                            I am leaving this here to let y'all know that I am doing fine! I am really busy doing
                            college work and I am currently bombarded by a lot of homework. I am trying my best to
                            have some free time between college and maintaining this website.
                        </p>
                        <p id="post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id="post-date">
                            Posted on 9/14/2021 at 8:39 PM.
                        </p>
                    </div>
                    <div className="post" id="post-intro-margin">
                        <p id="post-content">
                            Happy Labor Day, everyone! I hope y'all have a wonderful one!
                        </p>
                        <p id="post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id="post-date">
                            Posted on 9/6/2021 at 1:19 AM.
                        </p>
                    </div>
                    <div className="post" id="post-intro-margin">
                        <p id="post-content">
                            I want to make another major announcement regarding my post archival policy. I have decided to
                            archive all posts <b>by the last day of each month</b>. In other words, I will completely wipe off
                            the main "Posts" page at 11:59 PM on the last day of each month and move them into a separate
                            page that contains posts for that month only (e.g. August). This will take effect immediately.
                        </p>
                        <p id="post-content">
                            In addition, I will disable the current month's selection option. For instance, if it's September,
                            then the link to view archived posts for this month will be disabled until October. After that deadline
                            has expired, and as I have mentioned before, I will move the posts from that month into their own
                            separate page. Then, the link will be available afterwards.
                        </p>
                        <p id="post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id="post-date">
                            Posted on 9/1/2021 at 12:00 AM.
                        </p>
                    </div>
                </div>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <Works />
            </div>
            <Footer />
        </div>
    );
}

export default Intro;