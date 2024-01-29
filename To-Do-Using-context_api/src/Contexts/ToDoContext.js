import { createContext, useContext } from "react";

export const ToDoContext = createContext({
    // Create a arrayy  to store the todos
  todos: [ 
    {
        id: 1,
        todo:"Todo msg",
        completed: false,
    }
  ],
  addTodo:(todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {}
})

export const useTodo = () => {
    return useContext(ToDoContext)
}

export const TodoProvider = ToDoContext.Provider;
