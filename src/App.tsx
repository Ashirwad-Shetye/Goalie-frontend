import React,{useState, useEffect} from 'react';
import Home from './pages/home';
import Dashboard from './pages/dashboard';
import Feed from './pages/feed';
import Signup from './pages/signup';
import Login from './pages/login';
import Logout from './pages/logout'
import CreateGoal from './pages/creategoal';
import Protected from './common/protected';
import ErrorGeneral from './pages/error_general';
import Error404 from './pages/error_404';
import { Route, Routes } from 'react-router-dom';
import { getItemFromStorage } from './services/storage';


function App() {
    const [isLoggedIn, setIsLoggedIn] = useState((getItemFromStorage('token')?true:false) || false)
    const loginProps={
        setIsLoggedIn: setIsLoggedIn
    }
    const logoutProps={
        setIsLoggedIn: setIsLoggedIn,
        isLoggedIn: isLoggedIn
    }
    useEffect(()=>{
        setIsLoggedIn((getItemFromStorage('token')?true:false) || false)
        console.log((getItemFromStorage('token')?true:false) || false)
    },[getItemFromStorage('token')])

  return (
      <div>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Protected fallBackRoute="/login" isLoggedIn={isLoggedIn}><Dashboard /></Protected>}/>
              <Route path="/feed" element={<Protected fallBackRoute="/login" isLoggedIn={isLoggedIn}><Feed /></Protected>} />
              {/* <Route path="/feed" element={<Feed />} /> */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login {...loginProps}/>} />
              <Route path="/logout" element={<Logout {...logoutProps}/>} />

              <Route path="/creategoal" element={<Protected fallBackRoute="/login" isLoggedIn={isLoggedIn}><CreateGoal /></Protected>} />
              <Route path="/error" element={<ErrorGeneral />} />
              <Route path="/error_404" element={<Error404 />} />
          </Routes>
      </div>
  );
}

export default App;
