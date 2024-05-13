import styled from "styled-components";

const Container = styled.div`
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0D0D0D;
`

const Logo = styled.img`
  width: 130px;
  height: 50px;
`

function Header() {
  return (
    <Container>
      <Logo src="Logo.png"/>
    </Container>
  )
}

export default Header;