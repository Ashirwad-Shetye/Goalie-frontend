import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "./dropdown";

function Navs() {
  const navigate = useNavigate();

  return (
    <section className="absolute right-6 md:space-x-8 lg:space-x-12 flex items-center">
      <div className="justify-center">
        <ul
          className="hidden right-44 md:flex items-center space-x-8 lg:space-x-12 text-xl justify-evenly 
                font-lato font-semibold"
        >
          <li
            onClick={() => navigate("/aboutus")}
            className="hover:text-orange-600 duration-200 cursor-pointer"
          >
            About us
          </li>
          <li
            onClick={() => navigate("/signup")}
            className="hover:text-orange-600 duration-200 cursor-pointer"
          >
            Sign up
          </li>
        </ul>
      </div>
      <Dropdown />
      <button
        className="text-xl font-lato bg-orange-500 
                    text-white font-bold h-fit py-1.5 px-4 rounded-full hover:bg-transparent 
                    hover:text-orange-500 border-orange-500 duration-200 border-2 hover:shadow-none"
        onClick={() => navigate("/login")}
      >
        login
      </button>
    </section>
  );
}

export default Navs;
