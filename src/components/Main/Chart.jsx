import styled from "styled-components";
import { getPopularMovies } from "../../services/api";
import { useEffect, useState } from "react";

const ChartSlider = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;
  p {
    font-size: 2rem;
    font-weight: 800;
  }
  .rank {
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
    scroll-behavior: smooth;
    width: 82%;
    .movie {
      margin-left: 1.5rem;
      img {
        border-radius: 10px;
        width: 20rem;
        height: 30rem;
      }
    }
    h2 {
      span {
        font-size: 3rem;
        text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
          1px 1px 0 #000; /* 텍스트 테두리 설정 */
        color: #ffffff;
      }
      font-weight: 700;
    }
  }
`;

const Chart = () => {
  const [movies, setMovies] = useState([]);
  
  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    };
    fetchMovies();
  }, []);

  return (
    <ChartSlider>
      <p>인기차트 : MOVIE FINDER</p>
      <div
        className="rank"
        onWheel={(e) => {
          e.currentTarget.scrollLeft += e.deltaY * 3;
        }}
      >
        {movies.slice(0, 15).map((movie, index) => (
          <div key={movie.id} className="movie">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>
              <span>{index + 1}</span> {movie.title}
            </h2>
          </div>
        ))}
      </div>
    </ChartSlider>
  );
};

export default Chart;
