import axios from 'axios';

const api = axios.create({
    baseURL: 'http://54.81.95.57',
    headers: {
      "access-control-allow-origin" : "*",
      "Content-type": "application/json; charset=UTF-8"
    }
});

export default api;