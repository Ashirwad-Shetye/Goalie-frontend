import React from "react";
import pulse from "../styles/assets/loaders/pulse.gif";
import logo from "../styles/assets/logo/logo.png";

function MainLoader() {
  return (
    <div className="grid h-screen place-items-center">
      <div className="grid place-items-center">
        <img src={pulse} alt="loading gif" className="w-28 h-28" />
        <h1 className="text-lg text-gray-500 flex items-center">
          <img src={logo} alt="goalie" className="w-24" /> is getting ready to
          power your goals
        </h1>
      </div>
    </div>
  );
}

export default MainLoader;
