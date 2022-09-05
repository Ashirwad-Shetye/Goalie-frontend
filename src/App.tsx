import React from 'react';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Feed from './pages/feed';
// import Signup from './pages/signup';
import Login from './pages/login';
import CreateGoal from './pages/creategoal';
import ErrorGeneral from './pages/error_general';
import Error404 from './pages/error_404';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/feed" element={<Feed />} />
              {/* <Route path="/signup" element={<Signup />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/creategoal" element={<CreateGoal />} />
              <Route path="/error" element={<ErrorGeneral />} />
              <Route path="/error_404" element={<Error404 />} />
          </Routes>
      </div>
  );
}

export default App;
