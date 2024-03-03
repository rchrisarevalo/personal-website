import React, { useState, useEffect } from 'react';
import db from './database/archives.json'

const ArchivesTable = () => {

    const [themeState, setThemeState] = useState(localStorage.getItem("d_l_mode"))
    const current_theme = localStorage.getItem("d_l_mode")

    useEffect(() => {
        setThemeState(localStorage.getItem("d_l_mode"))
    }, [themeState, current_theme])

    const generate_archive_information = db.archives.map(archive =>
        <tr>
            <td>{`${archive["month"]} ${archive["beginYear"]}`}</td>
            <td>{`December 31, ${archive["endYear"]}`}</td>
            {archive["endYear"] - new Date().getFullYear() > 1 &&
                <td>{`${archive["endYear"] - new Date().getFullYear()} years left`}</td>
            }
            {archive["endYear"] - new Date().getFullYear() === 1 &&
                <td>{`${archive["endYear"] - new Date().getFullYear()} year left`}</td>
            }
            {archive["endYear"] - new Date().getFullYear() === 0 &&
                <>
                    {11 - new Date().getMonth() > 1 ?
                        <td>{`${11 - new Date().getMonth()} months left`}</td>
                        :
                        <td>{`${11 - new Date().getMonth()} month left`}</td>
                    }
                    {11 - new Date().getMonth() <= 1 &&
                        <td>{`${31 - new Date().getDate()} days left`}</td>
                    }
                </>
            }
        </tr>
    )

    return (
        <div id={(themeState === "default_dark" || themeState === "dark") ? "table-info-dark-mode" : "table-info-light-mode"}>
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

export default ArchivesTable;