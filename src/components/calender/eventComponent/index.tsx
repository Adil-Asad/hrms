import React from "react";
import { IoClose } from "react-icons/io5";

type EventComponentProps = {
  handleModal?: () => void;
};

function EventComponent({ handleModal }: EventComponentProps) {
  return (
    <div>
      <div className="dark:bg-black my-3  text-text text-base font-normal font-inter leading-normal tracking-tight">
        Event Type
      </div>
      <select
        id="names"
        className=" rounded-md border-none focus:border-none bg-slate text-dim  px-2.5 py-3.5 w-full  "
      >
        <option selected>Holiday</option>
        <option value="WA">Onsite</option>
      </select>
      <div className=" w-[50%] ">
        <div className=" my-3 text-text text-base font-normal font-inter leading-normal tracking-tight">
          Event Time
        </div>
        <div className=" w-full ">
          <input
            type="date"
            className="w-full p-2.5 bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none  border-none "
          ></input>
        </div>
      </div>
      <div className="flex w-full gap-3">
        <div className=" w-full ">
          <div className=" my-3 text-text text-base font-normal font-inter leading-normal tracking-tight">
            Event Time
          </div>
          <div className=" w-full ">
            <input
              type="time"
              className="w-full p-2.5 bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none  border-none "
            ></input>
          </div>
        </div>
        <div className=" w-full ">
          <div className=" my-3 text-text text-base font-normal font-inter leading-normal tracking-tight">
            Event Time
          </div>
          <div className=" w-full ">
            <input
              type="time"
              value=""
              className="w-full p-2.5 bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none  border-none "
            ></input>
          </div>
        </div>
      </div>
      <div className=" w-full ">
        <div className=" my-3 text-text text-base font-normal font-inter leading-normal tracking-tight">
          Description
        </div>
        <div className=" w-full ">
          <textarea
            placeholder="Type something here"
            className="w-full p-2.5 bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none  border-none "
          ></textarea>
        </div>
      </div>

      <div className="w-full flex-col justify-start items-end mt-[30px] flex">
        <div
          onClick={handleModal}
          className="w-[94px] px-2.5 py-3 bg-primary cursor-pointer rounded-md justify-center items-center gap-2.5 inline-flex"
        >
          <div className=" text-center text-white font-semibold font-inter ">
            Save
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventComponent;
