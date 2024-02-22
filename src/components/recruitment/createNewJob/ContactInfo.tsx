import {
  AlphabeticInput,
  EmailInput,
  NumberInput,
} from "@/components/elements/inputs";
import { Typography } from "@material-tailwind/react/components/Typography";
import React from "react";
import GeneralInformation from "./GeneralInfo";
import Requirments from "./Requirements";

function ContactInformation() {
  return (
    <div className="flex gap-5">
      <div className="w-full flex flex-col gap-[15px] items-center justify-center ">
        <GeneralInformation />
        <Requirments />
      </div>
      <div className="w-full py-[20px] max-w-[367px] h-[364px] bg-white rounded-lg flex flex-col  px-[15px] pt-[20px] gap-[20px] dark:bg-gray-800 dark:text-white">
        <div>
          <Typography
            className="text-xl font-semibold font-inter text-accent dark:text-white"
            variant="h1"
          >
            Contact Information
          </Typography>
          <Typography
            className="text-base  font-medium font-inter text-dim dark:text-white"
            variant="paragraph"
          >
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
        </div>

        <AlphabeticInput
          className="!h-[42px] dark:text-white"
          label="Hiring manager*"
          placeholder="Jessica Morgan"
        />

        <NumberInput label="Phone number*"/>
        <EmailInput label="Email" />
      </div>
    </div>
  );
}

export default ContactInformation;
