import axios from 'axios';
import { useAuthStore } from './stores/auth';

const axiosInstance = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/'
  //process.env.VUE_APP_API_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const authStore = useAuthStore();
  if (authStore.accessToken) {
    config.headers.Authorization = `Bearer ${authStore.accessToken}`;
  }
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const authStore = useAuthStore();
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      await authStore.refreshAccessToken(authStore.refreshToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${authStore.accessToken}`;
      return axiosInstance(originalRequest);
    }

    if (error.response.status === 403 && !originalRequest._retry) {
      localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        authStore.logoutAction()
        window.location.href = '/auth/login';
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;