import { Typography } from "@material-tailwind/react/components/Typography";
import React from "react";

type CardsProps = {
  number?: number;
  text?: string;
};

function Cards(props: CardsProps) {
  const { number = "", text = "" } = props;
  return (
    <div className="w-full min-w-[90px] h-full min-h-[80px] bg-milk flex flex-col gap-[4px] justify-center items-center px-[8px] py-[10px] rounded-lg ">
      <Typography
        className="text-dim text-xl font-semibold font-inter"
        variant="h1"
      >
        {number}
      </Typography>
      <Typography
        className="text-dim font-inter text-xs font-normal"
        variant="paragraph"
      >
        {text}
      </Typography>
    </div>
  );
}

export default Cards;
