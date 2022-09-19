import React from 'react'
import Header from '../components/homepage/header'
import quote from '../styles/assets/svg/quote.svg'
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-home bg-top bg-no-repeat bg-cover 
            w-screen h-screen text-center">
        <Header />
        <div className='w-96 mx-auto mt-72 
            md:w-1/2 lg:w-1/3 md:mt-72 lg:mt-64'>
            <img src={quote} alt="" />
        </div>
        <button onClick={() => navigate('/creategoal')} className='my-20 bg-orange-500 w-64 md:w-72 h-12 text-3xl text-white 
            font-lato font-semibold rounded-full shadow-goalBtn hover:bg-white 
            hover:text-orange-500 border-2 border-orange-500 duration-200 hover:shadow-none'
        >Create goal</button>        
    </div>
  )
}

export default Home