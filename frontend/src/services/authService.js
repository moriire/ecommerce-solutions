import axios from 'axios';

export const register = async (username, email, phone, password1, password2) => {
  try {
      await axios.post('auth/registration/', {
          username:username,
          email:email,
          phone: phone,
          password1:password1,
          password2:password2,
      });
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