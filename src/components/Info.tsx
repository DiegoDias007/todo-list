import styled from "styled-components";
import { useTodos } from "../hooks/useTodos";

const StyledInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  height: 50px;
`

const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 8px;
`

const Text = styled.label`
  color: ${(props) => props.color};
  font-weight: 700;
  font-size: 14px;
`

const Box = styled.div`
  background-color: #333333;
  color: #D9D9D9;
  border-radius: 999px;
  padding: 2px 8px;
  font-size: 12px;
  font-weight: 700;
`

function Info() {
  const { total, done } = useTodos();
  
  return (
    <StyledInfo>
      <TextContainer>
        <Text color="#4EA8DE">Tarefas Criadas</Text>
        <Box >{total}</Box>
      </TextContainer>
      <TextContainer>
        <Text color="#8284FA">Concluídas</Text>
        <Box >{done} de {total}</Box>
      </TextContainer>
    </StyledInfo>
  )
}

export default Info;