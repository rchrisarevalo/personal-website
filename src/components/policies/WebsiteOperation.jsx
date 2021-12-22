import React from 'react';

import Nav from '../../Nav.jsx';
import NewFooter from '../../NewFooter.jsx';

import { Helmet } from 'react-helmet';

const WebsiteOperation = () => {
    return (
        <div className="website-operation-policy-container">
            <Helmet>
                Ruben C. Arevalo - Personal Website - Website Operation Policy
            </Helmet>
            <Nav />
            <div className="website-operation-policy-box">
                <div className="website-operation-policy-description">
                    <h1>Website Operation Policy</h1>
                    <br></br>
                    <h4><i>Last Modified: December 22, 2021</i></h4>
                    <br></br>
                    <p>
                        Hello everyone. Last month, I introduced a new policy that determined how this website
                        will operate, especially during the holidays. However, I did not go into further detail
                        as to how this website will operate. So I am taking the opportunity to specifically
                        outline at what certain days the website will be allowed to operate, as well as when it
                        cannot operate.
                    </p>
                    <p>
                        <i>
                            Keep in mind that this is NOT a legal document, but rather my own way of outlining what
                            times this website can and cannot operate so as to make it easy for other people
                            visiting this Site to understand it.
                        </i>
                    </p>
                    <br></br>
                    <h3>Holidays</h3>
                    <br></br>
                    <p>
                        This Site will not operate during or a few days before the holidays. The Site is usually closed
                        a week before a holiday approaches, such as Thanksgiving, Christmas, New Year's, etc. There will
                        be times where this Site closes on the day of the holiday, for instance, Easter and Halloween.
                        In other words, a week-long closure will be for holidays that will last for more than 1 week
                        and a day-long closure will apply for holidays that will only occur once a month provided that there
                        are no upcoming holidays for the next few weeks. If you are confused from what I am stating here, here
                        is a specific timeframe as to how long this website will be closed depending on the holiday.
                        <br></br>
                        <br></br>
                        <h5>Holidays that qualify for a 1-2 week Site Closure:</h5>
                        <li>Thanksgiving, Christmas, and New Year's</li>
                        <br></br>
                        <br></br>
                        <h5>Holidays that qualify for a 1 day Site Closure:</h5>
                        <li>Easter, Halloween, and any other Federal Holidays</li>
                    </p>
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
                        this website and updating it every once in a while requires work, and since I have other obligations,
                        such as family, it can definitely play a factor as to how long this website will be closed. However, I
                        will try my very best to finish as efficiently and quickly as possible, as I also want to avoid introducing
                        new bugs into this website that can cause it to break.
                    </p>
                    <br></br>
                    <h3>Natural Disasters</h3>
                    <br></br>
                    <p>
                        This Site will close whenever a natural disaster, such as a hurricane, tornado, severe flooding, or a winter storm
                        occurs. I made this decision to include this section on this policy based on a February 2021 winter storm that left
                        my home state of Texas in a near-statewide blackout for nearly a week. Due to the circumstances at the time, I was not
                        able to access the internet or my laptop as well since I had to conserve the battery for the latter and other portable devices,
                        such as my phone.
                    </p>
                    <p>
                        I will leave a message saying that the website will be closed for a week or two after such a
                        disaster occurs to allow for the processing of these types of events that affect so many communities not just in my state,
                        but around the country and around the globe as well. While I am one person operating this website, I also need time to process
                        the consequences of disasters like these and help my family out since I am a human being that needs to consider my safety
                        and the safety of others as well.
                    </p>
                    <p>
                        Again, after 2 weeks, this website will open again for the public and operations should return
                        to normal in a few days following its re-opening.
                    </p>
                    <br></br>
                    <p>
                        <i>If you have any questions regarding this policy, please feel free to click the "Contact Me" button (or the paper airplace icon in the mobile version) to leave a message.</i>
                    </p>
                </div>
            </div>
            <NewFooter />
        </div>
    )
}

export default WebsiteOperation;