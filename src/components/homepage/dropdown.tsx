import React from 'react'
import { useState } from 'react'
import { AiOutlineMenu, } from 'react-icons/ai'
// import { RiDashboard2Line } from 'react-icons/ri'

interface ItemProps{
  icon: React.ReactElement
  children: React.ReactNode
}

function Dropdown() {
  return (
    <div className='absolute right-36 mt-11 md:hidden'>
        <Menu>
          <MenuItem icon={<AiOutlineMenu/>}>
            <DropdownMenu/>
          </MenuItem>
        </Menu>
    </div>
  )
}

export default Dropdown


function DropdownMenu(){

  function DropdownItem(props: {children: React.ReactNode}){
    return(
      <ul className='text-center rounded-lg border-1 
        cursor-pointer text-xl font-lato font-semibold p-0.5'>
        {props.children}
      </ul>
    )
  }

  return (
    <div className='absolute text-white mt-16 w-48 bg-orange-500 -translate-x-16 rounded-lg
      overflow-hidden p-1'>
        <DropdownItem>
          <li className='rounded-lg duration-200 hover:bg-white hover:bg-opacity-20 py-2'>
            {/* <div className='text-2xl ml-2 mr-4'><RiDashboard2Line/></div> */}
            Dashboard</li>
          <li className='rounded-lg duration-200 hover:bg-white hover:bg-opacity-20 py-2'>
          {/* <div className='text-2xl ml-2 mr-4'><AiOutlineComment/></div> */}
            Community</li>
          <li className='rounded-lg duration-200 hover:bg-white hover:bg-opacity-20 py-2'>
          {/* <div className='text-2xl ml-2 mr-4'><RiDashboard2Line/></div> */}
            About us</li>
          <li className='rounded-lg duration-200 hover:bg-white hover:bg-opacity-20 py-2'>
          {/* <div className='text-2xl ml-2 mr-4'><RiDashboard2Line/></div> */}
            Sign up</li>
        </DropdownItem>
    </div>
  )
}

function Menu(props: {children: React.ReactNode}){
  return (
    <nav className=''>
      <ul className=''>{props.children}</ul>
    </nav>
  )
}

function MenuItem(props: ItemProps){

  const [open, setOpen] = useState(false)

  return (
    <li className='w-20 flex align-middle justify-center'>
      <button 
        className='text-3xl rounded-full m-2 p-2 flex 
        align-middle justify-center hover:bg-orange-500 hover:bg-opacity-30 duration-200'
        onClick={() => setOpen(!open)}
        >
        {props.icon}
      </button>
      {open && props.children}
    </li>
  )
}