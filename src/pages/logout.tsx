import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearItemFromStorage } from '../services/storage';

export default (props: any) =>{
    const navigate = useNavigate();
useEffect(()=>{
    props.setIsLoggedIn(false)
    clearItemFromStorage('token')
},[])
useEffect(()=>{
navigate('/')
},[props.isLoggedIn])
return(null)
}