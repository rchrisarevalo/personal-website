import React from 'react';

const RecentPosts = () => {
    return (
        <div className="posts-container-intro">
            <h1 id="posts-title-intro">Recent Announcements</h1>
            <p id="posts-description-intro">
                The last three recent posts will be posted here. This page will be updated daily.
                To view all posts, click on "Announcements" on the navigation bar.
            </p>
            <div className="post" id="post-margin">
                <p id="post-content">
                    That's all for now. Have a great rest of the week and please stay safe!
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 01/03/2022 at 12:00 AM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    Now that I am done covering the new "Website Operation" policy, I also wanted to let y'all know
                    that I am back and will be maintaining this site as before. However, expect my activity to dwindle
                    down a little bit on January 18th and afterwards, as the Spring semester of my university starts
                    that day. Despite that, I will continue to make an effort to maintain this Site and keep it running
                    without any bugs or any regressions that might be introduced in the future.
                </p>
                <p id="post-content">
                    Since I am speaking about bugs right now, I will also keep an eye out on issues that might be caused
                    by a vulnerability with Log4j, which is widely used in many pieces of software around the world, such
                    as our smart phones, computers, video games, etc. As this website is running on GitHub Pages, I am
                    going to do my best to make sure that this Site does not fall prey to any hacking attempts that might
                    occur in the future, depending on the circumstances surrounding the Log4j vulnerability.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 01/03/2022 at 12:00 AM.
                </p>
            </div>
            <div className="post" id="post-margin">
                <p id="post-content">
                    In addition, I wanted to remind you all that I introduced a new policy that determines what
                    time this Site can and cannot operate. The new policy was introduced in November 2021, just
                    before I closed this website for the Thanksgiving holiday. However, I forgot to specifically
                    outline when and what times the website can operate.
                </p>
                <p id="post-content">
                    Fortunately, I drafted an outline as to how this Site will operate from now on. Keep in mind
                    that the new policy that is titled "Website Operation Policy" is not a legal document per se,
                    but rather, to explain what is going to happen to the operations of this Site. The page containing
                    that policy will explain what circumstances would warrant the closure of this Site, along with
                    other additional details. For more information, please feel free to click on the "Website Operation"
                    link on the footer in the "Policies" column.
                </p>
                <p id="post-content">
                    -- Ruben Christopher Arevalo
                </p>
                <p id="post-date">
                    Posted on 01/03/2022 at 12:00 AM.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;