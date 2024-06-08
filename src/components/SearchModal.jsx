import styled from "styled-components";
import { useState } from "react";
import Modal from "react-modal";
import { CiSearch } from "react-icons/ci";

import { useNavigate } from "react-router";

const SearchInputContainer = styled.div`
  height: 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  input {
    background-color: #f2f2f2;
    border: none;
    width: 35rem;
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 3rem;
    padding-right: 7rem;
    height: 2rem;
    border-radius: 20rem;
    font-size: 1.5rem;
    &:focus {
      border: none;
      outline: none;
    }
  }
  .icon {
    color: #848484;
    position: absolute;
    right: 6.5rem;
    font-size: 2.5rem;
  }
`;

const modalStyle = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.75)",
    zIndex: 1000,
  },
  content: {
    zIndex: 1001,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    width: "50rem",
    height: "10rem",
  },
};

const SearchModal = () => {
  const [modalIsOpen_, setModalIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const searchMovies = async (e) => {
    e.preventDefault();
    if (query) {
      setModalIsOpen(false);
      setQuery('')
      navigate(`/search?query=${query}`);
    }
  };

  return (
    <li>
      <CiSearch className="manu-icon" />
      <span onClick={() => setModalIsOpen(true)}>검색 </span>
      <Modal
        style={modalStyle}
        isOpen={modalIsOpen_}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
      >
        <form className="search-form" onSubmit={searchMovies}>
          <SearchInputContainer>
            <input
              type="text"
              placeholder="영화를 검색해보세요!"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
              }}
              required
            />
            <CiSearch className="icon" />
          </SearchInputContainer>
        </form>
      </Modal>
    </li>
  );
};

Modal.setAppElement("#root");

export default SearchModal;
