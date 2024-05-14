import { createContext, useState } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { Todo } from "../types/Todo";

interface TodosContextType {
  todos: Todo[];
  total: number;
  done: number;
  addTodo: (todo: Todo) => void;
  deleteTodo: (todoId: number) => void;
  setCompleted: (todoId: number) => void;
}

export const TodosContext = createContext<TodosContextType>({
  todos: [],
  total: 0,
  done: 0,
  addTodo: () => {},
  deleteTodo: () => {},
  setCompleted: () => {}
});

interface TodosProviderProps {
  children: React.ReactNode;
}

function TodosProvider({ children }: TodosProviderProps) {
  const { value, updateLocalStorage } = useLocalStorage<Todo[]>("todos");
  const [todos, setTodos] = useState<Todo[]>(value);
  const total = todos.length;
  const done = todos.filter((todo) => todo.completed === true).length;

  const ProviderValue = {
    todos,
    total,
    done,
    addTodo: (todo: Todo) => setTodos((prevTodos) => [...prevTodos, todo]),
    deleteTodo: (todoId: number) => {
      const newTodos = todos.filter((todo) => todo.id != todoId);
      setTodos(newTodos);
      updateLocalStorage(newTodos);
    },
    setCompleted: (todoId: number) => {
      const newTodos = todos.map((todo) => {
        return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo});
      setTodos(newTodos);
      updateLocalStorage(newTodos);
    }
  };

  return (
    <TodosContext.Provider value={ProviderValue}>
      {children}
    </TodosContext.Provider>
  );
}

export { TodosProvider };
