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
              color: item.isCompleted
                ? "var(--sup-color-confirm-main)"
                : "inherit",
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
          >
            <input
              id="editInput"
              className={styled.itemText}
              type="text"
              value={text ?? ""}
              onChange={(e) => {
                setText(e.target.value);
                item.text = text;
              }}
            />
          </form>
        )}
        <div className={styled.btnContainer}>
          {/* complete item button ---------------------------------------------------------------------------------------------- */}
          <button
            disabled={item.isEditing}
            className={styled.finish}
            onClick={() => completeItem(item.id)}
          >
            <FaCheck />
          </button>
          {/* edit item button -------------------------------------------------------------------------------------------------- */}
          <button
            disabled={item.isCompleted}
            className={styled.edit}
            type="submit"
            onClick={() => {
              setText(text == !null ? text : item.text);
              item.text = text;
              editItem(item.id);
            }}
          >
            <FaPencilAlt />
          </button>
          {/* delete item button ------------------------------------------------------------------------------------------------ */}
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
