import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import PlusIcon from "./PlusIcon";
import { useTodos } from "../hooks/useTodos";
import { useLocalStorage } from "../hooks/useLocalStorage";

const StyledAddTodo = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  position: absolute;
  top: -27px;
  height: 54px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 8px;
`;

const Input = styled.input`
  display: flex;
  align-items: center;
  flex: 1;
  background-color: #333333;
  color: white;
  border: 0;
  border-radius: 5px;
  font-size: 16px;
  padding: 16px;

  &::placeholder {
    color: #808080
  }
`

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px;
  background-color: #1E6F9F;
  color: white;
  border-radius: 5px;
  border: 0;
  cursor: pointer;
  height: 100%;
  font-size: 14px;
  font-weight: 700;
  label {
    cursor: pointer;
  }
  
  &:hover {
    background-color: #4EA8DE;
  }
`

function AddTodo() {
  const [todo, setTodo] = useState<string>("");
  const { todos, addTodo } = useTodos();
  const { updateLocalStorage } = useLocalStorage("todos");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {

    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    
    if (todo.length === 0) return;

    const newTodo = {
      id: Date.now(),
      text: todo,
      completed: false,
    };

    addTodo(newTodo);
    updateLocalStorage([...todos, newTodo]);
    setTodo("");
  }

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setTodo(event.target.value);
  }

  return (
    <StyledAddTodo>
      <Form 
        onSubmit={handleSubmit}
      >
        <Input 
          ref={inputRef}
          placeholder="Adicione uma nova tarefa"
          value={todo}
          onChange={handleInputChange} 
        />
        <Button 
          type="submit"
        >
          <label>
            Criar
          </label>
          <PlusIcon />
        </Button>
      </Form>
    </StyledAddTodo>
  )
}

export default AddTodo;
