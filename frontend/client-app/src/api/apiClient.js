import axios from "axios"

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_ENV == "dev" ? "http://localhost:4000" : import.meta.env.VITE_API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
});

export default apiClient