import React, { useState, useEffect } from 'react'
import { getGoalData } from './../../services/serverCalls'

function GoalStatus() {
    const [goalData, setGoalData] = useState({pendingGoals: [], finishedGoals: []})

useEffect(()=>{
    getGoalData()
    .then((response) => {
        setGoalData(response.data);
    })
    .catch((error) => {
        console.log(error)
    })
},[])
  return (
    <div>
        <h1 className="text-3xl font-poppins font-bold text-orange-500 mb-4">Goal status</h1>
        <div className='mx-auto pb-4 justify-center align-middle border-b-2
            container flex'>
            <div className='w-28 h-28 lg:w-[180px] lg:h-32 pr-12 pl-4 text-center flex-col cursor-default border-r-2'>
                <div className='bg-orange-500 rounded-xl rounded-b-2xl pt-2 pb-2 text-xl font-lato 
                    font-semibold text-white'>Pending</div>
                <div className='text-5xl lg:text-6xl text-slate-600 pt-2 font-lato font-bold'>{goalData.pendingGoals.length}</div> 
            </div>
            <div className='w-28 h-28 lg:w-[180px] lg:h-32 pl-12 pr-4 text-center flex-col cursor-default'>
                <div className='bg-orange-500 rounded-xl rounded-t-2xl pt-2 pb-2 text-xl font-lato 
                    font-semibold text-white'>Completed</div>
                <div className='text-5xl lg:text-6xl text-slate-600 pt-2 font-lato font-bold'>{goalData.finishedGoals.length}</div>
            </div>
        </div>
    </div>
  )
}

export default GoalStatus