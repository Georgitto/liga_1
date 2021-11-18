import axios, { Axios, AxiosResponse } from 'axios';

const Config = {
  baseURL: 'http://localhost:8080/',
  timeout: 1000,
};

const Instance = axios.create(Config);

async function getById() {
  const { data } = await Instance.get('/dd6806a0d0105c5b56465a93a207df14.pdf');
  return data;
}

async function getPDF():Promise<AxiosResponse['data']> {
  const { data } = await Instance.get('/dd6806a0d0105c5b56465a93a207df14.pdf');
  return data;
}

export {
  getById,
  getPDF,
};
