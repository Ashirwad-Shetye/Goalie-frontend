import React from "react";
// import Header from "../common/header";
// import Calender from "../components/dashboard/calender";
import CalenderSection from "../components/dashboard/calender";
import GoalStatus from "../components/dashboard/goalStatus";
import TimelineCard from "../components/dashboard/timeline";
import UserData from "../components/dashboard/userData";
import CreateGoalButton from "../common/goalCreateButton";
// import Navs from "../components/dashboard/navs";

function Dashboard() {
  return (
    <div className="bg-dashboard bg-right bg-no-repeat bg-cover h-screen min-h-[640px] bg-fixed">
      <main className="max-w-[1200px] h-full min-w-screen mx-auto flex justify-center items-center">
        {/* <Header>
          <Navs />
        </Header> */}
        <div className="w-10/12 md:w-8/12 lg:w-11/12  mx-auto grid grid-cols-5 justify-center align-middle my-auto">
          <section className="hidden lg:col-span-2 space-y-10 lg:relative lg:grid grid-rows-4 content-between w-full">
            <GoalStatus />
            <CalenderSection />
          </section>
          <section className="relative grid grid-rows-4 content-between w-full mx-auto space-y-10 col-span-5 lg:col-span-3 max-w-full">
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
