import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { LuCalendar } from "react-icons/lu";
import {
  Input,
  Popover,
  PopoverHandler,
  PopoverContent,
  Checkbox,
} from "@material-tailwind/react";
import { format } from "date-fns";
// import { DayPicker } from "react-day-picker";
import { Textarea } from "@material-tailwind/react";
import { useState } from "react";

interface InputCustomStylesProps {
  placeholder: string;
}

export function InputCustomStyles({ placeholder }: InputCustomStylesProps) {
  return (
    <div>
      <Input
        className="border-none focus:border-transparent  rounded-md   text-dim  placeholder-dim placeholder:text-dim focus:placeholder-opacity-1 placeholder:opacity-100 "
        placeholder={placeholder}
        labelProps={{
          className: "before:content-none after:content-none ",
        }}
      />
    </div>
  );
}

export function Example() {
  const [date, setDate] = useState<Date>();

  return (
    <div className="w-full pr-3 max-w-[330px] border-none  flex gap-2  mx-3">
      <Popover placement="bottom">
        <PopoverHandler>
          <Input
            label="MM/YYYY"
            icon={<LuCalendar />}
            onChange={() => null}
            value={date ? format(date, "PPP") : ""}
            className="border-none focus:outline-none"
          />
        </PopoverHandler>
        <PopoverContent>
          <div></div>
          {/* <DayPicker
            mode="single"
            selected={date}
            onSelect={setDate}
            showOutsideDays
            className="border-none"
            classNames={{
              caption: "flex justify-center relative items-center",
              caption_label: "text-sm font-medium",
              nav: "flex items-center",
              nav_button:
                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
              nav_button_previous: "absolute left-1.5",
              nav_button_next: "absolute right-1.5",
              table: "w-full border-collapse",
              head_row: "flex font-medium text-gray-900",
              head_cell: "m-0.5 w-9 font-normal text-sm",
              row: "flex w-full mt-2",
              cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
              day: "h-9 w-9 p-0 font-normal",
              day_range_end: "day-range-end",
              day_selected:
                "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
              day_today: "rounded-md bg-gray-200 text-gray-900",
              day_outside:
                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
              day_disabled: "text-gray-500 opacity-50",
              day_hidden: "invisible",
            }}
            components={{
              IconLeft: ({ ...props }) => (
                <GoChevronLeft {...props} className="h-4 w-4 stroke-2" />
              ),
              IconRight: ({ ...props }) => (
                <GoChevronRight {...props} className="h-4 w-4 stroke-2" />
              ),
            }}
          /> */}
        </PopoverContent>
      </Popover>
    </div>
  );
}

export function CheckboxDefault() {
  return <Checkbox />;
}

export function TextareaDefault() {
  return (
    <div className="w-full h-[99px] ">
      <Textarea
        className="border-none focus:border-transparent  rounded-md   text-dim  placeholder-dim placeholder:text-dim focus:placeholder-opacity-1 placeholder:opacity-100 "
        placeholder="Your Message"
        labelProps={{
          className: "before:content-none after:content-none ",
        }}
      />
    </div>
  );
}

function WorkExperience() {
  return (
    <div className="w-full max-h-screen px-5 py-2.5 rounded-md border border-dim flex-col justify-start items-start mt-3 flex">
      <div className="font-semibold font-Inter leading-tight mt-[3px]">
        Work Experience
      </div>
      <>
        <div className="   font-Inter leading-normal tracking-tight my-2 ">
          Company*
        </div>
        <div className="bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none w-full border-none ">
          <InputCustomStyles placeholder="Company" />
        </div>
      </>
      <>
        <div className="   font-Inter leading-normal tracking-tight  my-2 ">
          Position*
        </div>
        <div className="bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none w-full border-none ">
          <InputCustomStyles placeholder="Position" />
        </div>
      </>
      <>
        <div className="   font-Inter leading-normal tracking-tight  my-2 ">
          Degree*
        </div>
        <div className="bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none w-full border-none ">
          <InputCustomStyles placeholder="Degree" />
        </div>
      </>
      <>
        <div className="flex gap-2 w-full max-w-[748px]">
          <div className=" w-full max-w-[330px]">
            <div className="w-full font-inter leading-normal tracking-tight my-2 ">
              Start Date*
            </div>
            <div className="w-full max-w-[330px] bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none  border-none ">
              <Example />
            </div>
          </div>
          <div className=" w-full max-w-[330px]">
            <div className="  w-full max-w-[330px] font-inter leading-normal tracking-tight  my-2 ">
              End Date*
            </div>
            <div className="w-full max-w-[330px] bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none  border-none ">
              <Example />
            </div>
          </div>
        </div>
      </>
      <div className="flex items-center text-inter my-3">
        <CheckboxDefault />{" "}
        <span className="text-inter">I am currently working here</span>
      </div>
      <>
        <div className="   font-Inter leading-normal tracking-tight  my-2 ">
          Description*
        </div>
        <div className="bg-[#EFEFEF]  focus:outline-none text-[#80807D]  rounded-md focus:border-none w-full border-none mb-2">
          <TextareaDefault />
        </div>
      </>
    </div>
  );
}

export default WorkExperience;
