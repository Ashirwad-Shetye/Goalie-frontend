import React from 'react'
import logo from '../../styles/assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';

function Header() {

    const navigate = useNavigate();

  return (
    <div>
        <nav className='flex justify-end'>
            <div className='top-8 w-36 absolute left-4 cursor-pointer md:w-48 md:top-4'>
                <img 
                    onClick={() => navigate('/dashboard')}
                src={logo} alt="logo" />
            </div>
            <div className='justify-center'>
                <ul className='hidden md:flex items-center mx-8 space-x-8 lg:space-x-12 text-xl 
                    font-lato font-semibold my-14'>
                    <li className='hover:text-orange-600 cursor-pointer'>Dashboard</li>
                    <li className='hover:text-orange-600 cursor-pointer'>Feed</li>
                    <li className='hover:text-orange-600 cursor-pointer'>About us</li>
                </ul>    
            </div>
            <div>
                <img src="" alt="" />    
            </div>           
        </nav>
    </div>
  )
}

export default Header