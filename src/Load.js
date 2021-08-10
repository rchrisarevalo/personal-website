import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import Spinner from 'react-bootstrap/Spinner';

const Load = (props) => {

    setTimeout(() => {
        props.history.push('/personal-website/about')
    }, 5000)

    return (
        <div className = "loading-screen">
            <div className = "loading-animation">
            <Spinner animation="grow" variant="white" id="delay-1"/>
            <br></br>
            <Spinner animation="grow" variant="white" id="delay-2"/>
            <br></br>
            <Spinner animation="grow" variant="white" id="delay-3"/>
            </div>
        </div>
    )
}

export default Load;