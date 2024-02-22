import React, { useState } from "react";
import { Checkbox, Typography } from "@material-tailwind/react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { PrimaryButton } from "../elements/inputs/buttons";
import CalenderModal from "./calenderModal";

const CalendarPage: React.FC = () => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState<Date>(currentDate);

  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }

  const generateDates = (startOfWeek: Date) => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      dates.push(new Date(startOfWeek));
      startOfWeek.setDate(startOfWeek.getDate() + 1);
    }
    return dates;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  const goToPreviousWeek = () => {
    const previousWeek = new Date(selectedDate);
    previousWeek.setDate(previousWeek.getDate() - 7);
    setSelectedDate(previousWeek);
  };

  const goToNextWeek = () => {
    const nextWeek = new Date(selectedDate);
    nextWeek.setDate(nextWeek.getDate() + 7);
    setSelectedDate(nextWeek);
  };

  const goToPreviousMonth = () => {
    const previousMonth = new Date(selectedDate);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    setSelectedDate(previousMonth);
  };

  const goToNextMonth = () => {
    const nextMonth = new Date(selectedDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setSelectedDate(nextMonth);
  };

  const currentYear = selectedDate.getFullYear();
  const currentMonth = selectedDate.toLocaleString("en-us", { month: "long" });

  const startOfWeek = new Date(selectedDate);
  startOfWeek.setDate(startOfWeek.getDate() - startOfWeek.getDay());

  return (
    <div className="flex flex-col justify-center items-center w-full px-[30px] py-[41px]">
      <div className="w-full flex justify-between items-center   ">
        <Typography
          className="text-accent text-xl font-inter font-semibold dark:text-white"
          variant="h1"
        >
          Calendar
        </Typography>
        <div className="flex gap-[27px] justify-start items-center">
          <div className="flex justify-start items-center">
            <Checkbox color="green" />
            <Typography
              className="text-sm font-inter font-medium text-text dark:text-white"
              variant="h1"
            >
              Interview Schedule
            </Typography>
          </div>
          <div className="flex gap-[15px] justify-start items-center">
            <div className="flex justify-start items-center">
              <Checkbox color="amber" />
              <Typography
                className="text-sm font-inter font-medium text-text dark:text-white"
                variant="h1"
              >
                Personal Calendar
              </Typography>
            </div>
            <div className="flex gap-[10px] justify-start items-center">
              <Typography
                className="text-text text-sm font-inter font-semibold dark:text-white"
                variant="h1"
              >
                {`${currentMonth} ${currentYear}`}
              </Typography>
              <div className="flex gap-[10px] justify-start items-center">
                <div
                  className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center cursor-pointer"
                  onClick={goToPreviousWeek}
                >
                  <FiChevronLeft color="#666666" size={20} />
                </div>
                <div
                  className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center cursor-pointer"
                  onClick={goToNextWeek}
                >
                  <FiChevronRight color="#666666" size={20} />
                </div>
              </div>
            </div>
            <div className="flex gap-[10px] justify-start items-center">
              <div className="px-[14px] py-[12px] flex gap-[5px] items-center rounded-md bg-white">
                <select
                  className="bg-white outline-none w-full text-dim"
                  id="gender"
                  name="gender"
                >
                  <option value={1}>Month</option>
                  <option value={2}>Week</option>
                </select>
              </div>
              <PrimaryButton label="Add Calendar" onClick={handleModal} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full pt-[72px]">
        <table className="table-auto w-full bg-white rounded-lg  dark:bg-gray-900 dark:text-white">
          <thead>
            <tr>
              <th className="px-4 py-2  ">GMT +07</th>
              {/* Render dates for the current week */}
              {generateDates(startOfWeek).map((date, index) => (
                <th
                  key={index}
                  className={`px-[40px] py-[50px]  text-center bg-[#F4F4F3] dark:bg-gray-900
                  `}
                >
                  <div
                    className="flex flex-col items-center "
                    onClick={() => handleDateClick(date)}
                  >
                    <div>
                      {date.toLocaleString("en-us", {
                        weekday: "short",
                      })}
                    </div>
                    <div
                      className={`w-[40px] h-[40px] flex justify-center items-center rounded-full ${
                        date.toDateString() === selectedDate.toDateString()
                          ? "bg-primary"
                          : ""
                      } `}
                    >
                      {date.toLocaleString("en-us", {
                        day: "numeric",
                      })}
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody className=" border-l-0">
            {Array.from({ length: 12 }).map((_, timeIndex) => {
              const hour = (timeIndex + 9).toString().padStart(2, "0"); // Start from 9:00 AM
              const isFirstRow = timeIndex === 0;
              const isLastRow = timeIndex === 11;
              return (
                <tr
                  className={`text-accent text-sm font-inter font-semibold border-x-0 ${
                    isFirstRow ? "border-t-0" : ""
                  } ${isLastRow ? "border-b-0" : ""}`}
                  key={timeIndex}
                >
                  <td className="py-[60px] pl-[70px] dark:text-white">{`${hour}:00 `}</td>
                  {generateDates(startOfWeek).map((date, dateIndex) => (
                    <td
                      key={dateIndex}
                      className={`border-[2px] ${
                        isLastRow ? "border-b-0" : ""
                      }`}
                    >
                      {/* You can render events for each date and time slot here */}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {showModal ? (
        <div
          onClick={handleModal}
          className=" absolute w-screen top-0 right-0 h-screen flex items-center  justify-center"
        >
          <CalenderModal handleModal={handleModal} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CalendarPage;
