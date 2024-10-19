import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import styled from "./listForm.module.css";

export const ListForm = ({ addItem }: any) => {
  const [title, setTitle] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!title) return;
    addItem(title);
    setTitle("");
  };

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };

  return (
    <div className={styled.todoForm}>
      <h2>NOVA TAREFA</h2>
      <form onSubmit={handleSubmit} id="addForm" name="addForm">
        <input
          id="addInput"
          type="text"
          placeholder="Digite aqui"
          value={title}
          onChange={handleChange}
        />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </div>
  );
};
