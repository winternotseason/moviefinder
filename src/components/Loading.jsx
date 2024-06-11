import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const LoadinDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 22rem;
  height: 100vh;
  .spinner {
    width: 80px;
    height: 80px;
    border: 12px solid rgba(0, 0, 0, 0.1);
    border-top: 12px solid #3498db; /* Primary color */
    border-radius: 50%;
    animation: ${spin} 1.5s linear infinite;
  }
`;

const Loading = () => {
  return (
    <LoadinDiv>
      <div className="spinner"></div>
    </LoadinDiv>
  );
};

export default Loading;
