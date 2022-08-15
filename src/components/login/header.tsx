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
        </nav>
    </div>
  )
}

export default Header