import axios from 'axios';

const baseUrl = 'https://generativelanguage.googleapis.com/';

const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {'content-type': 'application/json'},
});
export default axiosInstance;
