import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { useEffect, useRef, useState } from "react";

export interface CalendarProps {}

const Calendar: React.FC<CalendarProps> = () => {
  const [activeMonth, setActiveMonth] = useState(new Date().getMonth());
  const [activeMonthString, setActiveMonthString] = useState(
    new Date().toDateString().split(" ")[1]
  );
  const [activeYear, setActiveYear] = useState(new Date().getFullYear());
  const prevMonth = useRef<number>(null);
  const [firstDayInMonth, setFirstDayInMonth] = useState<number[]>([]);

  useEffect(() => {
    let x = [];
    for (let i = 1; i <= 12; i++) {
      x.push(new Date(`${activeYear}/${i}/1`).getDay());
    }
    setFirstDayInMonth(x);
  }, [activeYear]);

  useEffect(() => {
    setActiveMonthString(
      new Date(new Date().setMonth(activeMonth)).toDateString().split(" ")[1]
    );
    //remember previous activeMonth
    //@ts-ignore
    prevMonth.current = activeMonth;
  }, [activeMonth]);

  return (
    <div className="mt-5 p-2 mx-2">
      {/* <h1 className="text-3xl font-lato font-bold text-orange-500">Calender</h1> */}
      <div className="w-full bg-white shadow-xl rounded-2xl">
        <div className="flex items-center justify-between my-4">
          <div className="text-left ml-8 font-bold text-xl text-slate-700 dark:text-white">
            {`${activeMonthString} ${activeYear}`}
          </div>
          <div className="flex space-x-4">
            <button
              className="p-2 rounded text-gray-400 hover:text-orange-500 duration-200"
              onClick={() => {
                if (prevMonth.current === 0) {
                  setActiveYear(activeYear - 1);
                  setActiveMonth(11);
                } else {
                  setActiveMonth(activeMonth - 1);
                }
              }}
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="w-6 h-6" aria-hidden="true" />
            </button>
            <button
              className="p-2 rounded text-gray-400 hover:text-orange-500 duration-200"
              onClick={() => {
                if (prevMonth.current === 11) {
                  setActiveYear(activeYear + 1);
                  setActiveMonth(0);
                } else {
                  setActiveMonth(activeMonth + 1);
                }
              }}
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="w-6 h-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <div className="mx-4">
          <table className="w-full dark:text-white">
            <thead>
              <tr>
                <th className="py-2 px-5 ">S</th>
                <th className="py-2 px-5 ">M</th>
                <th className="py-2 px-5 ">T</th>
                <th className="py-2 px-5 ">W</th>
                <th className="py-2 px-5 ">T</th>
                <th className="py-2 px-5 ">F</th>
                <th className="py-2 px-5 ">S</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={0}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={1}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={2}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={3}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={4}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
              <tr>
                <CalendarRow
                  firstDay={firstDayInMonth[activeMonth]}
                  lastDayInMonth={new Date(
                    activeYear,
                    activeMonth + 1,
                    0
                  ).getDate()}
                  row={5}
                  currentMonth={activeMonth}
                  currentYear={activeYear}
                />
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Calendar;

export interface CalendarRowProps {
  firstDay: number;
  lastDayInMonth: number;
  row: number;
  currentMonth: number;
  currentYear: number;
}

const CalendarRow: React.FC<CalendarRowProps> = ({
  firstDay,
  lastDayInMonth,
  row,
  currentMonth,
  currentYear,
}) => {
  const activeDay = useState(new Date().getDate())[0];

  let content = [];
  //first row with empty spaces
  if (!row) {
    for (let i = 0; i < firstDay; i++) {
      content.push(<td></td>);
    }
    content.push(
      <td className="relative py-4 px-3 md:px-  hover:text-blue-500 text-center text-gray-800">
        1
      </td>
    );
    let len = 7 - content.length;
    for (let i = 1; i <= len; i++) {
      content.push(
        <>
          {activeDay === i + 1 &&
          new Date().getMonth() === currentMonth &&
          new Date().getFullYear() === currentYear ? (
            <td className="relative py-4 px-4 md:px-5  hover:text-orange-500 text-center text-gray-800">
              <span className="p-1 text-white rounded-full bg-orange-500">
                {i + 1}
              </span>
            </td>
          ) : (
            <td className="relative py-4 px-4 md:px-5  hover:text-orange-500 text-center text-gray-800">
              {i + 1}
            </td>
          )}
        </>
      );
    }

    return <>{content}</>;
  }
  //other rows
  for (let i = 1; i <= 7; i++) {
    if (i + (7 * row - firstDay) <= lastDayInMonth) {
      content.push(
        <>
          {activeDay === i + (7 * row - firstDay) &&
          new Date().getMonth() === currentMonth &&
          new Date().getFullYear() === currentYear ? (
            <td className="relative py-4 px-4  hover:text-blue-500 text-center text-gray-800">
              <span className="p-2 text-white rounded-full bg-orange-500">
                {i + (7 * row - firstDay)}
              </span>
            </td>
          ) : (
            <td className="relative py-4 px-4 md:px-5  hover:text-orange-500 text-center text-gray-800">
              {i + (7 * row - firstDay)}
            </td>
          )}
        </>
      );
    }
  }
  return <>{content}</>;
};