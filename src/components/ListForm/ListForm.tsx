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
      <h2>Nova tarefa: </h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Digite o título da tarefa"
          value={title}
          onChange={handleChange}
        />
        <button type="submit"> Criar tarefa </button>
      </form>
    </div>
  );
};
