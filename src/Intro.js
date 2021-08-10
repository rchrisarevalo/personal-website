import React from "react";
import thumb from './images/IMG_20210614_192736_373.jpg';
import { BsExclamationCircle } from "react-icons/bs";

import Nav from "./Nav";
import Footer from "./Footer";
import Works from "./Works";

const Intro = () => {
    return (
        <div className = "intro">
            <Nav/>
            <div className="intro-container" id="about">
                <div className = "update-message">
                    <p id="update-title">
                        <BsExclamationCircle size="18px" id="update-icon"/> UPDATE:
                    </p>
                    <p>
                        I have now moved the sections (as shown in the navigation bar) into separate pages. This allows
                        for more easier navigation between pages. But it will be a huge transition, and I hope any of
                        you that are on this page can get used to the new layout.
                    </p>
                    <p>
                        In addition, I have also introduced a new Posts page. I will be posting regular updates I will
                        be making (or have made) on that page. As I have stated on the aforementioned Posts page, I
                        will delete posts that are 30 days old, and leave the other ones intact that have not met
                        the deadline.
                    </p>
                    <p>
                        This message will stay up for one more day. I will take down this
                        message on August 10 at 12 AM. Enjoy the rest of the day!
                    </p>
                    <p>
                        If you happen to have any issues, you can report them by clicking on the report button. For
                        mobile users, you can click on the three bars on the top left of the header to open the navigation
                        menu. There, you will find the report button, which you can tap to access the form.
                    </p>
                    <br></br>
                </div>
                <img src={thumb} alt="thumb"></img>
                <h1>About the Author</h1>
                <p>
                Hi everyone! My name is Ruben Christopher Arevalo, and I am a student attending the University of Texas-Rio Grande Valley. 
                I am currently pursuing my bachelor's degree in computer engineering with my concentration focusing on software. 
                Since I was a high school student, I always found the concept of programming intriguing, thinking about how 
                much several lines of code can change the world in so many ways. This led to me to develop a huge interest in 
                learning about software development, since there are so many software programs out there in the Internet, 
                whether they'd be web applications, server-side applications, etc. Without them, we wouldn't be where we are 
                today in terms of how much technology has impacted our lives.
                </p>
                <div className = "posts-container-intro">
                    <h1 id = "posts-title-intro">Recent Posts</h1>
                    <p id = "posts-description-intro">
                        The last three recent posts will be posted here. This page will be updated daily.
                    </p>
                    <div className = "post">
                        <p id = "post-content">
                            Hi everyone! The update message has been taken down after
                            appearing on the home screen after three days, as I
                            intended. I am going to include the latest 3 posts on the home
                            page so all of y'all can be up to date with how the website is
                            being operated.
                        </p>
                        <p id = "post-content">
                            Anyways, have a wonderful night and have a great rest of the day
                            tomorrow!
                        </p>
                        <p id = "post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id = "post-date">
                            Posted on August 10, 2021 at 12:00 AM.
                        </p>
                    </div>
                    <div className = "post">
                        <p id = "post-content">
                            And the post feature works!
                        </p>
                        <p id = "post-content">
                            Keep in mind that I am the only one that will be posting on this website, sort of like my
                            own personal blog to share any updates I will be making.
                        </p>
                        <p id = "post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id = "post-date">
                            Posted on 8/8/2021 at 4:56 PM.
                        </p>
                    </div>
                    <div className = "post">
                        <p id = "post-content">
                            Hi everyone! This is a test post to keep y'all updated on upcoming updates and
                            new features. I don't know how long this post will be, so I will try my best to
                            write a long one like this (and I am deliberately stalling to see if this feature
                            works).
                        </p>
                        <p id = "post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id = "post-date">
                        Posted on 8/8/2021 at 4:55 PM.
                        </p>
                    </div>
                </div>
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