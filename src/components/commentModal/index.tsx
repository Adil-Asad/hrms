import Image from "next/image";
import React from "react";
import { IoClose } from "react-icons/io5";
import { Avatar } from "@material-tailwind/react";

import { Textarea } from "@material-tailwind/react";

export function TextareaDefault() {
  return (
    <div className="w-full">
      <Textarea
        placeholder="Your Message"
        className=" border-none focus:border-transparent"
        labelProps={{
          className: "before:content-none after:content-none",
        }}
      />
    </div>
  );
}

interface CommentModalProps {
  heading?: string;
  img?: string;
  closeModal: Function;
}

function CommentModal({ heading, img, closeModal }: CommentModalProps) {
  function AvatarStack() {
    return (
      <div className="flex items-center -space-x-4 ">
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
        {heading === "Add Comment" ? null : (
          <Avatar
            variant="circular"
            alt="user 6"
            className="border-2 h-[35px] w-[35px] border-white hover:z-10 focus:z-10"
            src={img}
          />
        )}
      </div>
    );
  }

  const handleBackdropClick = (e: any) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleCancelButtonClick = () => {
    closeModal();
  };

  return (
    <div
      onClick={handleBackdropClick}
      className="bg-[#00040945] flex justify-center items-center h-full w-full absolute right-0 top-0 z-10"
    >
      <div className="max-w-[415px] max-h-[520.48px] px-5 py-[15px] bg-white rounded-lg border-t  gap-2.5 flex flex-col ">
        <div className="flex justify-between items-center">
          <div className="text-subheading text-lg font-semibold font-inter leading-[28.80px] tracking-tight">
            {heading}
          </div>
          <div className="hover:cursor-pointer">
            <IoClose onClick={handleCancelButtonClick} />
          </div>
        </div>
        <div className="flex gap-[15px] items-center">
          <Image
            alt="avatar"
            width={40}
            height={40}
            src="/img/ellipse117.png"
            className="rounded-full"
          />
          <div className="text-subheading font-semibold font-inter leading-relaxed tracking-tight">
            Zaire Vaccaro
          </div>
        </div>
        <div className="max-w-[420px] max-h-[22px] justify-start items-center gap-[5px] flex border-t border-[#FBF2D0] pt-4 pb-2">
          <div className="text-dim text-sm font-normal font-inter leading-snug tracking-tight">
            Interview Slot: 08:00 - 09:00 |
          </div>
          <div className="text-dim text-sm font-normal font-inter leading-snug tracking-tight">
            Interview date: Dec 17, 2023
          </div>
        </div>
        <div className=" flex flex-col gap-1 mt-3">
          <h3 className="text-subheading font-inter text-sm  leading-normal  tracking-tight">
            Interviewers
          </h3>
          <div className="">
            <AvatarStack />
          </div>
        </div>
        <div>
          <div className="text-subheading text-base font-semibold font-inter leading-relaxed tracking-tight mt-2">
            Add Comment
          </div>
          <div className="text-text text-base font-normal font-inter leading-normal tracking-tight">
            Comment
          </div>
          <div className="bg-slate rounded-md mt-2">
            <TextareaDefault />
          </div>
          <div className="border-t-2 border-[#80807D4D] mt-3 pt-2 pb-2 justify-end flex gap-2">
            <div
              onClick={handleCancelButtonClick}
              className="max-w-[114px] max-h-11 px-2.5 hover:cursor-pointer py-3 bg-dim bg-opacity-10 rounded-md justify-center items-center gap-2.5 flex"
            >
              <div className="opacity-90 text-center  text-subheading text-base font-semibold font-inter">
                Cancel
              </div>
            </div>
            <div className="hover:cursor-pointer max-w-[114px] max-h-11 px-2.5 py-3 bg-primary rounded-md justify-center items-center gap-2.5 inline-flex">
              <div className="opacity-90 text-center text-white text-base font-semibold font-inter">
                Submit
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentModal;
