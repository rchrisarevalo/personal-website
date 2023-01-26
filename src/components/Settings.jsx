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
var show_progress_bar = localStorage.getItem("show_progress")

var saved_status = false;
var theme_choice;

var christmasThemeList = ['#ffffff', '#e20c0c', '#0ee812', '#ffffff', '#e20c0c', '#0ee812', '#ffffff', '#e20c0c', '#0ee812', '#ffffff', '#e20c0c', '#0ee812']
var christmasColorList = ['#e20c0c', '#ffffff', '#e20c0c', '#e20c0c', '#ffffff', '#e20c0c', '#e20c0c', '#ffffff', '#e20c0c', '#e20c0c', '#ffffff', '#e20c0c']

var randomIndex = Math.floor(Math.random() * 11) + 0

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
    var save_button_status = document.getElementById("save-btn")
    var prevState;

    randomIndex = Math.floor(Math.random() * 11) + 0

    if (theme_choice === "dark" && prevState !== d) {
        prevState = d
        document.body.style.cssText = 'background: #242525; color: white; transition: .5s;'
        localStorage.setItem("d_l_mode", theme_choice);
        localStorage.setItem("dark_media_theme", "false")
        localStorage.setItem("light_media_theme", "false")
        localStorage.setItem("save_status", "saved")

    } else if (theme_choice === "light" && prevState !== d) {
        prevState = d
        document.body.style.cssText = 'background: #FFFFFF; color: black; transition: .5s;'
        localStorage.setItem("d_l_mode", theme_choice);
        localStorage.setItem("dark_media_theme", "false")
        localStorage.setItem("light_media_theme", "false")
        localStorage.setItem("save_status", "saved")

    } else if (theme_choice === "christmas" && prevState !== d) {
        prevState = d
        document.body.style.cssText = `background: ${christmasThemeList[randomIndex]}; color: ${christmasColorList[randomIndex]}; transition: .5s;`
        localStorage.setItem("d_l_mode", theme_choice)
        localStorage.setItem("dark_media_theme", "false")
        localStorage.setItem("light_media_theme", "false")
        localStorage.setItem("save_item", "saved")

    } else if (theme_choice === "default" && prevState !== d) {
        if (window.matchMedia("(prefers-color-scheme: light)").matches) {
            prevState = d
            document.body.style.cssText = 'background: #FFFFFF; color: black; transition: .5s;'
            localStorage.setItem("d_l_mode", `${theme_choice}_light`)
            theme_choice = "default_light"
            localStorage.setItem("light_media_theme", "true")
            localStorage.setItem("dark_media_theme", "false")
            localStorage.setItem("save_status", "saved")

        } else {
            prevState = d
            document.body.style.cssText = 'background: #242525; color: white; transition: .5s;'
            localStorage.setItem("d_l_mode", `${theme_choice}_dark`)
            theme_choice = "default_dark"
            localStorage.setItem("light_media_theme", "false")
            localStorage.setItem("dark_media_theme", "true")
            localStorage.setItem("save_status", "saved")
        }
    }

    if (prevState === theme_choice) {
        saved_status = false
        save_button_status.disabled = true
        save_button_status.style.color = 'grey'
        save_button_status.style.transition = '.5s'
    } else if (prevState !== theme_choice) {
        saved_status = true
        console.log(saved_status)
        save_button_status.disabled = false
        save_button_status.style.color = 'black'
        save_button_status.style.transition = '.5s'
    }
}

if (d === "dark" || d === "default_dark") {
    document.body.style.cssText = 'background: #242525; color: white; transition: .5s;'

} else if (l_media === "true" || d_media === "true" || (l_media === null && d_media === null)) {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
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

} else if (d === "christmas") {
    document.body.style.cssText = `background: ${christmasThemeList[randomIndex]}; color: ${christmasColorList[randomIndex]}; transition: .5s;`
}

// ====================================

function handleHideProgress() {
    var show_choice = document.getElementById("show_check").value
    console.log(show_choice)

    if (show_choice === "show") {
        localStorage.setItem("show_progress", "true")
    }
    else {
        localStorage.setItem("show_progress", "false")
    }

    window.location.reload();
}

function handleSave() {
    if (saved_status === false) {
        failed();
    } else {
        save();
    }
}

function failed() {
    var saveNotice = document.getElementById("save-notice");
    var changesSaved = document.getElementById("clear-storage-msg");
    var saveModalMessage = document.getElementById("save-modal-title");
    var buttonSet = document.getElementById("buttonSet-modal");

    saveNotice.style.display = 'none';
    buttonSet.style.display = 'none';
    saveModalMessage.innerHTML = 'Failed to save changes'
    changesSaved.style.display = 'block';
    changesSaved.innerHTML = '<div style="color: red;">No changes were made.</div><br>Please make some changes to your settings before saving once again.'
}

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
                            <button onClick={handleNoticeShow} id="clear_button"><IoTrashOutline id="settings-btns" />Clear</button>
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
                                {(Date.now() >= new Date(2022, 11, 23) && Date.now() <= new Date(2022, 11, 26)) &&
                                    <option value="christmas">Christmas theme</option>
                                }
                            </select>
                        }
                        {d === "dark" &&
                            <select id="value_check" onChange={light_dark_mode}>
                                <option value="default">Device theme</option>
                                <option value="light">Light theme</option>
                                <option value="dark" selected>Dark theme</option>
                                {(Date.now() >= new Date(2022, 11, 23) && Date.now() <= new Date(2022, 11, 26)) &&
                                    <option value="christmas">Christmas theme</option>
                                }
                            </select>
                        }
                        {d === "light" &&
                            <select id="value_check" onChange={light_dark_mode}>
                                <option value="default">Device theme</option>
                                <option value="light" selected>Light theme</option>
                                <option value="dark">Dark theme</option>
                                {(Date.now() >= new Date(2022, 11, 23) && Date.now() <= new Date(2022, 11, 26)) &&
                                    <option value="christmas">Christmas theme</option>
                                }
                            </select>
                        }
                        {d === "christmas" && (Date.now() >= new Date(2022, 11, 23) && Date.now() <= new Date(2022, 11, 26)) &&
                            <select id="value_check" onChange={light_dark_mode}>
                                <option value="default">Device theme</option>
                                <option value="light">Light theme</option>
                                <option value="dark">Dark theme</option>
                                <option value="christmas" selected>Christmas theme</option>
                            </select>
                        }
                        {Date.now() < new Date(2023, 4, 13, 0, 0) &&
                            <div>
                                <br></br>
                                <br></br>
                                <i>Hide progress bar feature <b>(available until May 13, 2023)</b>:</i>
                                <br></br>
                                <br></br>
                                {(show_progress_bar === "true" || show_progress_bar === null) &&
                                    <select id="show_check" onChange={handleHideProgress}>
                                        <option value="show" selected>Show</option>
                                        <option value="hide">Hide</option>
                                    </select>
                                }
                                {(show_progress_bar === "false" || show_progress_bar === null) &&
                                    <select id="show_check" onChange={handleHideProgress}>
                                        <option value="show">Show</option>
                                        <option value="hide" selected>Hide</option>
                                    </select>
                                }
                            </div>
                        }
                        <br></br>
                        <br></br>
                        <i>Reload page for changes to take effect (for theme change only):</i>
                        <br></br>
                        <br></br>
                        <button type="submit" id="save-btn" onClick={handleSaveShow}><IoSaveOutline id="settings-btns" />Save</button>
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
                                <Modal.Title><b id="save-modal-title">Save changes?</b></Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <div id="save-notice">Are you sure you want to save?</div>
                                <div id="clear-storage-msg"></div>
                            </Modal.Body>
                            <Modal.Footer id="buttonSet-modal">
                                <Button variant="danger" onClick={handleSaveClose}>
                                    No, not yet.
                                </Button>
                                <Button variant="success" onClick={handleSave}>Yes, I am sure.</Button>
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