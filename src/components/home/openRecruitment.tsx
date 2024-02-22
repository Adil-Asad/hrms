import { Typography, Checkbox } from "@material-tailwind/react";
import { MdChevronRight } from "react-icons/md";
import { AiOutlineEye } from "react-icons/ai";
import { HiOutlineCheckCircle } from "react-icons/hi";
import { CgCloseO } from "react-icons/cg";
import Link from "next/link";

function OpenRecruitment() {
  return (
    <div className="w-full">
      <div className="w-full flex justify-between items-center ">
        <Typography className="text-base text-[#41403C] dark:bg-black dark:text-white" variant="h1">
          Open recruitment
        </Typography>
        <div className="flex justify-center items-center cursor-pointer">
          <Link href={"/recruitment"}>
            <Typography
              className="text-sm  text-[#41403C] cursor-pointer dark:text-white"
              variant="h1"
            >
              See All
            </Typography>
          </Link>

          <MdChevronRight />
        </div>
      </div>
      <div className="flex flex-col gap-[5px] items-center justify-center pt-[12px]">
        <div className=" bg-[white] w-full  py-[12px] flex justify-start items-center rounded-lg  pr-[100px] dark:bg-blue-gray-900 dark:text-white">
          <Checkbox color="amber" className="dark:text-white"/>
          <Typography
            className="w-full max-w-[300px] text-accent text-sm font-inter font-semibold dark:text-white"
            variant="h1"
          >
            Position
          </Typography>
          <div className="w-full flex justify-between items-center">
            <Typography
              className="w-[164px] text-accent text-sm font-inter font-semibold dark:text-white"
              variant="h1"
            >
              Vacant
            </Typography>
            <Typography
              className=" text-accent text-sm font-inter font-semibold dark:text-white"
              variant="h1"
            >
              Candidates Overview
            </Typography>
          </div>
        </div>
        <div className=" bg-[white] w-full flex justify-start items-center pr-[50px] py-[8px] rounded-lg dark:bg-blue-gray-900 dark:text-white">
          <div className="flex justify-start items-center dark:bg-blue-gray-900 dark:text-white">
            <Checkbox color="amber" className=" dark:text-white"/>
            <div className=" flex flex-col gap-1 justify-start items-start w-[300px] dark:bg-blue-gray-900 dark:text-white">
              <Typography
                className="text-sm font-inter font-semibold dark:text-white"
                variant="h1"
              >
                Product Designer
              </Typography>
              <div className="w-full flex gap-1 justify-start items-center dark:text-white">
                <Typography
                  className="text-dim text-xs font-inter font-normal dark:text-white"
                  variant="paragraph"
                >
                  Deadline:
                </Typography>
                <Typography
                  className="text-xs text-text font-inter font-semibold dark:text-white"
                  variant="h1"
                >
                  30 Days Left
                </Typography>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center ">
            <Typography
              className="text-accent text-sm font-inter font-semibold w-full max-w-[100px] dark:text-white"
              variant="h1"
            >
              02
            </Typography>
            <div className="w-full flex gap-[35px] justify-end items-center dark:text-white">
              <div className=" flex gap-[7px] justify-center items-center dark:text-white">
                <AiOutlineEye />
                <Typography
                  className="text-text text-sm font-inter font-bold dark:text-white"
                  variant="h1"
                >
                  150
                </Typography>
              </div>
              <div className=" flex gap-[7px] justify-center items-center ">
                <HiOutlineCheckCircle className="text-[#12B76a]" />

                <Typography
                  className="text-text text-sm font-inter font-bold dark:text-white"
                  variant="h1"
                >
                  60
                </Typography>
              </div>
              <div className=" flex gap-[7px] justify-center items-center ">
                <CgCloseO className="text-error" />
                <Typography
                  className="text-text text-sm font-inter font-bold dark:text-white"
                  variant="h1"
                >
                  80
                </Typography>
              </div>
            </div>
          </div>
        </div>
        <div className=" bg-[white] w-full flex justify-start items-center pr-[50px] py-[8px] rounded-lg dark:bg-blue-gray-900 dark:text-white">
          <div className="flex justify-start items-center dark:text-white">
            <Checkbox color="amber" className="dark:text-white"/>
            <div className=" flex flex-col gap-1 justify-start items-start  w-[300px] dark:text-white">
              <Typography
                className="text-sm font-inter font-semibold dark:text-white"
                variant="h1"
              >
                Techincal Engineer
              </Typography>
              <div className="w-full flex gap-1 justify-start items-center ">
                <Typography
                  className="text-dim text-xs font-inter font-normal dark:text-white"
                  variant="paragraph"
                >
                  Deadline:
                </Typography>
                <Typography
                  className="text-xs text-text font-inter font-semibold dark:text-white"
                  variant="h1"
                >
                  25 Days Left
                </Typography>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center items-center">
            <Typography
              className="text-accent text-sm font-inter font-semibold w-full max-w-[100px] dark:text-white"
              variant="h1"
            >
              02
            </Typography>
            <div className="w-full flex gap-[35px] justify-end items-center ">
              <div className=" flex gap-[7px] justify-center items-center ">
                <AiOutlineEye />
                <Typography
                  className="text-text text-sm font-inter font-bold dark:text-white"
                  variant="h1"
                >
                  150
                </Typography>
              </div>
              <div className=" flex gap-[7px] justify-center items-center ">
                <HiOutlineCheckCircle className="text-[#12B76a]" />

                <Typography
                  className="text-text text-sm font-inter font-bold dark:text-white"
                  variant="h1"
                >
                  60
                </Typography>
              </div>
              <div className=" flex gap-[7px] justify-center items-center ">
                <CgCloseO className="text-error" />
                <Typography
                  className="text-text text-sm font-inter font-bold dark:text-white"
                  variant="h1"
                >
                  80
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OpenRecruitment;
