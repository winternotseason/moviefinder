import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/api";
import styled from "styled-components";
import commendImage from "../assets/intern.jpeg";

const StyledMain = styled.div`
  width: 100vw;
  margin-left: 22rem;
  .commend-movie {
    height: 40rem;
    background-image: url(${commendImage});
    background-size: cover;
    background-repeat: no-repeat;
    .content {
      position: relative;
      top: 10%;
      left: 7%;
      z-index: 1;
      color: #ffffff; /* 흰색 텍스트를 보기 쉽도록 설정합니다. */
      font-size: 5rem;
      font-weight: 700;
    }
  }
  .commend-movie::before {
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
`;
const Main = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    };
    fetchMovies();
  }, []);

  return (
    <StyledMain>
      <div className="commend-movie">
        <div className="content">홈</div>
      </div>
      <div>
        인기차트{" "}
        {movies.map((movie) => (
          <div key={movie.id} className="movie">
            <h2>{movie.title}</h2>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
      </div>
      <div>추천영화</div>
    </StyledMain>
  );
};

export default Main;
