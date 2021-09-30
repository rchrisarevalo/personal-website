import React from "react";

const NewFooter = () => {
    return (
        <footer className="new-footer">
            <div className="new-footer-row">
                <div className="social-media-links" id="new-links">
                    <li><b>Follow me on social media:</b></li>
                    <li><a href="https://www.linkedin.com/in/ruben-arevalo-4944251b7/" target="_blank" rel="noopener noreferrer">Linkedin</a></li>
                    <li><a href="https://github.com/rchrisarevalo" target="_blank" rel="noopener noreferrer">Github</a></li>
                </div>
                <div className="copyright" id="new-copyright">
                    <p>&copy; 2021 Ruben Christopher Arevalo. This page will not be copied, modified, reproduced, or distributed through unauthorized means.</p>
                </div>
            </div>
        </footer>
    );
}

export default NewFooter;