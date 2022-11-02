import React from "react";
import { useState } from "react";
import clsx from "clsx";
import {
  add,
  differenceInDays,
  endOfMonth,
  format,
  setDate,
  startOfMonth,
  sub,
} from "date-fns";
import {
  BiChevronLeft,
  BiChevronRight,
  BiChevronsLeft,
  BiChevronsRight,
} from "react-icons/bi";

interface buttonProps extends React.PropsWithChildren {
  onClick?: () => void;
  className?: string;
}

type calenderProps = {
  value?: Date;
  onChange: (date: Date) => void;
};

export default function Calender2() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleSetToday = () => setCurrentDate(new Date());

  const selectedDate = format(currentDate, "dd LLLL yyyy");

  return (
    <div className="flex relative flex-col rounded-2xl shadow-xl bg-white w-11/12">
      <div className="relative flex py-2 items-center">
        <h1 className="font-medium text-2xl ml-5 text-gray-500">Calender</h1>
        <Button onClick={handleSetToday}>Today</Button>
      </div>
      <Calendar value={currentDate} onChange={setCurrentDate} />
    </div>
  );
}

const Button: React.FC<buttonProps> = ({ onClick, className, children }) => (
  <button
    onClick={onClick}
    className={clsx(
      "text-gray-600 font-poppins text-md bg-orange-500 bg-opacity-25 hover:bg-opacity-100 hover:text-white active:bg-orange-600 px-2 py-0.5 rounded-lg absolute right-5",
      className
    )}
  >
    {children}
  </button>
);

const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const Calendar: React.FC<calenderProps> = ({
  value = new Date(),
  onChange,
}) => {
  const startDate = startOfMonth(value);
  const endDate = endOfMonth(value);
  const numDays = differenceInDays(endDate, startDate) + 1;

  const prefixDays = startDate.getDay();
  const suffixDays = 6 - endDate.getDay();

  const prevMonth = () => onChange(sub(value, { months: 1 }));
  const nextMonth = () => onChange(add(value, { months: 1 }));
  const prevYear = () => onChange(sub(value, { years: 1 }));
  const nextYear = () => onChange(add(value, { years: 1 }));

  const handleClickDate = (index: number) => {
    const date = setDate(value, index);
    onChange(date);
  };

  return (
    <div className="w-full px-2 ">
      <div className="grid grid-cols-7 items-center justify-center">
        <Cell className="col-span-4 ml-2 text-xl text-gray-500 justify-self-start">
          {format(value, "LLLL yyyy")}
        </Cell>
        <Cell className="col-span-3 flex mr-2 text-3xl text-gray-600 justify-self-end">
          <div onClick={prevYear} className="">
            <BiChevronsLeft className="hover:scale-105 rounded-full hover:bg-gray-200" />
          </div>
          <div onClick={prevMonth} className="">
            <BiChevronLeft className="hover:scale-105 rounded-full hover:bg-gray-200" />
          </div>
          <div onClick={nextMonth}>
            <BiChevronRight className="hover:scale-105 rounded-full hover:bg-gray-200" />
          </div>
          <div onClick={nextYear}>
            <BiChevronsRight className=" hover:scale-105 rounded-full hover:bg-gray-200" />
          </div>
        </Cell>

        {weeks.map((week) => (
          <Cell className="text-md text-orange-500 font-bold uppercase">
            {week}
          </Cell>
        ))}

        {Array.from({ length: prefixDays }).map((_, index) => (
          <Cell key={index} />
        ))}

        {Array.from({ length: numDays }).map((_, index) => {
          const date = index + 1;
          const isCurrentDate = date === value.getDate();

          return (
            <Cell
              key={date}
              isActive={isCurrentDate}
              onClick={() => handleClickDate(date)}
            >
              {date}
            </Cell>
          );
        })}

        {Array.from({ length: suffixDays }).map((_, index) => (
          <Cell key={index} />
        ))}
      </div>
    </div>
  );
};

interface cellProps extends React.PropsWithChildren {
  className?: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Cell: React.FC<cellProps> = ({
  onClick,
  children,
  className,
  isActive = false,
}) => {
  return (
    <div
      onClick={!isActive ? onClick : undefined}
      className={clsx(
        "h-12 flex items-center justify-center select-none transition-colors",
        {
          "cursor-pointer mx-auto w-12 hover:bg-gray-200 active:bg-gray-200 rounded-full":
            !isActive && onClick,
          "font-bold text-white mx-auto w-12 bg-orange-500 rounded-full":
            isActive,
        },
        className
      )}
    >
      {children}
    </div>
  );
};
