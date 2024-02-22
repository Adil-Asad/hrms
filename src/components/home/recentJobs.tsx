import Typography from "@material-tailwind/react/components/Typography";
import { BsThreeDots } from "react-icons/bs";
import { Progress } from "@material-tailwind/react";
import { CgCheckR } from "react-icons/cg";
import Image from "next/image";

function RecentJobs() {
  return (
    <div className="w-full bg-white  px-[20px] py-[25px] rounded-lg dark:bg-black dark:text-white dark:border-2 border-gray-500">
      <div className="w-full flex justify-between items-center border-b border-[#f1f5f9] pb-[16px] dark:bg-black dark:text-white ">
        <Typography className="text-base font-inter font-bold dark:bg-black dark:text-white" variant="h1">
          Recent Jobs
        </Typography>

        <BsThreeDots />
      </div>
      <div className="w-full pt-[16px] flex gap-[16px] dark:bg-black dark:text-white  border-gray-500">
        <div className="w-full  bg-milk rounded-xl px-[16px] pt-[16px] pb-[21px] dark:bg-black dark:text-white">
          <Typography className="text-base font-inter font-bold dark:bg-black dark:text-white" variant="h1">
            UI-UX Designer
          </Typography>
          <div className="w-full flex flex-col gap-[9px] justify-center items-center pt-[16px] dark:bg-black dark:text-white ">
            <div className="w-full flex justify-between items-center dark:bg-black dark:text-white">
              <Typography
                className="text-subheading text-xs font-inter font-normal dark:bg-black dark:text-white"
                variant="h2"
              >
                Applied
              </Typography>
              <Typography
                className=" text-xs font-inter font-semibold dark:bg-black dark:text-white"
                variant="h2"
              >
                55%
              </Typography>
            </div>
            <div className="w-full">
              <Progress value={55} color="green" size="sm" />
            </div>
            <div className="w-full flex justify-between item pt-[18px] dark:bg-black dark:text-white">
              <div className="flex gap-1 justify-start items-center dark:bg-black dark:text-white">
                <CgCheckR className="font-bold text-subheading dark:bg-black dark:text-white" />
                <Typography
                  className="text-xs font-semibold font=inter dark:bg-black dark:text-white"
                  variant="paragraph"
                >
                  40
                </Typography>
              </div>
              <div className="flex items-center justify-start -space-x-4 dark:bg-black dark:text-white">
                <Image
                  width={0}
                  height={0}
                  alt="user 1"
                  src="/icons/avatar27px.svg"
                  className="dark:bg-black dark:text-white relative inline-block h-[30px] w-[35px] !rounded-full  border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
                <Image
                  width={0}
                  height={0}
                  alt="user 2"
                  src="/icons/avatar26.svg"
                  className="dark:bg-black dark:text-white relative inline-block h-[30px] w-[35px] !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
                <Image
                  width={0}
                  height={0}
                  alt="user 3"
                  src="/icons/avatar26.svg"
                  className="dark:bg-black dark:text-white relative inline-block h-[30px] w-[35px] !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dark:bg-black dark:text-white w-full  bg-milk rounded-xl px-[16px] pt-[16px] pb-[21px]">
          <Typography className="text-base font-inter font-bold" variant="h1">
            UI-UX Designer
          </Typography>
          <div className="dark:bg-black dark:text-white w-full flex flex-col gap-[9px] justify-center items-center pt-[16px]">
            <div className="w-full flex justify-between items-center">
              <Typography
                className="dark:bg-black dark:text-white text-subheading text-xs font-inter font-normal"
                variant="h2"
              >
                Applied
              </Typography>
              <Typography
                className="dark:bg-black dark:text-white text-xs font-inter font-semibold"
                variant="h2"
              >
                30%
              </Typography>
            </div>
            <div className="w-full dark:bg-black dark:text-white">
              <Progress value={30} color="orange" size="sm" />
            </div>
            <div className="dark:bg-black dark:text-white w-full flex justify-between item pt-[18px]">
              <div className="flex gap-1 justify-start items-center dark:bg-black dark:text-white">
                <CgCheckR className="font-bold text-subheading dark:bg-black dark:text-white" />
                <Typography
                  className="dark:bg-black dark:text-white text-xs font-semibold font=inter"
                  variant="paragraph"
                >
                  65
                </Typography>
              </div>
              <div className="flex items-center justify-start -space-x-4 dark:bg-black dark:text-white">
                <Image
                  width={0}
                  height={0}
                  alt="user 1"
                  src="/icons/avatar27px.svg"
                  className="dark:bg-black dark:text-white relative inline-block h-[30px] w-[35px] !rounded-full  border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
                <Image
                  width={0}
                  height={0}
                  alt="user 2"
                  src="/icons/avatar26.svg"
                  className="dark:bg-black dark:text-white relative inline-block h-[30px] w-[35px] !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
                <Image
                  width={0}
                  height={0}
                  alt="user 3"
                  src="/icons/avatar26.svg"
                  className="dark:bg-black dark:text-white relative inline-block h-[30px] w-[35px] !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="dark:bg-black dark:text-white w-full  bg-milk rounded-xl px-[16px] pt-[16px] pb-[21px]">
          <Typography className="dark:bg-black dark:text-white text-base font-inter font-bold" variant="h1">
            UI-UX Designer
          </Typography>
          <div className="dark:bg-black dark:text-white w-full flex flex-col gap-[9px] justify-center items-center pt-[16px]">
            <div className="dark:bg-black dark:text-white w-full flex justify-between items-center">
              <Typography
                className=" dark:bg-black dark:text-white text-subheading text-xs font-inter font-normal"
                variant="h2"
              >
                Applied
              </Typography>
              <Typography
                className="dark:bg-black dark:text-white text-xs font-inter font-semibold"
                variant="h2"
              >
                89%
              </Typography>
            </div>
            <div className="w-full dark:bg-black dark:text-white">
              <Progress value={89} color="amber" size="sm" />
            </div>
            <div className="dark:bg-black dark:text-white w-full flex justify-between item pt-[18px]">
              <div className="dark:bg-black dark:text-white flex gap-1 justify-start items-center">
                <CgCheckR className="font-bold text-subheading dark:bg-black dark:text-white" />
                <Typography
                  className="text-xs font-semibold font=inter dark:bg-black dark:text-white"
                  variant="paragraph"
                >
                  55
                </Typography>
              </div>
              <div className="flex items-center justify-start -space-x-4 dark:bg-black dark:text-white">
                <Image
                  width={0}
                  height={0}
                  alt="user 1"
                  src="/icons/avatar27px.svg"
                  className="dark:bg-black dark:text-white relative inline-block h-[30px] w-[35px] !rounded-full  border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
                <Image
                  width={0}
                  height={0}
                  alt="user 2"
                  src="/icons/avatar26.svg"
                  className="dark:bg-black dark:text-white relative inline-block h-[30px] w-[35px] !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
                <Image
                  width={0}
                  height={0}
                  alt="user 3"
                  src="/icons/avatar26.svg"
                  className="dark:bg-black dark:text-white relative inline-block h-[30px] w-[35px] !rounded-full border-2 border-white object-cover object-center hover:z-10 focus:z-10"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RecentJobs;
