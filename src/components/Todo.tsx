import { useTodos } from "../hooks/useTodos";
import { Todo as TodoType } from "../types/Todo";
import styled, { css } from "styled-components";
import Trash from "./Trash";
import Checkbox from "./Checkbox";

const StyledTodo = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: 1px solid #333333;
  border-radius: 8px;
  padding: 16px;
  width: 100%;
  background-color: #262626;
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
`

const StyledCheckbox = styled.div<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #4EA8DE;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  cursor: pointer;

  &:hover {
    opacity: 80%;
  }

  ${(props) => props.checked && css`
    background-color: #5E60CE;
    border-color: #5E60CE;
  `}
`;

const Text = styled.span<{completed: boolean}>`
  font-size: 14px;
  line-height: 20px;

  ${(props) => props.completed && css`
    text-decoration: line-through;
    color: #808080;
  `}
`

const DeleteButton = styled.button`
  cursor: pointer;
  background-color: #262626;
  border: 0;
  width: 24px;
  height: 24px;
  border-radius: 4px;

  &:hover {
    background-color: #333333;
  }
`

function Todo({ id, text, completed }: TodoType) {
  const { deleteTodo, setCompleted } = useTodos();

  return (
    <StyledTodo>
      <Label>
        <StyledCheckbox
          checked={completed}
          onClick={() => setCompleted(id)}
        >
          {completed && <Checkbox />}
        </StyledCheckbox>
        <Text completed={completed}>
          {text}
        </Text>
      </Label>
      <DeleteButton onClick={() => deleteTodo(id)}>
        <Trash />
      </DeleteButton>
    </StyledTodo>
  );
}

export default Todo;