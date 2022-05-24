import React from "react";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';

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
                    <Row className="links-row">
                        <Col className="links-column">
                            <Col><li><b><u>Follow Me On</u></b></li></Col>
                            <Col><li><a href="https://www.linkedin.com/in/rchrisarevalo/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li></Col>
                            <Col><li><a href="https://github.com/rchrisarevalo" target="_blank" rel="noopener noreferrer">GitHub</a></li></Col>
                        </Col>
                        <Col className="links-column">
                            <Col><li><b><u>Site Policies</u></b></li></Col>
                            <Col><li><Link to="/policies/site-operation">Site Operation</Link></li></Col>
                            <Col><li><Link to="/policies/archive">Archival</Link></li></Col>
                        </Col>
                    </Row>
                </div>
                <div className="copyright" id="new-copyright">
                    <p>&copy; {getCopyrightYear()} Ruben Christopher Arevalo. This site and its contents will not be copied, modified, reproduced, or distributed through unauthorized means.</p>
                </div>
            </div>
        </footer>
    );
}

export default NewFooter;