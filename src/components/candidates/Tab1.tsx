import { Typography } from "@material-tailwind/react";
import { CiEdit } from "react-icons/ci";

// field data tab 1
const appliedData1 = [
  {
    heading: "Interview Schedule",
    label1: "Interviewer",
    label2: "Date",
    label4: "Interview Format",
    label5: "Time",
    text1: "Waqar Ali, Hakim Gul",
    text2: "Sep 06, 2024",
    text4: "Online",
    text5: "02:30 PM - 3:00 PM",
  },
];

type Tab1Props = {
  interviewToggle?: () => void;
  handleSideSheet?: () => void;
};

function Tab1({ interviewToggle, handleSideSheet }: Tab1Props) {
  return (
    <>
      {appliedData1.map((value, key) => (
        <>
          <div key={key} className="w-full rounded-md border border-dim ">
            <Typography
              className="text-subheading text-sm font-inter flex justify-between font-bold px-[20px] py-[10px] border-b border-dim"
              variant="h1"
            >
              {value.heading}
              <div
                onClick={() => {
                  interviewToggle?.();
                  handleSideSheet?.();
                }}
                className="flex items-center gap-1.5 cursor-pointer"
              >
                <div>
                  <CiEdit className="cursor-pointer size-4" />
                </div>
                <button>Edit</button>
              </div>
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
                <div className="w-full"></div>
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
          <div className="text-dim text-sm font-medium font-inter leading-normal tracking-tight">
            Date: Sep 27, 2023
          </div>
        </>
      ))}
    </>
  );
}

export default Tab1;
