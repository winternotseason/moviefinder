import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 10%;
  color: white;
  h1 {
    margin: 0;
  }
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>MOVIE FINDER</h1>
    </StyledHeader>
  );
};

export default Header;
