import { Typography } from "@material-tailwind/react";
import { useState } from "react";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";

const Calendar = () => {
  // Get current date
  const currentDate = new Date();
  const [currentYear, setCurrentYear] = useState<number>(
    currentDate.getFullYear()
  );
  const [currentMonth, setCurrentMonth] = useState<number>(
    currentDate.getMonth()
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  // Function to get the name of the month
  const getMonthName = (month: number) => {
    const months = [
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
    return months[month];
  };

  // Function to get the number of days in a month
  const daysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to handle next month
  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentYear(currentYear + 1);
      setCurrentMonth(0);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Function to handle previous month
  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentYear(currentYear - 1);
      setCurrentMonth(11);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Function to handle date selection
  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
  };

  // Get the day of the week the current month starts on
  const startDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  return (
    <div className="p-[24px] bg-white rounded-lg dark:bg-[#191818] dark:text-white ">
      <div className="flex justify-between items-center mb-4">
        <Typography
          variant="h1"
          className="text-base font-inter font-bold text-accent dark:text-white"
        >
          {getMonthName(currentMonth)} {currentYear}
        </Typography>
        <div>
          <button
            onClick={handlePrevMonth}
            className="text-gray-600 text-[20px] dark:text-white"
          >
            <MdOutlineKeyboardArrowLeft />
          </button>
          <button
            onClick={handleNextMonth}
            className="text-gray-600 text-[20px] dark:text-white"
          >
            <MdOutlineKeyboardArrowRight />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-[21px] text-accent text-xs font-inter font-semibold dark:text-white">
        {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
          <div key={day} className="text-center font-semibold dark:text-white">
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-[15px]  pt-[21px] text-accent text-xs font-inter dark:text-white">
        {/* Previous month days */}
        {Array(startDayOfMonth)
          .fill(null)
          .map((_, index) => {
            const prevMonthDays = daysInMonth(
              currentYear,
              currentMonth === 0 ? 11 : currentMonth - 1
            );
            return (
              <div key={`prev-${index}`} className="text-center text-gray-400 py-[6px] dark:text-white">
                {prevMonthDays - startDayOfMonth + index + 1}
              </div>
            );
          })}
        {/* Current month days */}
        {[...Array(daysInMonth(currentYear, currentMonth))].map((_, index) => {
          const day = index + 1;
          const currentDate = new Date(currentYear, currentMonth, day);
          return (
            <div
              key={`current-${index}`}
              onClick={() => handleDateClick(currentDate)}
              className={`cursor-pointer text-center rounded py-[6px] dark:text-white ${
                (selectedDate &&
                  selectedDate.getTime() === currentDate.getTime()) ||
                (!selectedDate &&
                  currentDate.toDateString() === new Date().toDateString())
                  ? "bg-grass-400 drop-shadow-xl text-white rounded-full"
                  : ""
              }`}
            >
              {day}
            </div>
          );
        })}

        {/* Next month days */}
        {Array(42 - (daysInMonth(currentYear, currentMonth) + startDayOfMonth))
          .fill(null)
          .map((_, index) => (
            <div key={`next-${index}`} className="text-center text-gray-400 py-[6px] dark:text-white">
              {index + 1}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Calendar;
