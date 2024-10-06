// src/api.ts
import axios from 'axios';

const API_URL = 'https://6702b4ecbd7c8c1ccd3f9fd3.mockapi.io/api/v1/';

export const fetchTasks = async () => {
    const response = await axios.get(`${API_URL}/tasks`);
    return response.data;
};

export const addTask = async (task: { title: string }) => {
    const response = await axios.post(`${API_URL}/tasks`, task);
    return response.data;
};

export const toggleTaskCompletion = async (taskId: number, completed: boolean) => {
    const response = await axios.patch(`${API_URL}/tasks/${taskId}`, { completed });
    return response.data;
};
