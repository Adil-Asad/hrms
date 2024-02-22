import MainModal from "./mainModal";

type RejectModalProps = {
  handleRejectModal?: () => void;
  switchTab?: Function;
};

function RejectModal({ handleRejectModal, switchTab }: RejectModalProps) {
  return (
    <div className="flex h-screen justify-center items-center bg-[#00000067] w-screen">
      <MainModal
        img="/img/rejected.png"
        heading="Are you sure you want to reject this user?"
        subHeading=""
      >
        <div className=" justify-center gap-2.5 inline-flex">
          <button
            onClick={() => {
              handleRejectModal?.();
              switchTab?.(2);
            }}
            className="px-9 py-2   rounded-md justify-center items-center text-[#41403C] font-semibold font-inter"
          >
            No
          </button>

          <button
            onClick={() => {
              handleRejectModal?.();
              switchTab?.(4);
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

export default RejectModal;
