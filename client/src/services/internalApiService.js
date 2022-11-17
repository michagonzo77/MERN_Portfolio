import axios from "axios";

const http = axios.create({
    baseURL: 'http://localhost:8001/api'
});

export const getAllCards = async () => {
    const res = await http.get('/cards');
    return res.data;
}

export const getCardById = async (id) => {
    const res = await http.get(`/cards/${id}`);
    return res.data;
}

export const createCard = async (data) => {
    const res = await http.post('/cards', data);
    return res.data;
}

export const updateCard = async (id, data) => {
    const res = await http.put(`/cards/${id}`, data);
    return res.data;
}

export const deleteCard = async (id) => {
    const res = await http.delete(`/cards/${id}`);
    return res.data;
}