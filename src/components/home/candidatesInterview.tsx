import { Typography, IconButton } from "@material-tailwind/react";
import Image from "next/image";
import { PiCirclesThreeLight, PiSelectionBackground } from "react-icons/pi";
import { FiUserCheck } from "react-icons/fi";
import { PiCheckSquareLight } from "react-icons/pi";

function CandidatesInterview() {
  return (
    <div className="w-full h-full bg-white px-[20px] py-[26px] flex flex-col gap-[20px] justify-start items-center rounded-lg dark:bg-black dark:text-white">
      <div className="w-full flex justify-between items-center dark:bg-black dark:text-white">
        <Typography className="text-base font-bold font-inter dark:bg-black dark:text-white" variant="h1">
          Candidate Interview
        </Typography>
        <div className="w-full max-w-[112px] dark:bg-black dark:text-white">
          <select
            id="countries"
            className="bg-dull text-subheading outline-none text-xs font-medium font-inter rounded-lg  w-full p-2.5 cursor-pointer dark:bg-black dark:text-white"
          >
            <option value="today">Today</option>
            <option value="tommorrow">Tommorrow</option>
            <option value="next week">Next week</option>
          </select>
        </div>
      </div>
      <div className="w-full flex gap-[12px] justify-center ite dark:bg-black dark:text-white">
        <div className="w-full py-[16px] bg-[#738C79] rounded-xl flex flex-col gap-[32px] justify-center items-center light:text-black dark:bg-blue-gray-900 text-white">
          <IconButton
            variant="outlined"
            className="rounded-full border border-white "
          >
            <PiCirclesThreeLight className="w-[20px] h-[20px]" color="white" />
          </IconButton>
          <div>
            <Typography
              className="text-xs font-inter "
              variant="paragraph"
            >
              Conduct
            </Typography>
            <Typography
              className=" font-inter text-base font-bold text-center"
              variant="h1"
            >
              40
            </Typography>
          </div>
        </div>
        <div className="w-full py-[16px] bg-primary rounded-xl flex flex-col gap-[32px] justify-center items-center dark:bg-[#6F5511] dark:text-white">
          <IconButton
            variant="outlined"
            className="rounded-full border border-white flex justify-center items-center "
          >
            <FiUserCheck color="white" className="w-[20px] h-[20px] " />
          </IconButton>
          <div>
            <Typography
              className="text-xs text-white font-inter "
              variant="paragraph"
            >
              Pending
            </Typography>
            <Typography
              className="text-white font-inter text-base font-bold text-center "
              variant="h1"
            >
              79
            </Typography>
          </div>
        </div>
        <div className="w-full py-[16px] bg-dull rounded-xl flex flex-col gap-[32px] justify-center items-center light:text-black dark:bg-blue-gray-900 dark:text-white">
          <IconButton
            variant="outlined"
            className="rounded-full border border-[#CBD5E1] dark:text-white"
          >
            <PiCheckSquareLight className="w-[20px] h-[20px]nb dark:text-white" />
          </IconButton>
          <div>
            <Typography
              className="text-xs text-subheading font-inter dark:text-white"
              variant="paragraph"
            >
              Rescheduled
            </Typography>
            <Typography
              className=" font-inter text-base font-bold text-center dark:text-white"
              variant="h1"
            >
              40
            </Typography>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-[8px] dark:bg-black dark:text-white">
        <Typography
          className="text-xs text-subheading font-inter font-normal dark:bg-black dark:text-white"
          variant="paragraph"
        >
          On-time Conduct Rate
        </Typography>

        <div className="w-full flex justify-between items-center dark:bg-black dark:text-white">
          <div className="flex gap-[8px] justify-start items-end dark:bg-black dark:text-white">
            <Typography className="text-2xl font-inter font-bold dark:bg-black dark:text-white" variant="h1">
              95%
            </Typography>
            <Typography
              className="text-[#24D164] text-xs font-inter font-medium dark:bg-black dark:text-white"
              variant="h1"
            >
              +2.5%
            </Typography>
          </div>
          <Image
            width={0}
            height={0}
            src={"/img/dashboard/smallGraph.svg"}
            alt="graph"
            className="w-auto h-auto"
          />
        </div>
      </div>
    </div>
  );
}

export default CandidatesInterview;
