import Link from "next/link";
import { PrimaryButton } from "../elements/inputs/buttons";

function VerifyOtp() {
  return (
    <>
      <div className="w-full max-w-[600px] flex flex-col gap-[50px]">
        <div className="flex flex-col justify-center items-start gap-[10px]">
          <h1 className="text-[26px] font-poppins font-semibold text-black">
            Enter OTP
          </h1>
          <span className="font-poppins text-[#80807D] text-[20px] font-normal">
            Enter your OTP to reset your password
          </span>
        </div>
        <div className="w-full flex flex-col justify-center items-start gap-[50px]">
          <div className="w-full flex justify-center items-center gap-[40px]">
            <div className="w-[75px] h-[75px] rounded-lg bg-[#EFEFEF]"></div>
            <div className="w-[75px] h-[75px] rounded-lg bg-[#EFEFEF]"></div>
            <div className="w-[75px] h-[75px] rounded-lg bg-[#EFEFEF]"></div>
            <div className="w-[75px] h-[75px] rounded-lg bg-[#EFEFEF]"></div>
          </div>
        </div>
        <Link className="w-full" href={"/set-new-password"}>
          <PrimaryButton className="w-full" label="Verify" />
        </Link>
      </div>
    </>
  );
}

export default VerifyOtp;
