import React from 'react'
import { useNavigate } from 'react-router-dom'
import {RiAddFill} from 'react-icons/ri'
// import { Tooltip } from 'flowbite-react'


function CreateGoalButton() {

    const navigate = useNavigate();

  return (
    <div className="absolute bottom-0 md:bottom-12 right-12">
        <div
            onClick={() => navigate('/creategoal')}
            className="absolute bottom-8 md:bottom-0 right-0 flex items-center justify-center bg-orange-500 text-4xl text-white h-16 w-16
            rounded-full cursor-pointer shadow-xl hover:scale-105 hover:duration-300">
            <RiAddFill/>
        </div>
    </div>
  )
}

export default CreateGoalButton