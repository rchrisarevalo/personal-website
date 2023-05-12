import React, { useState } from 'react';

const ArchivesTable = () => {

    const [themeState, setThemeState] = useState(localStorage.getItem("d_l_mode"))

    if (themeState === "default_dark" || themeState === "dark")
    {
        return (
            <div id="table-info-dark-mode">
                <table>
                    <tr>
                        <th>Archive Month/Year</th>
                        <th>Expiration Date</th>
                        <th>Time Left</th>
                    </tr>
                    <tr>
                        <td>August 2021</td>
                        <td>December 31, 2024</td>
                        {2024 - new Date().getFullYear() > 1 &&
                            <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                        }
                        {2024 - new Date().getFullYear() === 1 &&
                            <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>September 2021</td>
                        <td>December 31, 2024</td>
                        {2024 - new Date().getFullYear() > 1 &&
                            <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                        }
                        {2024 - new Date().getFullYear() === 1 &&
                            <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>October 2021</td>
                        <td>December 31, 2024</td>
                        {2024 - new Date().getFullYear() > 1 &&
                            <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                        }
                        {2024 - new Date().getFullYear() === 1 &&
                            <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>November 2021</td>
                        <td>December 31, 2024</td>
                        {2024 - new Date().getFullYear() > 1 &&
                            <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                        }
                        {2024 - new Date().getFullYear() === 1 &&
                            <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>December 2021</td>
                        <td>December 31, 2024</td>
                        {2024 - new Date().getFullYear() > 1 &&
                            <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                        }
                        {2024 - new Date().getFullYear() === 1 &&
                            <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>January 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>February 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>March 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>April 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>May 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>June 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>July 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>August 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>September 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>October 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>November 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>December 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>January 2023</td>
                        <td>December 31, 2026</td>
                        {2026 - new Date().getFullYear() > 1 &&
                            <td>{`${2026 - new Date().getFullYear()} years left`}</td>
                        }
                        {2026 - new Date().getFullYear() === 1 &&
                            <td>{`${2026 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>February 2023</td>
                        <td>December 31, 2026</td>
                        {2026 - new Date().getFullYear() > 1 &&
                            <td>{`${2026 - new Date().getFullYear()} years left`}</td>
                        }
                        {2026 - new Date().getFullYear() === 1 &&
                            <td>{`${2026 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>March 2023</td>
                        <td>December 31, 2026</td>
                        {2026 - new Date().getFullYear() > 1 &&
                            <td>{`${2026 - new Date().getFullYear()} years left`}</td>
                        }
                        {2026 - new Date().getFullYear() === 1 &&
                            <td>{`${2026 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>April 2023</td>
                        <td>December 31, 2026</td>
                        {2026 - new Date().getFullYear() > 1 &&
                            <td>{`${2026 - new Date().getFullYear()} years left`}</td>
                        }
                        {2026 - new Date().getFullYear() === 1 &&
                            <td>{`${2026 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
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
                    <tr>
                        <td>August 2021</td>
                        <td>December 31, 2024</td>
                        {2024 - new Date().getFullYear() > 1 &&
                            <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                        }
                        {2024 - new Date().getFullYear() === 1 &&
                            <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>September 2021</td>
                        <td>December 31, 2024</td>
                        {2024 - new Date().getFullYear() > 1 &&
                            <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                        }
                        {2024 - new Date().getFullYear() === 1 &&
                            <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>October 2021</td>
                        <td>December 31, 2024</td>
                        {2024 - new Date().getFullYear() > 1 &&
                            <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                        }
                        {2024 - new Date().getFullYear() === 1 &&
                            <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>November 2021</td>
                        <td>December 31, 2024</td>
                        {2024 - new Date().getFullYear() > 1 &&
                            <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                        }
                        {2024 - new Date().getFullYear() === 1 &&
                            <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>December 2021</td>
                        <td>December 31, 2024</td>
                        {2024 - new Date().getFullYear() > 1 &&
                            <td>{`${2024 - new Date().getFullYear()} years left`}</td>
                        }
                        {2024 - new Date().getFullYear() === 1 &&
                            <td>{`${2024 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>January 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>February 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>March 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>April 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>May 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>June 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>July 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>August 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>September 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>October 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>November 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>December 2022</td>
                        <td>December 31, 2025</td>
                        {2025 - new Date().getFullYear() > 1 &&
                            <td>{`${2025 - new Date().getFullYear()} years left`}</td>
                        }
                        {2025 - new Date().getFullYear() === 1 &&
                            <td>{`${2025 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>January 2023</td>
                        <td>December 31, 2026</td>
                        {2026 - new Date().getFullYear() > 1 &&
                            <td>{`${2026 - new Date().getFullYear()} years left`}</td>
                        }
                        {2026 - new Date().getFullYear() === 1 &&
                            <td>{`${2026 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>February 2023</td>
                        <td>December 31, 2026</td>
                        {2026 - new Date().getFullYear() > 1 &&
                            <td>{`${2026 - new Date().getFullYear()} years left`}</td>
                        }
                        {2026 - new Date().getFullYear() === 1 &&
                            <td>{`${2026 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>March 2023</td>
                        <td>December 31, 2026</td>
                        {2026 - new Date().getFullYear() > 1 &&
                            <td>{`${2026 - new Date().getFullYear()} years left`}</td>
                        }
                        {2026 - new Date().getFullYear() === 1 &&
                            <td>{`${2026 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                    <tr>
                        <td>April 2023</td>
                        <td>December 31, 2026</td>
                        {2026 - new Date().getFullYear() > 1 &&
                            <td>{`${2026 - new Date().getFullYear()} years left`}</td>
                        }
                        {2026 - new Date().getFullYear() === 1 &&
                            <td>{`${2026 - new Date().getFullYear()} year left`}</td>
                        }
                    </tr>
                </table>
            </div>
        )
    }
}

export default ArchivesTable;