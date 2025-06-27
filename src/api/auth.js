import axiosInstance from '../utills/axiosInstance';

const loginUser = async (email, password) => {
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

const logoutUser = async () => {
  try {
    const response = await axiosInstance.post('/logout');
    return response.data;
  } catch (error) {
    throw error.response?.data || { message: 'Login failed' };
  }
};

export { loginUser, logoutUser };
