import React from 'react'
import { Data } from './users'


function UsersList() {
  return (
    <div className='container w-fit h-full items-baseline md:bg-white md:rounded-2xl md:shadow-xl'>
      <h1 className='text-3xl font-poppins text-gray-500 pl-5 font-bold md:my-5 md:mb-8'>Community</h1>
      <User/>
    </div>
  )
}

function User(){
  return(
    <div className='h-28 md:h-5/6 md:space-y-5 md:overflow-y-scroll md:scrollbar-thin md:scrollbar-thumb-10 
    md:scrollbar-thumb-gray-300 md:scrollbar-track-transparent flex md:flex-col w-[360px] md:w-[260px] overflow-x-scroll 
    md:overscroll-x-none scrollbar-hide space-x-4 md:space-x-0 items-center md:items-start'>
      {Data.map((users) => {
        return (
          <div className='justify-center pl-4 align-middle md:flex md:space-x-5 cursor-pointer md:hover:scale-105 duration-100'>
            <div className='z-10'>
              <img 
                src={users.avatar} 
                alt="avatar"
                className='w-20 hover:scale-105 md:hover:scale-100 duration-100' />
            </div>
            <h1 className='text-center md:text-left md:text-xl my-auto w-20 h-5 md:h-auto overflow-y-clip md:w-auto text-ellipsis'>
              {users.name}
            </h1>
          </div>
        )
      })}
    </div>
  )
}

export default UsersList