import React, { useContext } from "react";
import { StateContext } from "../../context/StateProvider";
import EditModal from "../EditModal/EditModal";

const TodoCard = ({todo, index}) => {

    const {todos,setTodos, newTodo, setNewTodo} = useContext(StateContext)

    const handleDelete = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
      };
    
      const handleEdit = (index, newValue) => {
        const newTodos = [...todos];
        newTodos[index] = newValue;
        setTodos(newTodos);
        localStorage.setItem('todos', JSON.stringify(newTodos));
      };

  return (
    <div className="card w-full bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{todo}</h2>
        <div className="card-actions justify-end">
          <button className="btn btn-xs" onClick={()=>handleDelete(index)}>Delete</button>
          {/* <button className="btn btn-ghost" onClick={()=>handleEdit(index)}>Edit</button> */}
          <label htmlFor="my-modal-3" className="btn btn-xs" onClick={()=>handleEdit(index)}>Edit</label>
        </div>
      </div>
      <section>
        {
            todo &&
            
                <EditModal  todo={todo}></EditModal>
                
        }
     </section>
    </div>
  );
};

export default TodoCard;
