import React, { useContext, useState } from 'react';
import { StateContext } from '../../context/StateProvider';
import TodoCard from '../TodoCard/TodoCard';


function Todo() {
//   const [todos, setTodos] = useState(
//     JSON.parse(localStorage.getItem('todos')) || []
//   );
//   const [newTodo, setNewTodo] = useState('');

let d = new Date();
let minutes = d.getMinutes();
let seconds = d.getSeconds();
const time ={
    minutes,
    seconds
}

const {todos,setTodos, newTodo, setNewTodo} = useContext(StateContext)

  const handleSubmit = event => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify(todos));
    setNewTodo('');
  };

  const removeall= ()=>{
    setTodos([])
    localStorage.removeItem('todos');
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-medium">To-do List</h1>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          className="border p-2 rounded"
        />
        <button type="submit" className="bg-blue-500 p-2 rounded text-white">
          Add
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {todos.map((todo, index) => (
        <TodoCard todo={todo} key={index} index={index}></TodoCard>
        ))}
      </div>
     {
        todos.length > 0 && 
        <div><button className='btn btn-primary mt-10' onClick={removeall}>Remove All</button></div>
     }
    </div>
  );
}

export default Todo;
