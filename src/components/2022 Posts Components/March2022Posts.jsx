import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, HashRouter } from "react-router-dom";

import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";

import NavArchives from "../../NavArchives.jsx";
import NewFooter from "../../NewFooter.jsx";

const March2022Posts = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <div class="posts-main">
      <Helmet>
        <title>
          Ruben C. Arevalo - Personal Website - Announcements (March 2022)
        </title>
      </Helmet>
      <NavArchives />
      <div class="posts-container">
        <HashRouter>
          <Link to="/announcements/2022/February">
            <IoArrowBackCircleOutline
              id="posts-arrow-left"
              title="February 2022 Announcements"
              size="40px"
            />
          </Link>
          <Link to="/announcements/2022/April">
            <IoArrowForwardCircleOutline
              id="posts-arrow-right"
              title="April 2022 Announcements"
              size="40px"
            />
          </Link>
        </HashRouter>
        <h1 id="posts-title">Announcements (March 2022)</h1>
        <br></br>
        <p id="posts-description">
          These are all the posts for March 2022 that were archived on this
          page. None of these posts will be deleted or edited unless I decide
          otherwise.
        </p>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/31/2022, 1:30 PM.
          </p>
          <p id="post-content">
            This month's announcements will be cleared by the end of today (just
            before midnight).
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/30/2022, 5:52 PM.
          </p>
          <p id="post-content">
            I am posting this as a reminder that this month's announcements on
            this page will be cleared tomorrow before midnight. New
            announcements for April will be posted following the Archival
            process of this month's announcements. Have a great day!
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/29/2022, 8:41 AM.
          </p>
          <p id="post-content">
            I hope I will have enough time to continue to update this website.
            Anyways, thank you all for your patience. Have a wonderful morning
            and please stay safe!
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/29/2022, 8:41 AM.
          </p>
          <p id="post-content">
            In other news, I will announce my decision as to whether or not to
            create a blog next month. Originally, I was going to announce by the
            end of this month. However, as I stated before, I would not able to
            do so right now because I have to deal with the last few weeks of
            this semester. Even though by the end of April I would be prepping
            for finals, there won't be much homework aside from a project that I
            have to work on before the end of that month.
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/29/2022, 8:41 AM.
          </p>
          <p id="post-content">
            Good morning, everyone! I want to let you all know that I am doing
            well. Last week has been really busy, as there was back-to-back
            homework assignments and a test I had to take. The workload should
            be a little lighter this week, which means that I might be able to
            modify this website and archive this month's announcements before
            the 31st.
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/16/2022, 11:54 AM.
          </p>
          <p id="post-content">
            I am leaving this here to let you all know that I have experienced
            big setbacks during the past few days. My computer was acting up
            lately during the last few days, and it was a difficult period as I
            tried everything to fix the problem that was affecting it.
            Unfortunately, I had to reset my computer completely in a last-ditch
            attempt to fix everything. The good news is that everything is
            working well. I managed to get my work for this site back and I am
            planning to do the same for my CV website as well.
          </p>
          <p id="post-content">
            I also want to take this opportunity to announce that I am going to{" "}
            <b>delay the decision for the blog until next month. </b>
            College work and other personal circumstances have made it difficult
            for me to keep updating this website at the moment which is the
            reasoning of why I made this decision.
          </p>
          <p id="post-content">
            That's all I have to say for today. Thank you and have a great day!
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/11/2022, 7:11 PM.
          </p>
          <p id="post-content">
            That is all I have for today. Before I conclude this, I would like
            to put a reminder that a decision regarding whether or not I should
            put a blog on my website or create a separate site will be made in
            almost 3 weeks from now. However, it could be later than that as I
            will be more busy than before once I return to school from spring
            break. Have a great weekend and spring break everyone. Please stay
            safe!
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/11/2022, 7:11 PM.
          </p>
          <p id="post-content">
            In addition, I am not going to be updating the website as much as I
            do during the course of the spring break. The last 2-3 weeks have
            been really stressful, as homeworks, quizzes, and tests have been
            piling up at a fast rate during that time. I am glad that it's all
            over with for now. Except for having one homework to do during the
            spring break and catching up on a project, I get to enjoy a
            well-deserved break along with other people who may have been in the
            same predicament as me.
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/11/2022, 7:11 PM.
          </p>
          <p id="post-content">
            I hope y'all have a good spring break! I understand that some of you
            have been waiting for the moment in which all of you can take an
            entire week off so you can relax and spend time with loved ones. I
            am one of those people, and I am ready to make the best out of it!
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/09/2022, 1:20 AM.
          </p>
          <p id="post-content">
            Here is the link to my CV website:{" "}
            <a
              href="https://rchrisarevalo.github.io/cv-website"
              target="_blank"
              rel="noreferrer"
            >
              <b>rchrisarevalo.github.io/cv-website</b>
            </a>
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/09/2022, 1:20 AM.
          </p>
          <p id="post-content">
            I might write a short outline similar to the Archive and Website
            Operation policies that are included on this site, but for how my
            work is used, sometime in the future. If there are issues or
            questions you'd like to ask me, please feel free to contact me using
            the contact form on my CV website. The contact form link on this
            Site has been disabled until further notice.
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/09/2022, 1:20 AM.
          </p>
          <p id="post-content">
            I updated the copyright notice that is included in the footer below
            for each page on this website. It now states that the site and the
            contents that it contains, most notably the images I uploaded onto
            this Site, are not to be copied through any unauthorized means.
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/07/2022, 3:08 PM.
          </p>
          <p id="post-content">
            That is all I have for today. I hope you all have a great rest of
            the week!
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/07/2022, 3:08 PM.
          </p>
          <p id="post-content">
            In other news, spring break is coming up next week, and I will have
            a little bit more time to continue to maintain this website provided
            that I don't have that much homework to begin with.
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/07/2022, 3:08 PM.
          </p>
          <p id="post-content">
            Happy Monday, everyone! I hope you all had a good start to the week
            so far and will continue to have a good week!
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/05/2022, 1:12 PM.
          </p>
          <p id="post-content">
            For those of you that haven't noticed, there have been some style
            changes I made to the UI of this website. A white border surrounding
            one of the links is an indicator of the page you are currently in.
            As usual, I will continue to maintain this website whenever I have
            time. Thank you for your patience.
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/01/2022, 12:00 AM.
          </p>
          <p id="post-content">
            Apart from that, I am nevertheless excited by the idea of creating a
            blog since it allows me to express myself a little bit more. I am
            expected to make a final decision regarding my blog by the end of
            the month. That's all the announcements I have for today! Have a
            great rest of the day!
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/01/2022, 12:00 AM.
          </p>
          <p id="post-content">
            Should I decide to create new blog, it won't probably be ready until
            October 2022. The reason for this is because I am going to be a
            senior in college. When that happens, I will be more busier as I am
            going to be building a senior project that I need to do if I want to
            graduate. Whatever happens, and if time permits, then I will
            continue working on the blog. Again, keep in mind that what I
            mentioned above will only occur if I decide to create it.
          </p>
        </div>
        <div className="post" id="post-margin">
          <p id="post-info">
            By: Ruben Christopher Arevalo. Posted on 03/01/2022, 12:00 AM.
          </p>
          <p id="post-content">
            Welcome to the new month, everyone! I hope you all enjoy this month
            as spring is approaching fast. In other news, I want to remind you
            all who have been keeping up with the recent announcements that I
            will decide whether or not to create a new blog.
          </p>
        </div>
      </div>
      <NewFooter />
    </div>
  );
};

export default March2022Posts;
