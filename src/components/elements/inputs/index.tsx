import { ChangeEvent, useState } from "react";

type EmailInputProps = {
  label?: string;
  placeholder?: string;
  error?: boolean;
  errorMessage?: string;
  className?: string;
};

export function EmailInput(props: EmailInputProps) {
  const {
    label = "",
    placeholder = "jessica@gmail.com",
    error = false,
    errorMessage = "",
    className = "",
  } = props;

  return (
    <div
      className={`flex flex-col justify-center items-start-col gap-[6px]  ${className}`}
    >
      <label
        className="text-[#565551] text-base font-normal font-roboto dark:text-white"
        htmlFor="email"
      >
        {label}
      </label>
      <input
        className="h-[42px] bg-[#EFEFEF] placeholder:text-dim text-accent px-[24px] py-[15px] rounded outline-none w-full dark:bg-gray-900 dark:text-white"
        id="email"
        type="email"
        placeholder={placeholder}
      />
      {error && (
        <span className="text-error text-base font-normal font-roboto leading-normal tracking-tight pt-[6px]">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
type PasswordInputProps = {
  label?: string;
  placeholder?: string;
  className?: string;
  error?: boolean;
};

export function PasswordInput(props: PasswordInputProps) {
  const { label = "", placeholder = "", className = "", error = false } = props;
  return (
    <div className="w-full flex flex-col justify-center items-start-col gap-[6px]">
      <label
        className="text-dim  text-[16px] font-normal font-roboto"
        htmlFor="password"
      >
        {label}
      </label>
      <input
        className={`h-[54px] bg-[#EFEFEF] placeholder:text-dim text-accent px-[24px] py-[15px] rounded outline-none w-full ${className}`}
        id="password"
        type="password"
        placeholder={placeholder}
      />
      {error && (
        <span className="text-error text-base font-normal font-roboto leading-normal tracking-tight pt-[6px]">
          Your email is not matched with your password!
        </span>
      )}
    </div>
  );
}

type AlphabeticInputProps = {
  label?: string;
  placeholder?: string;
  className?: string;
  suffix?: string;
  event?: ChangeEvent<HTMLInputElement>;
};

export function AlphabeticInput(props: AlphabeticInputProps) {
  const [isInput, setIsInput] = useState("");

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;

    if (/^[a-zA-Z]*$/.test(inputValue)) {
      setIsInput(inputValue);
    } else {
      ("Enter alphabets only");
    }
  };

  const { label, placeholder, className, suffix } = props;

  return (
    <div className="flex flex-col justify-center items-start-col gap-[6px] w-full ">
      <label
        className="text-body text-base font-normal font-roboto"
        htmlFor="alphabeticInputField"
      >
        {label} <span className="text-error">{suffix}</span>
      </label>
      <input
        id="alphabeticInputField"
        onChange={handleInputChange}
        className={`dark:bg-gray-900 dark:text-white h-[54px] bg-slate placeholder:text-dim text-accent px-[24px] py-[15px] rounded-md outline-none w-full ${className}`}
        type="text"
        placeholder={placeholder}
        value={isInput}
      />
      <span className="text-error text-base font-normal font-roboto leading-normal tracking-tight pt-[6px] hidden">
        Your email is not matched with your password!
      </span>
    </div>
  );
}

type Option = {
  value: string;
  text: string;
};

type SelectInputProps = {
  label: string;
  options?: Option[];
  heading?: string;
  suffix?: string;
};

export function SelectInput(props: SelectInputProps) {
  const { label, options, heading, suffix } = props;

  return (
    <div className="w-full flex gap-[6px] justify-center flex-col">
      <label
        className="text-[16px] font-roboto font-normal leading-[24px]"
        htmlFor="gender"
      >
        {heading} <span className="text-error">{suffix}</span>
      </label>
      <div className="w-full h-[54px] px-[24px] py-[9px] flex justify-between items-center rounded-md bg-slate dark:bg-gray-900 dark:text-white">
        <select
          className="bg-slate outline-none w-full text-dim dark:bg-gray-900"
          id="gender"
          name="gender"
        >
          <option value="" selected disabled>
            {label}
          </option>
          {options &&
            options.map((v, i) => (
              <option value={v.value} key={i}>
                {v.text}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
}

type NumberInputProps = {
  label?: string;
  placeholder?: string;
  event?: ChangeEvent<HTMLInputElement>;
};

export const NumberInput = (props: NumberInputProps) => {
  const [phoneNumber, setPhoneNumber] = useState("");

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const inputValue = event.target.value;

    // Check if the input contains only numeric characters
    if (/^\d*$/.test(inputValue)) {
      setPhoneNumber(inputValue);
    } else {
      ("enter numeric numbers");
    }
  }

  const { label = "", placeholder = "+92 00000000" } = props;
  return (
    <div className="w-full flex gap-[6px] justify-center flex-col">
      <label
        className="text-text text-[16px] font-roboto font-normal leading-[24px] dark:text-white "
        htmlFor="2"
      >
        {label}
      </label>
      <input
        className=" w-full h-[42px] bg-slate px-[24px] py-[9px] rounded-md outline-none dark:text-white dark:bg-gray-900"
        type="tel"
        name=""
        id="2"
        placeholder={placeholder}
        onChange={handleChange}
        value={phoneNumber}
      />
    </div>
  );
};
