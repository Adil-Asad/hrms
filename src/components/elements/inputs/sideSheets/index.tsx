import { IconButton } from "@material-tailwind/react/components/IconButton";
import { ReactNode } from "react";

import { RxCross2 } from "react-icons/rx";

type SideSheetProps = {
  className?: string;
  handleClose: Function;
  children?: ReactNode;
  heading?: string;
  iconStyle?: string;
  open?: boolean;
  switchTab?: Function;
};

export const SideSheet = (props: SideSheetProps) => {
  const {
    open,
    children,
    heading,
    className,
    iconStyle,
    handleClose,
    switchTab,
  } = props;

  return (
    <>
      {open ? (
        <div className="w-full flex justify-end items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black/70 bg-opacity-60">
          <div className="relative w-auto min-w-[700px] max-w-[700px] h-auto">
            <div
              className={`border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none ${className} `}
            >
              <div
                className={`w-full bg-grayish dark:bg-gray-900 flex items-startjustify-between border-solid border-gray-300 rounded-t  ${iconStyle}`}
              >
                <div className="absolute right-[102%]">
                  <IconButton
                    color="white"
                    className=""
                    onClick={() => {
                      handleClose();
                      switchTab?.(0);
                    }}
                  >
                    <RxCross2 />
                  </IconButton>
                </div>
              </div>
              <div className="w-full dark:bg-black flex-auto h-full min-h-[800px]">
                {children}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

type SideSheetheaderProps = {
  handleClose: Function;
  children: ReactNode;
  className?: string;
};

export function SideSheetHeader(props: SideSheetheaderProps) {
  const { handleClose, children, className } = props;

  return (
    <div
      className={`w-full rounded-lg bg-grayish dark:bg-black py-[19px] px-[30px] flex  justify-between items-center ${className} `}
    >
      {children}
    </div>
  );
}

type SideSheetBodyProps = {
  children: ReactNode;
};

function SideSheetBody(props: SideSheetBodyProps) {
  const { children } = props;
  return <div className="w-full">{children}</div>;
}

export default SideSheetBody;
