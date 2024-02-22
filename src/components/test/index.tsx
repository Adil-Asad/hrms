// // pages/calendar.tsx

// import { Checkbox, Typography } from "@material-tailwind/react";
// import React, { useState } from "react";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
// import { PrimaryButton } from "../elements/inputs/buttons";

// interface Event {
//   date: Date;
//   description: string;
// }

// const CalendarPage: React.FC = () => {
//   const [selectedTime, setSelectedTime] = useState<string>("00:00");
//   interface Event {
//     time: string; // Format: HH:mm
//     description: string;
//   }

//   // Sample events for demonstration
//   const events: Event[] = [
//     { time: "09:00", description: "Event 1" },
//     { time: "11:30", description: "Event 2" },
//     { time: "14:00", description: "Event 3" },
//   ];

//   const getEventsForTime = (time: string) => {
//     return events.filter((event) => event.time === time);
//   };
//   const hours = Array.from(Array(24).keys()).map(
//     (hour) => `${hour < 10 ? "0" : ""}${hour}:00`
//   );

//   const getDayColumn = () => {
//     return hours.map((time) => (
//       <div key={time} className="border border-gray-300 p-2">
//         {time}
//       </div>
//     ));
//   };

//   const getEventsForDay = () => {
//     return hours.map((time) => {
//       const eventsForTime = getEventsForTime(time);
//       return (
//         <div key={time} className="border border-gray-300 bg-[red] p-2">
//           {eventsForTime.map((event, index) => (
//             <div key={`${time}-${index}`} className="mb-1">
//               {event.description}
//             </div>
//           ))}
//         </div>
//       );
//     });
//   };

//   return (
//     <div className="w-full flex flex-col justify-center items-center pt-[16px]">
//       <div className="w-full flex justify-between items-center ">
//         <Typography
//           className="text-accent text-xl font-inter font-semibold"
//           variant="h1"
//         >
//           Calender
//         </Typography>
//         <div className=" flex gap-[27px] justify-start items-center">
//           <div className="flex justify-start items-center">
//             <Checkbox color="green" />
//             <Typography
//               className="text-sm font-inter font-medium text-text"
//               variant="h1"
//             >
//               Interview Schedule
//             </Typography>
//           </div>
//           <div className="flex gap-[15px] justify-start items-center">
//             <div className="flex justify-start items-center">
//               <Checkbox color="amber" />
//               <Typography
//                 className="text-sm font-inter font-medium text-text"
//                 variant="h1"
//               >
//                 Personal Calendar
//               </Typography>
//             </div>
//             <div className="flex gap-[10px] justify-start items-center">
//               <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center">
//               <FiChevronLeft  color="#666666" size={20} />
//               </div>
//               <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center">
//               <FiChevronRight color="#666666"  size={20} />
//               </div>
//             </div>
//             <Typography
//               className="text-text text-sm font-inter font-semibold"
//               variant="h1"
//             >
//               June 2023
//             </Typography>
//             <div className="flex gap-[10px] justify-start items-center">
//               <div className="  px-[14px] py-[12px] flex gap-[5px]items-center rounded-md bg-white">
//                 <select
//                   className="bg-white outline-none w-full text-dim"
//                   id="gender"
//                   name="gender"
//                 >
//                   <option value="" selected disabled>
//                     Month
//                   </option>

//                   <option value={2}>Week</option>
//                   <option value={3}>Day</option>
//                 </select>
//               </div>
//               <PrimaryButton  label="Add Calender" />
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full">
//         <div className="flex justify-between mb-2">
//           <div></div>
//           {/* <h2>{selectedTime}</h2> */}
//           <div></div>
//         </div>
//         <div className="flex">
//           <div className="border border-gray-300 p-2">
//             <div className="font-bold">Time</div>
//             {getDayColumn()}
//           </div>
//           <div className="flex-grow grid grid-cols-7 gap-1">
//             {getEventsForDay()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CalendarPage;
// pages/calendar.tsx

// pages/calendar.tsx

import { Checkbox, Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { PrimaryButton } from "../elements/inputs/buttons";
import CalenderModal from "../calender/calenderModal";

const CalendarPage = () => {
  const [showModal, setShowModal] = useState(false);

  function handleModal() {
    setShowModal(!showModal);
  }
  // Array of time slots
  const timeSlots = [
    "00:00 AM",
    "01:00 AM",
    "02:00 AM",
    "03:00 AM",
    "04:00 AM",
    "05:00 AM",
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "01:00 PM",
    "02:00 PM",
    "03:00 PM",
    "04:00 PM",
    "05:00 PM",
    "06:00 PM",
    "07:00 PM",
    "08:00 PM",
    "09:00 PM",
    "10:00 PM",
    "11:00 PM",
  ];

  // Array of events
  const events = [
    { time: "08:00 AM", day: "Mon", event: "Meeting" },
    { time: "10:00 AM", day: "Tue", event: "Presentation" },
    // Add more events as needed
  ];

  // Function to find event for a specific time and day
  const findEvent = (time: string, day: string) => {
    return events.find((event) => event.time === time && event.day === day);
  };

  // Array of dates with corresponding days
  const dates = [
    { date: " 14", day: "Mon" },
    { date: " 15", day: "Tue" },
    { date: " 16", day: "Wed" },
    { date: " 17", day: "Thu" },
    { date: " 18", day: "Fri" },
    { date: " 19", day: "Sat" },
    { date: " 20", day: "Sun" },
  ];

  return (
    <div className="flex flex-col justify-center items-center w-full dark:bg-black dark:text-white">
      <div className="w-full flex justify-between items-center pt-[16px] pb-[32px] dark:bg-black dark:text-white">
        <Typography
          className="text-accent text-xl font-inter font-semibold  dark:text-white"
          variant="h1"
        >
          Calendar
        </Typography>
        <div className=" flex gap-[27px] justify-start items-center dark:text-white">
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
              <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center">
                <FiChevronLeft color="#666666" size={20} />
              </div>
              <div className="w-[30px] h-[30px] bg-white rounded-full flex justify-center items-center">
                <FiChevronRight color="#666666" size={20} />
              </div>
            </div>
            <Typography
              className="text-text text-sm font-inter font-semibold dark:text-white"
              variant="h1"
            >
              June 2023
            </Typography>
            <div className="flex gap-[10px] justify-start items-center">
              <div className="  px-[14px] py-[12px] flex gap-[5px]items-center rounded-md bg-white dark:bg-black dark:text-white">
                <select
                  className=" outline-none w-full text-dim dark:text-white dark:bg-black"
                  id="gender"
                  name="gender"
                >
                  <option value="" selected disabled className="dark:bg-black">
                    Month
                  </option>

                  <option value={2}>Week</option>
                  <option value={3}>Day</option>
                </select>
              </div>
              <PrimaryButton label="Add Calendar" onClick={handleModal} />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-white p-6 rounded-lg shadow-md dark:bg-black dark:text-white">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2 ">Time</th>
              {dates.map((date, index) => (
                <th key={index} className="px-4 py-2">
                  <Typography className="text-sm" variant="h1">
                    {date.day}
                  </Typography>
                  <Typography className="text-sm" variant="h1">
                    {date.date}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* Map over each time slot to generate rows */}
            {timeSlots.map((timeSlot, index) => (
              <tr key={index} className="w-[20%]">
                <td className="border-[2px] py-[40px] pl-[38px]">{timeSlot}</td>
                {dates.map((date, idx) => (
                  <td key={idx} className="border-[2px]">
                    {findEvent(timeSlot, date.day)?.event || ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {showModal ? (
        <div className="absolute w-screen top-0 right-0 h-screen flex items-center  justify-center">
          <CalenderModal handleModal={handleModal} />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default CalendarPage;
