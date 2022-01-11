import React, { useEffect } from 'react';

import Nav from '../../Nav.jsx';
import NewFooter from '../../NewFooter.jsx';

import { Helmet } from 'react-helmet';

import './Policies.css';

import nprogress from "nprogress";
import "nprogress/nprogress.css";

const ArchivePolicy = () => {

    useEffect(() => {
        nprogress.configure({minimum: 0.1, showSpinner: false, easing: 'ease', speed: 600, trickleSpeed: 200});
        nprogress.start();
        nprogress.set(0.5);
        nprogress.inc(1.0);
        nprogress.done(true);

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="archive-policy-container">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Archival Policy</title>
            </Helmet>
            <Nav/>
            <div className="archive-policy-box">
                <div className="archive-policy-description">
                    <h1>Archival Policy</h1>
                    <br></br>
                    <h4><i>Last Modified: January 11, 2022</i></h4>
                    <br></br>
                    <p>
                        Hello everyone. On September 2021, I started to archive posts from the
                        'Posts' page (now title 'Announcements' as shown on the navigation bar
                        above) every 30 days or so. Just recently, I developed a separate page
                        that is titled 'Archives' (so as to not be confused with the 'Archival' link,
                        as the latter focuses on how announcements from the previous month are archived).
                    </p>
                    <p>
                        <i>
                            Just like the <b>Website Operation policy</b>, this is <b>NOT</b> a legal document.
                            This page is rather my own way of explaining how the archival process works. Topics
                            that will be gone over will be the time period in which old announcements will be 
                            archived, where they will be stored, and how long they are going to be available for.
                        </i>
                    </p>
                    <p>
                        <i>
                            <b>This policy will be subject to change at the owner's discretion.</b>
                        </i>
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>Archival Time Period</h3>
                    <br></br>
                    <p>
                        I mentioned once in a previous announcement before the beginning of September that I
                        will implement (and had already did) a 30 day archive policy. What I meant by this is
                        that after a 30-day period or after the month is over (since there are 28-29 days in
                        February and 31 days in some months), the 'Announcements' page will be completely wiped.
                        After that is said and done, I will include a new announcement for the new month. Please
                        note that sometimes, the changes won't immediately come into effect, as deployment of
                        new changes made to this website can sometimes take a while due to a variety of factors,
                        such as a sometimes slow and overwhelmed laptop, which I use to make the changes here
                        on this Site.
                    </p>
                    <p>
                        The changes should usually take effect before 12:30 AM of the first day of the new month.
                        In a more worse-case scenario, it could take longer than that, either hours or days before
                        that time. Despite that, I will try my very best to ensure that these changes take effect
                        before the mentioned time above.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>Storing of Old Announcements</h3>
                    <br></br>
                    <p>
                        As I mentioned above, old announcements will be moved somewhere else after the 30 day period
                        is over and once the 'Announcements' page is completely wiped of any of the previous month's
                        announcements. But where do the old annoucements go once they are removed from the 'Announcements'
                        page?
                    </p>
                    <p>
                        As I also mentioned in the introduction section in the first paragraph, I developed a separate page
                        that is titled 'Archives' (not to confuse with 'Archival' as shown in the footer of each page of this Site).
                        In the page, there is a brief description as to how the page will operate. There are also the months that
                        have the old announcements, and are catalogued by year. At the time of writing this policy, '2022' has not
                        appeared yet, as January is still going on and will be included once the month is over. Again, once the 30
                        day or monthly period passes, I will wipe the 'Announcements' page clean and the announcements for the
                        previous month will be included in the 'Archives' page by the month and year they were posted. 
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <h3>Archive Availability Period</h3>
                    <br></br>
                    <p>
                        Any monthly archive catalogs will generally be available for a period of 3 years. After the time
                        period has expired, the year, along with the archives belonging to that particular year (e.g. 2021),
                        will be deleted. In other words, old announcements past the 3 year period will be removed from the
                        Site permanently, never to be seen again. Requests to bring back posts that have expired past the
                        deadline will automatically be denied, as the posts have already been deleted from this Site
                        and away from user's eyes in the future.
                    </p>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p>
                        <i>If you have any questions regarding this policy, please feel free to click the "Contact Me" button (or the paper airplane icon in the mobile version) to leave a message.</i>
                    </p>
                </div>
            </div>
            <NewFooter/>
        </div>
    )
}

export default ArchivePolicy;