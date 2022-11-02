import React from "react";
import Header from "../common/header";
// import Calender from "../components/dashboard/calender";
import Calender2 from "../components/dashboard/calender2";
import GoalStatus from "../components/dashboard/goalStatus";
import TimelineCard from "../components/dashboard/timeline";
import UserData from "../components/dashboard/userData";
import CreateGoalButton from "../common/goalCreateButton";
import Navs from "../components/dashboard/navs";

function Dashboard() {
  return (
    <div
      //   className="bg-dashboard bg-right bg-no-repeat bg-cover bg-fixed
      //  justify-center align-middle min-h-screen min-w-screen max-h-fit max-w-screen"
      className="bg-dashboard bg-no-repeat bg-cover bg-right bg-fixed min-h-screen min-w-screen max-h-fit max-w-screen overscroll-y-contain"
    >
      <main className="max-w-[1200px] min-w-screen h-screen m-auto">
        <Header>
          <Navs />
        </Header>
        <div className="container md:mt-0 w-10/12 mx-auto flex-1 justify-center align-middle my-auto lg:flex lg:space-x-10">
          <section className="hidden mt-10 w-[400px] lg:w-5/12 lg:flex flex-col space-y-3 justify-center items-center">
            <GoalStatus />
            <Calender2 />
          </section>
          <section className="relative mt-10 flex flex-col space-y-4 justify-center items-center lg:w-8/12 max-w-full h-[545px] lg:rounded-2xl">
            <UserData />
            <TimelineCard />
          </section>
        </div>
        <CreateGoalButton />
      </main>
    </div>
  );
}

export default Dashboard;
