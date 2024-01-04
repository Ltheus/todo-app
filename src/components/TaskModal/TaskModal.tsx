import { FaXmark } from "react-icons/fa6";
import styled from "./taskModal.module.css";
import { useState } from "react";

export const TaskModal = ({ openModal, item, children, }: any) => {

  return (
    <div className={styled.modalBg}>
      <div className={styled.modal}>
        <div className={styled.modalBtn}>
          <h2> TASK </h2>
          <button className="delete-button" onClick={() => {openModal(item?.id)}}>
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
