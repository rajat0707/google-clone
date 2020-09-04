import React, { useState, useEffect } from 'react'
import API_KEY from "./Keys";

const CONTEXT_KEY = "72938b334ba71ca4d"
const useGoogleSearch = (term) => {
    const [data, setData] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
            )
                .then(res => res.json())
                .then(result => {
                    setData(result)
                })
        }
        fetchData()
    }, [term])
    return { data }
}

export default useGoogleSearch


// https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures