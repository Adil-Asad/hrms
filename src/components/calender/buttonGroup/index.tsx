import React, { useState } from "react";
import EventComponent from "../eventComponent";
import DepartmentComponent from "../departmentComponent";

interface ButtonGroupProps {
  handleModal?: () => void;
}

const ButtonGroup: React.FC<ButtonGroupProps> = ({
  handleModal,
}: ButtonGroupProps) => {
  const [selectedButton, setSelectedButton] = useState<"event" | "interview">(
    "event"
  );

  const handleButtonClick = (button: "event" | "interview") => {
    setSelectedButton(button);
  };

  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <div className="dark:bg-black flex gap-2.5 border-b border-gray-300 pb-1">
        <button
          className={`${
            selectedButton === "event" ? "bg-grayish" : "opacity-90"
          } rounded-md text-center text-grass-200 text-sm font-semibold font-inter px-2.5 py-3`}
          onClick={() => {
            handleButtonClick("event");
            setToggle(true);
          }}
        >
          Event
        </button>

        <button
          className={`${
            selectedButton === "interview" ? "bg-grayish" : "opacity-90"
          } text-center rounded-md text-grass-200 text-sm font-medium font-inter px-2.5 py-3`}
          onClick={() => {
            handleButtonClick("interview");
            setToggle(false);
          }}
        >
          Interview Schedule
        </button>
      </div>
      <div>
        {toggle ? (
          <EventComponent handleModal={handleModal} />
        ) : (
          <DepartmentComponent handleModal={handleModal} />
        )}
      </div>
    </div>
  );
};

export default ButtonGroup;
