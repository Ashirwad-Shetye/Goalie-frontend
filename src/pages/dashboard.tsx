import React from 'react'
import Header from '../components/dashboard/header'
import Calender from '../components/dashboard/calender'
import GoalStatus from '../components/dashboard/goalStatus'
import TimelineCard from '../components/dashboard/timeline'
import UserData from '../components/dashboard/userData'
import CreateGoalButton from '../common/goalCreateButton'

function Dashboard() {
  return (
    <div className='bg-dashboard bg-right bg-no-repeat bg-cover bg-fixed 
     justify-center align-middle'>
        <Header />
        <div className="container mt-48 md:mt-0 w-10/12 mx-auto justify-center align-middle lg:mx-auto lg:flex lg:space-x-10">
          <div className="invisible absolute lg:relative lg:visible w-[400px]">
            <GoalStatus />
            <Calender />
          </div>
          <div className='container -mt-10 md:mt-0 justify-center align-middle max-w-3xl h-[545px] lg:rounded-2xl'>
            <UserData />
            <TimelineCard />
          </div>
        </div>
        <CreateGoalButton />
    </div>
  )
}

export default Dashboard