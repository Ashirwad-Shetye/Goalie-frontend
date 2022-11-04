import React from "react";
import logo from "../../styles/assets/logo/logo.png";
import { useNavigate } from "react-router-dom";
import MainAvatar from "../../common/userAvatar";
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
            onClick={() => navigate("/dashboard")}
            className="hover:text-orange-600 cursor-pointer"
          >
            Dashboard
          </li>
          <li
            onClick={() => navigate("/aboutus")}
            className="hover:text-orange-600 cursor-pointer"
          >
            About us
          </li>
          <li
            onClick={() => navigate("/")}
            className="hover:text-orange-600 cursor-pointer"
          >
            Log out
          </li>
        </ul>
      </div>
      <Dropdown />
      <MainAvatar />
    </section>
  );
}

export default Navs;
