import { FaCheck, FaPencilAlt, FaTrash } from "react-icons/fa";
import styled from "./listContent.module.css";
import { useState } from "react";

export const ListContent = ({
  item,
  removeItem,
  completeItem,
  editItem,
  submitItem,
}: any) => {
  const [text, setText] = useState(item.text);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setText(e.target.value);
    item.text = text;
    item.isEditing = !item.isEditing;
    submitItem(text);
  };

  return (
    <>
      <div className={styled.contentContainer}>
        {!item.isEditing ? (
          <p
            style={{
              color: item.isCompleted ? "#279e17" : "inherit",
              textDecoration: item.isCompleted ? "line-through" : "none",
            }}
          >
            {item.text}
          </p>
        ) : (
          <form
            className={styled.itemText}
            onSubmit={handleSubmit}
            id="editForm"
            name="editForm"
          >
            <input
              id="editInput"
              type="text"
              style={{
                color: item.isCompleted ? "#279e17" : "inherit",
                textDecoration: item.isCompleted ? "line-through" : "none",
              }}
              value={text ?? ""}
              onChange={(e) => {
                setText(e.target.value);
                item.text = text;
              }}
            />
          </form>
        )}
        <div className={styled.contentBtn}>
          <button
            disabled={item.isCompleted}
            className={styled.edit}
            type="submit"
            onClick={() => {
              setText(text);
              item.text = text;
              editItem(item.id);
            }}
          >
            <FaPencilAlt />
          </button>
          <button
            disabled={item.isEditing}
            className={styled.finish}
            onClick={() => completeItem(item.id)}
          >
            <FaCheck />
          </button>
          <button
            disabled={item.isEditing}
            className={styled.delete}
            onClick={() => removeItem(item.id)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </>
  );
};
