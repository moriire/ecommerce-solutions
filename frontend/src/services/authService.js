import axios from 'axios';

export const register = async (data) => {
  try {
      await axios.post('auth/registration/', data);
      alert('Registration successful! Please check your email for verification.');
  } catch (error) {
      console.error('Error during registration:', error);
  }
}

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

export const fetchUserDetails = async (token) =>{
    const response = await axios.get('auth/user/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  
};