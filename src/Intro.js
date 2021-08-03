import React from "react";
import thumb from './images/IMG_20210614_192736_373.jpg';
import { BsExclamationCircle } from "react-icons/bs";

const Intro = () => (
    <div className="intro" id="about">
        <div className = "update-message">
            <p id="update-title">
                <BsExclamationCircle size="18px" id="update-icon"/> UPDATE:
            </p>
            <p>
                I am pleased to introduce a new feature for my website. With this new update, anyone
                is allowed to change the website's theme to either dark or light, depending on personal
                preference. In order to activate it, one has to press the cloud/sun icon two times when switching
                from light to dark and vice versa.
            </p>
            <p>
                This message will stay up for three days. After the set time has expired, I will take down this
                message. Enjoy the rest of the day!
            </p>
            <br></br>
        </div>
        <br></br>
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
    </div>
);

export default Intro;