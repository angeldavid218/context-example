import { TodoContext } from "./TodoContext";
import { TodoState } from "../interfaces/interfaces";
import { useReducer } from "react";
import { TodoReducer } from "./TodoReducer";
const INITIAL_STATE: TodoState = {
  todoCount: 0,
  todos: [],
  completed: 0,
  pending: 0,
};

interface TodoProviderProps {
  children: JSX.Element | JSX.Element[];
}

const TodoProvider = ({ children }: TodoProviderProps) => {
  const [todoState, dispatch] = useReducer(TodoReducer, INITIAL_STATE);

  return <TodoContext.Provider value={{}}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
