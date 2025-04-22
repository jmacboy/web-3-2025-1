import axios from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8000/universidad/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
    },
});
apiClient.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    console.error("Error en la respuesta de la API: ", error.response);
    return Promise.reject(error);
});

export default apiClient;