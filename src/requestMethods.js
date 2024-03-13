import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/v1/';

const storedData = localStorage.getItem('persist:root');
const userData = storedData && JSON.parse(storedData).user;
const user = userData && JSON.parse(userData);
const accessToken = user?.currentUser?.accessToken;
// console.log(accessToken);

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Bearer ${accessToken}` },
});
