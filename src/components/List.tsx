import styled from "styled-components";
import { useTodos } from "../hooks/useTodos";
import NoTodos from "./NoTodos";
import Todos from "./Todos";

const StyledList = styled.div`
  display: flex;
  justify-content: center;
`

function List() {
  const { todos } = useTodos();
  return (
    <StyledList>
      {todos.length === 0 ? <NoTodos /> : <Todos />}
    </StyledList>
  )
}

export default List;