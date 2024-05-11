import React, { useState, useEffect } from 'react';
import db from './database/archives.json'
import { useFetchArchives } from '../hooks/useFetchArchives';

const ArchivesTable = ({ pending, error, archives }) => {

    const [themeState, setThemeState] = useState(localStorage.getItem("d_l_mode"))
    const current_theme = localStorage.getItem("d_l_mode")

    useEffect(() => {
        setThemeState(localStorage.getItem("d_l_mode"))
    }, [themeState, current_theme])

    const generate_archive_information = archives.map(archive =>
        <tr>
            <td>{`${archive.month} ${archive.beginYear}`}</td>
            <td>{`December 31, ${archive.endYear}`}</td>
            {archive.endYear - new Date().getFullYear() > 1 &&
                <td>{`${archive.endYear - new Date().getFullYear()} years left`}</td>
            }
            {archive.endYear - new Date().getFullYear() === 1 &&
                <td>{`${archive.endYear - new Date().getFullYear()} year left`}</td>
            }
            {archive.endYear - new Date().getFullYear() === 0 &&
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
            {!pending ?
                !error ?
                    <table>
                        <tr>
                            <th>Archive Month/Year</th>
                            <th>Expiration Date</th>
                            <th>Time Left</th>
                        </tr>
                        {generate_archive_information}
                    </table>
                    :
                    <h5 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '30px', paddingBottom: '20px'}}>Error!</h5>
                :
                <h5 style={{display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '30px', paddingBottom: '20px'}}>Loading table...</h5>
            }
        </div>
    )
}

export default ArchivesTable;