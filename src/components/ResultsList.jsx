import PropTypes from "prop-types";
import styled from "styled-components";

const StyledListUl = styled.ul`
  list-style: none;
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
    background-image: url(${(props) => props.bgImg});
    background-size: cover;
    background-position: center;
    opacity: 0.3; /* 불투명도 설정 */
    z-index: 1; /* 내용보다 뒤에 배치 */
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
          <StyledListLi
            key={movie.id}
            bgImg={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          >
            <div className="flex">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              {movie.title}
            </div>
          </StyledListLi>
        ))
      ) : (
        <li>No results found</li>
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
