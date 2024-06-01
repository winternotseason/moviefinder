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
    }
  }
`;

const Chart = () => {
  const [movies, setMovies] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  /* 영화 차트 api 불러오기 */
  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    };
    fetchMovies();
  }, []);

    const handleMouseDown = (e) => {
      setIsMouseDown(true)
      setStartX(e.pageX);
      setScrollLeft(e.target.scrollLeft);
      console.log('mousedown!!')
      console.log(e.pageX)
    }

    const handleMouseUp = () => {
      setIsMouseDown(false)
    }

    const handleMouseMove = (e) => {
      if(!isMouseDown) return;
      const x = e.pageX;
      const walkX = x - startX;
      e.currentTarget.scrollLeft += (scrollLeft - walkX) * 2;
    }
  return (
    <ChartSlider>
      <p>인기차트 : MOVIE FINDER {">"}</p>
      <div className="rank" onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} onMouseMove={handleMouseMove}>
        {movies.slice(0, 15).map((movie, index) => (
          <div key={movie.id} className="movie">
            <div className="rank-number">
              <span>{index + 1}</span>
            </div>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="rank-title">{movie.title}</p>
            <div className="btn">
              <button>바로예매</button>
              <button>관심영화</button>
            </div>
          </div>
        ))}
      </div>
    </ChartSlider>
  );
};

export default Chart;
