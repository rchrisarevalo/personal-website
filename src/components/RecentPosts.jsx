import React from 'react';

const RecentPosts = () => {
    return (
        <div className="posts-container-intro">
            <h1 id="posts-title-intro" data-aos="fade-down">Recent Announcements</h1>
            <p id="posts-description-intro" data-aos="fade-right" data-aos-delay="500">
                The last three recent announcements will be posted here. This page will be updated whenever there are new announcements.
                To view all announcements, click on "Announcements" on the navigation bar.
            </p> 
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/16/2022, 11:54 AM.
                </p>
                <p id="post-content">
                    I am leaving this here to let you all know that I have experienced big setbacks during the past few days.
                    My computer was acting up lately during the last few days, and it was a difficult period as I tried
                    everything to fix the problem that was affecting it. Unfortunately, I had to reset my computer completely
                    in a last-ditch attempt to fix everything. The good news is that everything is working well. I managed to get
                    my work for this site back and I am planning to do the same for my CV website as well.
                </p>
                <p id="post-content">
                    I also want to take this opportunity to announce that I am going to <b>delay the decision for the blog until next month.</b>
                    College work and other personal circumstances have made me take this decision as it has become a little difficult for me
                    to keep up with this website.
                </p>
                <p id="post-content">
                    That's all I have to say for today. Thank you and have a great day!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/11/2022, 7:11 PM.
                </p>
                <p id="post-content">
                    That is all I have for today. Before I conclude this, I would like to put a reminder that a decision
                    regarding whether or not I should put a blog on my website or create a separate site will be made in
                    almost 3 weeks from now. However, it could be later than that as I will be more busy than before once
                    I return to school from spring break. Have a great weekend and spring break everyone. Please stay safe!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/11/2022, 7:11 PM.
                </p>
                <p id="post-content">
                    In addition, I am not going to be updating the website as much as I do during the course of the
                    spring break. The last 2-3 weeks have been really stressful, as homeworks, quizzes, and tests have
                    been piling up at a fast rate during that time. I am glad that it's all over with for now. Except
                    for having one homework to do during the spring break and catching up on a project, I get to enjoy a
                    well-deserved break along with other people who may have been in the same predicament as me.
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;