import React from 'react'

function GoalStatus() {
  return (
    <div className='mx-auto justify-center align-middle 
        container flex md:mt-10 space-x-14 md:space-x-18'>
        <div className='w-28 h-28 lg:w-32 lg:h-32 text-center flex-col bg-white cursor-default
            rounded-2xl shadow-lg'>
            <div className='bg-orange-500 rounded-xl rounded-t-2xl pt-2 pb-2 text-xl font-lato 
                font-semibold text-white'>Started</div>
            <div className='text-5xl lg:text-6xl text-slate-600 pt-2 font-lato font-bold'>0</div>
        </div>
        <div className='w-28 h-28 lg:w-32 lg:h-32 text-center flex-col bg-white cursor-default
            rounded-2xl shadow-lg'>
            <div className='bg-orange-500 rounded-xl rounded-t-2xl pt-2 pb-2 text-xl font-lato 
                font-semibold text-white'>In Progress</div>
            <div className='text-5xl lg:text-6xl text-slate-600 pt-2 font-lato font-bold'>0</div>
        </div>
        <div className='w-28 h-28 lg:w-32 lg:h-32 text-center flex-col bg-white cursor-default
            rounded-2xl shadow-lg'>
            <div className='bg-orange-500 rounded-xl rounded-t-2xl pt-2 pb-2 text-xl font-lato 
                font-semibold text-white'>Completed</div>
            <div className='text-5xl lg:text-6xl text-slate-600 pt-2 font-lato font-bold'>0</div>
        </div>
    </div>
  )
}

export default GoalStatus