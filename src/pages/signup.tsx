import React from 'react'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import Header from '../components/signup/header'
import { BiArrowBack } from 'react-icons/bi'
import { register, reset } from '../features/auth/authSlice' 
import { AppDispatch, RootState } from '../store/store'


function Signup() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: '',
    })

    const { name, email, password} = formData

    const navigate = useNavigate()

    const dispatch = useDispatch<AppDispatch>()

    const { user, isLoading, isError, isSuccess, message } = useSelector(
        (state : RootState) => state.auth
    )

    useEffect(() => {
        if(isError){
            toast.error(message)
        } 

        if(isSuccess || user){
            navigate('/dashboard')
        }

        dispatch(reset())

    }, [user, isLoading, isError, isSuccess, message, dispatch, navigate])

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e: React.SyntheticEvent) =>{
        e.preventDefault()

        if(password.length === 0){
            toast.error('Password is required')
        } else {
            const userData = {
            name,
            email,
            password,
            }

            // dispatch(register(userData))
        }
    }

  return (
    <div className='flex bg-signup w-screen h-screen bg-center bg-no-repeat
        bg-cover bg-fixed justify-center align-center text-center'>
        <Header />
        <section 
            className='container h-2/3 w-2/3 
            my-40 bg-white rounded-3xl shadow-goalBtn
            md:w-3/5 lg:w-2/5 md:h-screen md:my-0 md:rounded-l-2 md:rounded-r-none md:absolute md:right-0 '>
            <div 
            onClick={()=> navigate('/')}
            className='absolute text-2xl mt-8 ml-80 md:mt-10 md:ml-12 md:text-4xl duration-200 
                        cursor-pointer text-orange-600 hover:text-slate-500'>
                <BiArrowBack />
            </div>
            <form
                onSubmit={onSubmit} 
                className='container w-2/3 md:w-96 mx-auto'>
                <div className='text-4xl py-2 md:py-4 mt-5 font-lato font-bold md:mt-32 lg:mt-40 lg:py-0 '>Signup
                    <span className='text-6xl text-bold text-orange-500'>.</span>
                </div>
                <div className='text-sm md:text-md md:py-2 mt-2 font-lato font-semibold text-slate-500'>
                    Create a 100% free account and start setting your goals with the best tools.
                </div>
                <div className='container mx-auto shrink-0 md:mt-0 w-full md:py-2 flex-col flex'>
                    
                    {/* Username */}
                    <label className='text-xl text-slate-600 py-2 lg:pb-4'>Username</label>
                    <input 
                        type="text" 
                        placeholder='Enter your Username' 
                        id='name' 
                        name='name' 
                        value={name}
                        onChange={onChange}
                        className='w-full placeholder:text-slate-400 mx-auto p-1 md:p-2 border-2
                            border-orange-400 rounded-lg text-center'
                    /> 
                    
                    {/* Email */}
                    <label className='text-xl text-slate-600 py-2'>Email</label>
                    <input 
                        type="text" 
                        placeholder='Email address'
                        id='email' 
                        name='email' 
                        value={email}
                        onChange={onChange} 
                        className='w-full placeholder:text-slate-400 mx-auto p-1 md:p-2 border-2
                            border-orange-400 rounded-lg' 
                    />
                    
                    {/* Password */}
                    <label className='text-xl text-slate-600 py-2'>Password</label>
                    <input 
                        type="text" 
                        placeholder='Password'
                        id='password' 
                        name='password' 
                        value={password}
                        onChange={onChange} 
                        className='w-full placeholder:text-slate-400 mx-auto p-1 md:p-2 border-2 
                            border-orange-400 rounded-lg'
                    />
                </div>
                <button
                    type='submit'
                    className='text-xl my-4 font-lato bg-orange-500 
                        text-white font-bold py-1.5 px-4 rounded-2xl hover:bg-transparent 
                        hover:text-orange-500 border-orange-500 duration-200 border-2 hover:shadow-none'
                >Submit</button>
            </form>
            <div>
                <p className='md:text-xl text-slate-600 md:py-2'>Already have an account?
                    <span 
                    onClick={() => navigate('/login')}
                className='text-orange-500 cursor-pointer'> Login</span>
                </p>    
            </div> 
        </section>
    </div>
  )
}

export default Signup