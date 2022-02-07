import React, { useEffect } from "react";
import { Helmet } from 'react-helmet';
import Nav from "../Nav.jsx";
import NewFooter from "../NewFooter.jsx";
import { IoTrashOutline, IoSaveOutline } from "react-icons/io5";

import nprogress from "nprogress";
import "nprogress/nprogress.css";

var d = localStorage.getItem("d_l_mode");
var clicked = false;
var clicked2 = false;

function clearLocalStorage(){
    var msg = document.getElementById("clear-storage-msg");
    localStorage.clear();
    msg.innerHTML = "All the local storage for this website have been cleared! Save these changes for them to go into effect!";
}

function light_dark_mode(){
    if (clicked === false){
        localStorage.setItem("d_l_mode", "changed");
        document.body.style.cssText = 'background: #242525; color: white; transition: .5s;'
        clicked = true;
    } else if (clicked2 === false && clicked === true){
        document.body.style.cssText = 'transition: .5s;';
        localStorage.setItem("d_l_mode", "normal");
        clicked = false;
    }
}

if (d === "changed") {
    light_dark_mode();
}

function save(){
    var msg = document.getElementById("clear-storage-msg");
    
    // eslint-disable-next-line no-restricted-globals
    let confirm_msg = confirm("Save these changes?");

    if (confirm_msg === true){
        setTimeout(() => {
            msg.innerHTML = "All changes saved!";
            window.location.reload();
        }, 500)
        msg.innerHTML = "Saving changes...";
    } else {
        // Do nothing...
    }
}

const Settings = () => {

    useEffect(() => {
        nprogress.configure({ minimum: 0.1, showSpinner: false, easing: 'ease', speed: 800, trickleSpeed: 200 });
        nprogress.start();
        nprogress.set(0.5);
        nprogress.inc(0.5);
        nprogress.done(true);

        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="settings-container">
            <Nav />
            <Helmet>
                <title>Ruben C. Arevalo - Personal Website - Settings</title>
            </Helmet>
            <div className="settings-section">
                <br></br>
                <br></br>
                <br></br>
                <div className="settings-options">
                    <h1>Settings</h1>
                    <br></br>
                    <p id="settings-description">Choose from the settings below:</p>
                    <br></br>
                    <div className="settings-menu">
                        <i>Clear all the local storage saved for this website:</i>
                        <br></br>
                        <br></br>
                        <button onClick={clearLocalStorage}><IoTrashOutline size="18px" id="setting-btn-icon"/>Clear</button>
                        <br></br>
                        <br></br>
                        <i>Switch to light or dark mode:</i>
                        <br></br>
                        <br></br>
                        { d === "changed" &&
                            <select id="value_check" onChange={light_dark_mode}>
                                
                                <option value="light">Light</option>
                                <option value="dark" selected>Dark</option>
                            </select>
                        }
                        { (d === "normal" || d === null) &&
                            <select id="value_check" onChange={light_dark_mode}>
                                <option value="light" selected>Light</option>
                                <option value="dark">Dark</option>
                            </select>
                        }
                        <br></br>
                        <br></br>
                        <i>Reload page for changes to take effect:</i>
                        <br></br>
                        <br></br>
                        <button type="submit" onClick={save}><IoSaveOutline size="18px" id="setting-btn-icon"/>Save</button>
                    </div>
                    <div id="clear-storage-msg"></div>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
            <NewFooter />
        </div>
    )
}

export default Settings;