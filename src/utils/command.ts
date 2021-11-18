import axios, { Axios, AxiosResponse } from 'axios';

const Config = {
  baseURL: 'http://localhost:3000/',
  timeout: 1000,
};

const Instance = axios.create(Config);

export { Instance, AxiosResponse };
