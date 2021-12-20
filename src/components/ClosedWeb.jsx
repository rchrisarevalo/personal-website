import React from 'react';

function currentDate()
{
    const month = new Date().getMonth();
    const day = new Date().getDate();
    const year = new Date().getFullYear();

    var stringMonth = " ";

    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    for (var i = 0; i < months.length; i++)
    {
        if (i === month)
            stringMonth = months[i];
    }

    return [stringMonth, " ", day, ", ", year];
}

const ClosedWeb = () => {
    return (

        <div className="center-container">
            <div className="center-message">
                <p id="closed-msg">Today's date: <i>{currentDate()}</i></p>
                <p id="closed-msg">
                    In accordance to the new website operation policy I have implemented in the last month,
                    I decided to close this website today on December 19, 2021. This website will most likely
                    re-open on <b>December 26th at 12 AM</b> (though it may be extended until after New Year's is over).
                </p>
                <br />
                <p id="closed-msg">Have a wonderful Merry Christmas and stay safe!</p>
                <br/>
                <div id="closed-button">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSe1nR8hmOAMRTU3fDZsbLRGkjzKvA9uRLZW_YdvsyBEctqDOw/viewform" rel="noreferrer" target="_blank">Contact Me</a>
                </div>
                <br></br>
            </div>
        </div>
    )
}

export default ClosedWeb;