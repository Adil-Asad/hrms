import MainModal from "./mainModal";

type RecruitmentModalProps = {
  handleRecruitment?: () => void;
  switchTab?: Function;
};

function RecruitmentModal({
  handleRecruitment,
  switchTab,
}: RecruitmentModalProps) {
  return (
    <div className="flex h-screen justify-center items-center bg-[#00000067] w-screen">
      <MainModal
        img="/img/recruited.png"
        heading="Are you sure you want to recruited this user?"
        subHeading=""
      >
        <div className=" justify-center gap-2.5 inline-flex">
          <button
            onClick={() => {
              handleRecruitment?.();
            }}
            className="px-9 py-2   rounded-md justify-center items-center text-[#41403C] font-semibold font-inter"
          >
            No
          </button>

          <button
            onClick={() => {
              handleRecruitment?.();
              switchTab?.(3);
            }}
            className="px-9 py-2 bg-[#ECBE13] rounded-md justify-center items-center  text-white  font-semibold font-inter"
          >
            Yes
          </button>
        </div>
      </MainModal>
    </div>
  );
}

export default RecruitmentModal;
