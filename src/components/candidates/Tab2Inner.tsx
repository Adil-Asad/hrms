import { IoIosAddCircleOutline } from "react-icons/io";
import { BsFilePdf } from "react-icons/bs";
function Tab2Inner() {
  return (
    <div className="flex w-full rounded-md gap-4 mt-3">
      <div className="w-[165px] h-[74px] px-[43px] py-[25px] bg-[#F1F3F2] rounded-lg justify-center items-center gap-2.5 flex">
        <IoIosAddCircleOutline />

        <div className="text-subheading text-sm font-inter leading-normal">
          Create
        </div>
      </div>
      <div className="flex flex-col gap-1.5 items-center justify-center  w-[165px] h-[74px] bg-[#F1F3F2] rounded-lg">
        <BsFilePdf className="size-9" />
        <div className="text-neutral-500 text-sm font-medium font-inter leading-snug tracking-tight">
          Profile Match: 90%
        </div>
      </div>
    </div>
  );
}

export default Tab2Inner;
