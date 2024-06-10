import styled from "styled-components";

const StyledFooter = styled.footer`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e6e6e6;
  height: 13rem;
  .strong {
    margin-right: 1rem;
    font-size: 1.8rem;
    font-weight: 700;
  }
  p {
    display: flex;
    align-items: center;
    font-weight: 600;
  }
  p,
  h4 {
    margin-left: 22rem;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>
        <span className="strong">Developer </span>
        <span> 황서연 | github | 이메일 | 번호~</span>
      </p>
      <h4>
        회사소개 | 인재채용 | 이용약관 | 개인정보처리방침 | 청소년보호정책 |
        고객센터 | @MOVIEFINDER
      </h4>
    </StyledFooter>
  );
};

export default Footer;
