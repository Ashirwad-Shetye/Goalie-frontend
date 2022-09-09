import React from 'react'
import logo from '../../styles/assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import MainAvatar from '../../common/userAvatar';
import Dropdown from './dropdown';

function Header() {

    const navigate = useNavigate();

  return (
    <div>
        <nav className='flex justify-end'>
            <div className='top-10 w-36 absolute left-4 cursor-pointer md:w-48 md:top-4'>
                <img 
                    onClick={() => navigate('/dashboard')}
                src={logo} alt="logo" />
            </div>
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
            <div>
               <MainAvatar />  
            </div>           
        </nav>
        
    </div>
  )
}

export default Header