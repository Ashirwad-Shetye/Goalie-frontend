import React from 'react'
import Header from './header'
import Calender from './calender'
import GoalStatus from './goalStatus'
import TimelineCard from './timeline'

function Dashboard() {
  return (
    <div className='bg-dashboard bg-right bg-no-repeat bg-cover bg-fixed 
    w-screen h-screen justify-center align-middle'>
        <Header />
        <div className="container mt-48 md:mt-0 w-10/12 mx-auto lg:mx-40 lg:grid lg:grid-flow-col lg:gap-x-20">
          <div className="invisible absolute lg:relative lg:visible">
            <Calender />
          </div>
          <div className='container lg:w-5/1 justify-end align-middle'>
            <GoalStatus />
            <TimelineCard />
          </div>
        </div>
    </div>
  )
}

export default Dashboard