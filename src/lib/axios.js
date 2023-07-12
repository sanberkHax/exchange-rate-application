import Axios from 'axios';
import { storage } from '@/utils/storage';
import { toast } from 'react-toastify';

function authRequestInterceptor(config) {
  const token = storage.getToken();

  if (token) {
    config.headers.authorization = `Bearer ${token}`;
  }

  config.headers.Accept = 'application/json';
  return config;
}

export const api = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.request.use(authRequestInterceptor);

api.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    const message = error.response?.data?.error_description || error.message;

    toast.error(message);

    return Promise.reject(error);
  },
);

export default api;
