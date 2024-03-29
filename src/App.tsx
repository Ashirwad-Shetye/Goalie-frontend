import React, { useState, useEffect } from "react";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Feed from "./pages/feed";
import Signup from "./pages/signup";
import Login from "./pages/login";
import Logout from "./pages/logout";
import CreateGoal from "./pages/creategoal";
import Protected from "./common/protected";
import ErrorGeneral from "./pages/error_general";
import Error404 from "./pages/error_404";
import { Route, Routes } from "react-router-dom";
import { getItemFromStorage } from "./services/storage";
import AboutUs from "./pages/aboutus";
import pulse from "./styles/assets/loaders/pulse.gif";
import logo from "./styles/assets/logo/logo.png";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    (getItemFromStorage("token") ? true : false) || false
  );
  const loginProps = {
    setIsLoggedIn: setIsLoggedIn,
  };
  const logoutProps = {
    setIsLoggedIn: setIsLoggedIn,
    isLoggedIn: isLoggedIn,
  };
  useEffect(() => {
    setIsLoggedIn((getItemFromStorage("token") ? true : false) || false);
    console.log((getItemFromStorage("token") ? true : false) || false);
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, [getItemFromStorage("token")]);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="">
      {isLoading ? (
        <div className="grid h-screen place-items-center">
          <div className="grid place-items-center">
            <img src={pulse} alt="loading gif" className="w-28 h-28" />
            <h1 className="text-lg text-gray-500 flex items-center">
              <img src={logo} alt="goalie" className="w-24" /> is getting ready
              to power your goals
            </h1>
          </div>
        </div>
      ) : (
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/dashboard"
              element={
                <Protected fallBackRoute="/login" isLoggedIn={isLoggedIn}>
                  <Dashboard />
                </Protected>
              }
            />
            <Route
              path="/feed"
              element={
                <Protected fallBackRoute="/login" isLoggedIn={isLoggedIn}>
                  <Feed />
                </Protected>
              }
            />
            <Route path="/feed" element={<Feed />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/login" element={<Login {...loginProps} />} />
            <Route path="/logout" element={<Logout {...logoutProps} />} />

            <Route
              path="/creategoal"
              element={
                <Protected fallBackRoute="/login" isLoggedIn={isLoggedIn}>
                  <CreateGoal />
                </Protected>
              }
            />
            <Route path="/error" element={<ErrorGeneral />} />
            <Route path="/error_404" element={<Error404 />} />
          </Routes>
        </div>
      )}
    </div>
  );
}

export default App;
