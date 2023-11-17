import { FaCheck, FaTrash } from "react-icons/fa";

export const ListContent = ({ item } : any) => {
  return (
    <div>
      <p>{item.text}</p>
      <div>
        <button>
          <FaCheck />
        </button>
        <button>
          <FaTrash />   
        </button>
      </div>
    </div>
  );
};
