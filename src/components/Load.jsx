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
    const nav = useNavigate();

    useEffect(() => {
        axios.get("https://rchrisarevalo.github.io/personal-website").then((res) => {
            resStatus = res.status
            console.log(resStatus)
        }).catch((error) => {
            resStatus = error.response.status
        })
    }, [])

    // The state of the percentage will update each 20 ms.
    setTimeout(() => {
        setPercentage(percentage + 1)
    }, 20)

    if (resStatus === 200 && Date.now() >= new Date(2023, 3, 8) && Date.now() < new Date(2023, 3, 10))
    {
        if (percentage === 100)
        {
            nav("/closed")
        }
    }
    else if (resStatus === 200 && (Date.now() < new Date(2022, 3, 8) || Date.now() >= new Date(2023, 3, 10)))
    {
        if (percentage === 100)
        {
            nav("/about")
        }
    }
    else if (resStatus === 404 || resStatus === 0)
    {
        if (percentage === 100)
        {
            nav("/error")
        }
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
                {((theme === "light" || light_media === "true") || (theme === "christmas")) &&
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