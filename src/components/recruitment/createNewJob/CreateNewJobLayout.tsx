import {
  PrimaryButton,
  SecondaryButton,
} from "@/components/elements/inputs/buttons";
import { Typography } from "@material-tailwind/react/components/Typography";
import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export const paths = [
  {
    heading: "Job details",
    count: 1,
  },
  {
    heading: "Application form",
    count: 2,
  },
];

type CreateNewJobProps = {
  tab: number;
  handleChange: Function;
};

function CreateJobNewLayout({ handleChange, tab }: CreateNewJobProps) {
  return (
    <div className="w-full pt-[42px] pb-[30px] dark:bg-black dark:text-white">
      {/* Header */}
      <div className="flex justify-between items-center pb-[44px] dark:bg-black dark:text-white">
        <Typography
          className="text-accent text-xl font-inter font-semibold dark:text-white"
          variant="h1"
        >
          Create new job
        </Typography>
        <div className="flex gap-[10px] justify-center items-center ">
          <SecondaryButton label="Save as Draft" />

          <PrimaryButton
            onClick={() => handleChange(tab + 1)}
            disabled={tab === 1}
            label={tab === 1 ? "Submit" : "Next"}
          />
        </div>
      </div>
      {/* Tabs */}
      <div className="w-full flex gap-[15px] justify-center items-center dark:text-white">
        {paths.map((value, index) => (
          <div
            key={index}
            onClick={() => handleChange(index)}
            className={`
        w-full flex gap-[20px] justify-start items-center px-[20px] py-[10px] rounded-lg cursor-pointer dark:text-white  ${
          tab === index
            ? "bg-grayish dark:bg-gray-700 dark:text-white"
            : tab > index
            ? "bg-grass-400 dark:bg-gray-900 text-white "
            : "bg-white dark:bg-gray-900"
        }`}
          >
            <div
              className={`w-[28px] h-[28px]  rounded-full flex justify-center items-center font-semibold dark:text-white 
           ${
             tab === index
               ? "bg-white text-grass-400 dark:bg-gray-900 dark:text-white"
               : tab > index
               ? "text-grass-400 bg-white dark:bg-gray-900 "
               : "bg-[#F9F8F7] dark:bg-gray-700"
           }`}
            >
              {value.count}
            </div>
            <Typography
              className={`text-grass-400 text-base font-semibold font-inter dark:text-white  ${
                tab === index
                  ? " text-grass-400"
                  : tab > index
                  ? "text-white "
                  : "text-text"
              }`}
              variant="h1"
            >
              {value.heading}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CreateJobNewLayout;
