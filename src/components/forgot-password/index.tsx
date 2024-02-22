import Link from "next/link";
import { EmailInput } from "../elements/inputs";
import { PrimaryButton, RadioButton } from "../elements/inputs/buttons";

function ForgotPassword() {
  return (
    <div className="w-full max-w-[600px] flex flex-col gap-[50px] justify-center items-start ">
      <div className="flex flex-col justify-center items-start gap-[10px]">
        <h1 className="text-black font-poppins text-[26px] font-semibold">
          Forget Password
        </h1>
        <span className="font-poppins text-[20px] font-normal text-[#80807D]">
          Enter your email account to reset your password
        </span>
      </div>
      <div className="w-full flex justify-between items-start flex-col gap-[50px]">
        <div className="flex justify-between items-start w-full ">
          <RadioButton heading={"Email"} />
          <RadioButton heading={"Phone Number"} />
          <div></div>
        </div>
        <EmailInput label="Your Email" className="w-full" />
      </div>
      <Link className="w-full" href={"/verify-otp"}>
        <PrimaryButton className="w-full" label="Forgot Password"/>
      </Link>
    </div>
  );
}
export default ForgotPassword;
