import React from 'react';
import { useNavigate, Navigate } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import Spinner from 'react-bootstrap/Spinner';

import db_close from '../components/database/update.json'
import Error404 from './Error404';

const theme = localStorage.getItem("d_l_mode");
const light_media = localStorage.getItem("light_media_theme")
const dark_media = localStorage.getItem("dark_media_theme")

const Load = ({ api_loading, api_error }) => {

    console.log("In loading page...")
    console.log(api_loading, api_error)

    return (
        /* Spinner components are from React Bootstrap, which falls under the MIT License. */
        <div className="loading-screen">
            <div className="loading-animation">
                {!api_loading ?
                    !api_error ?
                        <Navigate to="/" />
                        :
                        <Error404 />
                    :
                    <>
                        {((dark_media === null && window.matchMedia("(prefers-color-scheme: dark)").matches)) &&
                            <div>
                                <Spinner animation="border" variant="light" id="delay-1" />
                                <br></br>
                                <br></br>
                                <p>Loading...</p>
                            </div>
                        }
                        {((light_media === null && window.matchMedia("(prefers-color-scheme: light)").matches)) &&
                            <div>
                                <Spinner animation="border" variant="dark" id="delay-1" />
                                <br></br>
                                <br></br>
                                <p>Loading...</p>
                            </div>
                        }
                        {((theme === "light" || light_media === "true") || (theme === "christmas")) &&
                            <div>
                                <Spinner animation="border" variant="dark" id="delay-1" />
                                <br></br>
                                <br></br>
                                <p>Loading...</p>
                            </div>
                        }
                        {((theme === "dark" || dark_media === "true")) &&
                            <div>
                                <Spinner animation="border" variant="light" id="delay-1" size="lg" />
                                <br></br>
                                <br></br>
                                <p>Loading...</p>
                            </div>
                        }
                    </>
                }
            </div>
        </div>
    )
}

export default Load;