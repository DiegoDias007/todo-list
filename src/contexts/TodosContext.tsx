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
  const { value } = useLocalStorage<Todo[]>("todos");
  const [todos, setTodos] = useState<Todo[]>(value);
  const total = todos.length;
  const done = todos.filter((todo) => todo.completed === true).length;

  const ProviderValue = {
    todos,
    total,
    done,
    addTodo: (todo: Todo) => setTodos((prevTodos) => [...prevTodos, todo]),
    deleteTodo: (todoId: number) => setTodos((prevTodos) => prevTodos.filter(
      (todo) => todo.id != todoId
    )),
    setCompleted: (todoId: number) => setTodos((prevTodos) => prevTodos.map((todo) => {
      return todo.id === todoId ? { ...todo, completed: !todo.completed } : todo;
    }))
  };

  return (
    <TodosContext.Provider value={ProviderValue}>
      {children}
    </TodosContext.Provider>
  );
}

export { TodosProvider };
