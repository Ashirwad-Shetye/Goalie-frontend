import { userLogin, userRegister, userSetGoal, getUserGoalData, getMyInfo } from './apiCalls'
import { setAuthHeadersAfterLogin } from './base'
import { saveAuthDataToDevice } from './storage'
export const login = (params) => {
    userLogin(params)
    .then((response) => {
        setAuthHeadersAfterLogin(response.headers, response.data.token)
        saveAuthDataToDevice(response.headers, response.data.token)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const register = (params) => {
    userRegister(params)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const setGoal = (params) => {
    userSetGoal(params)
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}

export const getGoalData = () => {
    return getUserGoalData()
}

export const getUserInfo = () => {
    return getMyInfo()
}