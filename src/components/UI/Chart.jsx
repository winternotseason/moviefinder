import styled from "styled-components";
import PropTypes from "prop-types";

const ChartSlider = styled.div`
  margin-bottom: 8rem;
  margin-left: 3rem;
  margin-right: 3rem;
  p {
    font-size: 2rem;
    font-weight: 800;
  }
  .rank {
    display: flex;
    overflow-x: hidden;
    scroll-behavior: smooth;
    width: 80%;
    padding-right: 10rem;
    .movie {
      position: relative;
      margin-left: 3.5rem;
      img {
        border-radius: 10px;
        width: 20rem;
        height: 30rem;
      }
      .rank-number {
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        background-color: #4a3b87;
        top: 2%;
        left: 3%;
        font-size: 3rem;
        color: #ffffff;
        border-radius: 5px;
        span {
          position: absolute; /* 랭크 숫자가 보라색 배경 사각형 가운데로 오게 */
          top: 8%;
          font-size: 2.5rem;
          font-weight: 800;
        }
      }
      .rank-title {
        margin: 0.8rem 0;
        text-align: center;
        font-size: 2rem;
      }
      .btn {
        text-align: center;
        button {
          font-size: 1.3rem;
          background: none;
          border: 1px solid black;
          width: 9.5rem;
          height: 3rem;
          margin: 0.1rem;
          border-radius: 8px;
          font-weight: 700;
          cursor: pointer;
        }
      }
      .date {
        text-align: center;
        font-size: 1.3rem;
        font-weight: 500;
        margin-top: 0.2rem;
      }
    }
  }
  .arrow {
    z-index: 10;
    position: absolute;
    width: 5rem;
    height: 5rem;
    cursor: pointer;
    color: #2a2a2a;
    &.right {
      right: 0.7rem;
    }
    &.left {
      left: 29rem;
    }
    &.popular {
      top: 59.5rem;
    }
    &.upcoming {
      top: 110rem;
    }
  }
`;

const Chart = ({ children }) => {
  return <ChartSlider>{children}</ChartSlider>;
};

export default Chart;

Chart.propTypes = {
  children: PropTypes.node, // PropTypes for children
};
