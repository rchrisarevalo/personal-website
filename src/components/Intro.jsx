import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import profilepic from '../images/February 2023 Profile Pic.jpg';

import Nav from "../Nav.jsx";
import NewFooter from "../NewFooter.jsx";
import Update from "./Update.jsx";
import RecentPosts from './RecentPosts';
import Works from "../Works.jsx";
import ProgressCountdown from "./ProgressCountdown.jsx";

import nprogress from "nprogress";
import "nprogress/nprogress.css";
// import TimeCountdown from "./TimeCountdown";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

var current_date = Date.now();
var graduation_date = new Date(2023, 4, 13, 0);

var birth_date = new Date(2001, 7, 10);
var birthday = new Date(new Date().getFullYear(), 7, 10)
var age_ms = birthday - birth_date;
var age = age_ms * (0.001 / 1) * (1 / 60) * (1 / 60) * (1 / 24) * (1 / 365)
age = age.toFixed(0)

// If birthday date is greater than today's date,
// then the calculated age will be subtracted
// by 1.
if (birthday > current_date) {
    age = age - 1;

    // Otherwise, the calculated age will be included
} else {

}
var student_year = "fourth-year"

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

    const [currentAge, setCurrentAge] = useState(age)
    const [dayGreeting, setDayGreeting] = useState(time_greeting())

    // This will be a temporary state variable as long as I am a student
    const [studentYear, setStudentYear] = useState(student_year)

    setTimeout(() => {
        // The owner's age (me) will remain the same if the birthday is not reached yet.
        if (birthday > current_date) {
            setCurrentAge(currentAge)

            // Otherwise, the current age will increment by 1.
        } else {
            if (new Date().getDate() === 10 && new Date().getMonth() === 7 && new Date().getSeconds() === 0 && new Date().getHours() === 0 && new Date().getMinutes() === 0) {
                setCurrentAge(parseInt(currentAge) + parseInt(1))
            }
        }
    }, 1000)

    setTimeout(() => {
        // I will be a fourth-year student from August 29, 2022 at 8 AM to May 13, 2023 at 8 PM.
        if (Date.now() >= new Date(2022, 7, 29) && Date.now() <= new Date(2023, 4, 13, 20)) {
            setStudentYear("fourth-year")
        } else {
            setStudentYear("recent graduate")
        }

        // Time greetings will automatically change throughout the day.

        // 12:00 AM - 11:59 AM
        if (new Date().getHours() >= 0 && new Date().getHours() <= 11) {
            setDayGreeting("Good morning, ")

            // 12:00 PM - 5:59 PM
        } else if (new Date().getHours() >= 12 && new Date().getHours() <= 17) {
            setDayGreeting("Good afternoon, ")

            // 6:00 PM - 11:59 PM
        } else if (new Date().getHours() >= 18 && new Date().getHours() <= 23) {
            setDayGreeting("Good evening, ")
        }
    }, 1000)

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
            <Nav />
            <Update />
            <div className="intro-container" id="about">
                <p data-aos="fade-down" data-aos-delay="500">
                    <div id="life-details-web">
                        <Row id="life-details-row">
                            <Col>
                                <img src={profilepic} alt="profile-pic"></img>
                            </Col>
                            <Col xs lg={8}>
                                <h1 data-aos="fade-down">About the Author</h1>
                                <p data-aos="fade-down" data-aos-delay="500">
                                    {`${dayGreeting}`} everyone! My name is Ruben Christopher Arevalo, and I am a {`${currentAge}`} year old {`${studentYear}`} who recently graduated from the University of Texas-Rio Grande Valley.
                                    I pursued and earned my Bachelor's Degree in Computer Engineering with my concentration focusing on software from August 2019 to May 2023.
                                </p>
                                <p data-aos="fade-down" data-aos-delay="700">
                                    Now that I have graduated, my goal is to become either a software engineer or a web developer. After I have chosen
                                    one of the aforementioned roles, I will update my bio reflecting the change regarding my current position.
                                </p>
                            </Col>
                        </Row>
                        <Row id="life-details-row">
                            <Col>
                                <h3>Interests</h3>
                                As part of the introduction, I want to share some fun facts I want to share about myself.
                                What I do in my spare time is that I love to code, listen to music (preferrably lofi, classical, and pop),
                                play video games, and watch movies and shows in my free time. Whenever I have free time, other hobbies that I do
                                are play soccer, watch anime, and research random topics online.
                            </Col>
                            <Col>
                                <h3>Motivation</h3>
                                Since I was a high school student, I always found the concept of programming intriguing, thinking about how
                                much over a million (or a few) lines of code can impact the world in so many ways. This led to me to develop a huge interest in
                                learning about software development, since there are so many software programs out there in the Internet,
                                whether they'd be web applications, server-side applications, etc. Regardless of whether an app is either in the web or in our phones,
                                it has changed the way our infrastructure works, as well as many of our choices when it comes to utilizing services online.
                                Without them, we wouldn't be where we are today in terms of how much technology has affected our lives and how it changed the world
                                for the better.
                            </Col>
                        </Row>
                    </div>
                    <div id="life-details-mobile">
                        <img src={profilepic} alt="profile-pic"></img>
                        <h1 data-aos="fade-down">About the Author</h1>
                        <p data-aos="fade-down" data-aos-delay="500">
                            As part of introducing myself, I want to share some fun facts I want to share about myself.
                            What I do in my spare time is that I love to code, listen to music (preferrably lofi, classical, and pop),
                            play video games, and watch movies and shows in my free time. Whenever I have free time, other hobbies that I do
                            are play soccer, watch anime, and research random topics online.
                        </p>
                        <p data-aos="fade-down" data-aos-delay="700">
                            After graduation, my goal is to become either a software engineer or a web developer. After I have chosen
                            one of the aforementioned roles, I will update my bio reflecting my current position, which will first take
                            effect after I graduate from my university and then again after I have found a job in either aforementioned
                            role.
                        </p>
                        <br></br>
                        <Row>
                            <h3>Interests</h3>
                            As part of introducing myself, I want to share some fun facts I want to share about myself.
                            What I do in my spare time is that I love to code, listen to music (preferrably lofi, classical, and pop),
                            play video games, and watch movies and shows in my free time. Whenever I have free time, other hobbies that I do
                            are play soccer, watch anime, and research random topics online.
                            <br></br>
                            <br></br>
                            <br></br>
                            <h3>Motivation</h3>
                            Since I was a high school student, I always found the concept of programming intriguing, thinking about how
                            much over a million (or a few) lines of code can impact the world in so many ways. This led to me to develop a huge interest in
                            learning about software development, since there are so many software programs out there in the Internet,
                            whether they'd be web applications, server-side applications, etc. Regardless of whether an app is either in the web or in our phones,
                            it has changed the way our infrastructure works, as well as many of our choices when it comes to utilizing services online.
                            Without them, we wouldn't be where we are today in terms of how much technology has affected our lives and how it changed the world
                            for the better.
                        </Row>
                    </div>
                </p>
                <br></br>
                <Row id="contact-details-row">
                    <Col>
                        <h3>Where To Contact Me</h3>
                        Feel free to contact me through either GitHub or LinkedIn. The profile links are attached in the footer below
                        the page. This site's contact form can also be used to contact me by clicking on the "Contact Me" link on the
                        navigation bar.
                        <br></br>
                        <br></br>
                        You can also visit my CV website at this link: <a href="https://rchrisarevalo.github.io/cv-website" rel="noopener noreferrer" target="_blank"><b>rchrisarevalo.github.io/cv-website</b></a>
                    </Col>
                </Row>
                <br></br>
                {/* This component will be displayed until the graduation date and the hours leading up to it */}
                {(current_date <= graduation_date) && localStorage.getItem("show_progress") === "true" &&
                    <ProgressCountdown />
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