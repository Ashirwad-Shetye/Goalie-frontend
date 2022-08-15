import React from 'react';
import Home from './components/homepage/home';
import Dashboard from './components/dashboard/dashboard';
import Feed from './components/feed/feed';
import Signup from './components/signup/signup';
import Login from './components/login/login';
import CreateGoal from './components/creategoal/creategoal';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
      <div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/feed" element={<Feed />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/creategoal" element={<CreateGoal />} />
          </Routes>
      </div>
  );
}

export default App;
