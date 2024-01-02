import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import styled from "./deleteModal.module.css"

export const DeleteModal = () => {
  return (
    <div className={styled.modalBg}>
      <div className={styled.modal}>
        <div className={styled.modalTitle}>
          <h2>Sure you want to delete this task?</h2>
        </div>
        <div className={styled.modalBtn}>
          <button className="delete-button">
            <FaXmark />
          </button>
          <button className="confirm-button">
            <FaCheck />
          </button>
        </div>
      </div>
    </div>
  );
};
