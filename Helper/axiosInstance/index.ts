import axios, { AxiosRequestConfig } from 'axios';
import { getToken_Localstorage } from '../LocalStorageHandler/LocalStorageHelper';

// import { User } from '../../../shared/types';
import { baseUrl, baseUrlstack } from './constants';

// export function getJWTHeader(user: User): Record<string, string> {
//   return { Authorization: `Bearer ${user.token}` };
// }

const config: AxiosRequestConfig = { baseURL: baseUrl };
const configstack: AxiosRequestConfig = { baseURL: baseUrlstack };
export const axiosInstance = axios.create(config);
export const axiosstackoverflowInstance = axios.create(configstack);