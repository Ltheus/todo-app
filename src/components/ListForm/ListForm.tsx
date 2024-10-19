import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import styled from "./listForm.module.css";

export const ListForm = ({ addItem }: any) => {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!title) return;
    addItem(title, status);
    setTitle("");
  };

  const handleChange = (e: any) => {
    setTitle(e.target.value);
  };

  const handleStatusChange = (e: any) => {
    e.target.value == "todo" ? setStatus(false) : setStatus(true);
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
        <select onChange={handleStatusChange}>
          <option value="todo">A fazer</option>
          <option value="done">Concluída</option>
        </select>
        <button type="submit">
          <FaPlus />
        </button>
      </form>
    </div>
  );
};
