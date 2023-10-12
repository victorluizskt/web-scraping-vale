import axios from 'axios';

const api = axios.create({
    baseURL: 'http://54.242.112.235',
    headers: {
      "access-control-allow-origin" : "*",
      "Content-type": "application/json; charset=UTF-8"
    }
});

export default api;