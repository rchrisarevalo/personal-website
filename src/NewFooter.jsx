import React from "react";

function getCopyrightYear()
{
    const current_year = new Date().getFullYear();
    return current_year;
}

const NewFooter = () => {
    return (
        <footer className="new-footer">
            <div className="new-footer-row">
                <div className="social-media-links" id="new-links">
                    <li id="margin-description"><b>Follow me on social media:</b></li>
                    <li><a href="https://www.linkedin.com/in/rchrisarevalo/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    <li><a href="https://github.com/rchrisarevalo" target="_blank" rel="noopener noreferrer">Github</a></li>
                </div>
                <div className="copyright" id="new-copyright">
                    <p>&copy; {getCopyrightYear()} Ruben Christopher Arevalo. This page will not be copied, modified, reproduced, or distributed through unauthorized means.</p>
                </div>
            </div>
        </footer>
    );
}

export default NewFooter;