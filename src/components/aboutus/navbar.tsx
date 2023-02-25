import React, { useState } from "react";
import logo from "../../styles/assets/logo/logo.png";

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
    <div className="w-full flex items-center justify-between">
      <div>
        <div
          className="cursor-pointer w-fit"
          onClick={() => navigate("/dashboard")}
        >
          <img src={logo} alt="goalie logo" className="w-28" />
        </div>
      </div>
      <div
        onClick={handleMenu}
        className="mx-3 rounded-full flex flex-col my-auto justify-between cursor-pointer"
      >
        <div className="w-20 text-center border rounded-full">
          <h1 className="my-1 text-lg">Menu</h1>
        </div>
        {open ? (
          <div className="absolute justify-center items-center overflow-hidden top-[4.3rem] rounded-lg w-[9rem] right-5 bg-white shadow-lg">
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
