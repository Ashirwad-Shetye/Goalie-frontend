import React from 'react'
import Header from './header'
// import Calender from './calender'
import GoalStatus from './goalStatus'
import Menudrop from './menu'

function Dashboard() {
  return (
    <div className='bg-dashboard bg-right bg-no-repeat bg-cover bg-fixed 
    w-screen h-screen'>
        <Header />
        {/* <Calender /> */}
        <GoalStatus />
        <Menudrop />
    </div>
  )
}

export default Dashboard