import { Typography } from "@material-tailwind/react/components/Typography";
import { RadioButton } from "@/components/elements/inputs/buttons";
import { IoMdAdd } from "react-icons/io";
import { Slider } from "@material-tailwind/react";

function Requirments() {
  return (
    <div className="w-full  bg-white px-[20px] py-[30px] rounded-md dark:bg-black dark:text-white">
      <Typography
        className="text-[24px] font-semibold font-inter text-accent dark:text-white"
        variant="h1"
      >
        Requirements
      </Typography>
      <div className="pt-[28px] flex flex-col justify-center items-start gap-[10px]">
        <Typography
          className="text-base font-semibold font-inter text-accent dark:text-white"
          variant="h1"
        >
          Required
        </Typography>
        <div className="w-full flex flex-col gap-[10px] items-center justify-center">
          <div className="w-full  rounded-md border border-dim px-[20px] py-[10px] gap-[6px]  flex flex-col  mt-[13px] justify-center items-start ">
            <Typography
              className="text-base font-normal font-inter text-body dark:text-white"
              variant="h1"
            >
              Gender
            </Typography>
            <div className="w-full flex gap-[120px]">
              <RadioButton heading="Male" />
              <RadioButton heading="Female" />
            </div>
          </div>

          <div className="w-full  rounded-md border border-dim px-[20px] py-[10px] gap-[6px]  flex flex-col justify-center items-start  ">
            <Typography
              className="text-base font-normal font-inter text-body dark:text-white"
              variant="h1"
            >
              Gender
            </Typography>
            <div className="w-full flex gap-[120px]">
              <RadioButton heading="Single" />
              <RadioButton heading="Married" />
            </div>
          </div>
          <div className="w-full  rounded-md border border-dim px-[20px] py-[10px] flex flex-col gap-[6px] justify-center items-start  ">
            <Typography
              className="text-base font-normal font-inter text-body dark:text-white "
              variant="h1"
            >
              Age
            </Typography>
            <div className="w-full flex gap-[37px] ">
              <input
                className="h-[36px] w-full max-w-[94px] bg-slate rounded-md outline-none text-center dark:bg-gray-900"
                type="number"
              />
              <span className="text-dim text-[25px] dark:text-white">-</span>
              <input
                className="h-[36px] w-full max-w-[94px] bg-slate rounded-md outline-none text-center dark:bg-gray-900"
                type="text"
              />
            </div>
          </div>
          <div className="w-full  rounded-md border border-dim px-[20px] py-[10px] flex flex-col gap-[6px] justify-center items-start  ">
            <Typography
              className="text-base font-normal font-inter text-body dark:text-white"
              variant="h1"
            >
              Academic level
            </Typography>
            <div className="w-full max-w-[700px] flex gap-[80px] justify-center items-center dark:text-white">
              <div className="w-full flex flex-col gap-[6px] ">
                <RadioButton heading="High school" />
                <RadioButton heading="Master's degree" />
              </div>
              <div className="w-full flex flex-col gap-[6px] dark:text-white">
                <RadioButton heading="Associate degree" />
                <RadioButton heading="Doctorate degree" />
              </div>
              <div className="w-full  ">
                <RadioButton heading="Bachelor's degree" />
              </div>
            </div>
          </div>
          <div className="w-full  rounded-md border border-dim px-[20px] py-[10px] flex flex-col gap-[6px] justify-center items-start  ">
            <Typography
              className="text-base font-normal font-inter text-body dark:text-white"
              variant="h1"
            >
              Language
            </Typography>
            <div className=" flex gap-[80px] justify-center items-center dark:text-white">
              <RadioButton heading="English" />
              <RadioButton heading="Urdu" />
              <RadioButton heading="Punjabi" />
              <RadioButton heading="Others" />
            </div>
          </div>
          <div className="w-full h-[44px] tex-grass-400 border-dashed border-2 border-grass-400 rounded-md flex gap-[10px] justify-center items-center">
            <IoMdAdd />
            <Typography
              className="text-base text-grass-400 font-semibold font-inter dark:text-white"
              variant="h1"
            >
              Add criteria
            </Typography>
          </div>
          <div className="w-full border-t-[1px] border-dim py-[15px] mt-[5px]">
            <Typography
              className="text-accent text-base font-inter font-semibold dark:text-white"
              variant="h1"
            >
              Additional
            </Typography>
          </div>
          <div className="w-full border flex flex-col gap-[6px] justify-center items-start border-dim rounded-md px-[20px] py-[10px] dark:bg-black">
            <Typography
              className="text-body text-base font-inter font-normal dark:text-white dark:bg-black"
              variant="h1"
            >
              Work experience
            </Typography>

            <div className="w-full h-[42px] px-[24px] py-[9px] flex justify-between items-center rounded-md bg-slate dark:bg-gray-900">
              <select className=" bg-slate outline-none w-full dark:text-white dark:bg-gray-900">
                <option disabled value="">
                  Select Experience
                </option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <Typography
              className="text-base text-text font-inter font-normal"
              variant="h1"
            >
              Criteria points
            </Typography>
            <div className="w-full">
              <Slider
                defaultValue={0}
                step={10}
                size="sm"
                color="amber"
                thumbClassName=" [&::-webkit-slider-thumb]:bg-yellow-600"
                trackClassName="[&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent !bg-[black]/50"
              />
            </div>
            <div className="absolute top-0 left-0 w-full flex justify-between text-sm"></div>
            <div className="w-full flex justify-between items-center">
              <span>1</span>
              <span>2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>6</span>
              <span>7</span>
              <span>8</span>
              <span>9</span>
              <span>10</span>
            </div>
          </div>
          <div className="w-full h-[44px] tex-grass-400 border-dashed border-2 border-grass-400 rounded-md flex gap-[10px] justify-center items-center">
            <IoMdAdd />
            <Typography
              className="text-base text-grass-400 font-semibold font-inter"
              variant="h1"
            >
              Add criteria
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Requirments;
