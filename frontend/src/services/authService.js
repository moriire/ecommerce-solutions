import axiosInstance from '@/axios';

export const register = async (data) => {
  const response = await axiosInstance.post('auth/users/', data);
  return response
}

export const login = async (username, password) => {
  const response = await axiosInstance.post(`auth/jwt/create/`, { username, password });
  console.log(response.data)
  return response;
};

export const getRefreshToken = async (refresh) => {
  const response = await axiosInstance.post(`auth/jwt/refresh/`, { refresh });
  return response.data;
};

export const logout = async (refresh_token) => {
  const response = await axiosInstance.post("auth/users/logout/", {refresh_token})
  return response
  // Add any logout logic if necessary, like invalidating tokens on the server
};

export const fetchUserDetails = async (token) =>{
    const response = await axiosInstance.get('auth/users/me/');
    return response
};