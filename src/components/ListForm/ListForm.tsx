import { useState } from "react";
import styled from "./listForm.module.css"

export const ListForm = ({addItem} : any) => {
  const [title, setTitle] = useState("");
  
  const handleSubmit = (e : any) => {
    e.preventDefault();
    if (!title) return;
    addItem(title)
    setTitle('')
  };

  const handleChange = (e : any) => {
    setTitle(e.target.value);
  };

  return (
    <div className={styled.todoForm}>
      <h2>New task: </h2>
      <form onSubmit={handleSubmit} id="addForm" name="addForm">
        <input
        id="addInput"
          type="text"
          placeholder="What's your new task?"
          value={title}
          onChange={handleChange}
        />
        <button type="submit"> Create task </button>
      </form>
    </div>
  );
};
