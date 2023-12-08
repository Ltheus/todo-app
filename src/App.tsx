import { useEffect, useState } from "react";
import { ListContent } from "./components/ListContent/ListContent";
import { ListForm } from "./components/ListForm/ListForm";

interface TodoProps {
  id: number;
  text: string;
  isCompleted: boolean;
  isEditing: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoProps | any>([]);

  const addItem = (title: any) => {
    const itemTitle = title;
    const newItems: any = [
      ...todos,
      {
        id: Math.floor(Math.random() * 1000),
        text: itemTitle,
        isCompleted: false,
        isEditing: false,
      },
    ];
    setTodos(newItems);
    localStorage.setItem("TODO_LIST", JSON.stringify(newItems));
  };

  const removeItem = (id: number) => {
    const newItems = [...todos];
    const filteredItems = newItems.filter((item) =>
      item?.id !== id ? item : null
    );
    setTodos(filteredItems);
    localStorage.setItem("TODO_LIST", JSON.stringify(filteredItems));
  };

  const editItem = (id: number) => {
    const newItems = [...todos];
    newItems.map((item) =>
      item?.id === id ? (item.isEditing = !item?.isEditing) : item
    );
    setTodos(newItems);
    localStorage.setItem("TODO_LIST", JSON.stringify(todos));
  };

  const submitItem = (id: number, text: string) => {
    const newItems = [...todos];
    newItems.map((item) => (item?.id === id ? (item.text = text) : null));
    setTodos(newItems);
    localStorage.setItem("TODO_LIST", JSON.stringify(todos));
  };

  const completeItem = (id: number) => {
    const newItems = [...todos];
    newItems.map((item) =>
      item?.id === id ? (item.isCompleted = !item?.isCompleted) : item
    );
    setTodos(newItems);
    localStorage.setItem("TODO_LIST", JSON.stringify(todos));
  };

  useEffect(() => {
    const data = window.localStorage.getItem("TODO_LIST");
    data !== null ? setTodos(JSON.parse(data)) : setTodos([]);
  }, []);

  return (
    <div className="app-container">
      <div className="title-container">
        <h1>Lista de Tarefas</h1>
      </div>
      <div className="list-container">
        {todos.map((item: any) => (
          <ListContent
            key={item?.id}
            item={item}
            removeItem={removeItem}
            completeItem={completeItem}
            editItem={editItem}
            submitItem={submitItem}
          />
        ))}
      </div>
      <div className="form-container">
        <ListForm addItem={addItem} />
      </div>
    </div>
  );
}

export default App;
