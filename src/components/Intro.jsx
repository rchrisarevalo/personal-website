import React from "react";
import {Helmet} from 'react-helmet';
import profilepic from '../images/August 2021 Profile Pic 2.jpg';
import { BsExclamationCircle } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";

import Nav from "../Nav.jsx";
import Footer from "../Footer.jsx";
import Works from "../Works.jsx";
import Notification from "./Notification.jsx";

function closeUpdateMsg(){
    var e = document.getElementById("close-msg")
    e.classList.toggle("close")
    localStorage.removeItem("update-message")
    console.log("Message removed.")
}

const Intro = () => {
    return (
        <div className = "intro">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - About Me</title>
            </Helmet>
            <Nav/>
            <Notification/>
            <div className="intro-container" id="about">
                <div className = "update-message" id="close-msg">
                    <IoCloseCircleOutline onClick={closeUpdateMsg} id="close-icon"/>
                    <p id="update-title">
                        <BsExclamationCircle size="18px" id="update-icon"/> UPDATE:
                    </p>
                    <p>
                        As you may have noticed by now, I included a select option in the "Posts" page that will allow
                        you to view posts by month and year (the latter is not ready yet until 2022). I also included
                        a notification-like message whenever you click on something like an image. For now, that function
                        is reserved for the images.
                    </p>
                    <p>
                        You can also close this message without having to wait for the three days (though I will take it down
                        eventually).
                    </p>
                    <br></br>
                </div>
                <img src={profilepic} alt="thumb"></img>
                <h1>About the Author</h1>
                <p>
                Hi everyone! My name is Ruben Christopher Arevalo, and I am a student attending the University of Texas-Rio Grande Valley. 
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
                <div className = "posts-container-intro">
                    <h1 id = "posts-title-intro">Recent Posts</h1>
                    <p id = "posts-description-intro">
                        The last three recent posts will be posted here. This page will be updated daily.
                        To view all posts, click on the Posts link on the navigation bar.
                    </p>
                    <div className="post">
                        <p id = "post-content">
                            Hi, y'all! I regret to inform everyone using this website that the dark/light theme toggler
                            has been removed. I made this decision because I thought a darker theme would be more
                            appealing and interesting for those who visit, in addition to most internet users that preferred
                            a dark mode more as the years have passed by. I replaced the dark/light theme icon with a
                            message icon, which will take you to a contact form (which I am still creating) that will 
                            allow you to ask questions instead of having to use the report form to do so.
                        </p>
                        <p id = "post-content">
                            If you have any questions, please feel free to contact me through my email!
                        </p>
                        <p id = "post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id = "post-date">
                            Posted on 8/25/2021 at 10:36 AM.
                        </p>
                    </div>
                    <div className="post">
                        <p id = "post-content">
                            I am posting this to let y'all know that today is the first time I go back to college
                            in person since the pandemic started last March. What this means is that I won't be able
                            to update this website regularly like I used to during the summer. So expect this website
                            to be updated every 2-3 weeks or so (if time permits). Thank you for understanding!
                        </p>
                        <p id = "post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id = "post-date">
                            Posted on 8/23/2021 at 10:21 AM.
                        </p>
                    </div>
                    <div className="post">
                        <p id = "post-content">
                            Good evening, everyone! I am happy to announce that I have made some new updates to this
                            site. I included a notificiation like message that pops up whenever you interact with one 
                            of my works displayed on the "About Me" page. Another fun fact about this update (even though
                            it's relatively minor), is that I added a close button for the update message in the "About Me"
                            page. I will continue to update this website as soon as I have time since I am about to start
                            my third year of college. Thank you and have a great evening!
                        </p>
                        <p id = "post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id = "post-date">
                            Posted on 8/22/2021 at 8:50 PM.
                        </p>
                    </div>
                </div>
                <br></br>
                <br></br>
                <hr></hr>
                <br></br>
                <Works/>
            </div>
            <Footer/>
        </div>
    );
}

export default Intro;