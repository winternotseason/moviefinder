import styled from "styled-components";
import { BiMoviePlay } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { RiShoppingBag2Line } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import SearchModal from "./SearchModal";
import { Link } from "react-router-dom";

const StyledSideBar = styled.div`
  box-shadow: 5px 0 5px -5px #8c8c8c;
  position: fixed;
  top: 0;
  left: 0;
  width: 22rem;
  background: #f2f2f6;
  min-height: 100%;
  z-index: 999;
  ul {
    padding: 0;
    margin-left: 32px;
    list-style: none;
  }
  li {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    font-weight: 600;
    margin: 2rem 0;
    cursor: pointer;
    .link {
      text-decoration: none;
      color: inherit;
    }
  }
  h2 {
    font-size: 2.3rem;
    font-weight: 900;
    margin-top: 2rem;
    padding-left: 32px;
  }

  .manu-icon {
    font-size: 1.8rem;
    margin-right: 1rem;
    color: rgb(92, 171, 252);
    stroke-width: 0.03rem;
  }
  .top-icon {
    margin-top: 1.5rem;
    margin-left: 32px;
    font-size: 3rem;
    color: rgb(92, 171, 252);
  }
`;

const SideBar = () => {
  return (
    <StyledSideBar>
      <BiMoviePlay className="top-icon" />
      <h2>MOVIE FINDER</h2>
      <ul>
        <SearchModal />
        <li>
          <GoHome className="manu-icon" />
          <Link to="/" className="link">
            홈
          </Link>
        </li>
        <li>
          <RiShoppingBag2Line className="manu-icon" />
          스토어
        </li>
        <li>
          <RxPerson className="manu-icon" />
          마이페이지
        </li>
      </ul>
    </StyledSideBar>
  );
};

export default SideBar;
