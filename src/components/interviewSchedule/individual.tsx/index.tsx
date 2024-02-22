import Image from "next/image";
import { Avatar } from "@material-tailwind/react";

export function AvatarStack() {
  return (
    <div className="flex items-center -space-x-4">
      <Avatar
        variant="circular"
        alt="user 1"
        className="border-2 h-[35px] w-[35px] border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
      />
      <Avatar
        variant="circular"
        alt="user 2"
        className="border-2 h-[35px] w-[35px] border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
      />
      <Avatar
        variant="circular"
        alt="user 3"
        className="border-2 h-[35px] w-[35px] border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1288&q=80"
      />
      <Avatar
        variant="circular"
        alt="user 4"
        className="border-2 h-[35px] w-[35px] border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
      />
      <Avatar
        variant="circular"
        alt="user 5"
        className="border-2 h-[35px] w-[35px] border-white hover:z-10 focus:z-10"
        src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
      />
    </div>
  );
}

const interviews = [
  {
    img: "/img/Ellipse114.png",
    nameI: "Kianna Schleifer",
    time: "08:00 - 09:00",
    date: "Dec 18, 2023",
  },
  {
    img: "/img/Ellipse115.png",
    nameI: "Kianna Schleifer",
    time: "09:00 - 10:00",
  },
  {
    img: "/img/Ellipse116.png",
    nameI: "Kianna Schleifer",
    time: "10:00 - 11:00",
  },
  {
    img: "/img/Ellipse114.png",
    nameI: "Kianna Schleifer",
    time: "08:00 - 09:00",
    date: "Dec 19, 2023",
  },
  {
    img: "/img/Ellipse115.png",
    nameI: "Kianna Schleifer",
    time: "09:00 - 10:00",
  },
  {
    img: "/img/Ellipse116.png",
    nameI: "Kianna Schleifer",
    time: "10:00 - 11:00",
  },
];

type IndivdualProps = {
  openModal: () => void;
};

function Individual({ openModal }: IndivdualProps) {
  return (
    <div className="w-full flex flex-col gap-2.5">
      {interviews.map(({ img, nameI, time, date }, i) => (
        <div key={i}>
          <div className="w-full my-2.5 text-accent text-lg font-semibold font-inter leading-snug tracking-tight">
            {date}
          </div>
          <div
            key={i}
            className="flex w-full justify-between  px-5 py-[15px]  bg-white rounded-lg border-l-2 border-grass-200 items-center  "
          >
            <div className="flex gap-[15px] items-center">
              <Image
                alt="avatar"
                width={40}
                height={40}
                src={img}
                className="rounded-full"
              />
              <div className="text-subheading font-semibold font-inter leading-relaxed tracking-tight">
                {nameI}
              </div>
            </div>
            <div className=" flex flex-col gap-1 ">
              <h3 className="text-dim font-inter text-sm  leading-normal  tracking-tight">
                Interviewers
              </h3>
              <div className="">
                <AvatarStack />
              </div>
            </div>
            <div className=" flex flex-col gap-1 items-center ">
              <div className="text-dim font-inter text-sm  leading-normal  tracking-tight">
                Interview Time
              </div>
              <div className="text-subheading font-semibold font-inter  leading-relaxed tracking-tight">
                {time}
              </div>
            </div>
            <button
              onClick={() => openModal()}
              className="w-full max-w-[15%] px-2.5 py-3 rounded-md border border-primary justify-center items-center flex"
            >
              <div className="  text-primary font-semibold font-inter">
                Reminder
              </div>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Individual;
