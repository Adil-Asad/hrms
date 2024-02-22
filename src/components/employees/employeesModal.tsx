import SideSheetBody, {
  SideSheet,
  SideSheetHeader,
} from "../elements/inputs/sideSheets";
import { Typography } from "@material-tailwind/react";
import PerformancePage from "./performance";
import { useState } from "react";
import SalaryReport from "./salaryReport";
import Image from "next/image";
import AttendenceReport from "./attendanceReport";

const appliedData = [
  {
    heading: "Basic Information",
    label1: "Email",
    label2: "Gender",
    label3: "Address",
    label4: "Phone number",
    label5: "Date of birth",
    text1: "Hakimgulbangash@gmail.com",
    text2: "Male",
    text3: "218 Thorninge Cir, Syracuse, Connecticut 22563",
    text4: "+92 302 3629797",
    text5: "Mar 25, 1997",
  },
  {
    heading: "Academic level",
    label1: "School",
    label2: "Degree",
    label3: "Date",
    label4: "Field of study",
    label5: "Date of birth",
    text1: "New Your University",
    text2: "BS Computer Science",
    text3: "Aug 28, 2015   -   May 30, 2020",
    text4: "Engineer",
    text5: "Mar 25, 1997",
  },
  {
    heading: "Work Experience",
    label1: "Company",
    label2: "Date",

    label4: "Position",

    text1: "Nayatel",
    text2: "Jun 18, 2021   -   Jul 16, 2023",

    text4: "Principal Creative Executive",
  },
];

type EmployeesModalProps = {
  open: boolean;
  handleClose: Function;
};

function EmployeesModal(props: EmployeesModalProps) {
  const [tab, setTab] = useState(0);

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
                  className="text-subheading text-xl font-inter font-semibold  dark:text-white"
                  variant="h1"
                >
                  Zaire Vaccaro
                </Typography>
                <Typography
                  className="text-dim text-sm font-inter font-medium tracking-tight  "
                  variant="paragraph"
                >
                  Profile Match: 90%
                </Typography>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center  dark:text-white">
              <div className="w-full flex">
                <Typography
                  className="text-dim text-sm font-inter"
                  variant="h1"
                >
                  Start Job: &nbsp;
                </Typography>
                <Typography
                  className="text-subheading text-sm font-inter font-semibold  dark:text-white"
                  variant="h1"
                >
                  15 June 2020
                </Typography>
              </div>
              <div className="w-full flex">
                <Typography
                  className="text-dim text-sm font-inter"
                  variant="h1"
                >
                  Job Type: &nbsp;
                </Typography>
                <Typography
                  className="text-subheading text-sm font-inter font-semibold  dark:text-white"
                  variant="h1"
                >
                  On-site
                </Typography>
              </div>
            </div>
          </SideSheetHeader>
          <SideSheetBody>
            <div className="w-full py-[10px] px-[20px] dark:bg-black">
              <div className="w-full bg-lightbackground  px-[20px]  flex justify-between items-center rounded-lg pt-[15px] dark:bg-gray-900">
                <Typography
                  onClick={() => setTab(0)}
                  className={`text-accent text-[16px] font-inter  cursor-pointer pb-[15px] dark:text-white ${
                    tab === 0 && " border-b-[3px] border-primary"
                  }`}
                  variant="h1"
                >
                  Basic Info
                </Typography>
                <Typography
                  onClick={() => setTab(1)}
                  className={`text-accent text-[16px] font-inter  cursor-pointer pb-[15px] dark:text-white ${
                    tab === 1 && " border-b-[3px] border-primary"
                  }`}
                  variant="h1"
                >
                  Performance
                </Typography>
                <Typography
                  onClick={() => setTab(2)}
                  className={`text-accent text-[16px] font-inter  cursor-pointer pb-[15px] dark:text-white ${
                    tab === 2 && " border-b-[3px] border-primary"
                  }`}
                  variant="h1"
                >
                  Salary Report
                </Typography>
                <Typography
                  onClick={() => setTab(3)}
                  className={`text-accent text-[16px] font-inter  cursor-pointer pb-[15px] dark:text-white ${
                    tab === 3 && "border-b-[3px] border-primary"
                  }`}
                  variant="h1"
                >
                  Attendence Report
                </Typography>
              </div>
              <div className="w-full pt-[22px] flex flex-col gap-[22px] justify-center items-center pb-[13px]">
                {tab === 0 ? (
                  <>
                    {" "}
                    {appliedData.map((value, key) => (
                      <div
                        key={key}
                        className="w-full rounded-md border border-dim "
                      >
                        <Typography
                          className="text-subheading text-sm font-inter font-bold px-[20px] py-[10px] border-b border-dim"
                          variant="h1"
                        >
                          {value.heading}
                        </Typography>
                        <div className="w-full flex justify-center items-start">
                          <div className="w-full py-[13px] px-[20px] flex flex-col gap-[12px] justify-center items-center">
                            <div className="w-full">
                              <Typography
                                className="text-sm text-dim font-inter font-medium"
                                variant="paragraph"
                              >
                                {value.label1}
                              </Typography>
                              <Typography
                                className="text-sm text-text  font-inter font-bold"
                                variant="paragraph"
                              >
                                {value.text1}
                              </Typography>
                            </div>
                            <div className="w-full">
                              <Typography
                                className="text-sm text-dim font-inter font-medium"
                                variant="paragraph"
                              >
                                {value.label2}
                              </Typography>
                              <Typography
                                className="text-sm text-text  font-inter font-bold"
                                variant="paragraph"
                              >
                                {value.text2}
                              </Typography>
                            </div>
                            <div className="w-full">
                              <Typography
                                className="text-sm text-dim font-inter font-medium"
                                variant="paragraph"
                              >
                                {value.label3}
                              </Typography>
                              <Typography
                                className="text-sm text-text  font-inter font-bold"
                                variant="paragraph"
                              >
                                {value.text3}
                              </Typography>
                            </div>
                          </div>
                          <div className="w-full flex flex-col gap-[12px] justify-center items-center  pt-[13px] ">
                            <div className="w-full">
                              <Typography
                                className="text-sm text-dim font-inter font-medium"
                                variant="paragraph"
                              >
                                {value.label4}
                              </Typography>
                              <Typography
                                className="text-sm text-text  font-inter font-bold"
                                variant="paragraph"
                              >
                                {value.text4}
                              </Typography>
                            </div>
                            <div className="w-full">
                              <Typography
                                className="text-sm text-dim font-inter font-medium"
                                variant="paragraph"
                              >
                                {value.label5}
                              </Typography>
                              <Typography
                                className="text-sm text-text  font-inter font-bold"
                                variant="paragraph"
                              >
                                {value.text5}
                              </Typography>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ) : tab === 1 ? (
                  <PerformancePage />
                ) : tab === 2 ? (
                  <SalaryReport />
                ) : (
                  <AttendenceReport />
                )}
              </div>
            </div>
          </SideSheetBody>
        </div>
      </SideSheet>
  );
}

export default EmployeesModal;
