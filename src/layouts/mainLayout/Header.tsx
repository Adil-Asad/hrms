import React from "react";

import { useRouter, NextRouter } from "next/router";

import {
  Button,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

import { CiSearch } from "react-icons/ci";
import { VscBellDot } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";

import { headerlabels } from "./headerLabels";
import Image from "next/image";

function Header() {
  const router: NextRouter = useRouter();
  const handleLogout = (router: NextRouter) => {
    // Clear authentication token (or any other authentication state)
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    // Refresh the page to redirect to the login page
    router.reload();
  };

  return (
    <div className="dark:bg-black w-full flex gap-[35px] justify-between px-[32px]  items-center h-[88px] light:bg-white bg-white">
    <div className="flex gap-[20px]">
      <div>
        {headerlabels.map((value, index) => (
          <Typography
            key={index}
            className="text-[#738C79] text-base dark:bg-black dark:text-white"
            variant="h1"
          >
            {value.href === router.pathname ? value.label : ""}
          </Typography>
        ))}
      </div>
    </div>
    <div className="flex gap-[32px] justify-center items-center dark:bg-black dark:text-white text-black">
      <div className="dark:bg-black dark:text-white dark:border-white w-[263px]  h-[48px] flex gap-[12px] justify-start items-center px-[16px] border  border-[#80807D] rounded-lg">
        <CiSearch  className="dark:bg-black dark:text-white"/>
        <input className="outline-none dark:bg-black " type="text" placeholder="Search..." />
      </div>
      <VscBellDot />
      <div className="flex gap-[12px] justify-center items-center dark:bg-black dark:text-white">
        <Image
          width={0}
          height={0}
          src="/icons/picture.svg"
          alt="profilePicture"
          className="w-auto h-auto rounded-[20px]"
        />
        <div className="dark:bg-black dark:text-white text-black">
          <Typography className="text-sm" variant="h1">
            Hakim gul
          </Typography>
          <Typography className="text-xs" variant="paragraph">
            Project Manager
          </Typography>
        </div>
        <Menu>
          <MenuHandler>
            <Button className="bg-transparent shadow-none hover:shadow-none ">
              <IoIosArrowDown className=" dark:bg-black text-black dark:text-white" />
            </Button>
          </MenuHandler>
          <MenuList className="dark:bg-black dark:text-white">
            <MenuItem>Profile</MenuItem>
            <MenuItem>Setting</MenuItem>
              <MenuItem onClick={() => handleLogout(router)}>Logout</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Header;
