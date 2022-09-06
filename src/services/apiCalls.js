import axios from './base';
import { USER_LOGIN_URL, USER_REGISTER_URL } from './constants';

export const userLogin = (params) => {
    return axios.post(USER_LOGIN_URL, params)
}

export const userRegister = (params) => {
    return axios.post(USER_REGISTER_URL, params)
}