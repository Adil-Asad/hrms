import MainModal from "./mainModal";

type inputIconProps = {
  interviewToggle?: () => void;
};

function RejectMessage() {
  return (
    <div className="flex h-screen justify-center items-center bg-[#00000067] w-screen">
      <MainModal
        img="/img/rejected.png"
        heading="Interview Not Scheduled Successfully!"
        subHeading="We're almost there! It looks like some fields weren't filled in. Please complete all required fields to schedule your interview."
      />
    </div>
  );
}

export default RejectMessage;
