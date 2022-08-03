import { TodoState, Todo } from "../interfaces/interfaces";

type todoAction =
  | { type: "addTodo"; payload: Todo }
  | { type: "toggleTodo"; payload: { id: string } };

export const TodoReducer = (
  state: TodoState,
  action: todoAction
): TodoState => {
  switch (action.type) {
    case "addTodo":
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    default:
      return state;
  }
};
