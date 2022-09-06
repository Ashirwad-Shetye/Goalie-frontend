import React from 'react'
import { Avatar } from 'flowbite-react'
import avatar1 from '../../styles/assets/avatar/avatar1.jpeg'

function UserData() {
  return (
    <div className="w-full h-[15px] lg:h-[175px]">
      <div className="flex lg:pt-8 ml-5 lg:ml-10 space-x-6">
        <div className="border-2 border-orange-400 rounded-full">
          <Avatar
                img={avatar1}
                size="xl"
                rounded={true}
          />          
        </div>
        <div className="my-auto">
          <h1 className="text-3xl font-lato font-semibold">Hello Ashirwad 👋</h1>
          <h2 className="text-md font-lato font-semibold text-gray-500">ashirwadpramodshetye@gmail.com</h2>
        </div>
      </div>
    </div>
  )
}

export default UserData