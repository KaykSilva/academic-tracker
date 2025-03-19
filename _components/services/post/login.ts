import axios from "axios";
import { Api } from "../api";
import { ILoginResponse } from "@/app/login/type";

export const login = async (formData: any) => {
    const formDataToSend = new FormData();

    const jsonData = {
        registration: formData.registration,
        password: formData.password
    };

    formDataToSend.append('json_data', JSON.stringify(jsonData));

    try {
        const response = await Api.post(`login`, formData);
        console.log(response);
        return response

    } catch (error) {
        console.log(error)
        if (axios.isAxiosError(error)) {
            console.log(error)
            const statusCode = error.response?.status;
            return statusCode;

        } else {
            console.error('Erro inesperado:', error);
            throw new Error('Erro inesperado');
        }
    }
};
