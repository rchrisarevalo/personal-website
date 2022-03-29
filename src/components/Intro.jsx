import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import profilepic from '../images/March 2022 Profile Pic.jpg';

import NavAbout from "../NavAbout.jsx";
import NewFooter from "../NewFooter.jsx";
import Update from "./Update.jsx";
import RecentPosts from './RecentPosts';
import Works from "../Works.jsx";
import Notification from "./Notification.jsx";

import nprogress from "nprogress";
import "nprogress/nprogress.css";

function time_greeting() {
    var hour = new Date().getHours();

    if (hour >= 0 && hour <= 11) {
        return ["Good morning, "];
    } else if (hour >= 12 && hour <= 17) {
        return ["Good afternoon, "];
    } else if (hour >= 18 && hour <= 23) {
        return ["Good evening, "];
    }
}

const Intro = () => {

    useEffect(() => {
        nprogress.configure({ minimum: 0.1, showSpinner: false, easing: 'ease', speed: 800, trickleSpeed: 200 });
        nprogress.start();
        nprogress.set(0.5);
        nprogress.inc(0.5);
        nprogress.done(true);

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="intro">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - About Me</title>
            </Helmet>
            <NavAbout />
            <Notification />
            <Update />
            <div className="intro-container" id="about">
                <img src={profilepic} alt="profile-pic" data-aos="fade"></img>
                <h1 data-aos="fade-down">About the Author</h1>
                <p data-aos="fade-down" data-aos-delay="500">
                    {time_greeting()} everyone! My name is Ruben Christopher Arevalo, and I am a 20 year old third-year student attending the University of Texas-Rio Grande Valley.
                    I am currently pursuing my bachelor's degree in computer engineering with my concentration focusing on software.
                    Fun facts I want to share about myself are that I love to code, listen to music (preferrably lofi, classical, and pop),
                    play video games, and watch movies and shows in my free time.
                    Since I was a high school student, I always found the concept of programming intriguing, thinking about how
                    much over a million (or a few) lines of code can impact the world in so many ways. This led to me to develop a huge interest in
                    learning about software development, since there are so many software programs out there in the Internet,
                    whether they'd be web applications, server-side applications, etc. Regardless of whether an app is either in the web or in our phones,
                    it has changed the way our infrastructure works, as well as many of our choices when it comes to utilizing services online.
                    Without them, we wouldn't be where we are today in terms of how much technology has affected our lives and how it changed the world
                    for the better.
                </p>
                <p data-aos="fade-down" data-aos-delay="1000">
                    Feel free to contact me through either Github or Linkedin. The profile links are attached in the footer below
                    the page.
                </p>
                <br></br>
                <hr></hr>
                <br></br>
                <RecentPosts />
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