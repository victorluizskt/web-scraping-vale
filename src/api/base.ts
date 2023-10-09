import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:6060/',
    headers: {
      "access-control-allow-origin" : "*",
      "Content-type": "application/json; charset=UTF-8"
    }
});

export default api;