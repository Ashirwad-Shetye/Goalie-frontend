import React from "react";
import Header from "../common/header";
import quote from "../styles/assets/svg/quote.svg";
import { useNavigate } from "react-router-dom";
import Navs from "../components/homepage/navs";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="bg-home bg-no-repeat bg-cover bg-fixed min-h-screen min-w-screen max-h-fit max-w-screen">
      <main className="min-w-screen h-screen relative max-w-[1200px] mx-auto">
        <Header>
          <Navs />
        </Header>
        <div className="my-auto text-center h-5/6 mx-auto space-y-10 flex flex-col justify-center align-middle">
          <img
            src={quote}
            alt="A goal without a plan is just a dream"
            className="w-96 md:w-[400px] lg:w-[450px] mx-auto"
          />
          <button
            onClick={() => navigate("/creategoal")}
            className="bg-orange-500 w-64 md:w-72 h-12 text-3xl text-white mx-auto
              font-lato font-semibold rounded-full shadow-goalBtn hover:bg-transparent 
              hover:text-orange-500 border-2 border-orange-500 duration-200 hover:shadow-none"
          >
            Create goal
          </button>
        </div>
      </main>
    </div>
  );
}

export default Home;
