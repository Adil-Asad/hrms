import React from "react";
import { IoClose } from "react-icons/io5";
import { Avatar, Typography } from "@material-tailwind/react";

type DepartmentComponentProps = {
  handleModal?: () => void;
};

function DepartmentComponent({ handleModal }: DepartmentComponentProps) {
  return (
    <div>
      <div className="dark:bg-black my-3 text-my-3 text-text text-base font-normal font-inter leading-normal tracking-tight">
        Interviewer
      </div>
      <div className="flex justify-between border-none  focus:border-transparent  rounded-md bg-slate py-1 text-dim  placeholder-dim placeholder:text-dim ">
        <div className="flex items-center w-full gap-2 ml-3">
          <div className="max-w-[111px]  px-2.5 py-0.5 bg-white rounded-2xl justify-start items-center gap-[5px] flex">
            <div className="text-dim text-base font-normal font-roboto leading-normal tracking-tight">
              Muqaddam
            </div>
            <div className="w-4 h-4">
              <IoClose />
            </div>
          </div>
          <div className=" max-w-[111px] h-7 px-2.5 py-0.5 bg-white rounded-2xl justify-start items-center gap-[5px] flex">
            <div className="text-dim text-base font-normal font-roboto leading-normal tracking-tight">
              Asad
            </div>
            <div className="w-4 h-4">
              <IoClose />
            </div>
          </div>
        </div>
        <input
          id="countries"
          className=" rounded-md border-none focus:border-transparent bg-slate   p-2.5 "
        />
      </div>
      <div className=" my-3  text-text text-base font-normal font-inter leading-normal tracking-tight">
        Candidates
      </div>
      <div className="flex justify-between border-none  focus:border-transparent  rounded-md bg-slate  text-dim  placeholder-dim placeholder:text-dim ">
        <div className="flex items-center w-full gap-2 ml-3">
          <div className=" w-full flex justify-start items-center gap-[24px]   ">
            <div className="w-full py-2 flex items-center -space-x-4 ">
              <Avatar
                variant="circular"
                alt="user 1"
                className="border-2 h-[35px] w-[35px] border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
              <Avatar
                variant="circular"
                alt="user 2"
                className="border-2 h-[35px] w-[35px] border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
              />
              <Avatar
                variant="circular"
                alt="user 3"
                className="border-2 h-[35px] w-[35px] border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
              />
              <Avatar
                variant="circular"
                alt="user 4"
                className="border-2 h-[35px] w-[35px] border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
              />
              <Avatar
                variant="circular"
                alt="user 5"
                className="border-2 h-[35px] w-[35px] border-white hover:z-10 focus:z-10"
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
              />
            </div>
          </div>
        </div>
        <select
          id="countries"
          className=" rounded-md border-none focus:border-transparent bg-slate   p-2.5 "
        >
          <option selected></option>
          <option value="WA">Waqar Ali</option>
          <option value="HG">Hakim Gul</option>
        </select>
      </div>
      <div className="flex w-full gap-3">
        <div className=" w-full ">
          <div className=" my-3 text-text text-base font-normal font-inter leading-normal tracking-tight">
            Interview Type
          </div>
          <div className=" w-full ">
            <select
              id="names"
              className=" rounded-md border-none focus:border-none bg-slate text-dim  px-2.5 py-3.5 w-full  "
            >
              <option selected>On-site</option>
              <option>Online</option>
            </select>
          </div>
        </div>
        <div className=" w-full ">
          <div className=" my-3 text-text text-base font-normal font-inter leading-normal tracking-tight">
            Event Date
          </div>
          <div className=" w-full ">
            <input
              type="date"
              value=""
              className="w-full p-2.5 bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none  border-none "
            ></input>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-3">
        <div className=" w-full ">
          <div className=" my-3 text-text text-base font-normal font-inter leading-normal tracking-tight">
            Select Time
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
            Select Time
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
      <div className=" w-full ">
        <div className=" my-3 text-text text-base font-normal font-inter leading-normal tracking-tight">
          Location
        </div>
        <div className=" w-full ">
          <input
            type="location"
            value="109-k office K Block Gulberg 3 Lahore"
            className="w-full p-2.5 bg-[#EFEFEF]  focus:outline-none text-[#80807D] rounded-md focus:border-none  border-none "
          ></input>
        </div>
      </div>

      <div className="w-full flex-col justify-start items-end mt-[30px] flex">
        <div
          onClick={handleModal}
          className="w-[94px] px-2.5 py-3 bg-primary rounded-md justify-center cursor-pointer items-center gap-2.5 inline-flex"
        >
          <div className=" text-center text-white font-semibold font-inter ">
            Save
          </div>
        </div>
      </div>
    </div>
  );
}

export default DepartmentComponent;
