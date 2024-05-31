

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
      <div>추천영화</div>
    </StyledMain>
  );
};

export default Main;
