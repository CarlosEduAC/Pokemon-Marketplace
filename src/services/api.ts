import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export default api;
