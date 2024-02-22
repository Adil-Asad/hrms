import Link from "next/link";

import Typography from "@material-tailwind/react/components/Typography";
import { PrimaryButton } from "../elements/inputs/buttons";
import Image from "next/image";
import Router from "next/router";
import { useState } from "react";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Perform login logic (e.g., API call to authenticate user)
    // Set authentication cookie if login is successful
    if (username === "admin" && password === "admin") {
      document.cookie = `token=your-auth-token; expires=${new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toUTCString()}; path=/`;
      // Redirect user to dashboard or protected route
      router.push("/");
    } else {
      alert("Wrong Username or Password");
    }
  };

  return (
    <div className="w-full h-full flex max-w-[600px] flex-col justify-center items-start px-[26px] gap-[50px]">
      <Image
        width={126}
        height={30}
        className="w-[126px] md:hidden"
        src="/img/whetstonez logo 1.png"
        alt="whetstonez"
      />
      <Typography className="text-[26px]  " variant="h1">
        Login your Account
      </Typography>
      <form onSubmit={handleLogin} className="w-full">
        <div className="w-full  flex flex-col  gap-[30px]">
          <div className="w-full flex flex-col gap-[6px] justify-center items-start text-[#565551] text-base ">
            <label htmlFor="Username">Username</label>
            <input
              id="username"
              className=" bg-[#80807D]/10 w-full px-[24px] py-[15px] outline-none rounded-md"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Enter your username"
            />
          </div>
          <div className="w-full flex flex-col gap-[6px] justify-center items-start text-[#565551] text-base">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              className=" bg-[#80807D]/10 w-full px-[24px] py-[15px] outline-none rounded-md"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Enter your password"
            />
          </div>
        </div>
        <div className="w-full flex flex-col pt-[20px] gap-[38px] justify-start items-center">
          <Link
            href={"/forgot-password"}
            className="w-full text-base font-normal text-[#80807D]  text-right cursor-pointer "
          >
            Forget Password?
          </Link>
          <PrimaryButton className="w-full" label="Login" type="submit" />
        </div>
      </form>
    </div>
  );
};

export default Login;
