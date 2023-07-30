import React, { useState } from 'react';

var d = localStorage.getItem("d_l_mode");
var d_media = localStorage.getItem("dark_media_theme")
var l_media = localStorage.getItem("light_media_theme")

var theme_choice;

// Code below inspired by and credited to Mr. Kevin Powell: 
// https://codepen.io/kevinpowell/pen/EMdjOV

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
}

const ThemeChangerButton = () => {

    var current_theme = localStorage.getItem("d_l_mode")

    if (current_theme == null) {
        if (localStorage.getItem("dark_media_theme") === "true" && localStorage.getItem("light_media_theme") === "false") {
            localStorage.setItem("d_l_mode", "default_dark")
        } else if (localStorage.getItem("light_media_theme") === "true" && localStorage.getItem("dark_media_theme") === "false"){
            localStorage.setItem("d_l_mode", "default_light")
        }
    }

    const [theme, setTheme] = useState(current_theme)

    function light_dark_mode() {
        theme_choice = document.getElementById("value_check").value
    
        if (theme_choice === "dark") {
            document.body.style.cssText = 'background: #242525; color: white; transition: .5s;'
            localStorage.setItem("d_l_mode", theme_choice);
            localStorage.setItem("dark_media_theme", "false")
            localStorage.setItem("light_media_theme", "false")
            localStorage.setItem("save_status", "saved")
            setTheme("dark")
    
        } else if (theme_choice === "light") {
            document.body.style.cssText = 'background: #FFFFFF; color: black; transition: .5s;'
            localStorage.setItem("d_l_mode", theme_choice);
            localStorage.setItem("dark_media_theme", "false")
            localStorage.setItem("light_media_theme", "false")
            localStorage.setItem("save_status", "saved")
            setTheme("light")
    
        } else if (theme_choice === "default") {
            if (window.matchMedia("(prefers-color-scheme: light)").matches) {
                document.body.style.cssText = 'background: #FFFFFF; color: black; transition: .5s;'
                localStorage.setItem("d_l_mode", `${theme_choice}_light`)
                theme_choice = "default_light"
                localStorage.setItem("light_media_theme", "true")
                localStorage.setItem("dark_media_theme", "false")
                localStorage.setItem("save_status", "saved")
                setTheme("default_light")
    
            } else {
                document.body.style.cssText = 'background: #242525; color: white; transition: .5s;'
                localStorage.setItem("d_l_mode", `${theme_choice}_dark`)
                theme_choice = "default_dark"
                localStorage.setItem("light_media_theme", "false")
                localStorage.setItem("dark_media_theme", "true")
                localStorage.setItem("save_status", "saved")
                setTheme("default_dark")
            }
        }
    }

    if (theme === "default_dark") {
        return (
            <select id="value_check" onChange={light_dark_mode}>
                <option value="default" selected>Device theme</option>
                <option value="light">Light theme</option>
                <option value="dark">Dark theme</option>
            </select>
        )

    } else if (theme === "default_light") {
        return (
            <select id="value_check" onChange={light_dark_mode}>
                <option value="default" selected>Device theme</option>
                <option value="light">Light theme</option>
                <option value="dark">Dark theme</option>
            </select>
        )
    } else if (theme === "light") {
        return(
            <select id="value_check" onChange={light_dark_mode}>
                <option value="default">Device theme</option>
                <option value="light" selected>Light theme</option>
                <option value="dark">Dark theme</option>
            </select>
        )
    } else if (theme === "dark") {
        return (
            <select id="value_check" onChange={light_dark_mode}>
                <option value="default">Device theme</option>
                <option value="light">Light theme</option>
                <option value="dark" selected>Dark theme</option>
            </select>
        )
    } else {
        return (
            <select id="value_check" onChange={light_dark_mode}>
                <option value="default" selected>Device theme</option>
                <option value="light">Light theme</option>
                <option value="dark">Dark theme</option>
            </select>
        )
    }
}

export default ThemeChangerButton;