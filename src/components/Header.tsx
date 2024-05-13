import styled from "styled-components";
import Logo from "./Logo";

const StyledHeader = styled.header`
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #0D0D0D;
`

function Header() {
  return (
    <StyledHeader>
      <Logo />
    </StyledHeader>
  )
}

export default Header;