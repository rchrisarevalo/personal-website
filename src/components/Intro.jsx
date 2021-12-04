import React from "react";
import { Helmet } from 'react-helmet';
import profilepic from '../images/December 2021 Pic.jpg';

import Nav from "../Nav.jsx";
import NewFooter from "../NewFooter.jsx";
import Update from "./Update.jsx";
import RecentPosts from './RecentPosts';
import Works from "../Works.jsx";
import Notification from "./Notification.jsx";

const Intro = () => {
    return (
        <div className="intro">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - About Me</title>
            </Helmet>
            <Nav />
            <Notification />
            <Update/>
            <div className="intro-container" id="about">
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
                    the page. You may also feel free to contact me through my email at <a href="mailto:rubenplayer105@gmail.com"><b>rubenplayer105@gmail.com</b></a>.
                </p>
                <br></br>
                <hr></hr>
                <br></br>
                <RecentPosts/>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <Works />
            </div>
            <NewFooter />
        </div>
    );
}

export default Intro;