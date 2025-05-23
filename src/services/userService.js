import axios from "axios"

const registerNewUser = (email, phone, username, password) => {
    return axios.post("http://localhost:8080/api/v1/register", {
        email, phone, username, password
    })
}
const loginUser = (valueLogin, password) => {
    return axios.post("http://localhost:8080/api/v1/login", {
        valueLogin, password
    })
}
const fetchAllUser = () => {
    return axios.get("http://localhost:8080/api/v1/user/read")
}
export { registerNewUser, loginUser, fetchAllUser }