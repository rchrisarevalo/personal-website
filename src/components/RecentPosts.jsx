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
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 03/11/2022, 7:11 PM.
                </p>
                <p id="post-content">
                    I hope y'all have a good spring break! I understand that some of you have been waiting for the
                    moment in which all of you can take an entire week off so you can relax and spend time with loved
                    ones. I am one of those people, and I am ready to make the best out of it!
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;