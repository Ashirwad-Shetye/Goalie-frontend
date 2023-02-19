import React from "react";
import logo from "../styles/assets/logo/logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CgFeed } from "react-icons/cg";
import { AiOutlineTeam } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import avatar_24 from "../styles/assets/avatar/avatar_24.png";
import { Tooltip } from "flowbite-react";

function Navbar() {
  return (
    <div className="h-full border flex justify-between md:grid md:grid-cols-none md:grid-rows-6">
      <div className="md:pt-2 md:row-span-1">
        <img src={logo} alt="goalie logo" className="w-28 md:w-auto" />
      </div>
      <div
        className="h-full hidden row-span-4 bg-orange-400 bg-opacity-25 min-h-[20rem] w-fit text-2xl 
      mx-auto md:flex flex-col justify-between rounded-full"
      >
        <div className="h-[40%] px-1 my-1 mx-auto min-h-[8rem] flex flex-col justify-between">
          <Tooltip
            content="Dashboard"
            style="light"
            animation="duration-300"
            placement="right"
            arrow={false}
          >
            <div
              className="hover:bg-orange-400 hover:bg-opacity-60 flex justify-center items-center 
          rounded-full w-12 h-12 cursor-pointer duration-150 text-gray-600 hover:text-white"
            >
              <MdOutlineSpaceDashboard />
            </div>
          </Tooltip>
          <Tooltip
            content="Social Feed"
            placement="right"
            style="light"
            animation="duration-300"
            arrow={false}
          >
            <div
              className="hover:bg-orange-400 hover:bg-opacity-60 flex justify-center items-center 
          rounded-full w-12 h-12 cursor-pointer duration-150 text-gray-600 hover:text-white"
            >
              <CgFeed />
            </div>
          </Tooltip>
          <Tooltip
            content="About us"
            placement="right"
            style="light"
            animation="duration-300"
            arrow={false}
          >
            <div
              className="hover:bg-orange-400 hover:bg-opacity-60 flex justify-center items-center 
          rounded-full w-12 h-12 cursor-pointer duration-150 text-gray-600 hover:text-white"
            >
              <AiOutlineTeam />
            </div>
          </Tooltip>
        </div>
        <div className="h-fit my-1 mx-auto">
          <Tooltip
            content="Logout"
            placement="right"
            style="light"
            animation="duration-300"
            arrow={false}
          >
            <div
              className="hover:bg-orange-400 hover:bg-opacity-60 flex justify-center items-center 
          rounded-full w-12 h-12 cursor-pointer duration-150 text-gray-400 hover:text-white"
            >
              <HiOutlineLogout />
            </div>
          </Tooltip>
        </div>
      </div>
      <div
        className="md:hidden hover:shadow-2xl hover:scale-105 duration-150 cursor-pointer shadow-xl mx-3 
      rounded-full flex my-auto w-[11rem] justify-between bg-white"
      >
        <div className="flex">
          <div className="w-12 p-1">
            <img src={avatar_24} alt="avatar" />
          </div>
          <div className="px-2 flex items-center justify-center">
            <h1 className="w-[5rem] font-poppins truncate text-gray-500">
              Ashirwad shetye
            </h1>
          </div>
        </div>
        <div className="pr-1 flex items-center justify-center text-gray-400 text-2xl">
          <BiChevronDown />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
