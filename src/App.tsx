import { useEffect, useState } from "react";
import { ListContent } from "./components/ListContent/ListContent";
import { ListForm } from "./components/ListForm/ListForm";
import { FaListCheck } from "react-icons/fa6";
import { FaRegSadCry, FaRegSadTear, FaRegSmileWink } from "react-icons/fa";
import { DeleteModal } from "./components/DeleteModal/DeleteModal";

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
      {
        id: Math.floor(Math.random() * 10000),
        text: itemTitle,
        isCompleted: false,
        isEditing: false,
      },
      ...todos,
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
      {/* <DeleteModal item={todos}/> */}
      <h1>
        <FaListCheck />
        TO-DO LIST
      </h1>
      <div className="form-container">
        <ListForm addItem={addItem} />
      </div>
      {todos?.length !== 0 ? (
        <div className="list-container">
          <div className="content-container todo-container">
            <h2>TO-DO</h2>
            {todos.some((item: any) => !item?.isCompleted) ? (
              <>
                <div className="item-container item-container-todo">
                  {todos.map((item: any) =>
                    !item?.isCompleted ? (
                      <ListContent
                        key={item?.id}
                        item={item}
                        removeItem={removeItem}
                        completeItem={completeItem}
                        editItem={editItem}
                        submitItem={submitItem}
                      />
                    ) : null
                  )}
                </div>
              </>
            ) : (
              <p className="empty-card-message">
                You got everything done!
                <FaRegSmileWink className="emoji"/>
              </p>
            )}
          </div>
          <div className="content-container done-container">
            <h2>DONE</h2>
            {todos.some((item: any) => item?.isCompleted) ? (
              <>
                <div className="item-container item-container-done">
                  {todos.map((item: any) =>
                    item?.isCompleted ? (
                      <>
                        <ListContent
                          key={item?.id}
                          item={item}
                          removeItem={removeItem}
                          completeItem={completeItem}
                          editItem={editItem}
                          submitItem={submitItem}
                        />
                      </>
                    ) : null
                  )}
                </div>
              </>
            ) : (
              <p className="empty-card-message">
                You haven't completed any tasks...
                <FaRegSadCry className="emoji"/>
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="no-task-title">
          <h2> You've got no tasks</h2>
          <p> Start adding some on the field above and get things done!</p>
        </div>
      )}
    </div>
  );
}

export default App;
