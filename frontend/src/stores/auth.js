import { defineStore } from 'pinia';
import { ref } from 'vue';
import { login, refreshToken, logout, register } from '../services/authService';
import { useRouter } from 'vue-router';

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(localStorage.getItem('accessToken') || null);
  const refreshToken = ref(localStorage.getItem('refreshToken') || null);
  const userInfo = ref(localStorage.getItem('user') || null);
  const router = useRouter();

  const setTokens = (access, refresh, user) => {
    accessToken.value = access;
    refreshToken.value = refresh;
    userInfo.value = user;
    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
    localStorage.setItem('userInfo', user);
  };

  const clearTokens = () => {
    accessToken.value = null;
    refreshToken.value = null;
    userInfo.value = null;
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userInfo');
  };

  const loginAction = async (username, password) => {
    const response = await login(username, password);
    setTokens(response.access, response.refreshToken, response.user);
    router.push("/shop")
  };

 const registerAction = async (username, email, phone, password1, password2) => {
    const response = await register(username, email, phone, password1, password2)

 }
  const refreshAccessToken = async () => {
    const response = await refreshToken(refreshToken.value);
    setTokens(response.access, response.refresh, response.user);
  };

  const logoutAction = () => {
    clearTokens();
    userInfo.value = null;
    logout();
    router.push("/")
  };

  return {
    accessToken,
    refreshToken,
    userInfo,
    loginAction,
    refreshAccessToken,
    logoutAction,
    registerAction
  };
});