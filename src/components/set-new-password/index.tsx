import Link from "next/link";
import { PasswordInput } from "../elements/inputs";
import { PrimaryButton } from "../elements/inputs/buttons";

function SetNewPassword() {
  return (
    <div className="w-full max-w-[600px] flex justify-center items-center ">
      <div className="w-full flex flex-col justify-center items-start gap-[30px]">
        <div className="w-full flex flex-col justify-center items-start">
          <h1 className="text-[26px] font-poppins font-semibold text-black">
            Change Password
          </h1>
          <span className="font-poppins text-[#80807D] text-xl font-normal">
            Enter your new password
          </span>
        </div>
        <PasswordInput
          className="w-full"
          label="New Password"
          placeholder="Enter new password"
        />
        <PasswordInput
          className="w-full"
          label="Confirm Password"
          placeholder="Confirm password"
        />

        <Link className="w-full pt-[20px]" href={"/login"}>
          <PrimaryButton className="w-full" label="Login" />
        </Link>
      </div>
    </div>
  );
}

export default SetNewPassword;
