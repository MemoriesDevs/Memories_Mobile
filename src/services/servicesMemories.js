/* eslint-disable import/prefer-default-export */
import axios from 'axios';
import { API_BASE_URL } from './axios';

export const getMemorie = async (id) => {
  const url = `${API_BASE_URL}/memories/${id}`;

  const options = {
    method: 'GET',
    url,
  };

  const result = await axios(options);

  return result.data;
};
