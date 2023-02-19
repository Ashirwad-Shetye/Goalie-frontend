import React from "react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navs from "../components/creategoal/navs";
import Header from "../common/header";
import { setGoal } from "./../services/serverCalls";
import { ThreeDots } from "react-loader-spinner";

function CreateGoal() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    goal: "",
    date: "",
    description: "",
    remaind: "",
  });

  const textRef = useRef<any>();

  const [buttonSelected1, setButtonSelected1] = useState(false);
  const [buttonSelected2, setButtonSelected2] = useState(false);
  const [buttonSelected3, setButtonSelected3] = useState(false);

  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);
    console.log(e.target.value);

    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onRemaindChange1 = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setButtonSelected1(true);
    setButtonSelected2(false);
    setButtonSelected3(false);
    if (buttonSelected1) {
      setButtonSelected1(false);
    }
  };
  const onRemaindChange2 = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setButtonSelected1(false);
    setButtonSelected2(true);
    setButtonSelected3(false);
    if (buttonSelected2) {
      setButtonSelected2(false);
    }
  };
  const onRemaindChange3 = (e: any) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
    setButtonSelected1(false);
    setButtonSelected2(false);
    setButtonSelected3(true);
    if (buttonSelected3) {
      setButtonSelected3(false);
    }
  };
  const onChangeHandler = function (e: React.SyntheticEvent<EventTarget>) {
    const target = e.target as HTMLTextAreaElement;
    textRef.current.style.height = "40px";
    textRef.current.style.height = `${target.scrollHeight}px`;
    setFormData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }));
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    setIsButtonLoading(true);

    e.preventDefault();
    setGoal(
      {
        text: formData.goal,
        lastDate: new Date(formData.date),
        description: formData.description,
        remaindInDays: formData.remaind,
      },
      navigate
    );
    if (Error()) {
      setButtonSelected1(false);
      setButtonSelected2(false);
      setButtonSelected3(false);

      setIsButtonLoading(false);
    }
  };

  return (
    <div
      className="bg-dashboard bg-right bg-no-repeat bg-cover bg-fixed 
    min-h-screen min-w-screen max-h-fit max-w-screen"
    >
      <main className="min-w-screen max-w-[1200px] mx-auto">
        <Header>
          <Navs />
        </Header>
        <div className="mx-auto mt-10 md:w-3/5 lg:w-2/5">
          <div className="text-3xl font-poppins text-center text-orange-500 my-6">
            Let's get started with your goal
          </div>
          <form
            onSubmit={onSubmit}
            className="container flex flex-col w-[360px] md:w-[400px] mx-auto"
          >
            <div className="flex flex-col">
              <label className="text-xl text-gray-600 my-4 font-lato font-semibold text-center">
                I commit to
              </label>
              <input
                className="placeholder:text-slate-400 mx-auto py-2 md:p-2 mb-2 w-10/12 border-0 text-center
                            focus:border-orange-500 focus:ring-0 placeholder:text-center shadow-inner rounded-lg"
                type="text"
                name="goal"
                maxLength={42}
                onChange={onChange}
                placeholder="Enter a goal"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl text-gray-600 my-4 font-lato font-semibold text-center">
                I want to complete this goal by
              </label>
              <input
                className="placeholder:text-slate-400 text-slate-400 mx-auto py-2 md:p-2 mb-2 w-10/12 border-0 text-center
                            focus:border-orange-500 focus:ring-0 placeholder:text-center shadow-inner rounded-lg cursor-text"
                type="date"
                onChange={onChange}
                name="date"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-xl text-gray-600 my-4 font-lato font-semibold text-center">
                Describe your goal
              </label>
              <textarea
                className="placeholder:text-slate-400 mx-auto py-2 md:p-2 mb-2 w-10/12 border-0 text-center resize-y
                            focus:border-orange-500 focus:ring-0 placeholder:text-center shadow-inner rounded-lg scrollbar-hide "
                name="description"
                ref={textRef}
                onChange={onChangeHandler}
                placeholder="describe your goal"
                maxLength={280}
              ></textarea>
            </div>
            <div className="flex flex-col">
              <label className="text-xl text-gray-600 my-4 font-lato font-semibold text-center">
                Remind me
              </label>
              <div className="container text-center mx-auto flex w-10/12 justify-evenly space-x-6 md:space-x-6">
                {/* Daily */}
                {buttonSelected1 ? (
                  <button
                    type="button"
                    value={1}
                    onClick={onRemaindChange1}
                    name="remaind"
                    className="text-xl h-10 duration-200 bg-orange-500
                                border-orange-500 text-white hover:scale-105 rounded-xl border-2 w-24"
                  >
                    Daily
                  </button>
                ) : (
                  <button
                    type="button"
                    value={1}
                    onClick={onRemaindChange1}
                    name="remaind"
                    className="text-xl h-10 hover:text-white hover:bg-orange-500 duration-200 
                                border-orange-200 hover:border-orange-500 hover:scale-105 rounded-xl border-2 w-24"
                  >
                    Daily
                  </button>
                )}
                {/* Weekly */}
                {buttonSelected2 ? (
                  <button
                    type="button"
                    value={1}
                    onClick={onRemaindChange2}
                    name="remaind"
                    className="text-xl h-10 duration-200 bg-orange-500
                                border-orange-500 text-white hover:scale-105 rounded-xl border-2 w-24"
                  >
                    Weekly
                  </button>
                ) : (
                  <button
                    type="button"
                    value={1}
                    onClick={onRemaindChange2}
                    name="remaind"
                    className="text-xl h-10 hover:text-white hover:bg-orange-500 duration-200 
                                border-orange-200 hover:border-orange-500 hover:scale-105 rounded-xl border-2 w-24"
                  >
                    Weekly
                  </button>
                )}
                {/* Monthly */}
                {buttonSelected3 ? (
                  <button
                    type="button"
                    value={1}
                    onClick={onRemaindChange3}
                    name="remaind"
                    className="text-xl h-10 duration-200 bg-orange-500
                                border-orange-500 text-white hover:scale-105 rounded-xl border-2 w-24"
                  >
                    Monthly
                  </button>
                ) : (
                  <button
                    type="button"
                    value={1}
                    onClick={onRemaindChange3}
                    name="remaind"
                    className="text-xl h-10 hover:text-white hover:bg-orange-500 duration-200 
                                border-orange-200 hover:border-orange-500 hover:scale-105 rounded-xl border-2 w-24"
                  >
                    Monthly
                  </button>
                )}
              </div>
            </div>
            {/* <button type="submit"
                        className='text-xl mx-auto mt-12 font-lato bg-orange-500 
                            text-white w-32 font-bold py-1.5 px-4 rounded-2xl hover:bg-transparent 
                            hover:text-orange-500 duration-200 border-orange-500 border-2 hover:shadow-none'
                    >Submit</button> */}
            {isButtonLoading ? (
              <button
                type="submit"
                className="text-xl my-4 mx-auto mt-12 font-lato bg-orange-400 h-12 w-32 cursor-default 
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
                className="text-xl my-4 mx-auto mt-12 font-lato bg-orange-500 h-12 w-32 
                            text-white font-bold py-1.5 px-4 rounded-2xl hover:bg-transparent 
                            hover:text-orange-500 border-orange-500 duration-200 border-2 hover:shadow-none"
              >
                Submit
              </button>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}

export default CreateGoal;
