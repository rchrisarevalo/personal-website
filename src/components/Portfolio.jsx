import React, { useEffect } from "react"
import Nav from '../Nav'
import NewFooter from '../NewFooter'
import Works from "../Works"

import nprogress from "nprogress";
import "nprogress/nprogress.css";

export const Portfolio = () => {

    useEffect(() => {
        nprogress.configure({ minimum: 0.1, showSpinner: false, easing: 'ease', speed: 800, trickleSpeed: 200 });
        nprogress.start();
        nprogress.set(0.5);
        nprogress.inc(0.5);
        nprogress.done(true);

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="portfolio">
            <Nav />
            <div className="portfolio-container">
                <Works />
            </div>
            <br></br>
            <br></br>
            <NewFooter />
        </div>
    )
}