import { Input } from "@material-tailwind/react";
import { Radio } from "@material-tailwind/react";

interface InputCustomStylesProps {
  placeholder: string;
}

export function InputCustomStyles({ placeholder }: InputCustomStylesProps) {
  return (
    <div>
      <Input
        className="border-none focus:border-transparent  rounded-md dark:bg-gray-900   text-dim  placeholder-dim placeholder:text-dim focus:placeholder-opacity-1 placeholder:opacity-100 "
        placeholder={placeholder}
        labelProps={{
          className: "before:content-none after:content-none ",
        }}
      />
    </div>
  );
}

export function RadioDefault() {
  return (
    <div className="flex gap-52 dark:bg-gray-900 dark:text-white">
      <Radio name="type" label="Male" className="dark:text-white"/>
      <Radio name="type" label="Female" />
    </div>
  );
}

function AditionalInfo() {
  return (
    <>
      <div className="font-semibold font-inter leading-tight">Additional</div>
      <div className="  h-[92px] px-5  rounded-md border border-dim  flex-col flex">
        <div className="   font-inter leading-normal tracking-tight my-2">
          Full Name*
        </div>
        <div className="bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none w-full border-none ">
          <InputCustomStyles placeholder="Full Name" />
        </div>
      </div>

      <div className="w-full h-[92px] px-5  rounded-md border border-dim flex-col flex">
        <div className="   font-inter leading-normal tracking-tight my-2">
          Date of birth*
        </div>
        <div className="bg-[#EFEFEF]   text-[#80807D] rounded-md w-full border-none ">
          <InputCustomStyles placeholder="Date of birth" />
        </div>
      </div>
      <div className="w-full h-[92px] px-5  rounded-md border border-dim  flex-col flex">
        <div className="   font-inter my-2 leading-normal tracking-tight">
          Email*
        </div>
        <div className="bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none w-full border-none ">
          <InputCustomStyles placeholder="Email" />
        </div>
      </div>
      <div className="w-full h-[92px] px-5  rounded-md border border-dim flex-col flex">
        <div className="   font-inter leading-normal tracking-tight my-2">
          Phone Number*
        </div>
        <div className="bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none w-full border-none ">
          <InputCustomStyles placeholder="Phone Number" />
        </div>
      </div>
      <div className="w-full h-[92px] px-5  rounded-md border border-dim flex-col flex">
        <div className="   font-inter my-2 leading-normal tracking-tight">
          Gender*
        </div>
        <div className="bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none w-full border-none ">
          <RadioDefault /> 
        </div>
      </div>
    </>
  );
}

export default AditionalInfo;
