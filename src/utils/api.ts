import axios, {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';
import baseURL_dev from "../config/base.ts";

const apiReq = axios.create({
    baseURL: baseURL_dev,
    timeout: 30000
})

// 请求拦截器
apiReq.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        return config;
    },
    (error: AxiosError) => {
        return Promise.reject(error);
    }
)

// 响应拦截器
apiReq.interceptors.response.use(
    (response: AxiosResponse) => {
        return response
    },
    (err: AxiosError) => {
        return Promise.reject(err);
    }
)

export default apiReq
