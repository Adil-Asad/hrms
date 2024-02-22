import { Typography } from "@material-tailwind/react/components/Typography";
import { Progress } from "@material-tailwind/react";
import Image from "next/image";
import { CiCalendarDate } from "react-icons/ci";
import PerformanceChart from "./PerformanceChart";

function PerformancePage() {
  return (
    <div className="w-full max-w-[700px]  flex flex-col gap-[16px] justify-start items-start max-h-[666x] py-[10px]">
      <Typography
        className="text-accent text-[16px] font-inter dark:text-white"
        variant="h1"
      >
        Performance
      </Typography>
      <div className="w-full gap-[20px] flex justify-center items-center pt-[8px]">
        <div className="w-full  flex flex-col gap-[30px] justify-center items-start bg-white border border-dim dark:border-white rounded-md dark:bg-gray-900 pb-[20px]">
          <div className="w-full px-[10px] pt-[12px] pb-[30px] border-b border-dim dark:border-white">
            <Typography
              className="text-subheading text-sm font-inter font-bold dark:text-white"
              variant="h1"
            >
              Project Overview
            </Typography>
          </div>
          <div className="w-full flex justify-center items-center">
            <div className="w-full text-center">
              <Typography
                className="text-2xl text-yellow-500 font-semibold font-inter"
                variant="h1"
              >
                1
              </Typography>
              <Typography
                className="text-base text-dim font-medium font-inter dark:text-white"
                variant="h1"
              >
                Open
              </Typography>
            </div>
            <div className="w-full text-center">
              <Typography
                className="text-2xl text-grass-400 font-semibold font-inter"
                variant="h1"
              >
                2
              </Typography>
              <Typography
                className="text-base text-dim font-medium font-inter dark:text-white"
                variant="h1"
              >
                Completed
              </Typography>
            </div>
            <div className="w-full text-center">
              <Typography
                className="text-2xl text-text font-semibold font-inter dark:text-white"
                variant="h1"
              >
                0
              </Typography>
              <Typography
                className="text-base text-dim font-medium font-inter dark:text-white"
                variant="h1"
              >
                Hold
              </Typography>
            </div>
          </div>
          <div className="w-full px-[30px]">
            <Progress
              value={60}
              label="Progression"
              size="lg"
              color="green"
              style={{ background: "lightgray" }}
            />
          </div>
        </div>
        <PerformanceChart />
      </div>
      <div className="w-full gap-[20px] flex justify-center items-start  pt-[8px]">
        <div className="w-full pb-[42px] border border-dim rounded-md">
          <div className="w-full px-[10px] py-[12px] border-b border-dim">
            <Typography
              className="text-subheading text-sm font-inter font-bold"
              variant="h1"
            >
              Project Timeline
            </Typography>{" "}
          </div>
          <div className="w-full pt-[26px] pb-[15px] border-b border-gray-100 px-[15px] flex gap-[12px] justify-center items-start ">
            <Image
              className="w-auto h-auto"
              src={"/icons/Ellipse 113.svg"}
              alt="profile"
              width={0}
              height={0}
            />

            <div className=" flex flex-col gap-[10px] justify-center items-center">
              <div className="w-full flex gap-[10px] justify-start items-center ">
                <Typography
                  className="text-subheading text-sm font-inter font-semibold"
                  variant="h1"
                >
                  Ahsan Saleem
                </Typography>
                <Typography
                  className="text-dim text-sm font-inter font-medium"
                  variant="paragraph"
                >
                  Yesterday at 04:20:20 pm
                </Typography>
              </div>
              <div className="w-full flex flex-col gap-[10px] justify-center items-center">
                <div className="w-full flex justify-center items-center gap-2">
                  <button className="bg-grass-400 px-[20px] py-[5px] rounded-md text-white font-medium">
                    Updated
                  </button>
                  <Typography
                    className="w-full text-sm font-inter font-medium text-dim"
                    variant="paragraph"
                  >
                    Task: #1097 - Identify APIs to use GUID from token instead
                    of query/params/body
                  </Typography>
                </div>
                <div className="w-full">
                  <Typography
                    className="text-dim text-sm font-inter"
                    variant="h1"
                  >
                    Project: Maven X
                  </Typography>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pt-[16px]  px-[15px] flex gap-[12px] justify-center items-start ">
            <Image
              className="w-auto h-auto"
              src={"/icons/Ellipse 113.svg"}
              alt="profile"
              width={0}
              height={0}
            />

            <div className=" flex flex-col gap-[10px] justify-center items-center">
              <div className="w-full flex gap-[10px] justify-start items-center ">
                <Typography
                  className="text-subheading text-sm font-inter font-semibold"
                  variant="h1"
                >
                  Ahsan Saleem
                </Typography>
                <Typography
                  className="text-dim text-sm font-inter font-medium"
                  variant="paragraph"
                >
                  Yesterday at 04:20:20 pm
                </Typography>
              </div>
              <div className="w-full flex flex-col gap-[10px] justify-center items-center">
                <div className="w-full flex justify-center items-center gap-2">
                  <button className="bg-grass-400 px-[20px] py-[5px] rounded-md text-white font-medium">
                    Updated
                  </button>
                  <Typography
                    className="w-full text-sm font-inter font-medium text-dim"
                    variant="paragraph"
                  >
                    Task: #1097 - Identify APIs to use GUID from token instead
                    of query/params/body
                  </Typography>
                </div>
                <div className="w-full">
                  <Typography
                    className="text-dim text-sm font-inter"
                    variant="h1"
                  >
                    Project: Maven X
                  </Typography>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full  max-w-[168px]  rounded-md flex flex-col gap-[20px] justify-center items-center ">
          <div className="w-full pb-[28px]   rounded-md border border-dim">
            <div className="w-full pl-[10px] py-[9px] border-b border-dim ">
              <Typography
                className="text-subheading text-base font-inter font-medium "
                variant="h1"
              >
                Reminder
              </Typography>
            </div>
            <div className="w-full  flex flex-col pt-[20px] gap-[11px] justify-center items-center">
              <Typography
                className="text-[32px] font-inter font-semibold text-error"
                variant="h1"
              >
                01
              </Typography>
              <Typography
                className="text-dim text-sm font-inter font-medium"
                variant="h1"
              >
                Reminder Today
              </Typography>
            </div>
          </div>
          <div className="w-full pb-[28px] rounded-md border border-dim ">
            <div className="w-full pl-[10px] py-[9px] border-b border-dim ">
              <Typography
                className="text-subheading text-base font-inter font-medium "
                variant="h1"
              >
                Event
              </Typography>
            </div>
            <div className="w-full  flex flex-col pt-[20px] gap-[11px] justify-center items-center">
              <Typography
                className="text-[32px] font-inter font-semibold text-dim"
                variant="h1"
              >
                <CiCalendarDate />
              </Typography>
              <Typography
                className="text-dim text-sm font-inter font-medium"
                variant="h1"
              >
                No Event found!
              </Typography>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PerformancePage;
