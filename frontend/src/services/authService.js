import axios from 'axios';

export const login = async (username, password) => {
  const response = await axios.post(`auth/login/`, { username, password });
  console.log(response.data)
  return response.data;
};

export const refreshToken = async (refreshToken) => {
  const response = await axios.post(`auth/refresh`, { refreshToken });
  return response.data;
};

export const logout = async () => {
  // Add any logout logic if necessary, like invalidating tokens on the server
};