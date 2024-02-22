import { Input, Option, Select } from "@material-tailwind/react";
import { ReactNode, useState } from "react";

// icons
import { Checkbox } from "@material-tailwind/react";
import Image from "next/image";
import { BsThreeDots } from "react-icons/bs";
import { CiCalendarDate, CiSearch } from "react-icons/ci";

import CandidateModal from "./CandidateModal";

// data arrays for candidates
const candidatesData = [
  {
    avatar: "/img/Ellipse113.jpeg",
    pdName: "Kianna Schleifer",
    pMatch: "90%",
    gender: "Female  ",
    phoneNumber: "+92 302 3629797 ",
    position: "Frontend  Developer",
    appliedDate: "Fri - 17 Aug 2023",
  },
  {
    avatar: "/img/Ellipse114.png",
    pdName: "Kianna Schleifer",
    pMatch: "92%",
    gender: "Female  ",
    phoneNumber: "+92 343 3629786 ",
    position: "Frontend  Developer",
    appliedDate: "Fri - 17 Aug 2023",
  },
  {
    avatar: "/img/Ellipse115.png",
    pdName: "Kianna Schleifer",
    pMatch: "80%",
    gender: "Male  ",
    phoneNumber: "+92 312 3629726 ",
    position: "UX-UI Designer",
    appliedDate: "Fri - 17 Aug 2023",
  },
  {
    avatar: "/img/Ellipse116.png",
    pdName: "Kianna Schleifer",
    pMatch: "68%",
    gender: "Male  ",
    phoneNumber: "+92 302 3629797 ",
    position: "Frontend  Developer",
    appliedDate: "Fri - 17 Aug 2023",
  },
  {
    avatar: "/img/Ellipse117.png",
    pdName: "Kianna Schleifer",
    pMatch: "90%",
    gender: "Female  ",
    phoneNumber: "+92 302 3629797 ",
    position: "UX-UI Designer",
    appliedDate: "Fri - 17 Aug 2023",
  },

  {
    avatar: "/img/Ellipse116.png",
    pdName: "Kianna Schleifer",
    pMatch: "68%",
    gender: "Male  ",
    phoneNumber: "+92 302 3629797 ",
    position: "Frontend  Developer",
    appliedDate: "Fri - 17 Aug 2023",
  },
  {
    avatar: "/img/Ellipse115.png",
    pdName: "Kianna Schleifer",
    pMatch: "80%",
    gender: "Male  ",
    phoneNumber: "+92 312 3629726 ",
    position: "UX-UI Designer",
    appliedDate: "Fri - 17 Aug 2023",
  },

  {
    avatar: "/img/Ellipse115.png",
    pdName: "Kianna Schleifer",
    pMatch: "80%",
    gender: "Male  ",
    phoneNumber: "+92 312 3629726 ",
    position: "UX-UI Designer",
    appliedDate: "Fri - 17 Aug 2023",
  },
  {
    avatar: "/img/Ellipse116.png",
    pdName: "Kianna Schleifer",
    pMatch: "68%",
    gender: "Male  ",
    phoneNumber: "+92 302 3629797 ",
    position: "Frontend  Developer",
    appliedDate: "Fri - 17 Aug 2023",
  },
  {
    avatar: "/img/Ellipse114.png",
    pdName: "Kianna Schleifer",
    pMatch: "92%",
    gender: "Female  ",
    phoneNumber: "+92 343 3629786 ",
    position: "Frontend  Developer",
    appliedDate: "Fri - 17 Aug 2023",
  },
  {
    avatar: "/img/Ellipse115.png",
    pdName: "Kianna Schleifer",
    pMatch: "80%",
    gender: "Male  ",
    phoneNumber: "+92 312 3629726 ",
    position: "UX-UI Designer",
    appliedDate: "Fri - 17 Aug 2023",
  },
];
// colored tabs
const tabs = [
  {
    heading: "Applied",
  },
  {
    heading: "Interviewing",
  },
  {
    heading: "Offer",
  },
  {
    heading: "Recruited",
  },
  {
    heading: "Rejected",
  },
];
// field data
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
// checkbox
export function CheckboxDefault() {
  return <Checkbox />;
}

// icon input
interface InputIconProps {
  icon1: ReactNode;
  placeholder?: string;
}
export function InputIcon({ icon1, placeholder }: InputIconProps) {
  return (
    <div className="max-w-72 ">
      <Input
        className="dark:bg-gray-900 border-none  focus:border-transparent  rounded-md bg-white  text-dim  placeholder-dim placeholder:text-dim focus:placeholder-opacity-1 placeholder:opacity-100 "
        placeholder={placeholder}
        labelProps={{
          className: "before:content-none after:content-none ",
        }}
        icon={icon1}
      />
    </div>
  );
}

function Candidates() {
  const [openModal, setOpenModal] = useState(false);
  const handleToggle = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <div className="bg-slate p-7 min-h-[100%] relative dark:bg-black dark:text-white">
        <div className="text-accent mb-2 text-xl font-semibold font-inter leading-[25px] tracking-tight w-full h-[25px] flex flex-col  gap-[5px]  dark:text-white ">
          Candidates
        </div>
        <div className="flex justify-between items-center dark:bg-black dark:text-white">
          <div className="flex items-center gap-2 dark:bg-black dark:text-white">
            <h3 className="text-subheading text-sm font-medium font-inter leading-[21px] dark:bg-black dark:text-white">
              Filter by
            </h3>
            <div className=" dark:bg-gray-900 dark:text-white px-[24px] py-[11px] flex justify-between items-center rounded-md bg-white">
              <select
                className="dark:bg-gray-900 dark:text-white bg-white outline-none w-full text-dim"
                id="gender"
                name="gender"
              >
                <option value="" selected disabled>
                  Department
                </option>

                <option value={1}>UI & UX Department</option>
                <option value={2}>Business Department</option>
                <option value={3}>Developers Department</option>
              </select>
            </div>

            <input
              className="dark:bg-gray-900 dark:text-white px-[14px] py-[7px] bg-white outline-none rounded-md text-dim"
              placeholder="Select date "
              type="date"
            />

            <h4 className="text-grass-200 text-sm font-medium font-inter leading-[21px] dark:bg-black dark:text-white">
              clear
            </h4>
          </div>
          <div className="dark:bg-black dark:text-white">
            <InputIcon icon1={<CiSearch />} placeholder="Search..." />
          </div>
        </div>
        <div className="w-full items-center justify-between bg-white h-14 px-5 py-3 rounded-md flex my-2  dark:bg-blue-gray-900 dark:text-white">
          <div className="flex gap-1 items-center w-[234px] dark:text-white">
            <CheckboxDefault />
            <div className="text-accent text-sm font-semibold font-inter leading-snug tracking-tight dark:text-white">
              Product Designer
            </div>
          </div>

          <div className="w-[199px] text-accent text-sm font-semibold font-inter leading-snug tracking-tight dark:text-white">
            Profile Match
          </div>
          <div className="w-[199px] text-accent text-sm font-semibold font-inter leading-snug tracking-tight dark:text-white">
            Gender
          </div>
          <div className="w-[199px] text-accent text-sm font-semibold font-inter leading-snug tracking-tight dark:text-white">
            Phone number
          </div>
          <div className="w-[199px] text-accent text-sm font-semibold font-inter leading-snug tracking-tight dark:text-white">
            Position
          </div>
          <div className="w-[199px] text-accent text-sm font-semibold font-inter leading-snug tracking-tight dark:text-white">
            Applied date
          </div>
        </div>
        {candidatesData.map(
          (
            {
              avatar,
              pdName,
              pMatch,
              gender,
              phoneNumber,
              position,
              appliedDate,
            },
            i
          ) => (
            <div
              key={i}
              className="w-full items-center justify-between bg-white h-14 px-5 py-3 rounded-t-md flex border-b border-[#D5DCD7] dark:bg-blue-gray-800 dark:text-white"
            >
              <div className="flex gap-1 items-center w-[234px] dark:text-white">
                <CheckboxDefault />
                <div className="flex gap-[15px] items-center dark:text-white">
                  <Image
                    alt="avatar"
                    width={40}
                    height={40}
                    src={avatar}
                    className="rounded-full"
                  />
                  <div className="text-subheading text-sm font-medium font-inter leading-snug tracking-tight dark:text-white">
                    {pdName}
                  </div>
                </div>
              </div>

              <div className="w-[199px] text-subheading text-sm font-medium font-inter leading-snug tracking-tight dark:text-white">
                {pMatch}
              </div>

              <div className="w-[199px] text-subheading text-sm font-medium font-inter leading-snug tracking-tight dark:text-white">
                {gender}
              </div>

              <div className="w-[199px] text-subheading text-sm font-medium font-inter leading-snug tracking-tight dark:text-white">
                {phoneNumber}
              </div>

              <div className="w-[199px] text-subheading text-sm font-medium font-inter leading-snug tracking-tight dark:text-white">
                {position}
              </div>

              <div className="w-[199px] flex gap-4 items-center text-subheading text-sm font-medium font-inter leading-snug tracking-tight dark:text-white">
                {appliedDate}
                <BsThreeDots
                  onClick={() => setOpenModal(true)}
                  className="text-xl hover:cursor-pointer"
                />
              </div>
            </div>
          )
        )}
      </div>
      {
        <CandidateModal
          open={openModal}
          handleClose={() => setOpenModal(false)}
        />
      }
    </>
  );
}

export default Candidates;
