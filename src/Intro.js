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