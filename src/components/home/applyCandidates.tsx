import { Typography } from "@material-tailwind/react";
import ApplyCandidatesGraph from "./ApplyCandidatesGraph";


function ApplyCandidates() {
  return (
    <div className="w-full bg-white px-[20px] py-[20px] rounded-lg dark:bg-black dark:text-white dark:border-5 border-white">
      <div className="w-full flex justify-between items-center dark:bg-black dark:text-white">
        <Typography
          className="text-base text-'[#0F172A] font-inter font-bold dark:bg-black dark:text-white"
          variant="h1"
        >
          Applied candidate
        </Typography>
        <div className="w-full max-w-[86px] dark:bg-black dark:text-white">
          <select
            id="countries"
            className="bg-dull text-subheading outline-none text-xs font-medium font-inter rounded-lg  w-full p-2.5  cursor-pointer dark:bg-black dark:text-white"
          >
            <option value="wwekly">Weekly</option>
            <option value="monthly">Montly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>
      <ApplyCandidatesGraph  />
    </div>
  );
}

export default ApplyCandidates;
