import React, { useState, useEffect } from "react";
import { Timeline } from "flowbite-react";
import { getUsersAllGoals } from "../../services/serverCalls";

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
        console.log(response);
        if (Array.isArray(response.data)) {
          setGoals([...response.data]);
        }
      })
      .catch((error) => {
        console.log(error);
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
          <Timeline>
            {goals.map((goal) => {
              return (
                <Timeline.Item>
                  <Timeline.Point />
                  <Timeline.Content>
                    <Timeline.Time>
                      <div className="text-lg font-lato text-slate-600">
                        {new Date(goal.lastDate).getDate()}{" "}
                        {month[new Date(goal.lastDate).getMonth()]}{" "}
                        {new Date(goal.lastDate).getFullYear()}
                      </div>
                    </Timeline.Time>
                    <Timeline.Title>{goal.text}</Timeline.Title>
                    <Timeline.Body>{goal.description}</Timeline.Body>
                  </Timeline.Content>
                </Timeline.Item>
              );
            })}
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export default TimelineCard;
