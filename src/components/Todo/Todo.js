import React, { useContext } from 'react';
import { StateContext } from '../../context/StateProvider';
import TodoCard from '../TodoCard/TodoCard';


function Todo() {

const {todos,setTodos, newTodo, setNewTodo} = useContext(StateContext)

  const handleSubmit = event => {
    event.preventDefault();
    todos.push(newTodo)
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
        <button type="submit" className="btn-success p-2 rounded text-white">
          Add
        </button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-20">
        {todos?.map((todo, index) => (
        <TodoCard todo={todo} key={index} index={index}></TodoCard>
        ))}
      </div>
     {
        todos?.length > 0 && 
        <div><button className='btn btn-error mt-10 text-white' onClick={removeall}>Remove All</button></div>
     }
    </div>
  );
}

export default Todo;
