import React from 'react'
import logo from '../../styles/assets/logo/logo.png';
import { useNavigate } from 'react-router';
import Dropdown from './dropdown';
import Avatar from '../../common/userAvatar'


function Header() {

    const navigate = useNavigate();

  return (
    <nav className='flex justify-end w-screen'>
        <div 
        onClick={() => navigate('/')}
        className='top-8 w-36 absolute left-4 cursor-pointer md:w-48 md:top-4'>
            <img src={logo} alt="" />
        </div>
        <div className='justify-center mr-32'>
            <ul className='hidden md:flex items-center mx-8 space-x-8 lg:space-x-12 text-xl 
                font-lato font-semibold my-14'>
                <li 
                onClick={() => navigate('/dashboard')}
                className='hover:text-orange-600 cursor-pointer'>Dashboard</li>
                <li 
                onClick={() => navigate('/feed')}
                className='hover:text-orange-600 cursor-pointer'>Feed</li>
                <li 
                onClick={() => navigate('/aboutus')}
                className='hover:text-orange-600 cursor-pointer'>About us</li>
            </ul>    
        </div>
        <Dropdown />
        <div>
            <img src="" alt="" />    
        </div>
        <Avatar />           
    </nav>
  )
}

export default Header

