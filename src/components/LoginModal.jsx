import styled from "styled-components";
import { useState } from "react";
import Modal from "react-modal";

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
    &:focus {
      outline: none;
    }
    width: 30rem;
    padding: 1.2rem;
    margin-bottom: 3rem;
    border: none;
    border-bottom: 1px solid gray;
    &.join {
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
    }
  }
  label {
    font-size: 1.3rem;
    font-weight: 600;
    &.kakaologin {
      position: absolute;
      top: 25.9rem;
    }
    &.facebooklogin {
      color: white;
      position: absolute;
      top: 31.5rem;
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
    height: "40rem",
  },
};

const LoginModal = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <li>
      <LoginButton onClick={() => setModalIsOpen(true)}>로그인</LoginButton>
      <Modal style={modalStyle} isOpen={modalIsOpen}>
        <Login>
          <h3>로그인</h3>
          <input type="text" placeholder="아이디" />
          <input type="password" placeholder="비밀번호" />
          <input type="text" className="join kakao" id="kakaologin" disabled/>
          <label htmlFor="kakaologin" className="kakaologin">
            카카오톡으로 로그인
          </label>
          <input type="text" className="join facebook" disabled/>
          <label htmlFor="facebooklogin" className="facebooklogin">
            페이스북으로 로그인
          </label>
          <LoginButton
            className="closebutton"
            onClick={() => setModalIsOpen(false)}
          >
            X
          </LoginButton>
        </Login>
      </Modal>
    </li>
  );
};

Modal.setAppElement("#root");
export default LoginModal;
