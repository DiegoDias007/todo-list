import styled from "styled-components";
import Info from "./Info";
import List from "./List";

const StyledTodoList = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-top: 80px;
  flex-direction: column;
  gap: 20px;
`

function TodoList() {
  return (
    <StyledTodoList>
      <Info />
      <List />
    </StyledTodoList>
  )
}

export default TodoList;