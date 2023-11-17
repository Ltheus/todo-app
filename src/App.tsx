import "./App.css";
import { useState } from "react";
import { ListContent } from "./components/ListContent/ListContent";
// import { ListForm } from "./components/ListForm/ListForm";

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      text: "Item 1",
      isCompleted: false,
    },
    {
      id: 2,
      text: "Item 2",
      isCompleted: false,
    },
    {
      id: 3,
      text: "Item 3",
      isCompleted: false,
    },
  ]);

  return (
    <>
      <h1>To-do List</h1>
      <div>
        {items.map((item) => (
          <ListContent item={item}/>
        ))}
      </div>
    </>
  );
}

export default App;
