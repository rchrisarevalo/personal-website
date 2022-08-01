import React from 'react';

const RecentPosts = () => {
    return (
        <div className="posts-container-intro">
            <h1 id="posts-title-intro" data-aos="fade-down">Recent Announcements</h1>
            <p id="posts-description-intro" data-aos="fade-right" data-aos-delay="500">
                The last three recent announcements will be posted here. This page will be updated whenever there are new announcements.
                To view all announcements, click on "Announcements" on the navigation bar.
            </p>
            {Date.now() >= new Date(2022, 7, 1) &&
                <div>
                    <div className="post" id="post-margin">
                        <p id="post-info">
                            By: Ruben Christopher Arevalo. Posted on 08/01/2022, 12:00 AM.
                        </p>
                        <p id="post-content">
                            That will be everything for the evening. Thank you and have a wonderful evening and great
                            rest of the day!
                        </p>
                    </div>
                    <div className="post" id="post-margin">
                        <p id="post-info">
                            By: Ruben Christopher Arevalo. Posted on 08/01/2022, 12:00 AM.
                        </p>
                        <p id="post-content">
                            Good evening, everyone! Like other months before, this will be the very first announcement of
                            August! I am looking forward to what improvements can be made to this website!
                        </p>
                    </div>
                    <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                        <p id="post-info-recent">
                            By: Ruben Christopher Arevalo. Posted on 07/31/2022, 12:17 AM.
                        </p>
                        <p id="post-content">
                            This will be the last announcement for the month. As usual, I am going to wipe this page clean once
                            the first day of the new month has already approached. Thank you all and have a wonderful rest of the weekend!
                        </p>
                    </div>
                </div>
            }
            {Date.now() <= new Date(2022, 7, 1) &&
                <div>
                    <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                        <p id="post-info-recent">
                            By: Ruben Christopher Arevalo. Posted on 07/31/2022, 12:17 AM.
                        </p>
                        <p id="post-content">
                            This will be the last announcement for the month. As usual, I am going to wipe this page clean once
                            the first day of the new month has already approached. Thank you all and have a wonderful rest of the weekend!
                        </p>
                    </div>
                    <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                        <p id="post-info-recent">
                            By: Ruben Christopher Arevalo. Posted on 07/30/2022, 1:22 AM.
                        </p>
                        <p id="post-content">
                            Now that I am done rambling (lol), I want to wish you all a great weekend! Please enjoy it and stay safe everyone!
                        </p>
                    </div>
                    <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                        <p id="post-info-recent">
                            By: Ruben Christopher Arevalo. Posted on 07/30/2022, 1:22 AM.
                        </p>
                        <p id="post-content">
                            I am planning to expand my horizons and create new projects either later this year, or next year, as I plan to build a blogging website whenever I have
                            the time to do so. I am going to be very busy starting this Fall, as it is my last year of college, and I have to stay absolutely
                            focused on my academic career if I want to graduate on time!
                        </p>
                    </div>
                </div>
            }
        </div>
    );
}

export default RecentPosts;