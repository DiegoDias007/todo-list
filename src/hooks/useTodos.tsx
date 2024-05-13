import { useContext } from "react";
import { TodosContext } from "../contexts/TodosContext";

function useTodos() {
  const { todos, total, done, addTodo, deleteTodo, setCompleted } = useContext(TodosContext);
  return { todos, total, done, addTodo, deleteTodo, setCompleted };
}

export { useTodos };