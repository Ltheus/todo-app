import { FaCheck } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import styled from "./deleteModal.module.css"

export const DeleteModal = ( item : any ) => {
  return (
    <div className={styled.modalBg}>
      <div className={styled.modal}>
        <div className={styled.modalTitle}>
          <h2>Do you want to delete this task?</h2>
          {/* <p> {item?.text} </p> */}
          <p> Study reactJS </p>
        </div>
        <div className={styled.modalBtn}>
          <button className={styled.cancelBtn}>
            <FaXmark />
          </button>
          <button className={styled.confirmBtn}>
            <FaCheck />
          </button>
        </div>
      </div>
    </div>
  );
};
