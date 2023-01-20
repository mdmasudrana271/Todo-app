import { useEffect } from "react";
import { createContext, useState } from "react";

export const StateContext = createContext();


const StateProvider = ({children})=>{
    const [todos, setTodos] = useState( []);
      const [newTodo, setNewTodo] = useState('');
      const [editTodo, setEditTodo] = useState('')

      useEffect(()=>{
        setTodos(JSON.parse(localStorage.getItem('todos')))
      },[])


    const stateValue={todos, setTodos, newTodo, setNewTodo, editTodo, setEditTodo}
    return(
        <StateContext.Provider value={stateValue}>
            {children}
        </StateContext.Provider>
    )
}


export default StateProvider;