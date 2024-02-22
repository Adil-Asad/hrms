import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import ButtonGroup from "../buttonGroup";
// import ButtonGroup from "./buttonGroup";

type CalenderModalProps = {
  handleModal?: () => void;
};
function CalenderModal({ handleModal }: CalenderModalProps) {
  const [headerToggle, setHeaderToggle] = useState(true);
  return (
    <div className="bg-[#0000004a] w-screen  h-screen flex items-center relative justify-center z-0">
      <div className="dark:bg-black min-w-[480px] min-h-[651px] p-5 bg-white rounded-lg flex-col gap-[12px] flex relative z-20">
        <div className="flex items-center pb-2 justify-between border-b border-[#80807d]">
          <div className=" text-black text-sm font-semibold font-inter leading-[17.50px] tracking-tight">
            Add Calendar
          </div>
          <div className="py-[5px]  ">
            <div>
              <IoClose
                className="text-xl cursor-pointer"
                onClick={handleModal}
              />
            </div>
          </div>
        </div>
        <div className="text-text  font-roboto tracking-tight">
          Add event name
        </div>
        <input
          className=" rounded-md border-none focus:border-none bg-slate text-dim  p-2.5 w-full  "
          placeholder="Event Name"
        />
        <ButtonGroup handleModal={handleModal} />
      </div>
    </div>
  );
}

export default CalenderModal;
