import { FaXmark } from "react-icons/fa6";
import styled from "./taskModal.module.css";
import { Button } from "../Button/Button";

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
          <Button
            className={styled.deleteButton}
            onClick={() => {
              openModal(item?.id);
            }}
          >
            <FaXmark />
          </Button>
        </div>
        <div className={styled.modalContent}>
          <p>{children}</p>
        </div>
      </div>
    </div>
  );
};
