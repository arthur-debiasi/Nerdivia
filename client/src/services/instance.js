import axios from 'axios';

const HOSTNAME = process.env.REACT_APP_HOSTNAME || 'localhost';
const PORT = process.env.REACT_APP_BACKEND_PORT;
const API_URL = `http://${HOSTNAME}:${PORT || '3001'}`;

const instance = axios.create({
  baseURL: API_URL,
});
export default instance;
