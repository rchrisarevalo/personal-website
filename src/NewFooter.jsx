import React from "react";

import { HashRouter, Link } from 'react-router-dom';

function getCopyrightYear() {
    const current_year = new Date().getFullYear();
    return current_year;
}

const NewFooter = () => {
    return (
        <footer className="new-footer">
            <div className="new-footer-row">
                <div className="logo">
                    <a href={"./"}>Ruben C. Arevalo</a>
                </div>
                <br></br>
                <div className="footer-section">
                    <div className="social-media-links" id="new-links">
                        <li><b><u>Follow Me On</u></b></li>
                        <li><a href="https://www.linkedin.com/in/rchrisarevalo/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                        <li><a href="https://github.com/rchrisarevalo" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    </div>
                    <div className="policies-links">
                        <li><b><u>Website Policies</u></b></li>
                        <HashRouter>
                            <li><Link to="/policies/site-operation">Site Operation</Link></li>
                            <li><Link to="/policies/archive">Archival</Link></li>
                        </HashRouter>
                    </div>
                </div>
                <div className="copyright" id="new-copyright">
                    <p>&copy; {getCopyrightYear()} Ruben Christopher Arevalo. This page will not be copied, modified, reproduced, or distributed through unauthorized means.</p>
                </div>
            </div>
        </footer>
    );
}

export default NewFooter;