import React from 'react'
import Header from '../components/homepage/header'
import quote from '../styles/assets/svg/quote.svg'
import { useNavigate } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-home bg-no-repeat bg-cover bg-fixed 
    min-h-screen min-w-screen max-h-fit max-w-screen align-bottom justify-center">
        <Header />
        <div className='container relative top-20 md:top-28 text-center h-4/6 w-fit mx-auto align-middle gap-16 content-center 
          grid'>
          <img 
            src={quote} 
            alt="A goal without a plan is just a dream" 
            className='w-96 md:w-[400px] lg:w-[450px]'/>
          <button 
            onClick={() => navigate('/creategoal')} 
            className='bg-orange-500 w-64 md:w-72 h-12 text-3xl text-white justify-self-center 
              font-lato font-semibold rounded-full shadow-goalBtn hover:bg-transparent 
              hover:text-orange-500 border-2 border-orange-500 duration-200 hover:shadow-none'
          >Create goal</button>
        </div>                
    </div>
  )
}

export default Home