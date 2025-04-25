import axios from "axios";
import { AuthService } from "./AuthService";

const apiClient = axios.create({
    baseURL: "http://localhost:8000/universidad/",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
});
//cuando la petición se va a enviar a la API, se ejecuta este interceptor
apiClient.interceptors.request.use(function (config) {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
}, function (error) {
    console.error("Error en la solicitud a la API: ", error);
    return Promise.reject(error);
});
//cuando la petición ya llegó a la API y se recibe una respuesta, se ejecuta este interceptor
apiClient.interceptors.response.use(function (response) {
    return response;
}, async function (error) {
    if (error.response.status === 401) {
        try {
            const tokenResponse = await new AuthService().refreshToken(localStorage.getItem("refresh_token")!)
            localStorage.setItem("access_token", tokenResponse.access);
        } catch (authError) {
            if (window.location.pathname !== '/login') {
                window.location.href = '/login';
            }
            console.log("auth error", authError)
            return Promise.reject(authError)
        }
        return apiClient.request(error.config)
    }

    console.error("Error en la respuesta de la API: ", error.response);
    return Promise.reject(error);
});

export default apiClient;