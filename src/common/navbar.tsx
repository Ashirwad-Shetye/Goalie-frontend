import React, { useState } from "react";
import logo from "../styles/assets/logo/logo.png";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { CgFeed } from "react-icons/cg";
import { AiOutlineTeam } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";
import { HiOutlineLogout } from "react-icons/hi";
import avatar_24 from "../styles/assets/avatar/avatar_24.png";
import { Tooltip } from "flowbite-react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleMenu = () => {
    if (open) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  };
  return (
    <div className="h-full flex justify-between md:grid md:grid-cols-none md:grid-rows-6">
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
              onClick={() => navigate("/dashboard")}
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
              onClick={() => navigate("/feed")}
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
              onClick={() => navigate("/aboutus")}
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
              onClick={() => navigate("/logout")}
              className="hover:bg-orange-400 hover:bg-opacity-60 flex justify-center items-center 
          rounded-full w-12 h-12 cursor-pointer duration-150 text-gray-400 hover:text-white"
            >
              <HiOutlineLogout />
            </div>
          </Tooltip>
        </div>
      </div>
      <div
        onClick={handleMenu}
        className="md:hidden  mx-3 rounded-full flex flex-col my-auto justify-between "
      >
        <div
          className="flex justify-between cursor-pointer shadow-xl rounded-full w-[11rem] bg-white 
        items-center hover:scale-105 duration-150"
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
        {open ? (
          <div className="absolute justify-center items-center overflow-hidden top-[4.3rem] rounded-lg w-[9rem] mx-5 bg-white shadow-lg">
            <ul className="w-full text-center text-gray-500 font-poppins">
              <li
                onClick={() => navigate("/dashboard")}
                className="cursor-pointer hover:bg-slate-200 h-8 flex justify-center items-center"
              >
                Dashboard
              </li>
              <li
                onClick={() => navigate("/feed")}
                className="cursor-pointer hover:bg-slate-200 h-8 flex justify-center items-center"
              >
                Feed
              </li>
              <li
                onClick={() => navigate("/aboutus")}
                className="cursor-pointer hover:bg-slate-200 h-8 flex justify-center items-center"
              >
                About Us
              </li>
              <li
                onClick={() => navigate("/logout")}
                className="cursor-pointer hover:bg-slate-200 h-8 flex justify-center items-center"
              >
                Logout
              </li>
            </ul>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default Navbar;
