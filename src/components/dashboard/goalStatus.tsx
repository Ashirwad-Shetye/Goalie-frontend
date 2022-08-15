import React from 'react'

function GoalStatus() {
  return (
    <div className='flex mx-auto space-x-12'>
        <div className='w-32 h-32 text-center flex-col bg-orange-400
            rounded-2xl'>
            <div className='bg-orange-500 rounded-t-2xl pt-2 pb-2 text-2xl font-lato 
                font-semibold text-white'>Started</div>
            <div className='text-6xl text-white pt-2 font-lato font-semibold'>0</div>
        </div>
        <div className='w-32 h-32 text-center flex-col bg-orange-400
            rounded-2xl'>
            <div className='bg-orange-500 rounded-t-2xl pt-2 pb-2 text-2xl font-lato 
                font-semibold text-white'>In Progress</div>
            <div className='text-6xl text-white pt-2 font-lato font-semibold'>0</div>
        </div>
        <div className='w-32 h-32 text-center flex-col bg-orange-400
            rounded-2xl'>
            <div className='bg-orange-500 rounded-t-2xl pt-2 pb-2 text-2xl font-lato 
                font-semibold text-white'>Completed</div>
            <div className='text-6xl text-white pt-2 font-lato font-semibold'>0</div>
        </div>
    </div>
  )
}

export default GoalStatus