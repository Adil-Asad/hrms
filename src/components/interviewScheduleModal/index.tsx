import {
  Button,
  Dialog,
  DialogBody,
  DialogFooter,
  DialogHeader,
} from "@material-tailwind/react";
import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";

import { ReactNode, useState } from "react";
import { Select } from "@material-tailwind/react";
import { IoClose } from "react-icons/io5";

const candidatesData = [
  {
    avatar: "/img/Ellipse115.png",
    pdName: "Kianna Schleifer",
    pMatch: "90%",
    appliedDate: "Dec 17, 2023",
  },
];

type inputIconProps = {
  icon?: ReactNode;
  label?: string;
  interviewToggle?: boolean;
  handleSuccessful?: () => void;
  handleReject?: () => void;
  switchTab?: Function;
  checkTabs?: number;
};

function InterviewScheduleModal({
  handleSuccessful,
  switchTab,
  handleReject,
  interviewToggle,
  checkTabs,
}: inputIconProps) {
  const [close, setClose] = useState<boolean>(
    interviewToggle ? interviewToggle : false
  );
  const handleClose = () => setClose(!close);
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOption = (option: string) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const clearAll = () => {
    setSelectedOptions([]);
  };

  const options = [
    { value: "WA", label: "Waqar Ali" },
    { value: "HG", label: "Hakim Gul" },
    { value: "c1", label: "C1" },
    { value: "H1", label: "H1" },
    { value: "V1", label: "V2" },
    { value: "V2", label: "V1" },
  ];

  return (
    <div className=" ">
      {candidatesData.map(
        (
          {
            avatar,
            pdName,
            pMatch,

            appliedDate,
          },
          i
        ) => (
          <div key={i} className="rounded-lg ">
            {/* <Button onClick={handleOpen} variant="gradient">
              Open Dialog
            </Button> */}
            <Dialog size="xs" open={close} handler={handleClose}>
              <div className="dark:bg-black dark:text-white px-5 py-[15px] bg-white rounded-lg ">
                <div className="flex justify-between dark:bg-black dark:text-white">
                  <div className="dark:bg-black dark:text-white text-subheading text-base font-semibold font-inter leading-relaxed tracking-tight">
                    Interview Schedule
                  </div>
                  <div
                    className="hover:cursor-pointer"
                    onClick={() => {
                      handleClose();
                      handleReject?.();
                    }}
                  >
                    <IoClose />
                  </div>
                </div>
                <div className="flex gap-[15px] items-center mt-4 border-b border-[#a19c8b5a] pb-3">
                  <Image
                    alt="img"
                    width={40}
                    height={40}
                    src={avatar}
                    className="rounded-full"
                  />
                  <div className="text-subheading  text-base font-semibold font-inter leading-relaxed tracking-tight">
                    {pdName}
                  </div>
                </div>
                <div className="my-3">
                  <span className="text-dim text-sm font-normal font-inter leading-snug tracking-tight">
                    Profile Match:{" "}
                  </span>
                  <span className="text-text text-sm font-semibold font-inter leading-snug tracking-tight">
                    {pMatch}
                  </span>
                </div>
                <div className="my-3">
                  <span className="text-dim text-sm font-normal font-inter leading-snug tracking-tight">
                    Applied date:{" "}
                  </span>
                  <span className="text-text text-sm font-semibold font-inter leading-snug tracking-tight">
                    {appliedDate}
                  </span>
                </div>
                <div className="my-3 text-grass-200 text-base font-semibold font-inter leading-relaxed tracking-tight">
                  Interview Schedule
                </div>
                <div className=" my-3 text-stone-600 text-base font-normal font-inter leading-normal tracking-tight">
                  Interviewer
                </div>
                <div className=" dark:bg-gray-900 dark:text-white flex justify-between border-none  focus:border-transparent  rounded-md bg-slate  text-dim  placeholder-dim placeholder:text-dim ">
                  {/* <select
                    id="countries"
                    defaultValue={"WA"}
                    className="w-full rounded-md border-none focus:border-transparent dark:bg-gray-900 dark:text-white bg-slate   p-2.5 "
                  >
                    <option selected></option>
                    <option value="WA">Waqar Ali</option>
                    <option value="HG">Hakim Gul</option>
                  </select> */}
                  <div className="relative w-full">
                    <div
                      className="w-full flex flex-wrap p-2 border rounded-md cursor-pointer focus:outline-none"
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      {selectedOptions.map((option) => (
                        <div
                          key={option}
                          className="flex items-center bg-white min-w-min mr-1 mb-1 p-1 pl-2 rounded-full"
                        >
                          <span className="text-sm w-full">
                            {options.find((o) => o.value === option)?.label}
                          </span>
                          <button
                            className="focus:outline-none"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleOption(option);
                            }}
                          >
                            <IoClose className="h-4 w-4 ml-3 text-gray-600" />
                          </button>
                        </div>
                      ))}
                      {selectedOptions.length === 0 && (
                        <span className="text-sm text-gray-400">Select...</span>
                      )}
                      <div className="flex items-center ml-auto">
                        <MdKeyboardArrowDown className="text-gray-600" />
                      </div>
                    </div>

                    {isOpen && (
                      <div className="absolute mt-1 w-full bg-white border rounded-md shadow-lg z-10">
                        {options.map((option) => (
                          <div
                            key={option.value}
                            className={`flex items-center px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                              selectedOptions.includes(option.value)
                                ? "bg-gray-100"
                                : ""
                            }`}
                            onClick={() => toggleOption(option.value)}
                          >
                            <span>{option.label}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className=" my-3 text-text text-base font-normal font-inter leading-normal tracking-tight">
                  Interview Format
                </div>
                <select
                  id="names"
                  className=" dark:bg-gray-900 dark:text-white rounded-md border-none focus:border-none bg-slate text-dim  p-2.5 w-full outline-none "
                >
                  <option selected>Online</option>
                  <option value="WA">Onsite</option>
                </select>
                <div className=" my-3 text-text text-base font-normal font-inter leading-normal tracking-tight">
                  Date
                </div>
                <div className="flex w-full ">
                  <div className=" w-full ">
                    <div className="w-full  bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none  border-none ">
                      <div className="w-full">
                        <input
                          value="09/06/2023"
                          type="date"
                          className=" dark:bg-gray-900 dark:text-white rounded-md border-none focus:border-none bg-slate text-dim  p-2.5 w-full  "
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className=" my-3 text-text text-base font-normal font-inter leading-normal tracking-tight">
                  Interview time range
                </div>
                <div className="flex items-center gap-2 max-w-[250px] ">
                  <div className="max-w-[122px]">
                    <input
                      value="20:00"
                      type="time"
                      className=" rounded-md border-none focus:border-none dark:bg-gray-900 dark:text-white bg-slate text-dim  p-2.5 w-full  "
                    />
                  </div>
                  <span>to</span>
                  <div className="max-w-[122px]">
                    <input
                      value="20:00"
                      type="time"
                      className=" rounded-md border-none focus:border-none dark:bg-gray-900 dark:text-white bg-slate text-dim  p-2.5 w-full  "
                    />
                  </div>
                </div>
                <div className="w-full justify-end gap-2 flex pt-4 mt-4 border-t border-[#a19c8b43]">
                  <div className="w-[114px] h-11 px-2.5 py-3 bg-dim bg-opacity-5 rounded-md justify-center items-center gap-2.5 flex">
                    <button
                      onClick={() => {
                        handleClose();
                        handleReject?.();
                      }}
                      className="opacity-90 text-center text-stone-700 text-base font-semibold font-inter"
                    >
                      Cancel
                    </button>
                  </div>
                  {checkTabs === 0 ? (
                    <button
                      className="w-[114px] h-11 px-2.5 py-3 bg-primary rounded-md justify-center items-center gap-2.5 flex"
                      onClick={() => {
                        handleSuccessful?.();
                        switchTab?.(1);
                      }}
                    >
                      <div className="opacity-90 text-center text-white text-base font-semibold font-inter">
                        Submit
                      </div>
                    </button>
                  ) : (
                    <button
                      className="w-[114px] h-11 px-2.5 py-3 bg-primary rounded-md justify-center items-center gap-2.5 flex"
                      onClick={() => {
                        handleSuccessful?.();
                        switchTab?.(1);
                      }}
                    >
                      <div className="opacity-90 text-center text-white text-base font-semibold font-inter">
                        Update
                      </div>
                    </button>
                  )}
                </div>
              </div>
            </Dialog>
          </div>
        )
      )}
    </div>
  );
}

export default InterviewScheduleModal;
