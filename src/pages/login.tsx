import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Header from '../components/login/header'
import { BiArrowBack } from 'react-icons/bi'

function Login() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { email, password } = formData

    const navigate = useNavigate()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e: React.ChangeEvent<HTMLInputElement>) =>{
        e.preventDefault()
    }

  return (
    <div className='flex bg-signup w-screen h-screen bg-center bg-no-repeat
        bg-cover bg-fixed justify-center align-center text-center'>
        <Header />
        <section 
            onSubmit={onSubmit}
            className='container h-2/3 w-2/3 
            my-40 bg-white rounded-3xl shadow-goalBtn
            md:w-3/5 lg:w-2/5 md:h-screen md:my-0 md:rounded-l-2 md:rounded-r-none md:absolute md:right-0 '>
            <div 
            onClick={()=> navigate('/')}
            className='absolute text-2xl mt-8 ml-80 md:mt-10 md:ml-12 md:text-4xl cursor-pointer duration-200 text-orange-600 hover:text-slate-500'>
                <BiArrowBack />
            </div>
            <form className='container w-2/3 md:w-96 mx-auto text-left'>
                <div className='text-4xl py-2 md:py-4 mt-10 font-lato font-bold md:mt-32 lg:mt-40 lg:py-0 '>Login
                    <span className='text-6xl text-bold text-orange-500'>.</span>
                </div>
                <div className='text-sm md:text-md md:py-2 mt-4 font-lato font-semibold text-slate-500'>
                    Welcome back to Goalie, start setting your goals with the best tools.
                </div>
                <div className='container mx-auto shrink-0 py-4 md:mt-0 w-full md:py-6 flex-col flex'>
                    
                    <label className='text-xl text-slate-600 py-2'>Email</label>
                    <input 
                        type="text"
                        name='email'
                        value={email}
                        onChange = {onChange} 
                        placeholder='Email address' 
                        className='w-full placeholder:text-slate-400 mx-auto p-1 md:p-2 border-2 border-orange-400 rounded-lg' />
                    
                    <label className='text-xl text-slate-600 py-2'>Password</label>
                    <input 
                        type="text" 
                        name='password'
                        value={password}
                        onChange = {onChange}
                        placeholder='Password' 
                        className='w-full placeholder:text-slate-400 mx-auto p-1 md:p-2 border-2 border-orange-400 rounded-lg' />
                </div>
            </form>
            <button
                type='submit'
                className='text-xl my-4 font-lato bg-orange-500 
                    text-white font-bold py-1.5 px-4 rounded-2xl hover:bg-transparent 
                    hover:text-orange-500 duration-200 border-orange-500 border-2 hover:shadow-none'
            >Submit</button>
            <div>
                <p className='py-2 md:text-xl text-slate-600 md:py-6'>Need a new account?
                    <span 
                    onClick={() => navigate('/signup')}
                    className='text-orange-500 cursor-pointer'> Signup</span>
                </p>    
            </div> 
        </section>
    </div>
  )
}

export default Login