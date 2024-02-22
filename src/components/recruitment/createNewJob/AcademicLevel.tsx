import { Input } from "@material-tailwind/react";
import { Select, Option } from "@material-tailwind/react";
import { Textarea } from "@material-tailwind/react";

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

export function SelectCustomAnimation({ placeholder }: InputCustomStylesProps) {
  return (
    <div className="w-full">
      <Select
        className="border-none focus:border-transparent  rounded-md   text-dim  placeholder-dim placeholder:text-dim focus:placeholder-opacity-100 "
        placeholder={placeholder}
        labelProps={{
          className: "before:content-none after:content-none ",
        }}
        animate={{
          mount: { y: 0 },
          unmount: { y: 25 },
        }}
      >
        <Option>MBA</Option>
        <Option>MSC</Option>
        <Option>MS</Option>
      </Select>
    </div>
  );
}

export function TextareaDefault() {
  return (
    <div className="w-full h-[99px]">
      <Textarea
        className="border-none focus:border-transparent  rounded-md   text-dim  placeholder-dim placeholder:text-dim focus:placeholder-opacity-100 "
        placeholder="Your Message"
        labelProps={{
          className: "before:content-none after:content-none ",
        }}
      />
    </div>
  );
}

function AcademicLevel() {
  return (
    <div className="w-full h-[432px] px-5 py-2.5 rounded-md border border-dim flex-col justify-start items-start  flex">
      <div className="font-semibold font-inter leading-tight mt-[3px]">
        Academic Level
      </div>
      <>
        <div className="   font-inter leading-normal tracking-tight my-2 ">
          School*
        </div>
        <div className="bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none w-full border-none ">
          <InputCustomStyles placeholder="School" />
        </div>
      </>
      <>
        <div className="   font-inter leading-normal tracking-tight  my-2 ">
          Field of study*
        </div>
        <div className="bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none w-full border-none ">
          <InputCustomStyles placeholder="Field of study" />
        </div>
      </>
      <>
        <div className="   font-inter leading-normal tracking-tight  my-2 ">
          Degree*
        </div>
        <div className="bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none w-full border-none ">
          <SelectCustomAnimation placeholder="Degree" />
        </div>
      </>
      <>
        <div className="   font-inter leading-normal tracking-tight  my-2 ">
          Description*
        </div>
        <div className="bg-[#EFEFEF]  focus:outline-none text-[#80807D]  rounded-md focus:border-none w-full border-none ">
          <TextareaDefault />
        </div>
      </>
    </div>
  );
}

export default AcademicLevel;
