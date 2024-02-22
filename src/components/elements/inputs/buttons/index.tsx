import { useState } from "react";

type RadioButtonProps = {
  heading: string;
};

export function RadioButton(props: RadioButtonProps) {
  const { heading = "" } = props;

  const [check, setCheck] = useState(false);
  return (
    <div className="flex gap-5 justify-start items-center">
      {" "}
      <div
        onClick={() => setCheck(!check)}
        className="rounded-full w-[18px] h-[18px] border border-[#D9D9D9] flex justify-center items-center"
      >
        {check ? (
          <div className="bg-[#ECBE13] rounded-full w-[10px] h-[10px]"></div>
        ) : (
          ""
        )}
      </div>
      <h1 className="text-dim text-sm font-inter font-normal">{heading}</h1>
    </div>
  );
}
/**
 * This function is return
 * @param {*} props
 * @returns primary button
 */
type PrimaryButtonProps = {
  label: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
export const PrimaryButton = (props: PrimaryButtonProps) => {
  const { label, className, ...rest } = props;
  return (
    <button
      className={`dark:bg-gray-900 bg-primary font-inter font-semibold text-white text-[15px] rounded-[6px] px-[30px] py-[10px]
     hover:bg-secondary border hover:border-primary disabled:bg-[#F7E5A1] ${className}`}
      {...rest}
    >
      {label}
    </button>
  );
};

/**
 * This function is return
 * @param {*} props
 * @returns secondary button
 */
type SecondaryButtonProps = {
  label: string;
  className?: string;
};
export const SecondaryButton = (props: SecondaryButtonProps) => {
  const { label, className } = props;
  return (
    <button
      className={`bg-[white] text-primary font-semibold font-inter text-[15px] border-[1px] dark:bg-gray-900 dark:border-white dark:text-white border-primary rounded px-[30px] py-[10px] ${className} `}
    >
      {label}
    </button>
  );
};
