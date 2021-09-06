import React from 'react';
import {Helmet} from "react-helmet";

import Nav from "../Nav.jsx";
import NewFooter from "../NewFooter.jsx";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const September_Posts = () => {

    return (
        <div class = "posts-main">
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Posts (September 2021)</title>
            </Helmet>
            <Nav/>
            <div class = "posts-container">
                <h1 id = "posts-title">Posts (September 2021)</h1>
                <br></br>
                <div className="posts-catalog">
                    <div className = "posts-month">
                        <DropdownButton
                            id="dropdown-button-dark-example2"
                            variant="secondary"
                            menuVariant="dark"
                            title="2021"
                            className="mt-1 rounded disabled"
                        >
                            <Dropdown.Item href="#/posts">All Posts</Dropdown.Item>
                            <Dropdown.Item href="#/posts/2021/august">
                            August
                            </Dropdown.Item>
                            <Dropdown.Item href="#/posts/2021/september" active>September</Dropdown.Item>
                            <Dropdown.Item href="#/action-3" disabled>October</Dropdown.Item>
                        </DropdownButton>
                    </div>
                </div>
                <br></br>
                <p id = "posts-description">
                    These are all the posts for September 2021 that were archived on this page. None of these posts will
                    be deleted or edited unless I decide otherwise.
                </p>
            </div>
            <NewFooter/>
        </div>
    );
}

export default September_Posts;