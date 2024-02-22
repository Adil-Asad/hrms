import { Typography } from "@material-tailwind/react";
import React, { useState } from "react";
import MonthlyReportModal from "../monthlyReportModal";

const TABLE_HEAD = [
  "Month",
  "Regular Hours",
  "Overtime Hours",
  "Total Hours",
  "Total Salary",
];

const TABLE_ROWS = [
  {
    january: "Jan 1",
    regularhour: "--",
    overtimehours: "--",
    totalhours: "--",
    totalsalary: "--",
  },
  {
    january: "Jan 1",
    regularhour: "8h",
    overtimehours: "7h",
    totalhours: "8h",
    totalsalary: "8h",
  },
  {
    january: "Jan 1",
    regularhour: "8h",
    overtimehours: "7h",
    totalhours: "8h",
    totalsalary: "8h",
  },
  {
    january: "Jan 1",
    regularhour: "8h",
    overtimehours: "7h",
    totalhours: "8h",
    totalsalary: "8h",
  },
  {
    january: "Jan 1",
    regularhour: "8h",
    overtimehours: "7h",
    totalhours: "8h",
    totalsalary: "8h",
  },
  {
    january: "Jan 1",
    regularhour: "8h",
    overtimehours: "7h",
    totalhours: "8h",
    totalsalary: "8h",
  },
  {
    january: "Jan 1",
    regularhour: "8h",
    overtimehours: "7h",
    totalhours: "8h",
    totalsalary: "8h",
  },
  {
    january: "Jan 1",
    regularhour: "8h",
    overtimehours: "7h",
    totalhours: "8h",
    totalsalary: "8h",
  },
  {
    january: "Jan 1",
    regularhour: "8h",
    overtimehours: "7h",
    totalhours: "8h",
    totalsalary: "8h",
  },
  {
    january: "Jan 1",
    regularhour: "8h",
    overtimehours: "7h",
    totalhours: "8h",
    totalsalary: "8h",
  },
  {
    january: "Jan 1",
    regularhour: "8h",
    overtimehours: "7h",
    totalhours: "8h",
    totalsalary: "8h",
  },
  {
    january: "Jan 1",
    regularhour: "8h",
    overtimehours: "7h",
    totalhours: "8h",
    totalsalary: "8h",
  },
];

function SalaryReport() {
  const [openMonthlyModal, setOpenMonthlyModal] = useState<boolean>(false);
  return (
    

    <div className="w-full flex flex-col gap-[18px] justify-center items-center">
      <div className="w-full flex gap-[20px]">
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
                <tr
                  onClick={() => setOpenMonthlyModal(true)}
                  key={index}
                  className="text-center"
                >
                  <td className={`${classes}  `}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {value.january}
                    </Typography>
                  </td>
                  <td className={`${classes}  `}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {value.regularhour}
                    </Typography>
                  </td>
                  <td className={`${classes}  `}>
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {value.overtimehours}
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
                      {value.totalhours}
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
                      {value.totalsalary}
                    </Typography>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <MonthlyReportModal
        open={openMonthlyModal}
        handleClose={() => setOpenMonthlyModal(false)}
      />
    </div>
  );
}

export default SalaryReport;
