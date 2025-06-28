import { createContext , useContext } from "react";

export const TodoContext = createContext({

})

export const useTodo = () => {
    return useContext(TodoContextx)
}

export const TodoProvider = TodoContext.Provider