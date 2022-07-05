import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Spinner from 'react-bootstrap/Spinner';

const theme = localStorage.getItem("d_l_mode");

const Load = () => {

    const [percentage, setPercentage] = useState(0)

    const nav = useNavigate();

    setTimeout(() => {
        setPercentage(percentage + 1)
    }, 25)

    if (percentage === 100)
    {
        nav("/about")
    }

    return (
        <div className="loading-screen">
            <div className="loading-animation">
                { (theme === "normal" || theme === null) && 
                    <div>
                        <Spinner animation="grow" variant="dark" id="delay-1" />
                        <Spinner animation="grow" variant="dark" id="delay-2" />
                        <Spinner animation="grow" variant="dark" id="delay-3" />
                        <br></br>
                        <br></br>
                        <div id="percentage-load">{`${percentage}`}%</div>
                    </div>
                }
                { (theme === "changed") && 
                    <div>
                        <Spinner animation="grow" variant="light" id="delay-1" />
                        <Spinner animation="grow" variant="light" id="delay-2" />
                        <Spinner animation="grow" variant="light" id="delay-3" />
                        <br></br>
                        <br></br>
                        <div id="percentage-load">{`${percentage}`}%</div>
                    </div>
                }
            </div>
        </div>
    )
}

export default Load;