import { FaCheck, FaPencilAlt, FaSave, FaTrash, FaUndo } from "react-icons/fa";
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
            <label>
              EDIT:
              <input
                type="text"
                id="editInput"
                className={styled.itemText}
                value={text ?? ""}
                onChange={(e) => {
                  setText(e.target.value);
                  item.text = text;
                }}
              />
            </label>
            <button
              className={styled.save}
              type="submit"
              onClick={handleSubmit}
              disabled={text == (null || "")}
            >
              <FaCheck />
            </button>
          </form>
        )}
        <div className={styled.btnContainer}>
          {!item?.isEditing && (
            <>
              <button
                disabled={item.isEditing}
                className={styled.finish}
                onClick={() => completeItem(item.id)}
              >
                {!item?.isCompleted ? <FaCheck /> : <FaUndo />}
              </button>
              <button
                disabled={item.isCompleted || item.isEditing}
                className={styled.edit}
                onClick={() => {
                  editItem(item.id);
                  setText(text == !null ? text : item.text);
                }}
              >
                <FaPencilAlt />
              </button>
              <button
                disabled={item.isEditing}
                className={styled.delete}
                onClick={() => removeItem(item.id)}
              >
                <FaTrash />
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};
