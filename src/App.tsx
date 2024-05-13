import styled from "styled-components"
import Header from "./components/Header"
import AddTodo from "./components/AddTodo"

const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #1A1A1A;
  color: white;
  width: 100%;
`

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 736px;
  width: 100%;
  position: relative;
`

function App() {

  return (
    <StyledApp>
      <Header />
      <Main>
        <Container>
          <AddTodo />
        </Container>
      </Main>
    </StyledApp>
  )
}

export default App
