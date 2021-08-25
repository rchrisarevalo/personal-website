import React from 'react';

const Notification = () => {
    return (
        <div className="notification-container">
            <div className = "notification" id="warning-notif">
                <div className = "notification-content">
                    <p>This is an image I took. Please don't copy it without my permission. :)</p>
                </div>
            </div>
            <div className = "notification" id="warning-notif-2">
                <div className = "notification-content">
                    <p>A contact form is being set up. I sincerely apologize for the delay.</p>
                </div>
            </div>
        </div>
    );
}

export default Notification;