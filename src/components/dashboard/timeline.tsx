import React, { useState, useEffect } from 'react'
import { Timeline } from 'flowbite-react'
import { getUsersAllGoals } from '../../services/serverCalls'

function TimelineCard() {

    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const [goals, setGoals] = useState<
    Array<{
        text: string,
        description: string,
        lastDate: string
    }>
>([])
    useEffect(()=>{
        getUsersAllGoals()
        .then((response) => {
            console.log(response)
            setGoals([...response.data]);
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
  return (
    <div className="mt-10 lg:mt-5 lg:mr-10 w-full">
        <div className="text-3xl font-poppins font-bold mt-2 mb-3 ml-10 text-gray-500">Goal <span 
            className='font-medium text-2xl text-gray-500'>Timeline</span></div>
        <div className="justify-center lg:bg-red-200 w-full mx-auto align-middle h-80 px-12 overflow-x-clip rounded-2xl lg:shadow-xl 
        overflow-scroll py-5 scrollbar-thin scrollbar-thumb-11 scrollbar-thumb-orange-400 scrollbar-track-transparent overflow-y-scroll
        scrollbar-thumb-rounded-full scrollbar-track-rounded-full"> 
        <Timeline>
        {
            goals.map((goal)=>{
                return(
                    <Timeline.Item>
                    <Timeline.Point />
                    <Timeline.Content>
                    <Timeline.Time>
                        <div className="text-lg fon text-slate-600">
                            {new Date(goal.lastDate).getDate()} {month[new Date(goal.lastDate).getMonth()]} {new Date(goal.lastDate).getFullYear()}
                        </div>
                    </Timeline.Time>
                    <Timeline.Title>
                        {goal.text}
                    </Timeline.Title>
                    <Timeline.Body>
                        {goal.description}
                    </Timeline.Body>
                    </Timeline.Content>
                </Timeline.Item>
                )
            })
        }

            </Timeline>
        </div>
    </div>
    
  )
}

export default TimelineCard