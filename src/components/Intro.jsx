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
                        The update is explained in my most recent announcement:
                    </p>
                    <p>
                        <i>
                            Hello everyone! I am here to announce yet another UI change, only this time, the posts appear with a border outline.
                            I added a little bit of touch to the UI of the posts to make it more modern and appealing. There have also been
                            some changes to the mobile app as well, such as centering the "About the Author" section in the "About Me"
                            page since a left text align did not suit well in the mobile version.
                        </i>
                    </p>
                    <p>
                        <i>
                            If you have any issues regarding the user interface or the overall function of this page, please do not hesitate to
                            contact me through either the "Report" or "Contact Me" form by clicking one of the buttons on the top right of
                            the page (or the top right for the former or the "Report" option that can be found in the navigation bar in the
                            mobile version).
                        </i>
                    </p>
                    <p>
                        <i>
                            Have a wonderful rest of the day (if you happen to be awake to see this, yes I stay up late most of the time).
                        </i>
                    </p>
                    <p>
                        <i>-- Ruben Christopher Arevalo</i>
                    </p>
                    <p>
                        <i>Posted on 9/18/2021 at 1:04 AM.</i>
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
                    <h1 id="posts-title-intro">Recent Announcements</h1>
                    <p id="posts-description-intro">
                        The last three recent posts will be posted here. This page will be updated daily.
                        To view all posts, click on "Announcements" on the navigation bar.
                    </p>
                    <div className="post" id="post-intro-margin">
                        <p id="post-content">
                            I am writing this to let y'all know that I expanded the size of the navigation bar for both
                            the web and mobile versions of this site. It's nothing big; just a small change to the
                            UI design of this website.
                        </p>
                        <p id="post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id="post-date">
                            Posted on 9/21/2021 at 4:09 PM.
                        </p>
                    </div>
                    <div className="post" id="post-intro-margin">
                        <p id="post-content">
                            Huge announcement! "Posts" has been renamed to "Announcements". The latter seems like a more
                            appropriate title because I only release these posts as official announcements for changes
                            that have occurred or are occurring on this website. I also use it for the holidays
                            whenever I get the chance. I hope you enjoy the new change!
                        </p>
                        <p id="post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id="post-date">
                            Posted on 9/18/2021 at 2:07 AM.
                        </p>
                    </div>
                    <div className="post" id="post-intro-margin">
                        <p id="post-content">
                            Hello everyone! I am here to announce yet another UI change, only this time, the posts appear with a border outline.
                            I added a little bit of touch to the UI of the posts to make it more modern and appealing. There have also been
                            some changes to the mobile app as well, such as centering the "About the Author" section in the "About Me"
                            page since a left text align did not suit well in the mobile version.
                        </p>
                        <p id="post-content">
                            If you have any issues regarding the user interface or the overall function of this page, please do not hesitate to
                            contact me through either the "Report" or "Contact Me" form by clicking one of the buttons on the top right of
                            the page (or the top right for the former or the "Report" option that can be found in the navigation bar in the
                            mobile version).
                        </p>
                        <p id="post-content">
                            Have a wonderful rest of the day (if you happen to be awake to see this, yes I stay up late most of the time).
                        </p>
                        <p id="post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id="post-date">
                            Posted on 9/18/2021 at 1:04 AM.
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