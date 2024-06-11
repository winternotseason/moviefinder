import Chart from "../UI/Chart";
import { useState, useEffect, useRef } from "react";
import { getPopularMovies } from "../../services/api";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const PopularChart = () => {
  const [movies, setMovies] = useState([]);
  const Ref = useRef();
  useEffect(() => {
    const fetchMovies = async () => {
      const popularMovies = await getPopularMovies();
      setMovies(popularMovies);
    };
    fetchMovies();
  }, []);

  const handleClickLeft = () => {
    Ref.current.scrollLeft -= 700;
  };
  const handleClickRight = () => {
    Ref.current.scrollLeft += 700;
  };

  return (
    <Chart>
      <p>인기차트 : 대한민국</p>
      <div className="rank" ref={Ref}>
        <IoIosArrowBack
          className="left arrow popular"
          onClick={handleClickLeft}
        />
        {movies.slice(0, 15).map((movie, index) => (
          <div key={movie.id} className="movie">
            <div className="rank-number">
              <span>{index + 1}</span>
            </div>
            <Link to={`/movie?query=${movie.id}`}>
              {" "}
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
            </Link>
            <p className="rank-title">
              {movie.title.length > 12
                ? movie.title.slice(0, 12).trim() + "..."
                : movie.title}
            </p>
          </div>
        ))}
        <IoIosArrowForward
          className="arrow right popular"
          onClick={handleClickRight}
        />
      </div>
    </Chart>
  );
};

export default PopularChart;
