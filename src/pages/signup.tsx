import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import Header from "../components/signup/header";
import { BiArrowBack } from "react-icons/bi";
import { reset } from "../features/auth/authSlice";
import { AppDispatch, RootState } from "../store/store";
import { register } from "./../services/serverCalls";
import ImageSlider from "../components/signup/imageslider";
import { ThreeDots } from "react-loader-spinner";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password } = formData;

  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch<AppDispatch>();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state: RootState) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    if (isSuccess || user) {
      navigate("/dashboard");
    }

    dispatch(reset());
  }, [user, isLoading, isError, isSuccess, message, dispatch, navigate]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    console.log("logged");

    setIsButtonLoading(true);

    if (email === "" && password === "") {
      toast.error("Please enter all credentials");
      setIsButtonLoading(false);
    } else if (password.length === 0) {
      toast.error("Password is required");
      setIsButtonLoading(false);
    } else {
      const userData = {
        name,
        email,
        password,
        avatarID: localStorage.getItem("avatarID") || 1,
      };
      console.log(userData);
      register(userData)
        .then((response) => {
          toast.success("User Registered Successfully");
          setIsButtonLoading(false);
          navigate("/dashboard");
          localStorage.clear();
        })
        .catch((error) => {
          toast.error(error.message);
          setIsButtonLoading(false);
          localStorage.clear();
        });
    }
  };

  return (
    <div
      className="flex bg-signup bg-center bg-no-repeat
        bg-cover bg-fixed justify-center min-h-screen min-w-screen max-h-fit max-w-screen align-center text-center"
    >
      <Header />
      <section
        className="container h-fit w-2/3 mt-32 
            my-auto bg-white rounded-3xl shadow-goalBtn
            md:w-3/5 lg:w-2/5 md:h-screen md:my-0 md:rounded-l-2 md:rounded-r-none md:absolute md:right-0 "
      >
        <div
          onClick={() => navigate("/")}
          className="absolute invisible md:visible text-3xl mt-8 ml-80 md:mt-10 md:ml-12 md:text-4xl duration-200 
                        cursor-pointer text-orange-600 hover:text-slate-500"
        >
          <BiArrowBack className="hover:scale-110 duration-150" />
        </div>
        <div className="w-fit mx-auto h-full content-center grid">
          <form onSubmit={onSubmit} className="container w-72 md:w-96">
            <div className="text-4xl px-5 py-2 md:py-4 font-lato font-bold lg:py-0 select-none text-center md:text-left">
              Signup
              <span className="text-6xl text-bold text-orange-500">.</span>
            </div>
            <div className="text-sm px-5 md:text-md md:py-2 mt-2 select-none font-lato font-semibold text-slate-500 text-center md:text-left">
              Create a 100% free account and start setting your goals with the
              best tools.
            </div>
            <div className="container mx-auto shrink-0 md:mt-0 w-full md:py-2 flex-col flex">
              <div>
                <h1 className="my-3 select-none text-slate-400">
                  Select your avatar
                </h1>
                <ImageSlider />
              </div>

              {/* Username */}
              <input
                type="text"
                maxLength={12}
                placeholder="Enter username here"
                id="name"
                name="name"
                value={name}
                onChange={onChange}
                className="w-[200px] md:w-[300px] mt-5 placeholder:text-slate-400 mx-auto p-1 md:p-2 border-0 text-center
                                focus:border-orange-500 focus:ring-0 placeholder:text-center shadow-inner rounded-lg"
              />

              {/* Email */}
              <input
                type="text"
                placeholder="Enter email address here"
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                className="w-[200px] md:w-[300px] mt-5 placeholder:text-slate-400 mx-auto p-1 md:p-2 border-0 text-center
                                focus:border-orange-500 focus:ring-0 placeholder:text-center shadow-inner rounded-lg"
              />

              {/* Password */}
              <input
                maxLength={12}
                type="password"
                placeholder="Enter your password here"
                id="password"
                name="password"
                value={password}
                onChange={onChange}
                className="w-[200px] md:w-[300px] mt-5 placeholder:text-slate-400 mx-auto p-1 md:p-2 border-0 text-center
                                focus:border-orange-500 focus:ring-0 placeholder:text-center shadow-inner rounded-lg"
              />
            </div>
            {isButtonLoading ? (
              <button
                type="submit"
                // onClick={onSubmit}
                className="text-xl my-4 font-lato bg-orange-400 h-12 w-28 cursor-default 
                             py-1.5 px-4 rounded-2xl border-orange-400 duration-200 border-2"
              >
                <div className="w-fit mx-auto">
                  <ThreeDots
                    height="15"
                    width="70"
                    radius="3"
                    color="#ffffff"
                    ariaLabel="three-dots-loading"
                    visible={true}
                  />
                </div>
              </button>
            ) : (
              <button
                type="submit"
                // onClick={onSubmit}
                className="text-xl my-4 font-lato bg-orange-500 h-12 w-28 
                            text-white font-bold py-1.5 px-4 rounded-2xl hover:bg-transparent 
                            hover:text-orange-500 border-orange-500 duration-200 border-2 hover:shadow-none"
              >
                Submit
              </button>
            )}
            <div>
              <p className="pb-10 md:text-xl text-slate-600 select-none md:py-2">
                Already have an account?
                <span
                  onClick={() => navigate("/login")}
                  className="text-orange-500 cursor-pointer"
                >
                  {" "}
                  Login
                </span>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Signup;
