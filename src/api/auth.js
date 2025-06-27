import axiosInstance from '../utills/axiosInstance';

export const loginUser = async (email, password) => {
  try {
    const response = await axiosInstance.post('/login', {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Login failed' };
  }
};
