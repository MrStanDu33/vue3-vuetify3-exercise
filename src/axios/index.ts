/**
 * @file Axios instance initialization.
 * @author DANIELS-ROTH Stan <contact@daniels-roth-stan.fr>
 */
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.domain.tld/api/v2',
  timeout: 1000,
});

// MOCKING API REQUEST
instance.interceptors.request.use((config) => {
  /* eslint-disable no-param-reassign */
  config.baseURL = '/';
  config.url = 'data.json';
  /* eslint-enable no-param-reassign */
  return config;
});

export default instance;
