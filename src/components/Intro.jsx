import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import profilepic from '../images/April 2022 Profile Pic 2 (Square).JPEG';

import NavAbout from "../NavAbout.jsx";
import NewFooter from "../NewFooter.jsx";
import Update from "./Update.jsx";
import RecentPosts from './RecentPosts';
import Works from "../Works.jsx";

import nprogress from "nprogress";
import "nprogress/nprogress.css";
import ProgressBar from 'react-bootstrap/ProgressBar';

var current_date = Date.now();
var graduation_date = new Date(2023, 4, 13, 18);
var num_days = 0;
var days_passed = 0;
var progress_countdown = 0;

function countdown(){
    var grad_date = new Date(2023, 4, 13, 18)
    var today_date = Date.now()
    var ms = grad_date - today_date

    var days_year = 365

    today_date = new Date(2022, 4, 18)

    // The total number of days from today until my expected graduation date
    num_days = ms * (0.001 / 1) * (1 / 60) * (1 / 60) * (1 / 24)

    // Display original unrounded number of days on the console for accuracy purposes
    // and to ensure that the number of days continues to update per each reload
    // console.log(num_days)

    num_days = num_days.toFixed(0)

    // console.log(num_days)
    // console.log(ms)
    // console.log(grad_date, today_date)

    days_passed = days_year - num_days
    // console.log(days_passed)
    progress_countdown = (days_passed / num_days) * 100
    progress_countdown = progress_countdown.toFixed(1)

    if (num_days <= 0){
        return ["Graduation day!"];
    }

    return num_days
}

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
            <Update />
            <div className="intro-container" id="about">
                <img src={profilepic} alt="profile-pic"></img>
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
                <p data-aos="fade-down" data-aos-delay="1200">
                    You can also visit my CV website at this link: <a href="https://rchrisarevalo.github.io/cv-website" rel="noopener noreferrer" target="_blank"><b>rchrisarevalo.github.io/cv-website</b></a>
                </p>
                {/* This will be displayed until graduation date */}
                { (current_date < graduation_date) &&
                    <div>
                        <br></br>
                        <p id="graduation-countdown" data-aos="flip-up" data-aos-delay="2000">
                        Days left before graduation: <b>{countdown()} days!</b>
                        </p>
                        <ProgressBar animated now={`${progress_countdown}`} id="progress-bar" data-aos="fade" data-aos-delay="2200"/>
                        <p id="progress-count" data-aos="fade" data-aos-delay="2400">Progress until graduation day: {progress_countdown}%</p>
                        <br></br>
                    </div>
                }
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