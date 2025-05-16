const { default: axios, post } = require("axios")

const postLogin = (username, password) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/token/', {
            username: username,
            password: password
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}
const postRefresh = (refresh) => {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:8000/api/token/refresh/', {
            refresh
        })
            .then(response => {
                resolve(response.data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

module.exports = {
    postLogin,
    postRefresh
}