import { FaCheck, FaEye, FaPencilAlt, FaTrash, FaUndo } from "react-icons/fa";
import styled from "./listContent.module.css";
import { useState } from "react";
import { Button } from "../Button/Button";

export const ListContent = ({
  item,
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
                textDecoration: item?.isCompleted
                  ? "line-through 2px var(--confirm)"
                  : "none",
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
            <Button
              className={styled.editButton}
              type="submit"
              onClick={handleSubmit}
              disabled={text == (null || "")}
            >
              <FaPencilAlt />
            </Button>
          </form>
        )}
        <div className={styled.btnContainer}>
          {!item?.isEditing && (
            <>
              <Button
                disabled={item?.isEditing}
                className={styled.confirmButton}
                onClick={() => completeItem(item?.id)}
              >
                {!item?.isCompleted ? <FaCheck /> : <FaUndo />}
              </Button>
              <Button
                className={styled.deleteButton}
                onClick={() => deleteItem(item?.id)}
              >
                <FaTrash />
              </Button>
              <Button
                className={styled.viewButton}
                onClick={() => openItem(item?.id)}
              >
                <FaEye />
              </Button>
              {!item?.isCompleted ? (
                <Button
                  disabled={item?.isCompleted}
                  className={styled.editButton}
                  onClick={() => {
                    editItem(item?.id);
                    setText(text == !null ? text : item?.text);
                  }}
                >
                  <FaPencilAlt />
                </Button>
              ) : null}
            </>
          )}
        </div>
      </div>
    </>
  );
};
