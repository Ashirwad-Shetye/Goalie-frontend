import React from 'react'
import logo from '../../styles/assets/logo/logo.png';
import { useNavigate } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi'


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
            <div 
            onClick={()=> navigate('/')}
            className='md:hidden absolute right-10 text-3xl top-[60px] duration-200 
                        cursor-pointer text-orange-600 hover:text-slate-500'>
                <BiArrowBack className='hover:scale-110 duration-150'/>          
            </div>
        </nav>
    </div>
  )
}

export default Header