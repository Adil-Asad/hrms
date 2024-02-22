import MainModal from "./mainModal";

type inputIconProps = {
  interviewToggle?: () => void;
};

function SuccessfulMessage() {
  return (
    <div className="flex h-screen justify-center items-center bg-[#00000067] w-screen">
      <MainModal
        img="/img/recruited.png"
        heading="Interview Scheduled Successfully!"
        subHeading="Your interview has been scheduled successfully."
      />
    </div>
  );
}

export default SuccessfulMessage;
