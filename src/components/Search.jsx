import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80%;
  color: white;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  padding: 0 5rem;
  background-color: #868686;
  border-radius: 5rem;
  width: 50rem;
  height: 8rem;
`;

const Input = styled.input`
  width: 50rem;
  font-size: 3rem;
  padding: 1.2rem;
  margin-left: 1rem;
  background: none;
  outline: none;
  text-decoration: none;
  border: none;
`;

const Search = () => {
  return (
    <Main>
      <SearchBox>
        <FaSearch size={50} color="black" />
        <Input />
      </SearchBox>
    </Main>
  );
};

export default Search;
