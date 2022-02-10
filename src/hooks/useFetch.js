import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs"

// recibir una categoria
export const useFetch = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category)
            .then((data) => {
                setState({
                    data,
                    loading: false
                })
            })
            .catch((err) => {
            })
    }, [category])

    return state
}