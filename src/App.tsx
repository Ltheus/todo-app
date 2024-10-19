import { useEffect, useState } from "react";
import { ListContent } from "./components/ListContent/ListContent";
import { ListForm } from "./components/ListForm/ListForm";
import { FaListCheck } from "react-icons/fa6";
import { FaRegSadCry, FaRegSmileWink, FaSearch } from "react-icons/fa";
// import { DeleteModal } from "./components/DeleteModal/DeleteModal";
import { TaskModal } from "./components/TaskModal/TaskModal";
import { DeleteModal } from "./components/DeleteModal/DeleteModal";

interface TodoProps {
  id: number;
  text: string;
  isCompleted: boolean;
  isEditing: boolean;
  isOpen: boolean;
  isDeleting: boolean;
}

function App() {
  const [todos, setTodos] = useState<TodoProps | any>([]);
  const [query, setQuery] = useState("");
  const searchIcon = <FaSearch />;

  const addItem = (title: string, status: boolean) => {
    const itemTitle = title;
    const itemStatus = status;
    const newItems: any = [
      {
        id: Math.floor(Math.random() * 10000),
        text: itemTitle,
        isCompleted: itemStatus,
        isEditing: false,
        isOpen: false,
        isDeleting: false,
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
    newItems.map(
      (item) => item?.id === id && (item.isCompleted = !item?.isCompleted)
    );
    setTodos(newItems);
    localStorage.setItem("TODO_LIST", JSON.stringify(todos));
  };

  const openItem = (id: number) => {
    const newItems = [...todos];
    newItems.map((item) => item?.id === id && (item.isOpen = !item?.isOpen));
    setTodos(newItems);
    localStorage.setItem("TODO_LIST", JSON.stringify(todos));
  };

  const deleteItem = (id: number) => {
    const newItems = [...todos];
    newItems.map(
      (item) => item?.id === id && (item.isDeleting = !item?.isDeleting)
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
      {todos.map(
        (item: any) =>
          item?.isOpen && (
            <TaskModal isOpen={item?.isOpen} openModal={openItem} item={item}>
              {item?.text}
            </TaskModal>
          )
      )}
      {todos.map(
        (item: any) =>
          item?.isDeleting && (
            <DeleteModal
              isdeleting={item?.isDeleting}
              openModal={deleteItem}
              deleteTask={removeItem}
              item={item}
            />
          )
      )}
      <h1 className="title-container">
        <div className="search-container">
          <FaListCheck />
          LISTA DE TAREFAS
        </div>
        <div className="search-container">
          {searchIcon}
          <input
            type="text"
            placeholder={`Pesquisar tarefa`}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </h1>

      <div className="form-container">
        <ListForm addItem={addItem} />
      </div>

      {todos?.length !== 0 ? (
        <>
          <div className="list-container">
            <div className="content-container todo-container">
              <h2>A FAZER</h2>
              {todos.some((item: any) => !item?.isCompleted) ? (
                <>
                  <div className="item-container item-container-todo">
                    {todos
                      .filter((item: any) =>
                        item.text.toLowerCase().includes(query)
                      )
                      .map((item: any) =>
                        !item?.isCompleted ? (
                          <ListContent
                            key={item?.id}
                            item={item}
                            deleteItem={deleteItem}
                            completeItem={completeItem}
                            editItem={editItem}
                            submitItem={submitItem}
                            openItem={openItem}
                          />
                        ) : null
                      )}
                  </div>
                </>
              ) : (
                <>
                  <div className="empty-card">
                    <p className="empty-card-message">
                      Você conclui todas as tarefas!
                      <FaRegSmileWink className="emoji" />
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className="content-container done-container">
              <h2>CONCLUÍDAS</h2>
              {todos.some((item: any) => item?.isCompleted) ? (
                <>
                  <div className="item-container item-container-done">
                    {todos
                      .filter((item: any) =>
                        item.text.toLowerCase().includes(query)
                      )
                      .map((item: any) =>
                        item?.isCompleted ? (
                          <>
                            <ListContent
                              key={item?.id}
                              item={item}
                              deleteItem={deleteItem}
                              completeItem={completeItem}
                              editItem={editItem}
                              submitItem={submitItem}
                              openItem={openItem}
                            />
                          </>
                        ) : null
                      )}
                  </div>
                </>
              ) : (
                <p className="empty-card-message">
                  Você ainda não completou nenhuma tarefa...
                  <FaRegSadCry className="emoji" />
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="no-task-title">
          <h2> Você ainda não tem tarefas adicionadas</h2>
          <p> Comece adicionando alguma e organize seu dia!</p>
        </div>
      )}
    </div>
  );
}

export default App;
