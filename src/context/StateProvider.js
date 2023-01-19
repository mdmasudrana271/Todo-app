import { createContext, useState } from "react";

export const StateContext = createContext();


const StateProvider = ({children})=>{
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem('todos')) || []
      );
      const [newTodo, setNewTodo] = useState('');


    const stateValue={todos, setTodos, newTodo, setNewTodo}
    return(
        <StateContext.Provider value={stateValue}>
            {children}
        </StateContext.Provider>
    )
}


export default StateProvider;