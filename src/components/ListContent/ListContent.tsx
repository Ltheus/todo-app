import { FaCheck, FaEye, FaPencilAlt, FaTrash, FaUndo } from "react-icons/fa";
import styled from "./listContent.module.css";
import { useState } from "react";

export const ListContent = ({
  item,
  // removeItem,
  completeItem,
  editItem,
  submitItem,
  openItem,
  deleteItem,
}: any) => {
  const [text, setText] = useState(item?.text);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setText(e.target.value);
    item.text = text;
    item.isEditing = !item?.isEditing;
    submitItem(text);
  };

  return (
    <>
      <div
        className={`${styled.taskContainer} ${
          item?.isCompleted && styled.doneTaskContainer
        }`}
      >
        {!item.isEditing ? (
          <div className={styled.contentText}>
            <p
              style={{
                color: item?.isCompleted ? "var(--confirm)" : "none",
                textDecoration: item?.isCompleted ? "line-through 2px var(--confirm)" : "none",
              }}
            >
              {item?.text}
            </p>
          </div>
        ) : (
          <form
            className={styled.itemText}
            onSubmit={handleSubmit}
            id="editForm"
          >
            <input
              autoFocus={true}
              type="text"
              id="editInput"
              value={text ?? ""}
              onChange={(e) => {
                setText(e.target.value);
                item.text = text;
              }}
            />
            <button
              className="edit-button"
              type="submit"
              onClick={handleSubmit}
              disabled={text == (null || "")}
            >
              <FaPencilAlt />
            </button>
          </form>
        )}
        <div className={styled.btnContainer}>
          {!item?.isEditing && (
            <>
              <button
                disabled={item?.isEditing}
                className="confirm-button"
                onClick={() => completeItem(item?.id)}
              >
                {!item?.isCompleted ? <FaCheck /> : <FaUndo />}
              </button>
              <button
                className="delete-button"
                onClick={() => deleteItem(item?.id)}
              >
                <FaTrash />
              </button>
              <button
                className="view-button"
                onClick={() => openItem(item?.id)}
              >
                <FaEye />
              </button>
              {!item?.isCompleted ? <button
                disabled={item?.isCompleted}
                className="edit-button"
                onClick={() => {
                  editItem(item?.id);
                  setText(text == !null ? text : item?.text);
                }}
              >
                <FaPencilAlt />
              </button> : null}
            </>
          )}
        </div>
      </div>
    </>
  );
};
