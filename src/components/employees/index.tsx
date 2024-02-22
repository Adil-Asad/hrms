import RecruitmentEmployeesLayout from "@/layouts/recruitmentEmployeesLayout";
import { Checkbox, Typography } from "@material-tailwind/react";
import Image from "next/image";
import { useState } from "react";
import EmployeesModal from "./employeesModal";

const TABLE_HEAD = [
  "Profile",
  "Full Name",
  "Gender",
  "Email",
  "Phone number",
  "Position",
  "Joining Date",
];

const TABLE_ROWS = [
  {
    profile: "John Michael",
    fullName: "alicia",
    gender: "Male",
    Email: " alicia123@gmail.com",
    phnNum: "+923415222535",
    position: "Frontend dev",
    joiningDate: "01-09-2023",
  },
  {
    profile: "John Michael",
    fullName: "alicia",
    gender: "Male",
    Email: " alicia123@gmail.com",
    phnNum: "+923415222535",
    position: "Frontend dev",
    joiningDate: "01-09-2023",
  },
  {
    profile: "John Michael",
    fullName: "alicia",
    gender: "Male",
    Email: " alicia123@gmail.com",
    phnNum: "+923415222535",
    position: "Frontend dev",
    joiningDate: "01-09-2023",
  },
  {
    profile: "John Michael",
    fullName: "alicia",
    gender: "Male",
    Email: " alicia123@gmail.com",
    phnNum: "+923415222535",
    position: "Frontend dev",
    joiningDate: "01-09-2023",
  },
  {
    profile: "John Michael",
    fullName: "alicia",
    gender: "Male",
    Email: " alicia123@gmail.com",
    phnNum: "+923415222535",
    position: "Frontend dev",
    joiningDate: "01-09-2023",
  },
  {
    profile: "John Michael",
    fullName: "alicia",
    gender: "Male",
    Email: " alicia123@gmail.com",
    phnNum: "+923415222535",
    position: "Frontend dev",
    joiningDate: "01-09-2023",
  },
  {
    profile: "John Michael",
    fullName: "alicia",
    gender: "Male",
    Email: " alicia123@gmail.com",
    phnNum: "+923415222535",
    position: "Frontend dev",
    joiningDate: "01-09-2023",
  },
  {
    profile: "John Michael",
    fullName: "alicia",
    gender: "Male",
    Email: " alicia123@gmail.com",
    phnNum: "+923415222535",
    position: "Frontend dev",
    joiningDate: "01-09-2023",
  },
  {
    profile: "John Michael",
    fullName: "alicia",
    gender: "Male",
    Email: " alicia123@gmail.com",
    phnNum: "+923415222535",
    position: "Frontend dev",
    joiningDate: "01-09-2023",
  },
  {
    profile: "John Michael",
    fullName: "alicia",
    gender: "Male",
    Email: " alicia123@gmail.com",
    phnNum: "+923415222535",
    position: "Frontend dev",
    joiningDate: "01-09-2023",
  },
];

function Employees() {
  const [openEmployeesModal, setOpenEmployeesModal] = useState<boolean>(false);
  return (
    <div className="w-full  px-[27px] py-[32px] dark:bg-black dark:text-white">
      <RecruitmentEmployeesLayout
        heading="Employees"
        paragraph="All the employees of the company are listed here."
        style="hidden"
      />
      <div className="w-full dark:bg-black dark:text-white">
        <div className="w-full dark:bg-black dark:text-white">
          <div>
            <table className="w-full min-w-max table-auto text-left divide-y-8 divide-[#F9F8F7]  dark:text-white">
              <thead>
                <tr className=" bg-white p-4 text rounded-md dark:bg-gray-900 dark:text-white">
                  <th>
                    <Checkbox color="amber" />
                  </th>
                  {TABLE_HEAD.map((head, id) => (
                    <th key={id}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="text-[14px] text-accent font-inter font-semibold  dark:text-white"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:bg-gray-700 dark:text-white">
                {TABLE_ROWS.map(
                  (
                    {
                      profile,
                      fullName,
                      gender,
                      Email,
                      phnNum,
                      position,
                      joiningDate,
                    },
                    index
                  ) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = "py-1 border-b border-[#D5DCD7]";

                    return (
                      <tr
                        onClick={() => setOpenEmployeesModal(true)}
                        key={profile}
                        className="bg-white dark:bg-gray-900 dark:text-white"
                      >
                        <td className={classes}>
                          <Checkbox color="amber" />
                        </td>
                        <td className={classes}>
                          <Image
                            width={0}
                            height={0}
                            src={"/icons/Ellipse 113.svg"}
                            alt="profile"
                            className="w-auto h-auto dark:text-white"
                          />
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="h1"
                            className="text-[14px] font-inter text-subheading dark:text-white"
                          >
                            {fullName}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="h1"
                            className="text-[14px] font-inter text-subheading font-normal dark:text-white"
                          >
                            {gender}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="h1"
                            className="text-[14px] font-inter text-subheading font-normal dark:text-white"
                          >
                            {Email}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="h1"
                            className="text-[14px] font-inter text-subheading font-normal dark:text-white"
                          >
                            {phnNum}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="h1"
                            className="text-[14px] font-inter text-subheading font-normal dark:text-white"
                          >
                            {position}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="h1"
                            className="text-[14px] font-inter text-subheading font-normal dark:text-white"
                          >
                            {joiningDate}
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
      </div>
      <EmployeesModal
        open={openEmployeesModal}
        handleClose={() => setOpenEmployeesModal(false)}
      />
    </div>
  );
}

export default Employees;
