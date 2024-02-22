import { Typography } from "@material-tailwind/react/components/Typography";
import Link from "next/link";
import { LiaGreaterThanSolid } from "react-icons/lia";

function UpcomingInterviews() {
  return (
    <div className="w-full pb-[72px] bg-white px-[24px] pt-[20px] flex flex-col gap-[15px] justify-start items-center rounded-lg dark:bg-[#191818] dark:text-white">
      <div className="w-full flex justify-between items-end  dark:text-white">
        <div className="flex flex-col gap-[4px] justify-center items-start  dark:text-white">
          <Typography className="text-base font-bold font-inter dark:text-white" variant="h1">
            Upcoming Interviews
          </Typography>
          <Typography
            className="text-xs text-dim font-inter font-medium dark:text-white"
            variant="paragraph"
          >
            Today, 17 December 2023
          </Typography>
        </div>
        <div className="flex gap-1 justify-center items-center cursor-pointer dark:text-white">
          <Link href={"/candidates"}>
            <Typography
              className="text-subheading text-sm font-inter font-medium dark:text-white"
              variant="paragraph"
            >
              See All
            </Typography>
          </Link>
          <LiaGreaterThanSolid className="text-grass-400 w-[10px] h-[10px] dark:text-white" />
        </div>
      </div>
      <div className="w-full flex flex-col gap-[10px] dark:text-white">
        <div className="w-full  bg-dull flex gap-[16px] justify-start items-center px-[10px] py-[10px] rounded-lg dark:text-white">
          <Typography
            className="text-accent text-sm font-inter font-bold"
            variant="h1"
          >
            10:00
          </Typography>
          <div className="w-[2px] h-[42px] bg-primary"></div>
          <div className="full flex flex-col gap-[2px] justify-center items-start">
            <Typography className="text-text text-xs font-inter" variant="h1">
              UI/UX Designer
            </Typography>
            <Typography
              className="text-accent text-sm font-inter font-bold"
              variant="h1"
            >
              John Smith
            </Typography>
          </div>
        </div>
        <div className="w-full  bg-dull flex gap-[16px] justify-start items-center px-[10px] py-[10px] rounded-lg">
          <Typography
            className="text-accent text-sm font-inter font-bold"
            variant="h1"
          >
            10:40
          </Typography>
          <div className="w-[2px] h-[42px] bg-[#7B61FF]"></div>
          <div className="full flex flex-col gap-[2px] justify-center items-start">
            <Typography className="text-text text-xs font-inter" variant="h1">
              Product Designer
            </Typography>
            <Typography
              className="text-accent text-sm font-inter font-bold"
              variant="h1"
            >
              Elima Anna
            </Typography>
          </div>
        </div>
        <div className="w-full  bg-dull flex gap-[16px] justify-start items-center px-[10px] py-[10px] rounded-lg">
          <Typography
            className="text-accent text-sm font-inter font-bold"
            variant="h1"
          >
            12:00
          </Typography>
          <div className="w-[2px] h-[42px] bg-grass-400"></div>
          <div className="full flex flex-col gap-[2px] justify-center items-start">
            <Typography className="text-text text-xs font-inter" variant="h1">
              Frontend Developer
            </Typography>
            <Typography
              className="text-accent text-sm font-inter font-bold"
              variant="h1"
            >
              Jacob Roy
            </Typography>
          </div>
        </div>
        <div className="w-full  bg-dull flex gap-[16px] justify-start items-center px-[10px] py-[10px] rounded-lg">
          <Typography
            className="text-accent text-sm font-inter font-bold"
            variant="h1"
          >
            02:30
          </Typography>
          <div className="w-[2px] h-[42px] bg-error"></div>
          <div className="full flex flex-col gap-[2px] justify-center items-start">
            <Typography className="text-text text-xs font-inter" variant="h1">
              Backend Deceloper
            </Typography>
            <Typography
              className="text-accent text-sm font-inter font-bold"
              variant="h1"
            >
              Jason Stathan
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpcomingInterviews;
