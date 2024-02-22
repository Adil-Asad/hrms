import { Switch, Typography } from "@material-tailwind/react";
import React, { ChangeEvent } from "react";

import { useRouter } from "next/router";
import Link from "next/link";
import { sidebarItems } from "./sidebarItems";
import Image from "next/image";
import { useTheme } from "next-themes";

function SideBar() {
  const { resolvedTheme, theme, setTheme } = useTheme();
  type SideBarProps = {
    toggleDarkMode?: () => void;
  };

  const router = useRouter();

  return (
    <div className=" w-[250px] bg-white pb-[80px] h-screen flex flex-col items-start justify-between px-[10px] sticky top-0 dark:bg-black dark:text-white">
      <div className="w-full dark:bg-black dark:text-white">
        <div className="pt-[26px] pb-[32px] border-b pl-[32px] border-[#F1F5F9] ">
          <Image
            width={126}
            height={30}
            src="/img/whetstonez logo 1.png"
            alt="whetstonez"
          />
        </div>

        <div className="w-full px-[16px] dark:bg-black dark:text-white">
          <Typography
            className="text-[#80807D] text-xs uppercase pt-[32px] pb-[16px] px-[16px] dark:bg-black dark:text-white"
            variant="h1"
          >
            Menu
          </Typography>
          {sidebarItems.map((value, index) => (
            <Link
              href={value.href}
              key={index}
              className={`w-full flex gap-[16px] items-center justify-start py-[13px] rounded-xl px-[16px] dark:text-white ${
                value.href === router.pathname
                  ? "dark:bg-[#7a7b7b] bg-gray-400 text-[##738C79]"
                  : ""
              }`}
            >
              <Image
                width={0}
                height={0}
                className="w-auto h-auto"
                src={
                  value.href === router.pathname
                    ? value.selectedIcon
                    : value.icon
                }
                alt="dashboard"
              />
              <Typography
                className={`text-sm  dark:text-white ${
                  value.href === router.pathname
                    ? "text-[#738C79] "
                    : "text-[#41403C] "
                }`}
                variant="h1"
              >
                {value.label}
              </Typography>
            </Link>
          ))}
        </div>
      </div>

      <div className="w-full px-[32px] pt-[91px] dark:bg-black dark:text-white">
        <div className="flex gap-[16px] justify-start items-center py-[13px] dark:bg-black dark:text-white">
          <Image
            src="/icons/setting.svg"
            alt="setting"
            width={0}
            height={0}
            className="w-auto h-auto"
          />
          <Typography
            className=" text-sm  text-[#41403C] dark:bg-black dark:text-white"
            variant="h1"
          >
            Setting
          </Typography>
        </div>
        <div className=" flex justify-between items-center py-[13px] dark:bg-black dark:text-white">
          <Image
            width={0}
            height={0}
            src="/icons/darkmode.svg"
            alt="darkmode"
            className="w-auto h-auto "
          />
          <Typography
            className=" text-sm text-[#41403C] dark:bg-black dark:text-white"
            variant="h1"
          >
            Dark Mode
          </Typography>

          <Switch
            onClick={() => {
              setTheme(resolvedTheme === "light" ? "dark" : "light");
            }}
            // ripple={`${resolvedTheme === "light" ? true : false}`}
            ripple={true}
            className="bg-gray-100 "
            crossOrigin={undefined}
          />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
