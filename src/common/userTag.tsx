import React, { useEffect, useState } from "react";
import { getUserInfo } from "../services/serverCalls";

function UserTag() {
  const [userData, setUserData] = useState({ name: null, avatar: "" });

  useEffect(() => {
    getUserInfo()
      .then((response) => {
        setUserData({ name: response.data.name, avatar: response.data.avatar });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <div className="flex">
        <div className="w-12 p-1 overflow-hidden rounded-full">
          <img src={`${userData.avatar}`} alt="avatar" />
        </div>
        <div className="px-2 flex items-center justify-center">
          <h1 className="w-[7rem] font-poppins truncate text-gray-500">
            {userData.name}
          </h1>
        </div>
      </div>
    </>
  );
}

export default UserTag;
