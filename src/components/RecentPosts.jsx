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
                    By: Ruben Christopher Arevalo. Posted on 07/21/2022, 7:08 PM.
                </p>
                <p id="post-content">
                    That will be for all this evening! I will be a little bit busy for the rest of the month as I have school,
                    and I have to put my focus into that at the moment. Despite that, I hope to continue making changes to this
                    website whenever I can. Have a wonderful rest of the day, everyone!
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 07/21/2022, 7:08 PM.
                </p>
                <p id="post-content">
                    In addition, I added new tips on the "Contact Me" page that tell you what you can and cannot do when
                    sending a message. This is to ensure that no spam or other malicious content passes through.
                </p>
            </div>
            <div className="post" id="post-margin" data-aos-delay="500" data-aos="fade">
                <p id="post-info-recent">
                    By: Ruben Christopher Arevalo. Posted on 07/21/2022, 7:08 PM.
                </p>
                <p id="post-content">
                    Good evening, everyone! I am happy to announce that I added a character counter to the contact form.
                    I added a limit on the amount of characters when one types their message on the form when it was
                    first established. However, now it's possible to know how many characters you have left when typing
                    out your message!
                </p>
            </div>
        </div>
    );
}

export default RecentPosts;