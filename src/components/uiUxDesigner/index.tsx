import React, { useState } from "react";
import { PrimaryButton } from "../elements/inputs/buttons";
import { IoChevronBack } from "react-icons/io5";
import { Input } from "@material-tailwind/react";
import { ReactNode } from "react";
import { CiSearch } from "react-icons/ci";
import { IoGridOutline } from "react-icons/io5";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import RecruitmentCandidates from "../recruitmentCandidates";
import JobDetails from "../jobDetails";
import InterviewSchedule from "../interviewSchedule";

// input
interface InputIconProps {
  icon1: ReactNode;
  placeholder?: string;
}
export function InputIcon({ icon1, placeholder }: InputIconProps) {
  return (
    <div className="max-w-92 ">
      <Input
        className="border-none  focus:border-transparent  rounded-md bg-white  text-dim  placeholder-dim placeholder:text-dim focus:placeholder-opacity-1 placeholder:opacity-100 "
        placeholder={placeholder}
        labelProps={{
          className: "before:content-none after:content-none ",
        }}
        icon={icon1}
      />
    </div>
  );
}

const tabs = [
  {
    heading: "Candidates",
  },
  {
    heading: "Job Details",
  },
  {
    heading: "Interview Schedule",
  },
  {
    heading: "Report",
  },
];

type DesignerProps = {
  onBackButtonClick: () => void;
};

function UIUXDesigner({ onBackButtonClick }: DesignerProps) {
  const [tabNum, setTabNum] = useState(0);
  return (
    <div className="bg-[#FAF9F6] w-full h-screen p-[30px] flex flex-col gap-3">
      {/* B1 */}
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <div
            onClick={onBackButtonClick}
            className="px-2 py-4 cursor-pointer text-dim bg-white rounded-md"
          >
            <IoChevronBack />
          </div>
          <div>
            <div className=" text-[#23221E] text-xl font-semibold font-inter leading-[25px] tracking-tight">
              UI/UX Designer
            </div>
            <div className=" text-dim text-base font-medium font-inter leading-tight tracking-tight">
              Last update: 17-12-2023
            </div>
          </div>
        </div>
        <PrimaryButton label="+ Add new candidate" />
      </div>
      {/* B2 */}
      <div className=" h-[50px] px-5 py-[15px] bg-white rounded-lg justify-start items-start gap-[54px] inline-flex">
        {tabs.map((tab, i) => (
          <div
            key={i}
            className=" hover:cursor-pointer justify-start items-start gap-2.5 flex"
          >
            <div
              className="  text-subheading text-base font-semibold font-inter leading-tight tracking-tight"
              onClick={() => setTabNum(i)}
            >
              {tab.heading}
            </div>
          </div>
        ))}
      </div>
      {/* B3 */}
      <div className="h-10  items-center justify-between flex">
        <InputIcon icon1={<CiSearch />} placeholder="Search..." />
        <div className=" gap-2.5 flex">
          <div className="flex px-3 py-3 bg-primary rounded-md justify-center items-center  ">
            <div className=" relative text-white">
              <IoGridOutline />
            </div>
          </div>
          <div className="px-3 py-3 bg-white rounded-md justify-center items-center gap-10 flex">
            <div className=" relative text-black">
              <HiOutlineMenuAlt2 />
            </div>
          </div>
        </div>
      </div>
      <div>
        {tabNum === 0 ? (
          <RecruitmentCandidates />
        ) : tabNum === 1 ? (
          <JobDetails />
        ) : tabNum === 2 ? (
          <InterviewSchedule />
        ) : tabNum === 3 ? (
          <p>component 4</p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default UIUXDesigner;
