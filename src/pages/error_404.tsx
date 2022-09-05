import React from "react";
import error404 from '../styles/assets/error/error404.png';
import Header from '../components/error/header';
import { useNavigate } from "react-router-dom";


const Error404 = () => {

  const navigate = useNavigate();

    return (
      <div className="">
        <Header />
        <div className="flex mt-24 items-center flex-col justify-center lg:flex-row px-6 
                lg:py-32 gap-5 lg:gap-0">
          <div className="w-full lg:w-4/12">
            <img className="mx-auto w-[380px] lg:w-[550px]" src={error404} alt="404 error illustration" />
          </div>
          <div className="w-10/12 lg:w-4/12 lg:pr-10 text-center lg:text-left">
            <h1 className="pb-4 text-3xl lg:text-4xl font-extrabold text-orange-400">Looks like you've found the doorway to the great nothing</h1>
            <p className="py-2 font-lato font-semibold text-lg text-gray-800">Sorry about that! Please visit our hompage to get where you need to go.</p>
            <p className="py-2 font-lato font-semibold text-lg text-gray-800">The content you’re looking for doesn’t exist. Either it was removed, or you mistyped the link.</p>
            <button 
              onClick={() => navigate('/dashboard')}
              className="w-40 lg:w-60 font-lato font-semibold mt-6 text-xl border rounded-full px-1 sm:px-16 py-5 bg-orange-400 text-white hover:bg-white hover:text-orange-400 
                hover:border-orange-400 focus:outline-none focus:ring-1 focus:ring-orange-400 focus:ring-opacity-50">Go back</button>
          </div>
        </div>
      </div>
    );
};

export default Error404;