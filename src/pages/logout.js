import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { clearItemFromStorage } from '../services/storage';

export default (props) =>{
    const navigate = useNavigate();
useEffect(()=>{
    props.setIsLoggedIn(false)
    console.log(props.isLoggedIn)
    clearItemFromStorage('token')
},[])
useEffect(()=>{
    console.log(props.isLoggedIn)
navigate('/')
},[props.isLoggedIn])
return(null)
}