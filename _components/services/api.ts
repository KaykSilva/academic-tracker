import axios from "axios";
import Cookies from "js-cookie";

export const Api = axios.create({
    baseURL: "https://0kb4zb5f-3000.brs.devtunnels.ms/api/",
    withCredentials: true,
});

Api.interceptors.request.use(
    (config) => {
        const token = Cookies.get('token');

        if (config.data instanceof FormData) {
            config.headers['Content-Type'] = 'multipart/form-data';
        } else {
            config.headers['Content-Type'] = 'application/json';
        }

        if (token) {
            config.headers['x-access-token'] = token;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
