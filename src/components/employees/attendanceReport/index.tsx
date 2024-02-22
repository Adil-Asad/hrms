import { Select, Typography, Option } from "@material-tailwind/react";
import { useState } from "react";
import AttendanceReportModal from "../attendanceReportModal";

const TABLE_HEAD = [
  "Date",
  "Time Tracked",
  "Start Time",
  "End Time",
  "View Record",
];

const TABLE_ROWS = [
  {
    date: "Wed, Jan 1",
    timeTracked: "8h 30m",
    startTime: "8:10AM",
    endTime: "5:20AM",
    viewRecord: "View Detail",
  },
  {
    date: "Thur Jan 2",
    timeTracked: "8h 22m",
    startTime: "8:20AM",
    endTime: "6:00PM",
    viewRecord: "View Detail",
  },
  {
    date: "Sun Jan 5",
    timeTracked: "om",
    startTime: "00:00",
    endTime: "0m",
    viewRecord: "View Detail",
  },
  {
    date: "Mon jan 6",
    timeTracked: "om",
    startTime: "00:00",
    endTime: "0m",
    viewRecord: "View Detail",
  },
  {
    date: "Tue jan 7",
    timeTracked: "8h 10m",
    startTime: "10:00AM",
    endTime: "7:00PM",
    viewRecord: "View Detail",
  },
  {
    date: "Wed jan 8",
    timeTracked: "7h 30m",
    startTime: "10:00AM",
    endTime: "7:00pm",
    viewRecord: "View Detail",
  },
  {
    date: " thur jan 9",
    timeTracked: "8h",
    startTime: "10:00AM",
    endTime: "7:00PM",
    viewRecord: "View Detail",
  },
];

function AttendenceReport() {
  const [openAttendanceModal, setOpenAttendanceModal] = useState(false);
  return (
    <div className="w-full rounded-md">
      <div className="w-full flex gap-[5px] justify-center items-center ">
        <button className="bg-[#f4f4f4] text-dim rounded-md text-sm font-inter px-[14px] py-[10px]">
          Export
        </button>
        <div className="w-full max-w-[250px]">
          <Select
            className="bg-[#f4f4f4] border-none"
            label="(UTC +03:00) Riyadh, Asia"
          >
            <Option>(UTC +03:00) Riyadh, Asia</Option>
            <Option>(UTC +03:00) Riyadh, Asia</Option>
            <Option>(UTC +03:00) Riyadh, Asia</Option>
            <Option>(UTC +03:00) Riyadh, Asia</Option>
            <Option>(UTC +03:00) Riyadh, Asia</Option>
          </Select>
        </div>
        <div className="w=full max-w-[100px]">
          <Select className="bg-[#f4f4f4] border-none" label="Past 7 Days">
            <Option>Past 1 Month</Option>
            <Option>Past 1 Month</Option>
            <Option>Past 1 Month</Option>
            <Option>Past 1 Month</Option>
            <Option>Past 1 Month</Option>
          </Select>
        </div>
      </div>
      <div className="w-full pt-[16px]">
        <Typography
          className="text-sm font-inter font-bold text-subheading  border-l border-r border-t border-dim px-[20px] py-[10px]"
          variant="h1"
        >
          My Working Patterns
        </Typography>
      </div>
      <table className="border border-y-1 border-dim rounded-md w-full">
        <thead className="border-b">
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className=" py-[10px]  rounded-md">
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
              ? "py-[25px] border-none"
              : "py-2 border-b border-blue-gray-50 py-[25px]  ";

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
                    {value.timeTracked}
                  </Typography>
                </td>
                <td className={`${classes}  `}>
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal"
                  >
                    {value.startTime}
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
                    {value.endTime}
                  </Typography>
                </td>
                <td
                  onClick={() => setOpenAttendanceModal(true)}
                  className={`${classes} `}
                >
                  <Typography
                    as="a"
                    href="#"
                    variant="small"
                    color="blue-gray"
                    className="font-medium underline"
                  >
                    {value.viewRecord}
                  </Typography>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <AttendanceReportModal
        open={openAttendanceModal}
        handleClose={() => setOpenAttendanceModal(false)}
      />
    </div>
  );
}

export default AttendenceReport;
