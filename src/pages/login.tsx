import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/login/header";
import { BiArrowBack } from "react-icons/bi";
import { login } from "./../services/serverCalls";
import { clearItemFromStorage } from "./../services/storage";
import { toast } from "react-toastify";
import { ThreeDots } from "react-loader-spinner";

function Login(props: any) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const [isButtonLoading, setIsButtonLoading] = useState(false);

  useEffect(() => {
    clearItemFromStorage("token");
  });

  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setIsButtonLoading(true);
    if (email === "" && password === "") {
      toast.error("Please enter all credentials");
      //   setIsButtonLoading(false);
    } else if (email === "") {
      toast.error("Please enter email address");
      //   setIsButtonLoading(false);
    } else if (password === "") {
      toast.error("Please enter password");
      //   setIsButtonLoading(false);
    }
    else{
    login({ email, password }, navigate, props.setIsLoggedIn);
    }
  };

  return (
    <div
      className="flex bg-signup min-h-screen min-w-screen max-h-fit max-w-screen bg-center bg-no-repeat
        bg-cover bg-fixed justify-center align-center text-center"
    >
      <Header />
      <section
        className="container h-fit w-2/3 mt-40 
            my-auto bg-white rounded-3xl shadow-goalBtn
            md:w-3/5 lg:w-2/5 md:h-screen md:my-0 md:rounded-l-2 md:rounded-r-none md:absolute md:right-0 justify-center align-middle"
      >
        <div
          onClick={() => navigate("/")}
          className="absolute invisible md:visible text-3xl mt-8 ml-80 md:mt-10 md:ml-12 md:text-4xl "
        >
          <BiArrowBack className="hover:scale-110 duration-150 text-orange-600 hover:text-slate-500 cursor-pointer" />
        </div>
        <div className="w-fit h-full mx-auto content-center grid">
          <form
            onSubmit={(e) => onSubmit(e)}
            className="container w-2/3 md:w-96 mx-auto"
          >
            <div className="text-4xl px-5 py-2 md:py-4 font-lato font-bold lg:py-0 select-none text-center md:text-left">
              Login
              <span className="text-6xl text-bold text-orange-500">.</span>
            </div>
            <div className="text-sm px-5 md:text-md md:py-2 mt-2 select-none font-lato font-semibold text-slate-500 text-center md:text-left">
              Welcome back to Goalie, start setting your goals with the best
              tools.
            </div>
            <div className="container mx-auto shrink-0 py-8 space-y-10 md:mt-0 w-full md:py-6 flex-col flex">
              <input
                type="text"
                name="email"
                value={email}
                onChange={onChange}
                placeholder="Email address"
                className="w-[200px] md:w-[300px] mt-5 placeholder:text-slate-400 mx-auto p-1 md:p-2 border-0 text-center
                                focus:border-orange-500 focus:ring-0 placeholder:text-center shadow-inner rounded-lg"
              />

              <input
                type="password"
                name="password"
                value={password}
                onChange={onChange}
                placeholder="Password"
                className="w-[200px] md:w-[300px] placeholder:text-slate-400 mx-auto p-1 md:p-2 border-0 text-center
                                focus:border-orange-500 focus:ring-0 placeholder:text-center shadow-inner rounded-lg"
              />
            </div>

            {isButtonLoading ? (
              <button
                type="submit"
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
                className="text-xl my-4 font-lato bg-orange-500 h-12 w-28 
                            text-white font-bold py-1.5 px-4 rounded-2xl hover:bg-transparent 
                            hover:text-orange-500 border-orange-500 duration-200 border-2 hover:shadow-none"
              >
                Submit
              </button>
            )}
            <div>
              <p className="pt-4 pb-10 md:text-xl text-slate-600 md:py-6">
                Need a new account?
                <span
                  onClick={() => navigate("/signup")}
                  className="text-orange-500 cursor-pointer"
                >
                  {" "}
                  Signup
                </span>
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Login;
