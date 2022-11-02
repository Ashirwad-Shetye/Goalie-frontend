import React, { useState, useEffect } from "react";
import { getGoalData } from "./../../services/serverCalls";

function GoalStatus() {
  const [goalData, setGoalData] = useState({
    pendingGoals: [],
    finishedGoals: [],
  });

  useEffect(() => {
    getGoalData()
      .then((response) => {
        setGoalData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="relative bg-white rounded-2xl shadow-xl w-11/12">
      <h1 className="text-3xl ml-5 font-poppins font-bold text-gray-500">
        <span className="font-medium text-2xl text-gray-500">Status</span>
      </h1>
      <div
        className="mx-auto justify-center align-middle
            container flex "
      >
        <div className="flex w-[350px] justify-center items-center p-2">
          <section className="w-28 h-28 lg:w-40 lg:h-fit pr-12 pl-4 text-center flex-col cursor-default">
            <div
              className="bg-orange-500 rounded-xl py-1 text-md font-lato 
                    font-semibold text-white"
            >
              Pending
            </div>
            <div className="text-5xl lg:text-5xl text-slate-600 pt-2 font-lato font-bold">
              {goalData.pendingGoals.length}
            </div>
          </section>
          <section className="w-28 h-28 lg:w-40 lg:h-fit pl-12 pr-4 text-center flex-col cursor-default">
            <div
              className="bg-orange-500 rounded-xl py-1 text-md font-lato 
                    font-semibold text-white"
            >
              Completed
            </div>
            <div className="text-5xl lg:text-5xl text-slate-600 pt-2 font-lato font-bold">
              {goalData.finishedGoals.length}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GoalStatus;
