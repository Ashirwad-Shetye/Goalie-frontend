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
    w-screen h-screen justify-center align-middle'>
        <Header />
        <div className="container mt-48 md:mt-0 w-10/12 mx-auto lg:mx-40 lg:grid lg:grid-flow-col lg:gap-x-20">
          <div className="invisible absolute lg:relative lg:visible">
            <GoalStatus />
            <Calender />
          </div>
          <div className='container -mt-10 md:mt-0 lg:w-5/1 justify-end align-middle lg:shadow-lg lg:bg-white lg:rounded-2xl'>
            <UserData />
            <TimelineCard />
          </div>
        </div>
        <CreateGoalButton />
    </div>
  )
}

export default Dashboard