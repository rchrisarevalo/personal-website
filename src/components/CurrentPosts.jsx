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
                    By: Ruben Christopher Arevalo. Posted on 04/07/2022, 5:15 PM.
                </p>
                <p id="post-content">
                    That is everything I have to say. Thank you for your patience and I hope to re-open this website once the timeframe has
                    passed. Thank you and have a great day!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 04/07/2022, 5:15 PM.
                </p>
                <p id="post-content">
                    As this is a matter of education, my education in fact, these circumstances qualify for the "Personal Affairs" section to be
                    invoked. This is probably the first time I had to use the Site Operation policy in times like these. In contrast to the section
                    stating that the website won't be necessarily shut down, I am going to have to, at least for the next two to three weeks.
                    This change will take effect on Saturday, April 9, midnight.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 04/07/2022, 5:15 PM.
                </p>
                <p id="post-content">
                    My circumstances have become a little bit complicated. I hope to come back before the end of the month so I can announce whether or
                    not I will be creating a blog. If not, then I will come back in the first week of May. The workload should be lighter by then, except
                    for a poster for a presentation that I have to do.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 04/08/2022, 9:37 PM.
                </p>
                <p id="post-content">
                    Today is the last day this website will be available until I take a leave of absence for 3 weeks. I wish you all a great rest of the
                    month and I will see you on April 30!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 04/07/2022, 5:15 PM.
                </p>
                <p id="post-content">
                    Good afternoon. I am announcing that I will be taking a leave of absence for the next 2-3 weeks. The reason for why I am taking
                    this leave of absence is because due to this month being the last full month of the semester before the end of May (when the
                    semester ends), I am going to have to stay focused now more than ever. I have a very important assignment due at the end of the
                    semester, on top of dealing with other homework assignments, quizzes, and exams.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 04/01/2022, 12:12 AM.
                </p>
                <p id="post-content">
                    Despite that, I will try my best to make new features when possible. Have a great rest of the day,
                    and once again, April Fool's!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 04/01/2022, 12:12 AM.
                </p>
                <p id="post-content">
                    But honestly, I am going to continue maintaining this website whenever I have free time in my hands and
                    if I have less work to do than usual. This month will be important as it is the month before finals. I
                    am going to need to use my time wisely if I am going to have a good chance of obtaining my degree next
                    year and pass all my courses.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 04/01/2022, 12:12 AM.
                </p>
                <p id="post-content">
                    Today is April Fool's Day! I know my attempt at an April Fool's joke was
                    kind of lousy. But hey, I tried my best!
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 04/01/2022, 12:12 AM.
                </p>
                <p id="post-content">
                    <b>GOTCHA!</b>
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-info">
                    By: Ruben Christopher Arevalo. Posted on 04/01/2022, 12:12 AM.
                </p>
                <p id="post-content">
                    Hello everyone. I am here to announce that I am going <b>to shut down this website permanently.</b>
                    I will no longer be able to maintain this website any longer due to college work.
                </p>
            </div>
        </div>
    )
}

export default CurrentPosts;