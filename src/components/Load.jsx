import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "axios"

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Spinner from 'react-bootstrap/Spinner';

import db_close from '../components/database/update.json'

const theme = localStorage.getItem("d_l_mode");
const light_media = localStorage.getItem("light_media_theme")
const dark_media = localStorage.getItem("dark_media_theme")

const Load = () => {

    const [percentage, setPercentage] = useState(0)
    const nav = useNavigate();

    var close_date = db_close["close"].map(dates => dates)[0]

    useEffect(() => {
        axios.get("https://personal-website-0oqw.onrender.com/").then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // The state of the percentage will update each 20 ms.
    setTimeout(() => {
        setPercentage(percentage + 1)
    }, 20)

    // Close date.
    const c_date = new Date(close_date.closeYear, close_date.closeMonth - 1, close_date.closeDate, close_date.closeHour, close_date.closeMinute)
    
    // Open date.
    const o_date = new Date(close_date.openYear, close_date.openMonth - 1, close_date.openDate, close_date.openHour, close_date.openMinute)
    
    if (Date.now() >= c_date && Date.now() < o_date)
    {
        nav("/closed")
    } 
    else {
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