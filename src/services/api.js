import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:5000',
});

export const createSession = async (cnpj, password) => {
    return api.post('/sessions', {cnpj, password});
};

export const getUsers = async() => {
    return api.get("/users");
}