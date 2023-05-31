import Axios from 'axios';

export const API_BASE_URL = 'http://localhost:3000';

const axios = Axios.create({ baseURL: API_BASE_URL });

export default axios;
