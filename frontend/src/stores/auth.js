import { defineStore } from 'pinia';
import { ref } from 'vue';
import { login, getRefreshToken, logout, register, fetchUserDetails } from '../services/authService';
import { useRouter, useRoute } from 'vue-router';
import { refresh } from 'aos';

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(localStorage.getItem('accessToken') || null);
  const refreshToken = ref(localStorage.getItem('refreshToken') || null);
  const userInfo = ref(JSON.parse(localStorage.getItem('user')) || null);
  const router = useRouter();
  const route = useRoute();

  const setTokens = (access, refresh, user) => {
    accessToken.value = access;
    refreshToken.value = refresh;
    userInfo.value = user;
    localStorage.setItem('accessToken', access);
    localStorage.setItem('refreshToken', refresh);
    localStorage.setItem('user', JSON.stringify(user));
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
    setTokens(response.data.access, response.data.refresh, response.data.user);
    return response
  };

 const registerAction = async (data) => {
    const response = await register(data)
 }
  const refreshAccessToken = async () => {
    const response = await getRefreshToken(refreshToken.value);
    setTokens(response.access, response.refresh, response.user);
  };

  const logoutAction = () => {
    logout(refreshToken);
    clearTokens();
    userInfo.value = null;
    router.push("/")
  };
  
const user = ref({
  "username": "",
  "first_name": "",
  "last_name": "",
  "phone": "",
  "profile": {
      "img": null,
      "store_name": "",
      "address": null,
      "merchandise": null,
      "facebook": "",
      "instagram": "",
      "twitter": "",
      "state": null,
      "viewed_by": []
  }});
const getProfile = async () => {
  try {
    const res = await fetchUserDetails(accessToken.value);
    console.log(res.data)
    user.value = res.data
  } catch (error) {
    console.error('Failed to get user:', error);
  }
};
  return {
    accessToken,
    refreshToken,
    userInfo,
    loginAction,
    refreshAccessToken,
    logoutAction,
    registerAction,
    getProfile,
    user,
   
  };
});