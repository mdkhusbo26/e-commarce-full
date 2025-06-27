import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://backend-d865.onrender.com/api/v1/users',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
