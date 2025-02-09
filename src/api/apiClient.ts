import axios from "axios";
import { SERVER_URL } from "../constants/env.constants";

const API_BASE_URL = SERVER_URL;

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = token;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.error("API Error:", error.response?.data);
    return Promise.reject(error.response?.data || error.message);
  }
);

export default apiClient;
