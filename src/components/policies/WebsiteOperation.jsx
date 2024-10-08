import React, { useEffect } from 'react';

import Nav from '../../Nav.jsx';
import NewFooter from '../../NewFooter.jsx';

import { Helmet } from 'react-helmet';

import './Policies.css';

import nprogress from 'nprogress';
import "nprogress/nprogress.css";

const WebsiteOperation = () => {

    useEffect(() => {
        nprogress.configure({minimum: 0.1, showSpinner: false, easing: 'ease', speed: 600, trickleSpeed: 200});
        nprogress.start();
        nprogress.set(0.5);
        nprogress.inc(1.0);
        nprogress.done(true);

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="website-operation-policy-container">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Site Operation Policy</title>
            </Helmet>
            <Nav />
            <div className="website-operation-policy-box">
                <div className="website-operation-policy-description">
                    <h1>Site Operation Policy</h1>
                    <br></br>
                    <h4><i>Last modified on: September 19, 2022</i></h4>
                    <br></br>
                    <p>
                        Hello everyone. On January 2022, I introduced a new policy that determined how this website
                        will operate, especially during the holidays. This page will specifically
                        outline at what certain days the website will be allowed to operate, as well as when it
                        cannot operate.
                    </p>
                    <p>
                        <i>
                            Keep in mind that this is <b>NOT</b> a legal document, but rather my own way of explaining what
                            times this website can and cannot operate so as to make it easy for other people
                            visiting this Site to understand it.
                        </i>
                    </p>
                    <p>
                        <i>
                            <b>THIS POLICY IS SUBJECT TO CHANGE AT THE OWNER'S DISCRETION.</b>
                        </i>
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>Holidays</h3>
                    <br></br>
                    <p>
                        This Site will not operate a few days before or during the holidays. The Site is usually closed
                        a week before a holiday approaches, such as Thanksgiving, Christmas, New Year's, etc. Major
                        consecutive holidays, such as Christmas, New Year's Eve, and New Year's that are nearly a week apart from one another,
                        will count for the closure of this Site as the time period between these three holidays are close
                        to one another. Long story short, <b>major holidays</b>, such as Easter and the other holidays mentioned above
                        will cause this website to close, as there is usually a break period that lasts more than 1 day 
                        for these four holidays. For example, if the break period for Christmas and New Year's is 1 week, then the Site
                        will be closed for that time period.
                        <br></br>
                        <br></br>
                        <br></br>
                        <h5>Holidays that qualify for closure of this website:</h5>
                        <li>Easter, Thanksgiving, Christmas, and New Year's</li>
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>Updates</h3>
                    <br></br>
                    <p>
                        In addition to closing for the holidays, this Site will also be closed whenever an announcement of
                        an update, usually a major one, is made in the home page. Unlike the Holidays section, where a website
                        will re-open a specific period of time (e.g. a day or a week after the holidays are over), this Website
                        will be closed for an undetermined amount of time. The reason for this is because there are updates that
                        can be time-consuming, or because the Site needs some changes that are critical if it hopes to continue
                        to operate in the future. Requests that the website be opened as soon as possible through the contact
                        form will be ignored, as I cannot guarantee that this website will open in, let's say a day. Maintaining
                        this website and updating it every once in a while requires time and work. Since I have other obligations,
                        such as family, it can definitely play a factor as to how long this website will be closed. However, I
                        will try my very best to finish as efficiently and quickly as possible, as I also want to avoid introducing
                        new bugs into this website that can cause it to break.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>Natural Disasters</h3>
                    <br></br>
                    <p>
                        This Site will close whenever a natural disaster, such as a hurricane, tornado, severe flooding, or a winter storm
                        occurs. I made this decision to include this section on this policy based on a February 2021 winter storm that left
                        my home state of Texas in a near-statewide blackout for nearly a week. Due to the circumstances at the time, I was not
                        able to access the internet. In addition, I had to conserve the battery for my portable devices,
                        such as my phone and laptop, where the latter is used to regularly make updates to this Site.
                    </p>
                    <p>
                        I will leave a message saying that the website will be closed for a week or two after such a
                        disaster occurs to allow for the processing of these types of events that affect so many communities not just in my state,
                        but around the country and around the globe as well. While I am one person operating this website, I also need time to process
                        the consequences of disasters like these and help my family out since I am a human being that needs to consider my safety
                        and the safety of others as well.
                    </p>
                    <p>
                        After the allotted time period has passed, this website will open again for the public. Operations should return
                        to normal in the days following its re-opening.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>Personal Affairs</h3>
                    <br></br>
                    <p>
                        Should a personal matter occur, such as the loss of a family member, a friend, or any important person that has played
                        an important role in my life, the website won't necessarily shut down, but rather, will not be maintained. However, an update (along with an announcement) will be left on the website during the time I will be
                        out to process the loss. Again, keep in mind that I won't be updating this website for around a week (or two if the loss
                        happens to be profound). I want to continue this Site with a clear and conscious mind rather than let my emotions cloud
                        my judgment, which allows me to decide what is in the best interests for this Site in the future.
                    </p>
                    <p>
                        By <i><b>personal affairs</b></i>, it does not necessarily mean that there should be loss and grief involved. While the latter
                        qualifies for this section, other personal affairs that additionally qualify for this section range from legal troubles, familial problems, and major
                        life transitions, such as moving in to a different area of the country and post-graduation job searching.
                    </p>
                    <p>
                        However, everyday personal problems, such as an argument with a family member, a friend, a partner, a spouse, etc., won't qualify.
                        Only major life events mentioned above qualify for the limitation of the
                        operation of this Site.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>
                        <i>Let me know if you have any questions.</i>
                    </p>
                </div>
            </div>
            <NewFooter />
        </div>
    )
}

export default WebsiteOperation;