import axios from 'axios';

const api = axios.create({
  baseURL: 'https://alumini-management-system-be.vercel.app/api', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
