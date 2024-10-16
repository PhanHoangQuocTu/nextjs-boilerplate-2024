import { env } from '@/utils/const';
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import axios from 'axios';

export const request = axios.create({
  baseURL: env.APP_URL,
});

const handleSuccess = (res: AxiosResponse) => {
  return res;
};

const handleError = async (error: any) => {
  const data = error?.response?.data as any;

  return Promise.reject(data?.meta || data || error);
};

request.interceptors.response.use(handleSuccess, handleError);

request.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    return config;
  },
  (error) => Promise.reject(error)
);
