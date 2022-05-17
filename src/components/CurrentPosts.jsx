import React from 'react';
import { Link } from 'react-router-dom';

const CurrentPosts = () => {
    return (
        <div className="posts-container">
            <h1 id="posts-title">Announcements</h1>
            <br></br>
            <p id="posts-description">
                This is the page where I will be posting regular updates that are being made to this site.
                Old announcements will be <b>archived</b> on the last day of each month. This means that after the
                last day of each month has come to pass, then this whole page (minus the archive page) will
                be wiped out completely and be replaced with announcements for the new month.
            </p>
            <p id="posts-description">
                <i>
                    To view past announcements, click on the link that will take you to the <Link to="/archives"><b>Archives</b></Link> page
                    (or the link on the navigation bar). The Archives page gets updated every month for the duration of this Site.
                </i>
            </p>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 05/17/2022, 1:41 PM.
                </p>
                <p id="post-content">
                    Good afternoon. I am writing this announcement to let y'all know that I changed the icon of the website. The icon
                    of this page resembles a palm tree from one of the pictures that I took and displayed in the "About Me" page. I
                    hope you all enjoy it!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 05/15/2022, 11:06 PM.
                </p>
                <p id="post-content">
                    Good evening. I am writing this announcement to share that I have included the link to my CV website. The link can be
                    located in the front page (the "About Me" page) of the site. As always, have a wonderful rest of the upcoming week!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 05/11/2022, 7:01 PM.
                </p>
                <p id="post-content">
                    Those are all the announcements I have for today. Thank you and have a wonderful evening and great rest of the week!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 05/11/2022, 7:01 PM.
                </p>
                <p id="post-content">
                    In other news, new changes to the user interface in the "Settings" page and in the footer were made a few days ago and today respectively, especially in the mobile version.
                    When one hovers over the links in the footer, in the "Site Operation" link, the text tends to get out of its borders, which
                    makes the Site appear ugly and uncared for. Luckily, those problems have been solved, and the site should appear a little bit normal than from before.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 05/11/2022, 7:01 PM.
                </p>
                <p id="post-content">
                    Good evening, everyone! I have some great news to share! As you can see in the bottom of the "About Me" page, there is a
                    new contact form up and ready to go! I will most likely move the contact form to a new page at a future date.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 05/05/2022, 8:14 AM.
                </p>
                <p id="post-content">
                    Now that I am done with my announcements for today, I hope you all have a wonderful day! I hope to have a good one
                    as well!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 05/05/2022, 8:14 AM.
                </p>
                <p id="post-content">
                    Creating a website like that requires a lot of work, so I am not sure how long it will exactly take, as I need to prep
                    for my last year at the university and my senior design project. Nevertheless, I will do my <b>VERY BEST</b> to make sure that it comes out as I intend it to be and how I visualize it.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 05/05/2022, 8:14 AM.
                </p>
                <p id="post-content">
                    By <i>partially</i>, I mean I am not going to construct the blog site fully yet. I need to plan out the type of blog
                    site it will be. I am still in the planning stages, and I have to find out how to set up a comment system, as well
                    as setting up a reaction system as well, similar to the ones used in today's social media applications. And since this
                    will be my first time setting one up, I thought it'd be best to learn through experience, which may take a while
                    depending on other external circumstances I might encounter along the way.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 05/05/2022, 8:14 AM.
                </p>
                <p id="post-content">
                    Good monring, everyone! I am here to announce whether or not I would create a blogging site. Originally, I was going
                    to announce it at the end of April, but yet again, I got sidetracked by school work, as I had a final presentation
                    just yesterday. But anyways, I'd like to announce that <b>I will be making one starting this summer, <i>albeit partially.</i></b>
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 05/02/2022, 10:25 AM.
                </p>
                <p id="post-content">
                    Other than that, I should be good. I will see you all later! Have a great rest of the week everyone!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 05/02/2022, 10:25 AM.
                </p>
                <p id="post-content">
                    I am almost done with the semester. I have a final to study for this week, so I am going to divert all of my attention to that
                    in addition to other pending assignments that I need to complete.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 05/02/2022, 10:25 AM.
                </p>
                <p id="post-content">
                    Good morning, everyone! I apologize for updating this page late. I was really busy this weekend, and I did not have enough time
                    to get rid of last month's announcements. Regardless, the archive link should be open for the announcements from April 2022.
                </p>
            </div>
        </div>
    )
}

export default CurrentPosts;