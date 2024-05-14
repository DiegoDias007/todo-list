import styled from "styled-components";
import Info from "./Info";

const StyledTodoList = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  margin-top: 80px;
`

function TodoList() {
  return (
    <StyledTodoList>
      <Info />
    </StyledTodoList>
  )
}

export default TodoList;