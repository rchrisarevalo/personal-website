import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Spinner from 'react-bootstrap/Spinner';

const theme = localStorage.getItem("d_l_mode");

const Load = () => {

    const nav = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            nav("/close")
        }, 3000)
    });

    return (
        <div className="loading-screen">
            <div className="loading-animation">
                { (theme === "normal" || theme === null) && 
                    <div>
                        <Spinner animation="grow" variant="dark" id="delay-1" />
                        <Spinner animation="grow" variant="dark" id="delay-2" />
                        <Spinner animation="grow" variant="dark" id="delay-3" />
                    </div>
                }
                { (theme === "changed") && 
                    <div>
                        <Spinner animation="grow" variant="light" id="delay-1" />
                        <Spinner animation="grow" variant="light" id="delay-2" />
                        <Spinner animation="grow" variant="light" id="delay-3" />
                    </div>
                }
            </div>
        </div>
    )
}

export default Load;