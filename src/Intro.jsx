import React from "react";
import profilepic from './images/August 2021 Profile Pic 2.jpg';
import { BsExclamationCircle } from "react-icons/bs";

import Nav from "./Nav.jsx";
import Footer from "./Footer.jsx";
import Works from "./Works.jsx";

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
                <div className = "posts-container-intro">
                    <h1 id = "posts-title-intro">Recent Posts</h1>
                    <p id = "posts-description-intro">
                        The last three recent posts will be posted here. This page will be updated daily.
                        To view all posts, click on the Posts link on the navigation bar.
                    </p>
                    <div className="post">
                        <p id = "post-content">
                            I have already included a page directory for the "Posts" page.
                            Each page will have 5 posts. The 30 day post removal policy for
                            posts matching this deadline will take effect on <b>September 7</b>.
                        </p>
                        <p id = "post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id = "post-date">
                            Posted on 8/16/2021 at 7:42 PM.
                        </p>
                    </div>
                    <div className="post">
                        <p id="post-content">
                            Hi everyone!
                        </p>
                        <p id = "post-content">
                            I am just letting y'all know that I am going to update the "Posts" page and move the Posts
                            to separate pages (5 posts per page, with the exception of this post) to avoid any
                            overflow issues.
                        </p>
                        <p id="post-content">
                            Thank you, and have a great day!
                        </p>
                        <p id = "post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id = "post-date">
                            Posted on 8/16/2021 at 6:29 PM.
                        </p>
                    </div>
                    <div className="post">
                        <p id="post-content">
                            Hello everyone! Today, I have made several updates regarding this website.
                        </p>
                        <p id="post-content">
                            Once again, I made another UI update. This time, the font has changed
                            for the description for each page! Pretty cool, right? I know it sounds
                            like I am bragging, but I am going to get to explaining the real update 
                            right now.
                        </p>
                        <p id="post-content">
                            There have been some issues with the routing of this website, particularly
                            when someone tries to reload a page and instead end up with an "Error 404"
                            message from the server.
                        </p>
                        <p id="post-content">
                            Fortunately, I fixed it, and it should be able to run the way I intended it
                            to be so that all of you can interact with this website with almost no bugs
                            whatsoever. I also added my own custom "Error 404" message so that way it
                            feels more personalized for the site!
                        </p>
                        <p id="post-content">
                            If you have any issues, please feel free to contact me!
                        </p>
                        <p id = "post-content">
                            -- Ruben Christopher Arevalo
                        </p>
                        <p id = "post-date">
                            Posted on 8/16/2021 at 3:29 AM.
                        </p>
                    </div>
                </div>
                <Works/>
            </div>
            <Footer/>
        </div>
    );
}

export default Intro;