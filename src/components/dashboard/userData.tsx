import React, {useState, useEffect} from 'react'
import { Avatar } from 'flowbite-react'
import { getUserInfo } from '../../services/serverCalls'
import avatar1 from '../../styles/assets/avatar/avatar1.jpeg'

function UserData() {
  const [userData, setUserData] = useState({name:null, email:null})
  useEffect(()=>{
    getUserInfo()
    .then((response) => {
      setUserData({name: response.data.name, email: response.data.email})
    })
    .catch((error) => {
      console.log(error)
    })
  },[]) 
  return (
    <div className="w-full h-[150px] lg:h-[175px] justify-start items-center 
      bg-blue-200 rounded-2xl shadow-lg flex space-x-6">
      <div className="border-2 ml-10 h-max border-orange-400 rounded-full">
        <Avatar
              img={avatar1}
              size="xl"
              rounded={true}
        />          
      </div>
      <div className="my-auto">
        <h1 className="text-3xl font-lato font-semibold">Hello {userData.name} 👋</h1>
        <h2 className="text-md font-lato font-semibold text-gray-500">{userData.email}</h2>
      </div>
    </div>
  )
}

export default UserData