import React from "react";
import { useNavigate } from "react-router";
import Dropdown from "./dropdown";
import Avatar from "../../common/userAvatar";

function Header() {
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
            onClick={() => navigate("/feed")}
            className="hover:text-orange-600 cursor-pointer"
          >
            Feed
          </li>
          <li
            onClick={() => navigate("/aboutus")}
            className="hover:text-orange-600 cursor-pointer"
          >
            About us
          </li>
        </ul>
      </div>
      <Dropdown />
      <div>
        <img src="" alt="" />
      </div>
      <Avatar />
    </section>
  );
}

export default Header;
