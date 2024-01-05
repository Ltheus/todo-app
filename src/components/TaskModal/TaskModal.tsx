import { FaXmark } from "react-icons/fa6";
import styled from "./taskModal.module.css";

export const TaskModal = ({ openModal, item, children }: any) => {
  return (
    <div
      className={styled.modalBg}
      onClick={() => {
        openModal(item?.id);
      }}
    >
      <div
        className={styled.modal}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className={styled.modalBtn}>
          <h2> TASK </h2>
          <button
            className="delete-button"
            onClick={() => {
              openModal(item?.id);
            }}
          >
            <FaXmark />
          </button>
        </div>
        <div className={styled.modalContent}>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};
