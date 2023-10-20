import axios from 'axios';

const api = axios.create({
    baseURL: 'http://54.146.149.13',
    headers: {
      "access-control-allow-origin" : "*",
      "Content-type": "application/json; charset=UTF-8"
    }
});

export default api;