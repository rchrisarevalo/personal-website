import { useState, useEffect } from "react";

export const useFetchAPIStatus = () => {
    const [APILoading, setAPILoading] = useState(true)
    const [APIError, setAPIError] = useState(false)

    useEffect(() => {
        const fetchAPIStatus = async () => {
            const res = await fetch("https://pw-api-server.onrender.com/", {
                method: 'GET'
            })

            if (res.ok) {
                setAPILoading(false)
            } else {
                setAPILoading(false)
                setAPIError(true)
            }
        }
        fetchAPIStatus()
    }, [])


    return { api_loading: APILoading, api_error: APIError }
}