import "./App.css";
import { FaTrash } from "react-icons/fa";


function App() {
  return (
    <>
      <div>
        <h1> To-do List </h1>
      </div>
      <div>
        <label htmlFor="item-input">
          Create a new item
          <div>
            <input
              type="text"
              name="item-input"
              id="item-input"
              placeholder="Type here"
            />
          </div>
        </label>
      </div>
      <div>
        <ul>
          <li>
            <input type="checkbox" name="" id="" /> 
            Item
            <button> <FaTrash/> </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default App;
