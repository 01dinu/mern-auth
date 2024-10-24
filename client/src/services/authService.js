// client/src/services/authService.js
import axios from '../utils/axios';

export const login = async (credentials) => {
  const response = await axios.post('/auth/login', credentials);
  return response.data;
};

export const register = async (userData) => {
  const response = await axios.post('/auth/register', userData);
  return response.data;
};

export const logout = () => {
  localStorage.removeItem('token');
  sessionStorage.removeItem('token');
};

export const initiateGoogleLogin = () => {
  window.location.href = `${import.meta.env.VITE_API_URL}/auth/google`;
};

export const handleGoogleAuthSuccess = (token) => {
  localStorage.setItem('token', token);
  return token;
};