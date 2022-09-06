import React, { useState, useEffect } from 'react'
import { Timeline } from 'flowbite-react'
import { getGoalData } from '../../services/serverCalls'

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
        getGoalData()
        .then((response) => {
            console.log(response)
            setGoals([...response.data.pendingGoals, ...response.data.finishedGoals]);
        })
        .catch((error) => {
            console.log(error)
        })
    },[])
  return (
    <div className="mt-48 lg:mt-5 lg:mr-10">
        <div className="text-3xl font-poppins font-bold mt-2 mb-3 ml-10 text-orange-500">Goal Timeline</div>
        <div className="justify-center w-full mx-auto align-middle h-80 px-12 overflow-x-clip lg: 
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
                        <div className="text-lg text-slate-600">
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