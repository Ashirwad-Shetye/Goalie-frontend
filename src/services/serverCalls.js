import {
  userLogin,
  userRegister,
  userSetGoal,
  getUserGoalData,
  getMyInfo,
  getUserGoals,
} from "./apiCalls";
import { setAuthHeadersAfterLogin } from "./base";
import { saveAuthDataToDevice } from "./storage";
import { toast } from "react-toastify";

export const login = (params, navigate, setIsLoggedIn) => {
  userLogin(params)
    .then((response) => {
      setAuthHeadersAfterLogin(response.headers, response.data.token);
      saveAuthDataToDevice(response.headers, response.data.token);
      setIsLoggedIn(true);
      toast.success("User Logged In Successfully");
      navigate("/dashboard");
    })
    .catch((error) => {
      toast.error(error.message);
    });
};

export const register = (params) => {
  console.log(params);
  return userRegister(params);
};

export const setGoal = (params, navigate) => {
  userSetGoal(params)
    .then((response) => {
      console.log(response);
      navigate("/dashboard");
      toast.success("Goal Added Successfully");
    })
    .catch((error) => {
      console.log(error);
      toast.error("Someting went wrong");
    });
};

export const getGoalData = () => {
  return getUserGoalData();
};

export const getUserInfo = () => {
  return getMyInfo();
};

export const getUsersAllGoals = () => {
  return getUserGoals();
};
