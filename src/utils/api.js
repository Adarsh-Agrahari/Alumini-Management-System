import axios from 'axios';

const api = axios.create({
  baseURL: REACT_APP_API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
