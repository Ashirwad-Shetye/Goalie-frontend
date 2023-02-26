import {
  userLogin,
  userRegister,
  userSetGoal,
  getUserGoalData,
  getMyInfo,
  getUserGoals,
  createNewPost,
  getAllPosts,
  updateLikePost,
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
  return userRegister(params);
};

export const setGoal = (params, navigate) => {
  userSetGoal(params)
    .then((response) => {
      navigate("/dashboard");
      toast.success("Goal Added Successfully");
    })
    .catch((error) => {
      toast.error("Someting went wrong");
    });
};

export const getGoalData = () => {
  return getUserGoalData();
};

export const getUserInfo = (params) => {
  return getMyInfo(params);
};

export const getUsersAllGoals = () => {
  return getUserGoals();
};

export const setNewPost = (params) => {
  createNewPost(params)
    .then((response) => {
      console.log(response);
      toast.success("Post created succesfully");
    })
    .catch((error) => {
      console.log(error);
      toast.error("Something went wrong");
    });
};

export const getAllPostsList = () => {
  return getAllPosts();
};

export const likePost = () => {
  updateLikePost()
    .then((response) => {
      console.log(response);
      toast.success("Post liked");
    })
    .catch((error) => {
      console.log(error);
      toast.error("something went wrong");
    });
};
