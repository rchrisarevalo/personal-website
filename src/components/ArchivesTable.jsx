import React, { useState, useEffect } from 'react';
import db from './database/archives.json'

const ArchivesTable = () => {

    const [themeState, setThemeState] = useState(localStorage.getItem("d_l_mode"))
    var current_theme = localStorage.getItem("d_l_mode")

    useEffect(() => {
        setThemeState(localStorage.getItem("d_l_mode"))
    }, [themeState, current_theme])

    var generate_archive_information = db.archives.map(archive =>
        <tr>
            <td>{`${archive["month"]} ${archive["beginYear"]}`}</td>
            <td>{`December 31, ${archive["endYear"]}`}</td>
            {archive["endYear"] - new Date().getFullYear() > 1 &&
                <td>{`${archive["endYear"] - new Date().getFullYear()} years left`}</td>
            }
            {archive["endYear"] - new Date().getFullYear() === 1 &&
                <td>{`${archive["endYear"] - new Date().getFullYear()} year left`}</td>
            }
        </tr>
    )

    if (themeState === "default_dark" || themeState === "dark") {
        return (
            <div id="table-info-dark-mode">
                <table>
                    <tr>
                        <th>Archive Month/Year</th>
                        <th>Expiration Date</th>
                        <th>Time Left</th>
                    </tr>
                    {generate_archive_information}
                </table>
            </div>
        )
    } else if (themeState === "default_light" || themeState === "light") {
        return (
            <div id="table-info-light-mode">
                <table>
                    <tr>
                        <th>Archive Month/Year</th>
                        <th>Expiration Date</th>
                        <th>Time Left</th>
                    </tr>
                    {generate_archive_information}
                </table>
            </div>
        )
    }
}

export default ArchivesTable;