import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Spinner from 'react-bootstrap/Spinner';

var date = new Date().getDate();
var month = new Date().getMonth();

const Load = (props) => {

    // This will be in effect from April 9th to April 30th.
    { (date >= 9 && date < 30) && 
        setTimeout(() => {
            props.history.push('/closed')
        }, 3000)
    }

    // Once it's the 30th, move to '/about'.
    { date === 30 && 
        setTimeout(() => {
            props.history.push('/about')
        }, 3000)
    }

    // Current dates at the time of writing this code.
    { (date >= 7 && date <= 8) &&
        setTimeout(() => {
            props.history.push('/about')
        }, 3000)
    }

    return (
        <div className="loading-screen">
            <div className="loading-animation">
                <Spinner animation="grow" variant="secondary" id="delay-1" />
                <Spinner animation="grow" variant="secondary" id="delay-2" />
                <Spinner animation="grow" variant="secondary" id="delay-3" />
            </div>
        </div>
    )
}

export default Load;