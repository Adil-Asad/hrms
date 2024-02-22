import MainModal from "./mainModal";
import ModalButtons from "./modalButtons";

function ConfirmationalModal() {
  return (
    <div>
      <MainModal
        img="/img/recruited.png"
        heading="Are you sure you want to recruited this user?"
        subHeading=""
      >
        <ModalButtons />
      </MainModal>
      <MainModal
        img="/img/rejected.png"
        heading="Are you sure you want to reject this user?"
        subHeading=""
      >
        <ModalButtons />
      </MainModal>
      <MainModal
        img="/img/recruited.png"
        heading="Interview Scheduled Successfully!"
        subHeading="Your interview has been scheduled successfully."
      />
      <MainModal
        img="/img/rejected.png"
        heading="Interview Scheduled Successfully!"
        subHeading="We're almost there! It looks like some fields weren't filled in. Please complete all required fields to schedule your interview."
      />
      <MainModal
        img="/img/recruited.png"
        heading="Event Scheduled Successfully!"
        subHeading="Your interview has been scheduled successfully."
      />
    </div>
  );
}

export default ConfirmationalModal;
