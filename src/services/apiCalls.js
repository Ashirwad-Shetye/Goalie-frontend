import axios from './base';
import { USER_LOGIN_URL } from './constants';

export const userLogin = (params) => {
    return axios.post(USER_LOGIN_URL, params)
}