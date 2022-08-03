import TodoProvider from "./context/TodoProvider";

export default function Todo() {
  return (
    <TodoProvider>
      <h1>Todo</h1>
      <ul>
        <li></li>
      </ul>
    </TodoProvider>
  );
}
