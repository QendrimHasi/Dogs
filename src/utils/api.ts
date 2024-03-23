import axios, { AxiosResponse } from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: process.env.REACT_APP_API,
});

console.log("process.env.API", process.env.API);

// Request interceptor
api.interceptors.request.use(
  (config: any) => {
    if (config.headers === undefined) {
      config.headers = {};
    }
    config.headers["x-api-key"] = process.env.REACT_APP_API_KEY;
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status === 200 || response.status === 201) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error: any) => {
    return Promise.reject(error);
  }
);

export default api;
