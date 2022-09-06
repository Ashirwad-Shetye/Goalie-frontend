import { userLogin } from './apiCalls'
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