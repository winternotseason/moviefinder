import styled from "styled-components";
import commendImage from "../../assets/intern.jpeg";

const CommendMain = styled.div`
  height: 40rem;
  background-image: url(${commendImage});
  background-size: cover;
  background-repeat: no-repeat;
  &::before {
    content: "";
    position: absolute;
    top: 25rem;
    left: 22rem;
    width: 100%;
    height: 15rem;
    background-color: rgba(
      0,
      0,
      0,
      0.5
    ); /* 투명도 조절을 위해 alpha 값을 조절할 수 있습니다. */
  }
  .content {
    position: relative;
    z-index: 1;
    color: #ffffff; /* 흰색 텍스트를 보기 쉽도록 설정합니다. */
    &.top {
      top: 10%;
      left: 7%;
      font-size: 5rem;
      font-weight: 700;
    }
    &.bottom {
      display: flex;
      flex-direction: column;
      top: 45%;
      left: 7%;
      font-size: 3rem;
    }
    p {
      &.title {
        margin-bottom: 1rem;
        font-weight: 700;
      }
      &.info {
        margin: 0;
        color: #b7b7b7;
        font-size: 1rem;
        font-weight: 500;
      }
      &.dec {
        margin-right: 2rem;
        color: #c9c9c9;
        font-size: 1rem;
        font-weight: 200;
      }
    }
  }
`;

const CommendMovie = () => {
  return (
    <CommendMain>
      <div className="content top">홈</div>
      <div className="content bottom">
        <p className="title">I, Robot</p>
        <p className="info">SF | 12세 관람가 | 115분</p>
        <p className="dec">
          2035년 인간은 로봇과 공존하며 편리한 생활을 누린다. 집안일부터 아이
          돌봄까지 로봇이 해결해주며 인간의 동반자로 여겨지던 때, 새로운 로봇
          모델의 창시자가 죽게 된다. <br />
          그의 죽음을 둘러싼 수사가 진행되던 중, 그의 죽음이 로봇과
          관련되어있다는 사실을 알게 되고 사건 뒤의 숨은 음모를 찾아 나선다.
        </p>
      </div>
    </CommendMain>
  );
};

export default CommendMovie;
