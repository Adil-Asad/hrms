import Image from "next/image";
import React, { ReactNode } from "react";

type MainModalProps = {
  img: string;
  heading: string;
  subHeading?: string;
  children?: ReactNode;
};

function MainModal(props: MainModalProps) {
  const { img, heading, children, subHeading } = props;
  return (
    <div className="bg-white rounded-xl w-[542px] h-[369px] ">
      <div className="flex flex-col items-center gap-2 mt-8">
        <Image
          alt="icon"
          width={120}
          height={120}
          src={img}
          className="mt-12"
        />
        <div className=" w-full max-w-[371px] m-2 text-center text-[#41403C]  text-2xl font-bold font-inter leading-7">
          {heading}
        </div>
        <div className=" max-w-[452px] text-subheading text-center text-sm font-medium font-inter leading-7">
          {subHeading}
        </div>
        <>{children}</>
      </div>
    </div>
  );
}

export default MainModal;
