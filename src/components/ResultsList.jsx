import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledListUl = styled.ul`
  box-sizing: border-box;
  min-height: 100vh;
  list-style: none;
  padding-bottom: 2rem;
  img {
    margin: 0 3rem;
    width: 10rem;
    height: 15rem;
    border-radius: 10px;
  }
`;

const StyledListLi = styled.li`
  display: inline-block;
  width: 35%;
  margin: 1%;
  position: relative; /* 자식 요소를 절대 위치로 배치하기 위해 필요 */
  box-sizing: border-box;
  padding: 2rem 1rem;
  margin-bottom: 2rem;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${(props) => props.bgImg && props.bgSrc});
    background-size: cover;
    background-position: center;
    background-color: #f2f2f6;
    opacity: 0.3; /* 불투명도 설정 */
    z-index: 1; /* 내용보다 뒤에 배치 */
    border-radius: 10px;
  }

  .flex {
    display: flex;
    align-items: center;
    position: relative;
    z-index: 2; /* 배경 이미지보다 앞에 배치 */
    color: white;
    position: relative;
    z-index: 2; /* 배경 이미지보다 앞에 배치 */
    color: #000000;
    font-size: 1.9rem;
    font-weight: 700;
  }
`;

const ResultsList = ({ results }) => {
  return (
    <StyledListUl>
      {results.length > 0 ? (
        results.map((movie) => (
          <Link to={`/movie?query=${movie.id}`} key={movie.id}>
            <StyledListLi
              key={movie.id}
              bgImg={movie.poster_path}
              bgSrc={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            >
              <div className="flex">
                {movie.poster_path ? (
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                  />
                ) : (
                  <img
                    src={
                      "https://www.htmlcsscolor.com/preview/gallery/FBFBFC.png"
                    }
                  />
                )}
                {movie.title}
              </div>
            </StyledListLi>
          </Link>
        ))
      ) : (
        <h3>검색 결과를 찾을 수 없습니다.</h3>
      )}
    </StyledListUl>
  );
};

ResultsList.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      release_date: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ResultsList;
