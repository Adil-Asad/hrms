import React, { MouseEventHandler } from "react";
import SideSheetBody, {
  SideSheet,
  SideSheetHeader,
} from "../elements/inputs/sideSheets";
import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { PrimaryButton } from "../elements/inputs/buttons";
import { FaLessThan } from "react-icons/fa6";

const TABLE_HEAD = ["Date", "Time tracked", "Start time", "End time"];

const TABLE_ROWS = [
  {
    date: "Wed, Jan 1",
    timetracked: "8h 30m",
    starttime: "8:10 AM",
    endtime: "5:20 AM",
  },
];

const timeCheck = [
  {
    time: "9 AM",
  },
  {
    time: "10 AM",
  },
  {
    time: "11 AM",
  },
  {
    time: "12 PM",
  },
  {
    time: "1 PM",
  },
  {
    time: "2 PM",
  },
  {
    time: "3 PM",
  },
  {
    time: "4 PM",
  },
  {
    time: "5 PM",
  },
  {
    time: "6 PM",
  },
  {
    time: "7 PM",
  },
];

type AttendanceReportModalProps = {
  handleClose: MouseEventHandler<HTMLDivElement>;
  open: boolean;
};


function AttendanceReportModal(props: AttendanceReportModalProps) {
  const { handleClose, open } = props;

  return (
    <div>
      <SideSheet handleClose={handleClose} open={open}>
        <div className="w-auto h-auto bg-white">
          <SideSheetHeader handleClose={handleClose}>
            <div className="flex gap-[15px] justify-start items-center">
              <Image
                width={0}
                height={0}
                alt="profilepicture"
                src={"/icons/profile.svg"}
                className="w-auto h-auto"
              />
              <div>
                <Typography
                  className="text-subheading text-xl font-inter font-semibold"
                  variant="h1"
                >
                  Zaire Vaccaro
                </Typography>
                <Typography
                  className="text-dim text-sm font-inter font-medium tracking-tight"
                  variant="paragraph"
                >
                  Profile Match: 90%
                </Typography>
              </div>
            </div>
            <div className="flex flex-col gap-[5px] justify-center items-center">
              <div className="flex justify-center items-center">
                <Typography
                  className="text-sm text-dim font-inter"
                  variant="h1"
                >
                  Start Job: &nbsp;
                </Typography>
                <Typography
                  className="text-sm text-subheading font-inter font-semibold"
                  variant="h1"
                >
                  15 June 2023
                </Typography>
              </div>
              <div className="flex justify-center items-center">
                <Typography
                  className="text-sm text-dim font-inter"
                  variant="h1"
                >
                  Start Job: &nbsp;
                </Typography>
                <Typography
                  className="text-sm text-subheading font-inter font-semibold"
                  variant="h1"
                >
                  15 June 2023
                </Typography>
              </div>
            </div>
          </SideSheetHeader>
          <SideSheetBody>
            <div className="w-full px-[30px] pt-[24px] cursor-pointer ">
              <div onClick={handleClose} className="w-full flex gap-[10px] justify-start items-center ">
                <FaLessThan size={10} />
                <Typography
                  className="text-subheading text-sm font-inter font-semibold "
                  variant="h1"
                >
                  Detail
                </Typography>
              </div>
              <div className="w-full pt-[22px] relative">
                <div className="w-full flex justify-between items-center  pl-[20px] pr-[19px] ">
                  {timeCheck.map((time, index) => (
                    <div
                      key={index}
                      className=" flex flex-col gap-1 justify-start items-center"
                    >
                      <div className="h-[51px] w-0 border border-[#E7E7E7]"></div>
                      <Typography
                        className="text-dim text-xs font-inter font-medium"
                        variant="h1"
                      >
                        {time.time}
                      </Typography>
                    </div>
                  ))}
                </div>
                <div className="w-[270px] h-[25px] bg-[#32D583] absolute top-[40%] left-[33%]"></div>
              </div>
              <div className="w-full pt-5 ">
                <div className="w-full border-t border-l border-r px-[20px] py-[10px] rounded-t-lg">
                 <Typography className="text-[14px] font-inter text-accent font-bold" variant="h1">Overview</Typography> 
                </div>
                <table className="w-full min-w-max table-auto text-left border  rounded-b-lg">
                  <thead>
                    <tr>
                      {TABLE_HEAD.map((head) => (
                        <th
                          key={head}
                          className="border-b rounded  p-4"
                        >
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                          >
                            {head}
                          </Typography>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="border rounded-b-lg">
                    {TABLE_ROWS.map(
                      ({ date, timetracked, starttime, endtime }, index) => {
                        const isLast = index === TABLE_ROWS.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <tr key={index}>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {date}
                              </Typography>
                            </td>
                            <td className={`${classes} `}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {timetracked}
                              </Typography>
                            </td>
                            <td className={classes}>
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {starttime}
                              </Typography>
                            </td>
                            <td className={`${classes} `}>
                              <Typography
                                as="a"
                                href="#"
                                variant="small"
                                color="blue-gray"
                                className="font-medium"
                              >
                                {endtime}
                              </Typography>
                            </td>
                          </tr>
                        );
                      }
                    )}
                  </tbody>
                </table>
                
              </div>
            </div>
          </SideSheetBody>
        </div>
      </SideSheet>
    </div>
  );
}

export default AttendanceReportModal;
