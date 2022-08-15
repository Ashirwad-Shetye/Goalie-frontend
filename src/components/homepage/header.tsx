import React from 'react'
import logo from '../../styles/assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import Dropdown from './dropdown'


function Header() {

    const navigate = useNavigate();

  return (
    <div className='container m-0 w-screen'>
        <nav className='flex justify-center'>
            <div className='top-8 w-36 absolute left-4 cursor-pointer md:w-48 md:top-4'>
                <img src={logo} alt="" />
            </div>
            <div className='justify-center'>
                <ul className='hidden absolute right-40 md:flex items-center space-x-8 lg:space-x-12 text-xl 
                    font-lato font-semibold my-14'>
                    <li onClick={
                        () => navigate('/dashboard')} 
                        className='hover:text-orange-600 duration-200 cursor-pointer'>Dashboard
                    </li>
                    <li onClick={
                        () => navigate('/feed')}
                        className='hover:text-orange-600 duration-200 cursor-pointer'>Feed
                    </li>
                    <li onClick={
                        () => navigate('/aboutus')}
                        className='hover:text-orange-600 duration-200 cursor-pointer'>About us
                    </li>
                    <li onClick={
                        () => navigate('/signup')}
                        className='hover:text-orange-600 duration-200 cursor-pointer'>Sign up
                    </li>
                </ul>    
            </div>
            <Dropdown />
            <button
                className='absolute right-12 top-12 text-2xl font-lato bg-orange-500 
                     text-white font-bold py-1.5 px-4 rounded-full hover:bg-transparent 
                     hover:text-orange-500 border-orange-500 duration-200 border-2 hover:shadow-none'
                     onClick={() => navigate('/login')}
            >login</button>            
        </nav>
    </div>
  )
}

export default Header