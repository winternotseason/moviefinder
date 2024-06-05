import styled from "styled-components";
import CommendMovie from "./CommendMovie";
import PopularChart from "./PopularChart";
import UpcomingChart from "./UpComingChart";

export const StyledMain = styled.div`
  width: 100vw;
  margin-left: 22rem;
`;

const Main = () => {
  return (
    <StyledMain>
      <CommendMovie />
      <PopularChart />
      <UpcomingChart />
    </StyledMain>
  );
};

export default Main;
