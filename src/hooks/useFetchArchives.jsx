import { useEffect, useState } from 'react'

export const useFetchArchives = () => {
    const [status, setStatus] = useState({
        pending: true,
        error: false
    })

    const [archives, setArchives] = useState([{
        month: "",
        beginMonth: 0,
        beginDate: 0,
        beginYear: 0,
        endDate: 0,
        endMonth: 0,
        endYear: 0
    }])

    useEffect(() => {
        const retrieveArchives = async () => {
            const res = await fetch("https://pw-api-server.onrender.com/retrieve_archives", {
                method: 'POST',
                credentials: 'include'
            })

            if (res.ok) {
                const data = await res.json()
                setArchives(data)
                setStatus({...status, pending: false})
            } else {
                setStatus({error: true, pending: false})
            }
        }
        retrieveArchives()
    }, [])

    return { pending: status.pending, error: status.error, archives: archives }
}