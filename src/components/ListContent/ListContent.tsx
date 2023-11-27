import { FaCheck, FaPencilAlt, FaTrash } from "react-icons/fa";
import styled from "./listContent.module.css";
import { useState } from "react";

export const ListContent = ({ item, removeItem, completeItem }: any) => {
  const [text, setText] = useState(item.text)

  return (
    <div className={styled.contentContainer}>
      <p
        style={{
          color: item.isCompleted ? "#279e17" : "inherit",
          textDecoration: item.isCompleted ? "line-through" : "none",
        }}
      >
        {text}
      </p>
      
      {/* ------------------------------- tentar conditional rendering p/ editar a tarefa!!!! ------------------------------- */}

      {/* <input
        className={styled.itemText}
        type="text"
        style={{
          color: item.isCompleted ? "#279e17" : "inherit",
          textDecoration: item.isCompleted ? "line-through" : "none",
        }}
        value={item.text}
        disabled
      /> */}

      <div className={styled.contentBtn}>
        <button className={styled.edit} onClick={() => (setText("abobrinha!!!!"))}>
          <FaPencilAlt />
        </button>
        <button className={styled.finish} onClick={() => completeItem(item.id)}>
          <FaCheck />
        </button>
        <button className={styled.delete} onClick={() => removeItem(item.id)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
};
