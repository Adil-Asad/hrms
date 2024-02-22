import { AlphabeticInput, SelectInput } from "@/components/elements/inputs";
import { Typography } from "@material-tailwind/react/components/Typography";
import React from "react";
const options = [
  {
    value: "1",
    text: "Business Department",
  },
  {
    value: "2",
    text: "Designing Department",
  },
  {
    value: "3",
    text: "Developing Department",
  },
];
const quota = [
  {
    value: "1",
    text: "1",
  },
  {
    value: "2",
    text: "2",
  },
  {
    value: "3",
    text: "3",
  },
];
const salaryRange = [
  {
    value: "1",
    text: "10000",
  },
  {
    value: "2",
    text: "30000",
  },
  {
    value: "3",
    text: "60000",
  },
];

function GeneralInformation() {
  return (
    <div className="w-full  bg-white rounded-lg px-[20px] py-[30px] flex flex-col gap-[10px] justify-center items-center dark:bg-black dark:text-white">
      <Typography
        className="text-2xl font-semibold font-inter text-accent w-full dark:text-white"
        variant="h1"
      >
        General Information
      </Typography>

      <AlphabeticInput
        label="Job title"
        placeholder="Ex: UI/UX Designer"
        suffix={"*"}
      />
      <div className="w-full flex gap-[21px] justify-center items-center">
        <SelectInput
          label="Select Department "
          heading="Department "
          options={options}
          suffix="*"
        />
        <AlphabeticInput
          label="Position "
          placeholder="Enter position"
          suffix={"*"}
        />
      </div>
      <div className="w-full flex gap-[21px] justify-center items-center ">
        <AlphabeticInput
          label="Job type"
          placeholder="Ex: Pakistan, United Kingdom"
          suffix={"*"}
        />
        <SelectInput
          heading="Recruitment quota "
          label="Select quota"
          options={quota}
          suffix="*"
        />
      </div>
      <div className="w-full flex gap-[21px] justify-center items-center ">
        <SelectInput
          heading="Salary range "
          label="Select salary range"
          options={quota}
          suffix="*"
        />
        <div className="w-full flex gap-[6px] justify-center flex-col">
          <label
            className=" text-[16px] font-roboto font-normal leading-[24px]"
            htmlFor="3"
          >
            Recruitment Period <span className="text-error">*</span>
          </label>
          <div className="w-full h-[54px] px-[24px] py-[9px] flex justify-between items-center rounded-md bg-slate dark:bg-gray-900">
            <input className="bg-slate w-full outline-none text-dim dark:bg-gray-900" type="date" />
          </div>
        </div>
      </div>

      <AlphabeticInput
        label="Working location"
        placeholder="working location"
        suffix={"*"}
      />

      <AlphabeticInput className="!h-[100px]" label="Job description " />
      <AlphabeticInput className="!h-[100px]" label="Benifits" />
    </div>
  );
}

export default GeneralInformation;
