import { Avatar, Typography } from "@material-tailwind/react";
import React from "react";
import { IoMdAdd } from "react-icons/io";
const settingItems = [
  {
    heading: "Date",
    heading1: "Interview time range",
    heading2: "Interviewers",
    heading3: "Interviewers",
  },
  {
    heading: "Date",
    heading1: "Interview time range",
    heading2: "Interviewers",
    heading3: "Interviewers",
  },
  {
    heading: "Date",
    heading1: "Interview time range",
    heading2: "Interviewers",
    heading3: "Interviewers",
  },
  {
    heading: "Date",
    heading1: "Interview time range",
    heading2: "Interviewers",
    heading3: "Interviewers",
  },
];
function GeneralSettingRightSide() {
  return (
    <div className="w-full px-[20px] py-[15px] bg-white rounded-lg flex flex-col gap-[29px] justify-start items-start">
      <Typography
        className="text-accent text-lg font-inter font-semibold"
        variant="h1"
      >
        General Setting
      </Typography>

      {settingItems.map((item, key) => (
        <div
          key={key}
          className="w-full rounded-lg p-[16px] border border-dim flex  items-center gap-[20px] "
        >
          <div
            className=" 
            flex flex-col gap-[6px] justify-center items-start w-full max-w-[250px]"
          >
            <Typography
              className="text-base text-text font-inter font-normal  "
              variant="h1"
            >
              {item.heading}
            </Typography>
            <input
              className="date bg-slate px-[24px] py-[9px] rounded-md outline-none w-full "
              type="date"
            />
          </div>
          <div className="  flex flex-col gap-[6px] justify-center items-start w-full ">
            <Typography
              className="text-base text-text font-inter font-normal  "
              variant="h1"
            >
              {item.heading1}
            </Typography>
            <div className="flex gap-[6px] justify-center items-center w-full ">
              <input
                className="date bg-slate px-[24px] py-[9px] rounded-md outline-none w-full "
                type="time"
              />
              <Typography
                className="text-base font-normal fonter-inter text-text"
                variant="paragraph"
              >
                to
              </Typography>
              <input
                className="date bg-slate px-[24px] py-[9px] rounded-md outline-none w-full"
                type="time"
              />
            </div>
          </div>
          <div className=" flex flex-col gap-[17px] justify-center items-start w-full max-w-[350px]   ">
            <Typography className="text-base text-text font-inter font-normal ">
              {item.heading3}
            </Typography>
            <div className=" w-full flex justify-start items-center gap-[54px]   ">
              <div className="w-full flex items-center -space-x-4 ">
                <Avatar
                  variant="circular"
                  alt="user 1"
                  className="border-2 border-white hover:z-10 focus:z-10"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <Avatar
                  variant="circular"
                  alt="user 2"
                  className="border-2 border-white hover:z-10 focus:z-10"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                />
                <Avatar
                  variant="circular"
                  alt="user 3"
                  className="border-2 border-white hover:z-10 focus:z-10"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
                />
                <Avatar
                  variant="circular"
                  alt="user 4"
                  className="border-2 border-white hover:z-10 focus:z-10"
                  src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                />
                <Avatar
                  variant="circular"
                  alt="user 5"
                  className="border-2 border-white hover:z-10 focus:z-10"
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
                />
              </div>
              <Typography
                className="text-[#E20000] text-base font-inter font-normal"
                variant="paragraph"
              >
                Delete
              </Typography>
            </div>
          </div>
        </div>
      ))}

      <div className="w-full p-[10px] rounded-md border border-grass-400 border-dashed text-grass-400 flex gap-[10px] justify-center items-center ">
        <IoMdAdd />
        <Typography
          className="text-base font-inter font-semibold text-grass-400"
          variant="h1"
        >
          Add Interview Date
        </Typography>
      </div>
    </div>
  );
}

export default GeneralSettingRightSide;
