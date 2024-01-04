import { FaCheck, FaPencilAlt, FaTrash, FaUndo } from "react-icons/fa";
import styled from "./listContent.module.css";
import { useState } from "react";
import { TaskModal } from "../TaskModal/TaskModal";

export const ListContent = ({
  item,
  removeItem,
  completeItem,
  editItem,
  submitItem,
  openItem,
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
          <div
            className={styled.contentText}
            onClick={() => openItem(item?.id)}
          >
            <p
              style={{
                textDecoration: item.isCompleted ? "line-through" : "none",
              }}
            >
              {item.text}
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
              className="confirm-button"
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
                className="confirm-button"
                onClick={() => completeItem(item.id)}
              >
                {!item?.isCompleted ? <FaCheck /> : <FaUndo />}
              </button>
              <button
                disabled={item.isCompleted}
                className="edit-button"
                onClick={() => {
                  editItem(item.id);
                  setText(text == !null ? text : item.text);
                }}
              >
                <FaPencilAlt />
              </button>
              <button
                className="delete-button"
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
