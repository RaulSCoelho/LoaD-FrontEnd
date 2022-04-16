import axios from "axios"

const api = axios.create({
    baseURL: "https://lifeofadream.herokuapp.com",
    withCredentials: true
})

export default api