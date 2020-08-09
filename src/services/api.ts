import axios from 'axios';

const api = axios.create({
  baseURL: 'https://proffy-deploy-ernesto.herokuapp.com/',
});

export default api;
