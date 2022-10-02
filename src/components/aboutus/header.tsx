import React from 'react'
import logo from '../../styles/assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import MainAvatar from '../../common/userAvatar';
import Dropdown from './dropdown';
import { useState } from 'react'
import { getItemFromStorage } from '../../services/storage';

function Header() {

    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState((getItemFromStorage('token')?true:false) || false)

  return (
    <div>
        <nav className='flex justify-end'>
            <div className='top-10 w-36 absolute left-4 cursor-pointer md:w-48 md:top-4'>
                <img 
                    onClick={() => navigate('/dashboard')}
                src={logo} alt="logo" />
            </div>
            {isLoggedIn ? 
                <>
                    <div className='justify-center'>
                        <ul className='hidden mr-48 md:flex items-center mx-8 space-x-8 lg:space-x-12 text-xl 
                            font-lato font-semibold my-16'>
                            <li 
                                onClick={() => navigate('/dashboard')}
                                className='hover:text-orange-600 cursor-pointer'>Dashboard</li>
                            <li 
                                onClick={() => navigate('/feed')}
                                className='hover:text-orange-600 cursor-pointer'>Feed</li>
                            <li 
                                onClick={() => navigate('/')}
                                className='hover:text-orange-600 cursor-pointer'>Log out</li>
                        </ul>    
                    </div>
                    <Dropdown />
                </>   
            :
                <>
                    <div className='justify-center'>
                        <ul className='mr-40 mt-[60px] md:mt-[50px] md:mr-48 md:flex items-center mx-8 space-x-8 lg:space-x-12 text-xl 
                            font-lato font-semibold my-[50px]'>
                            <li 
                                onClick={() => navigate('/signup')}
                                className='hover:text-orange-600 cursor-pointer'>Sign up</li>
                        </ul>    
                    </div>
                    <button
                    className='absolute right-12 top-[50px] md:top-12 text-2xl font-lato bg-orange-500 
                            text-white font-bold py-1.5 px-4 rounded-full hover:bg-transparent 
                            hover:text-orange-500 border-orange-500 duration-200 border-2 hover:shadow-none'
                            onClick={() => navigate('/login')}
                    >login</button>
                </>
            }
            {isLoggedIn ? 
                <div>
                <MainAvatar />  
                </div> 
            :
            ""}
                      
        </nav>
        
    </div>
  )
}

export default Header