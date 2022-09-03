import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Spinner from 'react-bootstrap/Spinner';

const theme = localStorage.getItem("d_l_mode");
const light_media = localStorage.getItem("light_media_theme")
const dark_media = localStorage.getItem("dark_media_theme")
var resStatus = 0;

const Load = () => {

    const [percentage, setPercentage] = useState(0)
    const [dateState, setDateState] = useState(new Date())
    const milliseconds = 25
    const [ms, setMs] = useState(milliseconds)
    const nav = useNavigate();

    console.log("Today's date: ", dateState);

    useEffect(() => {
        axios.get("https://rchrisarevalo.github.io/personal-website").then((res) => {
            resStatus = res.status
            setMs(25)
        }).catch((error) => {
            resStatus = error.response.status
            setMs(25)
        })
    }, [])

    // The state of the percentage will update each 50 ms.
    setTimeout(() => {
        setPercentage(percentage + 1)
        setDateState(new Date())
    }, 25)

    if (percentage === 100 && resStatus === 200) {
        nav("/about")
    } else if (percentage === 100 && (resStatus === 404 || resStatus === 0)){
        nav("/error")
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