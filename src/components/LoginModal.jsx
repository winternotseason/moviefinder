import styled from "styled-components";
import { useState } from "react";
import Modal from "react-modal";
import kakaoImg from "../assets/kakao.png";
import facebookImg from "../assets/facebook.png";
import JoinModal from "./JoinModal";

const LoginButton = styled.button`
  width: 4rem;
  height: 2.5rem;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  font-weight: 600;
  &.closebutton {
    margin-left: auto;
    color: #9a9a9a;
  }
  &:focus {
    outline: none;
  }
`;

const Login = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0 5rem;
  height: 40rem;
  h3 {
    font-size: 3rem;
    color: #6b6b6b;
    font-weight: 500;
  }

  input {
    &::placeholder {
      font-size: 1.2rem;
    }
    &:focus {
      outline: none;
    }
    font-size: 1.2rem;
    width: 30rem;
    padding: 1.2rem;
    margin-bottom: 3rem;
    border: none;
    border-bottom: 1px solid gray;
    &.login {
      cursor: pointer;
      border: none;
      border-radius: 10px;
      height: 2rem;
      margin-bottom: 1.3rem;
      &.kakao {
        background-color: #fee500;
      }
      &.facebook {
        background-color: #3b5998;
      }
      &.join {
        background: none;
        border: 1px solid #939393;
      }
    }
  }
  label {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 1.3rem;
    font-weight: 600;
    &.kakaologin {
      position: absolute;
      top: 30.3rem;
      img {
        width: 2rem;
        margin-right: 0.5rem;
      }
    }
    &.facebooklogin {
      color: white;
      position: absolute;
      top: 35.6rem;
      img {
        width: 2rem;
        margin-right: 0.5rem;
      }
    }
    &.join {
      top: 24.7rem;
      position: absolute;
    }
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
    height: "42rem",
  },
};

const LoginModal = () => {
  const [loginOpen, setLoginOpen] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <li>
      <LoginButton onClick={() => setModalIsOpen(true)}>로그인</LoginButton>
      <Modal
        style={modalStyle}
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
      >
        {loginOpen ? (
          <Login>
            <h3>로그인</h3>
            <input type="text" placeholder="아이디" />
            <input type="password" placeholder="비밀번호" />
            <input
              type="text"
              className="join login"
              id="join"
              onClick={() => {
                setLoginOpen(false);
              }}
            />
            <label htmlFor="join" className="join">
              회원가입
            </label>
            <input
              type="text"
              className="login kakao"
              id="kakaologin"
              disabled
            />
            <label htmlFor="kakaologin" className="kakaologin">
              <img src={kakaoImg} alt="kakaologo" /> 카카오톡으로 로그인
            </label>
            <input type="text" className="login facebook" disabled />
            <label htmlFor="facebooklogin" className="facebooklogin">
              <img src={facebookImg} alt="kakaologo" />
              페이스북으로 로그인
            </label>
          </Login>
        ) : (
          <JoinModal setLoginOpen={setLoginOpen} />
        )}
      </Modal>
    </li>
  );
};

Modal.setAppElement("#root");
export default LoginModal;
