import React, { useEffect } from 'react';
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

import db from "./database/update.json";

import NavArchives from "../NavArchives.jsx";
import NewFooter from "../NewFooter.jsx";

import nprogress from "nprogress";
import "nprogress/nprogress.css";

const Archives = () => {

    useEffect(() => {
        nprogress.configure({ minimum: 0.1, showSpinner: false, easing: 'ease', speed: 800, trickleSpeed: 200 });
        nprogress.start();
        nprogress.set(0.5);
        nprogress.inc(0.5);
        nprogress.done(true);

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="archives-container">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Archives</title>
            </Helmet>
            <NavArchives />
            <div className="archive-wrap">
                <p id="archive-message">
                    <br></br>
                    <h1 id="archive-header">Archives Log</h1>
                    <br></br>
                    Hello everyone! This is an archives log that stores old announcements from different
                    years and months throughout the duration of this website's history. This page was made
                    to make it easily accessible from anywhere on this website in case users want to view
                    old announcements from different times and months.
                </p>
                <br></br>
                <p id="archive-message">
                    Below is a table which shows which month and year the archives were originally
                    made available in addition to showing what month and year they are set to
                    expire:
                    <div id="table-info">
                        <table>
                            <tr>
                                <th>Archive Month/Year</th>
                                <th>Expiration Date</th>
                                <th>Time Left</th>
                            </tr>
                            <tr>
                                <td>August 2021</td>
                                <td>December 31, 2024</td>
                                {2024 - new Date().getFullYear() > 1 &&
                                    <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                                }
                                {2024 - new Date().getFullYear() === 1 &&
                                    <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>September 2021</td>
                                <td>December 31, 2024</td>
                                {2024 - new Date().getFullYear() > 1 &&
                                    <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                                }
                                {2024 - new Date().getFullYear() === 1 &&
                                    <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>October 2021</td>
                                <td>December 31, 2024</td>
                                {2024 - new Date().getFullYear() > 1 &&
                                    <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                                }
                                {2024 - new Date().getFullYear() === 1 &&
                                    <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>November 2021</td>
                                <td>December 31, 2024</td>
                                {2024 - new Date().getFullYear() > 1 &&
                                    <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                                }
                                {2024 - new Date().getFullYear() === 1 &&
                                    <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>December 2021</td>
                                <td>December 31, 2024</td>
                                {2024 - new Date().getFullYear() > 1 &&
                                    <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                                }
                                {2024 - new Date().getFullYear() === 1 &&
                                    <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>January 2022</td>
                                <td>December 31, 2025</td>
                                {2025 - new Date().getFullYear() > 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                                }
                                {2025 - new Date().getFullYear() === 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>February 2022</td>
                                <td>December 31, 2025</td>
                                {2025 - new Date().getFullYear() > 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                                }
                                {2025 - new Date().getFullYear() === 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>March 2022</td>
                                <td>December 31, 2025</td>
                                {2025 - new Date().getFullYear() > 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                                }
                                {2025 - new Date().getFullYear() === 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>April 2022</td>
                                <td>December 31, 2025</td>
                                {2025 - new Date().getFullYear() > 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                                }
                                {2025 - new Date().getFullYear() === 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>May 2022</td>
                                <td>December 31, 2025</td>
                                {2025 - new Date().getFullYear() > 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                                }
                                {2025 - new Date().getFullYear() === 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>June 2022</td>
                                <td>December 31, 2025</td>
                                {2025 - new Date().getFullYear() > 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                                }
                                {2025 - new Date().getFullYear() === 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>July 2022</td>
                                <td>December 31, 2025</td>
                                {2025 - new Date().getFullYear() > 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                                }
                                {2025 - new Date().getFullYear() === 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>August 2022</td>
                                <td>December 31, 2025</td>
                                {2025 - new Date().getFullYear() > 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                                }
                                {2025 - new Date().getFullYear() === 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>September 2022</td>
                                <td>December 31, 2025</td>
                                {2025 - new Date().getFullYear() > 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                                }
                                {2025 - new Date().getFullYear() === 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>October 2022</td>
                                <td>December 31, 2025</td>
                                {2025 - new Date().getFullYear() > 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                                }
                                {2025 - new Date().getFullYear() === 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                            <tr>
                                <td>November 2022</td>
                                <td>December 31, 2025</td>
                                {2025 - new Date().getFullYear() > 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                                }
                                {2025 - new Date().getFullYear() === 1 &&
                                    <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                                }
                            </tr>
                        </table>
                    </div>
                </p>
                <p id="archive-message">
                    Select the month of the associated year below to access the announcement archive for that
                    time period:
                </p>
            </div>
            {(Date.now() >= new Date(2021, 0, 1) && Date.now() <= new Date(2024, 11, 31)) &&
                <div>
                    <div className="archive-row">
                        <li><b id="archive-year">2021:</b></li>
                        <li><Link to="/announcements/2021/August">August</Link></li>
                        <li><Link to="/announcements/2021/September">September</Link></li>
                        <li><Link to="/announcements/2021/October">October</Link></li>
                        <li><Link to="/announcements/2021/November">November</Link></li>
                        <li><Link to="/announcements/2021/December">December</Link></li>
                    </div>
                    <br></br>
                    <br></br>
                </div>
            }
            {(Date.now() >= new Date(2022, 0, 1) && Date.now() <= new Date(2025, 11, 31)) &&
                <div>
                    <div className="archive-row">
                        <li><b id="archive-year">2022:</b></li>
                        <li><Link to="/announcements/2022/January">January</Link></li>
                        <li><Link to="/announcements/2022/February">February</Link></li>
                        <li><Link to="/announcements/2022/March">March</Link></li>
                        <li><Link to="/announcements/2022/April">April</Link></li>
                        <li><Link to="/announcements/2022/May">May</Link></li>
                        <li><Link to="/announcements/2022/June">June</Link></li>
                        <li><Link to="/announcements/2022/July">July</Link></li>
                        <li><Link to="/announcements/2022/August">August</Link></li>
                        <li><Link to="/announcements/2022/September">September</Link></li>
                        <li><Link to="/announcements/2022/October">October</Link></li>
                        <li><Link to="/announcements/2022/November">November</Link></li>
                        {(Date.now() >= new Date(db.archive[0].beginYear, db.archive[0].beginMonth - 1, db.archive[0].beginDate, db.archive[0].beginHour, db.archive[0].beginMinute) && Date.now() <= new Date(db.archive[0].endYear, db.archive[0].endMonth - 1, db.archive[0].endDate, db.archive[0].endHour, db.archive[0].endMinute)) &&
                            <li><Link to="/announcements/2022/December">December</Link></li>
                        }
                    </div>
                    <br></br>
                    <br></br>
                </div>
            }
            <div className="center-message">
                <p id="archive-message">
                    I will continue adding to this page as time progresses. Just like every month, I will wipe the <b>Announcements</b> page clean after
                    the end of the month and will store the posts from the previous month into its own page.
                    I will store up to only <b>3 years of previous announcements</b> in accordance to the archival process policy I implemented.
                    Once the mentioned deadline has expired, then the old announcements will be permanently removed from this website, never to be seen
                    again.
                </p>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <NewFooter />
        </div>
    )
}

export default Archives;