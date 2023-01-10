import axios from 'axios';
//! once we want to deploy we will remove  "proxy": "http://localhost:5000", from the package.json and use this axios
const axiosApiInstance = axios.create();
console.log(process.env.NODE_ENV);
const url =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:5000'
    : 'https://superuser-api.onrender.com';

axiosApiInstance.defaults.baseURL = url;
axiosApiInstance.defaults.withCredentials = true;

export default axiosApiInstance;
