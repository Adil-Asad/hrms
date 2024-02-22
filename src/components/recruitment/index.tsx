import Typography from "@material-tailwind/react/components/Typography";
import { PrimaryButton } from "../elements/inputs/buttons";
import { Checkbox, Select, Option } from "@material-tailwind/react";
import { BsThreeDots } from "react-icons/bs";
import Cards from "./cards";
import Link from "next/link";
import RecruitmentEmployeesLayout from "@/layouts/recruitmentEmployeesLayout";
const jobItems = [
  {
    title: "UI/UX Designer",
    quota: 20,
    updatedDate: "17 - 12 - 2023",
    deadlineDate: "26 - 12 - 2023",
    totalApplied: "Total Applied",
    totalAppliedNum: 50,
    interview: "Interview",
    interviewNum: 12,
    offer: "Offer",
    offerNum: 5,
    Recruited: "Recruited",
    recruitedNum: 30,
    rejected: "Rejected",
    rejectedNum: 10,
  },
  {
    title: "Front-End Developer",
    quota: 20,
    updatedDate: "17 - 12 - 2023",
    deadlineDate: "26 - 12 - 2023",
    totalApplied: "Total Applied",
    totalAppliedNum: 50,
    interview: "Interview",
    interviewNum: 12,
    offer: "Offer",
    offerNum: 5,
    Recruited: "Recruited",
    recruitedNum: 30,
    rejected: "Rejected",
    rejectedNum: 10,
  },
  {
    title: "Search Engine Optimazation",
    quota: 20,
    updatedDate: "17 - 12 - 2023",
    deadlineDate: "26 - 12 - 2023",
    totalApplied: "Total Applied",
    totalAppliedNum: 50,
    interview: "Interview",
    interviewNum: 12,
    offer: "Offer",
    offerNum: 0,
    Recruited: "Recruited",
    recruitedNum: 30,
    rejected: "Rejected",
    rejectedNum: 10,
  },
  {
    title: "Back-End Developer",
    quota: 20,
    updatedDate: "17 - 12 - 2023",
    deadlineDate: "26 - 12 - 2023",
    totalApplied: "Total Applied",
    totalAppliedNum: 50,
    interview: "Interview",
    interviewNum: 12,
    offer: "Offer",
    offerNum: 5,
    Recruited: "Recruited",
    recruitedNum: 30,
    rejected: "Rejected",
    rejectedNum: 10,
  },
  {
    title: "Business Developer",
    quota: 20,
    updatedDate: "17 - 12 - 2023",
    deadlineDate: "26 - 12 - 2023",
    totalApplied: "Total Applied",
    totalAppliedNum: 50,
    interview: "Interview",
    interviewNum: 12,
    offer: "Offer",
    offerNum: 5,
    Recruited: "Recruited",
    recruitedNum: 30,
    rejected: "Rejected",
    rejectedNum: 10,
  },
];

type RecruitmentProps = {
  onChildComponentClick: () => void;
};

function Recruitment({ onChildComponentClick }: RecruitmentProps) {
  return (
    <div className=" w-full px-[27px] py-[32px]">
      <RecruitmentEmployeesLayout
        heading="Recruitment"
        paragraph="All the job postings of the company are listed here."
        className="hidden"
      />
      <div className="w-full flex flex-col gap-[10px] justify-center cursor-pointer items-center ">
        {jobItems.map((item, index) => (
          <div
            key={index}
            className="w-full  flex gap-[15px] px-[20px] py-[20px] justify-center items-center  rounded-lg bg-white  dark:bg-blue-gray-900 dark:text-white"
          >
            <Checkbox color="amber" />
            <div
              onClick={onChildComponentClick}
              className="flex flex-col items-start justify-center gap-[7px] w-full max-w-[40%] dark:text-white"
            >
              <div className=" flex gap-[5px] items-center justify-between cursor-pointer dark:text-white">
                <div className="w-full dark:text-white">
                  <Typography
                    className="w-full  text-accent text-lg font-semibold font-inter dark:text-white"
                    variant="h1"
                  >
                    {item.title}
                  </Typography>
                </div>
                <div>
                  <Typography
                    className="w-full max-w-[90px] px-[12px] text-[10px] font-medium font-inter  py-[8px] text-[#01B574] dark:bg-black bg-[#EBFFEB] rounded-2xl dark:text-white"
                    variant="paragraph"
                  >
                    Published
                  </Typography>
                </div>
              </div>
              <div className="w-full flex gap-[10px] justify-start items-center dark:text-white">
                <Typography
                  className=" text-subheading text-sm font-inter font-medium dark:text-white"
                  variant="paragraph"
                >
                  Recruitment Quota: {item.quota} &nbsp;|
                </Typography>
                <Typography
                  className=" text-subheading text-sm font-inter font-medium dark:text-white"
                  variant="paragraph"
                >
                  Last updated: {item.updatedDate} &nbsp;|
                </Typography>
                <Typography
                  className=" text-subheading text-sm font-inter font-medium dark:text-white"
                  variant="paragraph"
                >
                  Deadline: {item.deadlineDate}
                </Typography>
              </div>
            </div>
            <div
              onClick={onChildComponentClick}
              className="w-full max-w-[75%] flex gap-[5px] dark:text-white "
            >
              <Cards number={item.totalAppliedNum} text={item.totalApplied} />
              <Cards number={item.interviewNum} text={item.interview} />
              <Cards number={item.offerNum} text={item.offer} />
              <Cards number={item.recruitedNum} text={item.Recruited} />
              <Cards number={item.recruitedNum} text={item.rejected} />
            </div>
            <div>
              <BsThreeDots onClick={onChildComponentClick} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recruitment;
