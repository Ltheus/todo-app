import "./App.css";
import { useState } from "react";
import { ListContent } from "./components/ListContent/ListContent";
import { ListForm } from "./components/ListForm/ListForm";
// import { ListForm } from "./components/ListForm/ListForm";

function App() {
  const [items, setItems] = useState([]);
  const [isCompleted, setIsCompleted] = useState(false);

  const addItem = (title: any) => {
    const newItems: any = [
      ...items,
      {
        id: Math.floor(Math.random() * 69420),
        text: title,
        isCompleted: isCompleted,
      },
    ];
    setItems(newItems);
  };

  const removeItem = (id: number) => {
    const newItems = [...items];
    const filteredItems = newItems.filter((item) =>
      item.id !== id ? item : null
    );
    setItems(filteredItems);
  };

  const completeItem = (id : number) => {
    const newItems = [...items];
    newItems.map((item) => item.id === id ? item.isCompleted = !item.isCompleted : item)
    setItems(newItems)
  };

  return (
    <>
      <h1>To-do List</h1>
      <div className="listContent">
        {items.map((item) => (
          <ListContent
            key={item.id}
            item={item}
            removeItem={removeItem}
            completeItem={completeItem}
          />
        ))}
      </div>
      <div>
        <ListForm addItem={addItem} />
      </div>
    </>
  );
}

export default App;
