import React, { useState, useEffect } from "react";
// import { Avatar } from "flowbite-react";
import { getUserInfo } from "../../services/serverCalls";
import avatar_24 from "../../styles/assets/avatar/avatar_24.png";

function UserData() {
  const [userData, setUserData] = useState({ name: null, email: null });
  useEffect(() => {
    getUserInfo()
      .then((response) => {
        setUserData({ name: response.data.name, email: response.data.email });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div
      className="w-full h-fit items-center row-span-1 mt-5 md:mt-0
      bg-white rounded-2xl shadow-lg grid grid-cols-3 md:grid-cols-4 space-x-6"
    >
      <div className="my-5 ml-5 col-span-1 justify-self-center select-none rounded-full">
        <img src={avatar_24} alt="avatar" className="w-28" />
      </div>
      <div className="my-auto col-span-2 md:col-span-3">
        <h1 className="text-3xl font-lato font-semibold">
          Hola, {userData.name} 👋
        </h1>
        <h2 className="text-md font-lato font-semibold text-gray-500">
          {userData.email}
        </h2>
      </div>
    </div>
  );
}

export default UserData;
