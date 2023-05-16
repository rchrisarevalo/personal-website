import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { IoWarningSharp } from "react-icons/io5"

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Error404 = () => {

    const [seconds, setSeconds] = useState(new Date().getSeconds())
    const [fiveSecondsCounter, setFiveSecondsCounter] = useState(5)
    const [secondString, setSecondString] = useState("seconds")
    const nav = useNavigate()

    setTimeout(() => {
        setSeconds(new Date().getSeconds())
        setFiveSecondsCounter(60 - new Date().getSeconds())

        if (seconds % 1 === 0) {
            if (fiveSecondsCounter === 2) {
                setSecondString("second")
            }
            setFiveSecondsCounter(fiveSecondsCounter - 1)
        }

        if (fiveSecondsCounter === 1) {
            nav(localStorage.getItem("current_link"))
            setFiveSecondsCounter(5)
            setSecondString("seconds")
        }
    }, 1000)

    if (!matchMedia('(max-width: 1024px)').matches){
        return (
            <div className="error-404-container">
                <div className="error-404-display">
                    <Row>
                        <Col>
                            <IoWarningSharp size="7vh"></IoWarningSharp>
                            <h1>404</h1>
                            <p>Oops! It looks like what you were looking for does not exist on this website!</p>
                            <p>Here are some links that can help you resolve this issue:</p>
                        </Col>
                        <Col>
                            <li>
                                <Link to="/about">About Me</Link>
                                <Link to="/announcements">Announcements</Link>
                                <Link to="/contact">Contact Me</Link>
                                <Link to="/archives">Archives</Link>
                            </li>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <p>{`You will be redirected to the previous page in ${fiveSecondsCounter} ${secondString}.`}</p>
                </div>
            </div>
        );
    } else {
        return (
            <div className="error-404-container">
                <div className="error-404-display">
                    <Row>
                        <Col>
                            <IoWarningSharp size="7vh"></IoWarningSharp>
                            <h1>404</h1>
                            <p>Oops! It looks like what you were looking for does not exist on this website!</p>
                            <p>Here are some links that can help you resolve this issue:</p>
                            <li>
                                <Link to="/about">About Me</Link>
                                <Link to="/announcements">Announcements</Link>
                                <Link to="/contact">Contact Me</Link>
                                <Link to="/archives">Archives</Link>
                                <Link to="/settings">Settings</Link>
                            </li>
                        </Col>
                    </Row>
                    <br></br>
                    <br></br>
                    <p>{`You will be redirected to the previous page in ${fiveSecondsCounter} ${secondString}.`}</p>
                </div>
            </div>
        );
    }
}

export default Error404;