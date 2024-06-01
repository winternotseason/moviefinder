import styled from "styled-components";

import CommendMovie from "./CommendMovie";
import Chart from "./Chart";

const StyledMain = styled.div`
  width: 100vw;
  margin-left: 22rem;
`;

const Main = () => {
  return (
    <StyledMain>
      <CommendMovie />
      <Chart />
      <div>
        추천영화asdasdsdfsdf sdfsd fsd
        <p>1</p>
        <p>2</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
        <p>1</p>
      </div>
    </StyledMain>
  );
};

export default Main;