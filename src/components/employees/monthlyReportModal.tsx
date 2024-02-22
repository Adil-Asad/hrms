import SideSheetBody, {
  SideSheet,
  SideSheetHeader,
} from "@/components/elements/inputs/sideSheets";
import { Typography } from "@material-tailwind/react/components/Typography";
import Image from "next/image";
import { FaLessThan } from "react-icons/fa6";
import { PrimaryButton } from "../elements/inputs/buttons";
import { MouseEventHandler } from "react";

const TABLE_HEAD = [
  "Date",
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thur",
  "Total Week Hours",
  "Total Regular Hours",
  "Total Overtime Hours",
];

const TABLE_ROWS = [
  {
    date: "Jan 1",
    sun: "--",
    mon: "--",
    tue: "--",
    wed: "--",
    thur: "8h",
    totalWeekHours: "8h",
    totalRegularHours: "8h",
    totalOvertimeHours: "--",
  },
  {
    date: "Jan 1",
    sun: "--",
    mon: "--",
    tue: "--",
    wed: "--",
    thur: "8h",
    totalWeekHours: "8h",
    totalRegularHours: "8h",
    totalOvertimeHours: "--",
  },
  {
    date: "Jan 1",
    sun: "--",
    mon: "--",
    tue: "--",
    wed: "--",
    thur: "8h",
    totalWeekHours: "8h",
    totalRegularHours: "8h",
    totalOvertimeHours: "--",
  },
  {
    date: "Jan 1",
    sun: "--",
    mon: "--",
    tue: "--",
    wed: "--",
    thur: "8h",
    totalWeekHours: "8h",
    totalRegularHours: "8h",
    totalOvertimeHours: "--",
  },
  {
    date: "Jan 1",
    sun: "--",
    mon: "--",
    tue: "--",
    wed: "--",
    thur: "8h",
    totalWeekHours: "8h",
    totalRegularHours: "8h",
    totalOvertimeHours: "--",
  },
];
type MonthlyReportModalProps = {
  handleClose: MouseEventHandler<HTMLDivElement>;
  open: boolean;
};

function MonthlyReportModal(props: MonthlyReportModalProps) {
  const { handleClose, open } = props;
  return (
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
              <Typography className="text-sm text-dim font-inter" variant="h1">
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
              <Typography className="text-sm text-dim font-inter" variant="h1">
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
          <div className="w-full flex flex-col gap-[18px] justify-center items-center px-[30px] pt-[24px]">
            <div onClick={handleClose} className="w-full flex gap-[10px] justify-start items-center cursor-pointer ">
              <FaLessThan size={10} />
              <Typography
                className="text-subheading text-sm font-inter font-semibold "
                variant="h1"
              >
                Monthly Report
              </Typography>
            </div>
            <div className="w-full flex gap-[20px] pt-[21px]">
              <div className="w-full flex">
                <div className="w-full bg-black/10">
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    Avg. Daily Hours
                  </Typography>
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    Avg. Daily Hours
                  </Typography>
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    Avg. Daily Hours
                  </Typography>
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    Avg. Daily Hours
                  </Typography>
                </div>

                <div className="w-full bg-white">
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    8h
                  </Typography>
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    1848h 32m
                  </Typography>
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    89h 16m
                  </Typography>
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    02
                  </Typography>
                </div>
              </div>
              <div className="w-full flex">
                <div className="w-full">
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    Pay Type
                  </Typography>
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    Per hour rate
                  </Typography>
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    Total Salary
                  </Typography>
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    Total Leaves
                  </Typography>
                </div>

                <div className="w-full bg-white">
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    Hourly
                  </Typography>
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    5000
                  </Typography>
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    1,50,000
                  </Typography>
                  <Typography
                    className="text-sm text-black font-inter py-[10px] px-[10px] border border-gray-100 "
                    variant="h1"
                  >
                    04
                  </Typography>
                </div>
              </div>
            </div>
            <div className="w-full rounded-md">
              <table className="border border-dim rounded-md w-full">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head) => (
                      <th
                        key={head}
                        className="border  border-dim py-[10px] px-[10px] rounded-md"
                      >
                        <Typography
                          variant="h1"
                          className="text-sm text-black font-inter"
                        >
                          {head}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TABLE_ROWS.map((value, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-2  bg-grass-400 border-none"
                      : "py-2 border-b border-blue-gray-50";

                    return (
                      <tr key={index} className="text-center">
                        <td className={`${classes}  `}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {value.date}
                          </Typography>
                        </td>
                        <td className={`${classes}  `}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {value.sun}
                          </Typography>
                        </td>
                        <td className={`${classes}  `}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {value.mon}
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
                            {value.tue}
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
                            {value.wed}
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
                            {value.thur}
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
                            {value.totalWeekHours}
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
                            {value.totalRegularHours}
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
                            {value.totalOvertimeHours}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </SideSheetBody>
      </div>
    </SideSheet>
  );
}

export default MonthlyReportModal;
