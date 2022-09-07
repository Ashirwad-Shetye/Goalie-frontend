import axios from './base';
import { USER_LOGIN_URL, USER_REGISTER_URL, USER_SET_GOAL, GET_GOALS_DATA, GET_MY_INFO, GET_USER_GOALS } from './constants';

export const userLogin = (params) => {
    return axios.post(USER_LOGIN_URL, params)
}

export const userRegister = (params) => {
    return axios.post(USER_REGISTER_URL, params)
}

export const userSetGoal = (params) => {
    return axios.post(USER_SET_GOAL, params)
}

export const getUserGoalData = () => {
    return axios.get(GET_GOALS_DATA)
}

export const getMyInfo = () => {
    return axios.get(GET_MY_INFO)
}

export const getUserGoals = () => {
    return axios.get(GET_USER_GOALS)
}

