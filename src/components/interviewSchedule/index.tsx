import { useState } from "react";
import Individual from "./individual.tsx";
import CommentModal from "@/components/commentModal";

function InterviewSchedule() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <Individual openModal={toggleModal} />
      {isModalOpen && (
        <CommentModal heading="Add Comment" closeModal={toggleModal} />
      )}
    </div>
  );
}

export default InterviewSchedule;
