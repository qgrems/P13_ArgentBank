import axios from "axios";

const apiBase = "http://localhost:3001/api/v1"

export function loginUser(email, password) {
    const myData = {
        email: email,
        password: password
    }
    return new Promise((resolve, reject) => {
        axios.post(`${apiBase}/user/login`, myData)
            .then(data => {
                resolve(data.data.body)

            })
            .catch((err) => {
                resolve("")
                alert(err.message)
            })
    })
}

export function recupUser(token) {
    return new Promise((resolve, reject) => {
        axios.post(`${apiBase}/user/profile`, {}, { headers: { Authorization: `Bearer ${token}` } })
            .then(data => {
                resolve(data.data.body)

            })
            .catch((err) => {
                resolve("")
                alert(err.message)
            })
    })
}

export function modifUser(token, firstName, lastName) {
    const myData = {
        firstName: firstName,
        lastName: lastName
    }
    return new Promise((resolve, reject) => {
        axios.put(`${apiBase}/user/profile`, myData, { headers: { Authorization: `Bearer ${token}` } })
            .then(data => {
                resolve(data.data.body)

            })
            .catch((err) => {
                resolve("")
                alert(err.message)
            })
    })
}