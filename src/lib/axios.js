import Axios from 'axios';
import storage from '@/utils/storage';
import { toast } from 'react-toastify';

function authRequestInterceptor(config) {
  const token = storage.getToken();
  if (token) {
    config.headers.authorization = `${token}`;
  }

  config.headers.Accept = 'application/json';
  return config;
}

export const axios = Axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

axios.interceptors.request.use(authRequestInterceptor);

axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    const message = error.response?.data?.message || error.message;

    toast.error(message);

    return Promise.reject(error);
  },
);
