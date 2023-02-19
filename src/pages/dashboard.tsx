import React, { Suspense, lazy } from "react";
import CreateGoalButton from "../common/goalCreateButton";
import Navbar from "../common/navbar";
import avatar_24 from "../styles/assets/avatar/avatar_24.png";
// import Navs from "../components/dashboard/navs";
// import Header from "../common/header";

const UserData = lazy(() => import("../components/dashboard/userData"));
const CalenderSection = lazy(() => import("../components/dashboard/calender"));
const GoalStatus = lazy(() => import("../components/dashboard/goalStatus"));
const TimelineCard = lazy(() => import("../components/dashboard/timeline"));

function Dashboard() {
  return (
    <div className="bg-dashboard bg-right bg-no-repeat bg-cover h-screen min-h-[640px] bg-fixed">
      <div className="h-full md:flex">
        <div className="relative h-20 w-full md:h-full md:w-[8rem]">
          <Navbar />
        </div>
        <main className="max-w-[1200px] w-full md:w-11/12 md:h-full min-w-screen mx-auto flex flex-col justify-center items-center">
          <div className="hidden w-full h-16 md:flex items-end justify-between">
            <h1 className="font-poppins text-2xl ml-10 text-gray-300 hover:text-gray-500 duration-150">
              Dashboard
            </h1>
            <div className="shadow-lg -mb-2 mr-10 rounded-full flex w-[11rem] justify-between bg-white">
              <div className="flex">
                <div className="w-12 p-1">
                  <img src={avatar_24} alt="avatar" />
                </div>
                <div className="px-2 flex items-center justify-center">
                  <h1 className="w-[7rem] font-poppins truncate text-gray-500">
                    Ashirwad shetye
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="w-10/12 md:w-8/12 lg:w-11/12 mx-auto grid grid-cols-5 justify-center align-middle my-auto">
            <section className="hidden lg:col-span-2 space-y-5 lg:relative lg:grid grid-rows-4 content-between w-full">
              <Suspense>
                <GoalStatus />
              </Suspense>
              <Suspense>
                <CalenderSection />
              </Suspense>
            </section>
            <section className="relative grid grid-rows-4 content-between w-full mx-auto space-y-5 col-span-5 lg:col-span-3 max-w-full">
              <Suspense>
                <UserData />
              </Suspense>
              <Suspense>
                <TimelineCard />
              </Suspense>
            </section>
          </div>
          <CreateGoalButton />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
