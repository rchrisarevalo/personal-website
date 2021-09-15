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
                        If you have noticed, the font has been changed once again. I chose this font because I thought
                        it looked really modern and fit well with the theme of this site. In addition, I might be
                        posting less during the next three months due to me focusing on college coursework. If I have
                        free time, I will try my best to continue to maintain this website.
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
                            This will be brief. I updated the website's font to make it more appealing for users visiting
                            this site. I hope you enjoy this update!
                        </p>
                        <p id="post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id="post-date">
                            Posted on 9/15/2021 at 1:12 AM.
                        </p>
                    </div>
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