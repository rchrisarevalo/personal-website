import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Spinner from 'react-bootstrap/Spinner';

const theme = localStorage.getItem("d_l_mode");
const light_media = localStorage.getItem("light_media_theme")
const dark_media = localStorage.getItem("dark_media_theme")

const Load = () => {

    const [percentage, setPercentage] = useState(0)

    const nav = useNavigate();

    // The state of the percentage will update each 25 ms.
    setTimeout(() => {
        setPercentage(percentage + 1)
    }, 25)

    if (percentage === 100) {
        nav("/about")
    }

    return (
        /* Spinner components are from React Bootstrap, which falls under the MIT License. */
        <div className="loading-screen">
            <div className="loading-animation">
                {((dark_media === null && window.matchMedia("(prefers-color-scheme: dark)").matches)) &&
                    <div>
                        <Spinner animation="border" variant="light" id="delay-1" />
                        <br></br>
                        <br></br>
                        <div id="percentage-load">{`${percentage}`}%</div>
                    </div>
                }
                {((light_media === null && window.matchMedia("(prefers-color-scheme: light)").matches)) &&
                    <div>
                        <Spinner animation="border" variant="dark" id="delay-1" />
                        <br></br>
                        <br></br>
                        <div id="percentage-load">{`${percentage}`}%</div>
                    </div>
                }
                {((theme === "light" || light_media === "true")) &&
                    <div>
                        <Spinner animation="border" variant="dark" id="delay-1" />
                        <br></br>
                        <br></br>
                        <div id="percentage-load">{`${percentage}`}%</div>
                    </div>
                }
                {((theme === "dark" || dark_media === "true")) &&
                    <div>
                        <Spinner animation="border" variant="light" id="delay-1" size="lg" />
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