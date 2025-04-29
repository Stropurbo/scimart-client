import { useEffect, useState } from "react"
import apiClient from "../services/api-client"

const useFetchCategory = () => {
    const [categories, setcategory] = useState([])

    useEffect(() => {
        apiClient.get('/category')
        .then(res => setcategory(res.data.results))
    }, []);
    return categories
}


export default useFetchCategory;