import { useTodos } from "../hooks/useTodos";
import Todo from "./Todo";
import styled from "styled-components";

const StyledTodos = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0;
  padding: 0;
  gap: 12px;
`

function Todos() {
  const { todos } = useTodos();
  return (
    <StyledTodos>
      {todos.map((todo) => {
        return <Todo id={todo.id} text={todo.text} completed={todo.completed} />
      })}
    </StyledTodos>
  )
}

export default Todos;