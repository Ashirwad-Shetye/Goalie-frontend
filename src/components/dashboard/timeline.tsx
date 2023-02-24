import React, { useState, useEffect } from "react";
import { Timeline } from "flowbite-react";
import { getUsersAllGoals } from "../../services/serverCalls";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { toast } from "react-toastify";

function TimelineCard() {
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const [Empty, setEmpty] = useState(false);

  const [goals, setGoals] = useState<
    Array<{
      text: string;
      description: string;
      lastDate: string;
    }>
  >([]);
  useEffect(() => {
    getUsersAllGoals()
      .then((response) => {
        if (response.data.length === 0) {
          setEmpty(true);
        }
        if (Array.isArray(response.data)) {
          setGoals([...response.data]);
        }
      })
      .catch((error) => {
        toast.error(
          "There seems to be a problem loading your goals. Please try refreshing page."
        );
      });
  }, []);
  return (
    <div className="h-fit w-full lg:bg-white rounded-2xl lg:shadow-xl row-span-3">
      <div className="text-3xl font-poppins font-bold my-2 pl-5 text-gray-500">
        <span className="font-medium text-2xl text-gray-500">Timeline</span>
      </div>
      <div className="mx-auto overflow-x-clip">
        <div
          className="h-80 px-12 my-10 overflow-scroll scrollbar-thin scrollbar-thumb-11 scrollbar-thumb-orange-400 scrollbar-track-transparent 
        overflow-y-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full"
        >
          {Empty ? (
            <div className="w-full font-lato font-semibold text-gray-500 space-y-2">
              <h1 className="text-gray-500">It seems empty here!</h1>
              <h2>
                Try setting a new goal by clicking on the goal button in the
                bottom.
              </h2>
            </div>
          ) : (
            <>
              <Timeline>
                {goals.map((goal) => {
                  return (
                    <Timeline.Item className="hover:bg-orange-300 hover:bg-opacity-25 rounded-lg duration-100">
                      <Timeline.Point />
                      <Timeline.Content>
                        <Timeline.Time>
                          <div className="p-2 font-poppins text-slate-400 flex justify-between">
                            <div>
                              {new Date(goal.lastDate).getDate()}{" "}
                              {month[new Date(goal.lastDate).getMonth()]}{" "}
                              {new Date(goal.lastDate).getFullYear()}
                            </div>
                            <div>
                              <button
                                className="rounded-full w-8 h-8 text-2xl flex items-center justify-center bg-slate-200 
                            bg-opacity-50 hover:scale-110 hover:shadow-md duration-200"
                              >
                                <BiDotsHorizontalRounded className="text-gray-400" />
                              </button>
                            </div>
                          </div>
                        </Timeline.Time>
                        <Timeline.Title className="px-2 font-lato font-bold text-lg">
                          {goal.text}
                        </Timeline.Title>
                        <Timeline.Body className="px-2 pb-2">
                          {goal.description}
                        </Timeline.Body>
                      </Timeline.Content>
                    </Timeline.Item>
                  );
                })}
              </Timeline>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default TimelineCard;
