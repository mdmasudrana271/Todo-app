import React, { useContext } from "react";
import { useState } from "react";
import { StateContext } from "../../context/StateProvider";

const TodoCard = ({ todo, index }) => {
  const { todos, setTodos, editTodo, setEditTodo } = useContext(StateContext);

  const [on,setOn] = useState(true) 

  const handleDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const handleEdit = (index) => {
    // setOn(!on)
    todos[index] = editTodo;
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  return (
    <div className="card w-full bg-neutral text-neutral-content">
      <div className="card-body items-center text-center">
        {
          on ?
          <h2 className="card-title">{todo}</h2>
          :
          <form onSubmit={handleEdit}  className="mb-4">
          <input
            type="text"
            
            onBlur={(e)=>setEditTodo(e.target.value)}
            defaultValue={todo}
            className="border p-2 rounded text-black"
          />
          <button onClick={()=>handleEdit(index)} type="submit" className="bg-blue-500 p-2 rounded text-white">
            Add
          </button>
        </form>
        }
        <div className="card-actions justify-end">
          <button className="btn btn-xs" onClick={() => handleDelete(index)}>
            Delete
          </button>
          <button  onClick={()=> setOn(!on)} className="btn btn-xs">Edit</button>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
