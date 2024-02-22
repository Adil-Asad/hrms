import Typography from "@material-tailwind/react/components/Typography";
import { Checkbox, Select, Option, Input } from "@material-tailwind/react";

import Link from "next/link";
import { PrimaryButton } from "@/components/elements/inputs/buttons";
import { CiSearch } from "react-icons/ci";
import { SelectInput } from "@/components/elements/inputs";

type RecruitmentEmployeesLayoutProps = {
  heading?: string;
  style?: string;
  paragraph?: string;
  className?: string;
};

function RecruitmentEmployeesLayout(props: RecruitmentEmployeesLayoutProps) {
  const { heading, style, paragraph, className } = props;
  return (
    <div className="w-full flex  flex-col items-center justify-center dark:bg-black dark:text-white">
      <div className="w-full flex justify-between items-center dark:bg-black dark:text-white">
        <div className="flex flex-col items-start justify-center">
          <Typography
            className="text-accent text-xl font-inter font-semibold dark:bg-black dark:text-white"
            variant="h1"
          >
            {heading}
          </Typography>
          <Typography
            className="text-dim font-inter text-base font-medium dark:bg-black dark:text-white"
            variant="paragraph"
          >
            {paragraph}
          </Typography>
        </div>
        <Link href={"/create-new-job"}>
          <PrimaryButton label="Create New Job" className={`${style}`} />
        </Link>
      </div>
      <div className="w-full flex gap-[34px] justify-between items-center pt-[30px] pb-[10px]">
        <div className="w-full flex justify-start items-center gap-[34px] ">
          <div className="flex justify-start items-center">
            <Checkbox color="amber" />
            <Typography
              className="text-sm font-inter font-medium text-subheading dark:text-white"
              variant="h1"
            >
              Select All
            </Typography>
          </div>
          <div className="flex justify-center items-center gap-[10px]">
            <div className="flex justify-start items-center gap-[12px]">
              <Typography
                className="text-subheading text-sm font-medium font-inter dark:text-white"
                variant="paragraph"
              >
                Filter By
              </Typography>

              <div className="  px-[24px] py-[11px] flex justify-between items-center rounded-md bg-white">
                <select
                  className="bg-white outline-none w-full text-dim"
                  id="gender"
                  name="gender"
                >
                  <option value="" selected disabled>
                    Department
                  </option>

                  <option value={1}>UI & UX Department</option>
                  <option value={2}>Business Department</option>
                  <option value={3}>Developers Department</option>
                </select>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[10px] dark:bg-black dark:text-white">
              <input
                className="px-[14px] py-[7px] bg-white outline-none rounded-md text-dim"
                placeholder="Select date "
                type="date"
              />
              <button className="text-grass-200 text-sm font-inter font-medium text-grass-400 dark:text-white">
                Clear
              </button>
            </div>
          </div>
        </div>
        <div className="dark:bg-black dark:text-white dark:border-white bg-white border-white w-full max-w-[332px]  flex gap-[12px] justify-between items-center px-[28px] py-[6px] border rounded-md">
          <input
            className="outline-none bg-white dark:bg-black "
            type="text"
            placeholder="Search..."
          />
          <CiSearch className="dark:bg-black dark:text-white" />
        </div>
      </div>
    </div>
  );
}

export default RecruitmentEmployeesLayout;
