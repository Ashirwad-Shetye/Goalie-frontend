import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/error/header';
import error from '../styles/assets/error/error.png';

function ErrorGeneral() {

    const navigate = useNavigate();

  return (
    <div className="">
        <Header />
        <div className="flex mt-24 items-center flex-col justify-center lg:flex-row px-6 
                lg:py-32 gap-5 lg:gap-0">
          <div className="w-full lg:w-4/12">
            <img className="mx-auto w-[380px] lg:w-[550px]" src={error} alt="404 error illustration" />
          </div>
          <div className="w-10/12 lg:w-4/12 lg:pr-10 text-center lg:text-left">
            <h1 className='pb-4 lg:pb-10 lg:text-9xl text-7xl text-orange-400 font-bold'>Oops!</h1>
            <h1 className="pb-4 text-2xl md:text-4xl font-semibold text-gray-600">Something went wrong.</h1>
            <p className="py-2 font-lato font-semibold text-lg text-gray-800">An error has occurred and we're working to fix the problem!</p>
            <button 
              onClick={() => navigate('/dashboard')}
              className="w-40 lg:w-60 font-lato font-semibold mt-6 text-xl border rounded-full px-1 sm:px-16 py-5 bg-orange-400 text-white hover:bg-white hover:text-orange-400 
                hover:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:ring-opacity-50">Go back</button>
          </div>
        </div>
      </div>
  )
}

export default ErrorGeneral;