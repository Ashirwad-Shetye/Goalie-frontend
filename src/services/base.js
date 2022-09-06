import axios from 'axios';
import isEmpty from 'lodash/isEmpty';
import { getItemFromStorage } from './storage';
import {
    DEFAULT_URL, authHeaderKeys
} from './constants';

export const setAuthHeaders = (config) => {
    if(!isEmpty(getItemFromStorage('token'))){
    authHeaderKeys.forEach((key) => {
        if(key.toLowerCase() === 'authorization'.toLowerCase()){
            config.headers.common[key] =  `Bearer ${getItemFromStorage('token')}`;
        }
        else{
            if (getItemFromStorage(key)){
                config.headers.common[key] = getItemFromStorage(key);
            }
        }
    })
}
return config;
}


export const setAuthHeadersAfterLogin = (headers, accessToken=null) => {
    authHeaderKeys.forEach((key) => {
        if(key.toLowerCase() === 'authorization'.toLowerCase() && accessToken){
            axios.defaults.headers.common[key] = `Bearer ${accessToken}`;
        }
        else{
            if(!isEmpty(headers[key])){
                axios.defaults.headers.common[key] = headers[key];
            }
        }
    })
}


axios.defaults.baseURL = DEFAULT_URL;
axios.defaults.timeout = 120000;
axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json';
axios.defaults.headers.common.Platform = 'Web';

const instance = axios.create();

export const basicInstance = axios.create();

const handleErrors = (store = null, error) => {
    if(process.env.NODE_ENV === 'development'){
        console.log("Error Logging :: ", error.message, JSON.stringify(error))
    }
    if(error.message){
        if(error.message === "Network Error"){
            // store.dispatch(showToaster({message: 'No Internet connection. Please check your internet settings', type: 'error'}))
            return Promise.reject(error);
        }
    }
    if(!error.response){
        if(error.code === "ECONNABORTED"){
            // store.dispatch(showToaster({type:'error', message: error.message}))
            const timeoutError = error;
            timeoutError.response = {
                data: {}
            }
            return Promise.reject(timeoutError);
        }
        // store.dispatch(showToaster({type: 'error', message: error.message }))
        return Promise.reject(error);
    }
    if(error.response){
        let errorMessage = "Something Went Wrong";
        switch(error.response.status){
            case(400):
                if(error.response.data.errors){
                    errorMessage = error.response.data.errors;
                }
                // store.dispatch(showToaster({message: errorMessage, type: 'error'}))
                break;
            default:
                // store.dispatch(showToaster({ type: 'error', message: error.message}))               
        }
    }
    return Promise.reject(error);
}

export const setupBasicInterceptor = () => {
    basicInstance.interceptors.response.use(
        (response) => Promise.resolve(response),
        (error) => handleErrors(error)
    )
    basicInstance.interceptors.request.use(
        (config) => setAuthHeaders(config),
        (error) => Promise.reject(error)
    )
}

export default instance;