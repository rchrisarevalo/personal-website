import React, { useEffect, useState } from "react";
import { Helmet } from 'react-helmet';
import NavSettings from "../NavSettings.jsx";
import NewFooter from "../NewFooter.jsx";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'

import { IoTrashOutline, IoSaveOutline } from 'react-icons/io5';

import nprogress from "nprogress";
import "nprogress/nprogress.css";

var d = localStorage.getItem("d_l_mode");
var d_media = localStorage.getItem("dark_media_theme")
var l_media = localStorage.getItem("light_media_theme")
var one_time_message = localStorage.getItem("one-time")

var theme_choice;

function clearLocalStorage() {
    var clearNotice = document.getElementById("clear-notice");
    var changesSaved = document.getElementById("clear-storage-msg");
    var closeButton = document.getElementById("closeButton-modal");
    var buttonSet = document.getElementById("buttonSet-modal");

    closeButton.style.display = 'none';
    buttonSet.style.display = 'none';
    changesSaved.style.display = 'block';
    changesSaved.innerHTML = 'Your local storage data has been cleared!'
    clearNotice.style.display = 'none';

    localStorage.clear();

    setTimeout(() => {
        window.location.reload();
    }, 1000)
}

// Code below inspired by and credited to Mr. Kevin Powell: 
// https://codepen.io/kevinpowell/pen/EMdjOV

function light_dark_mode() {
    theme_choice = document.getElementById("value_check").value
    console.log(theme_choice)

    if (theme_choice === "dark") {
        localStorage.setItem("d_l_mode", theme_choice);
        document.body.style.cssText = 'background: #242525; color: white; transition: .5s;'
        localStorage.setItem("dark_media_theme", "false")
        localStorage.setItem("light_media_theme", "false")
    } else if (theme_choice === "light") {
        document.body.style.cssText = 'background: #FFFFFF; color: black; transition: .5s;';
        localStorage.setItem("d_l_mode", theme_choice);
        localStorage.setItem("dark_media_theme", "false")
        localStorage.setItem("light_media_theme", "false")
    } else if (theme_choice === "default") {
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            document.body.style.cssText = 'background: #FFFFFF; color: black; transition: .5s;'
            localStorage.setItem("d_l_mode", `${theme_choice}_light`)
            localStorage.setItem("light_media_theme", "true")
            localStorage.setItem("dark_media_theme", "false")
        } else {
            document.body.style.cssText = 'background: #242525; color: white; transition: .5s;'
            localStorage.setItem("d_l_mode", `${theme_choice}_dark`)
            localStorage.setItem("light_media_theme", "false")
            localStorage.setItem("dark_media_theme", "true")
        }
    }
}

if (d === "dark" || d === "default_dark") {
    document.body.style.cssText = 'background: #242525; color: white; transition: .5s;'
} else if (l_media === "true" || d_media === "true" || (l_media === null && d_media === null)){
    if (window.matchMedia("(prefers-color-scheme: dark)").matches){
        document.body.style.cssText = 'background: #242525; color: white; transition: .5s;'
        localStorage.setItem("dark_media_theme", "true")
        localStorage.setItem("light_media_theme", "false")
    }
    else {
        document.body.style.cssText = 'background: #FFFFFF; color: black; transition: .5s;'
        localStorage.setItem("dark_media_theme", "false")
        localStorage.setItem("light_media_theme", "true")
    }
} else if (d === "light" || d === "default_light") {
    document.body.style.cssText = 'background: #FFFFFF; color: black; transition: .5s;'
}

// ====================================

function save() {
    var saveNotice = document.getElementById("save-notice");
    var changesSaved = document.getElementById("clear-storage-msg");
    var closeButton = document.getElementById("closeButton-modal");
    var buttonSet = document.getElementById("buttonSet-modal");

    saveNotice.style.display = 'none';
    closeButton.style.display = 'none';
    buttonSet.style.display = 'none';
    changesSaved.style.display = 'block';
    changesSaved.innerHTML = 'All changes successfully saved!'

    setTimeout(() => {
        window.location.reload();
    }, 1000)
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

    const [saveShow, setSaveShow] = useState(false);
    const [noticeShow, setNoticeShow] = useState(false);

    const handleSaveClose = () => setSaveShow(false);
    const handleSaveShow = () => setSaveShow(true);

    const handleNoticeClose = () => setNoticeShow(false);
    const handleNoticeShow = () => setNoticeShow(true);

    return (
        <div className="settings-container">
            <NavSettings />
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
                        {(d !== null || one_time_message !== null) &&
                            <button onClick={handleNoticeShow}><IoTrashOutline id="settings-btns" />Clear</button>
                        }
                        {(d === null && one_time_message === null) &&
                            <button onClick={handleNoticeShow} id="settings-disabled" disabled><IoTrashOutline id="settings-btns" />Clear</button>
                        }
                        <br></br>
                        <br></br>
                        <i>Switch to light mode, dark mode, or your configured device theme:</i>
                        <br></br>
                        <br></br>
                        {(d === "default_light" || d === "default_dark" || d === null) &&
                            <select id="value_check" onChange={light_dark_mode}>
                                <option value="default" selected>Device theme</option>
                                <option value="light">Light theme</option>
                                <option value="dark">Dark theme</option>
                            </select>
                        }
                        {d === "dark" &&
                            <select id="value_check" onChange={light_dark_mode}>
                                <option value="default">Device theme</option>
                                <option value="light">Light theme</option>
                                <option value="dark" selected>Dark theme</option>
                            </select>
                        }
                        {d === "light" &&
                            <select id="value_check" onChange={light_dark_mode}>
                                <option value="default">Device theme</option>
                                <option value="light" selected>Light theme</option>
                                <option value="dark">Dark theme</option>
                            </select>
                        }
                        <br></br>
                        <br></br>
                        <i>Reload page for changes to take effect:</i>
                        <br></br>
                        <br></br>
                        <button type="submit" onClick={handleSaveShow}><IoSaveOutline id="settings-btns" />Save</button>
                        <br></br>
                        <br></br>
                        {/* Save modal (from React Bootstrap) */}
                        <Modal
                            show={saveShow}
                            onHide={handleSaveClose}
                            backdrop="static"
                            keyboard={false}
                            centered
                            id="modal-text"
                        >
                            <Modal.Header closeButton id='closeButton-modal'>
                                <Modal.Title><b>Save changes?</b></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div id="save-notice">Are you sure you want to save?</div>
                                <div id="clear-storage-msg"></div>
                            </Modal.Body>
                            <Modal.Footer id="buttonSet-modal">
                                <Button variant="danger" onClick={handleSaveClose}>
                                    No, not yet.
                                </Button>
                                <Button variant="success" onClick={save}>Yes, I am sure.</Button>
                            </Modal.Footer>
                        </Modal>

                        {/* Clear local storage modal (from React Bootstrap) */}
                        <Modal
                            show={noticeShow}
                            onHide={handleNoticeClose}
                            keyboard={false}
                            backdrop="static"
                            centered
                            id="modal-text-clear"
                        >
                            <Modal.Header closeButton id='closeButton-modal'>
                                <Modal.Title><b>Clear local storage?</b></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div id="clear-notice">Are you sure you want to clear your local storage?</div>
                                <div id="clear-storage-msg"></div>
                            </Modal.Body>
                            <Modal.Footer id="buttonSet-modal">
                                <Button variant="danger" onClick={handleNoticeClose}>
                                    No, not yet.
                                </Button>
                                <Button variant="success" onClick={clearLocalStorage}>Yes, clear it.</Button>
                            </Modal.Footer>
                        </Modal>
                    </div>
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