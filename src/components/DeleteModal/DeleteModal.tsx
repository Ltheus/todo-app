import { FaXmark } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import styled from "./deleteModal.module.css";

export const DeleteModal = ({ item, openModal, deleteTask }: any) => {
  const handleEscape = (e: any) => {
    e.key === "Escape" && openModal(item?.id);
  };

  return (
    <div
      className={styled.modalBg}
      onKeyDown={handleEscape}
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
        <h2> Sure to delete this task? </h2>
        <div className={styled.modalBtn}>
          <button
            className={styled.cancel}
            onClick={() => {
              openModal(item?.id);
            }}
          >
            <FaXmark />
          </button>
          <button
            autoFocus={true}
            className={styled.confirm}
            onClick={() => {
              deleteTask(item?.id);
            }}
          >
            <FaCheck />
          </button>
        </div>
      </div>
    </div>
  );
};
