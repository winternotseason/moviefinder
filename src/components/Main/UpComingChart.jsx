import Chart from "../UI/Chart";
import { useState, useEffect, useRef } from "react";
import { getUpcomingMovies } from "../../services/api";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

const UpcomingChart = () => {
  const [movies, setMovies] = useState([]);
  const Ref = useRef();

  useEffect(() => {
    const fetchMovies = async () => {
      const upcomingMovies = await getUpcomingMovies();
      setMovies(upcomingMovies);
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
      <p>개봉예정영화 : 대한민국</p>
      <div className="rank" ref={Ref}>
        <IoIosArrowBack
          className="left arrow upcoming"
          onClick={handleClickLeft}
        />
        {movies.slice(0, 15).map((movie) => (
          <div key={movie.id} className="movie">
            <Link to={`/movie?query=${movie.id}`}>
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
            <p className="date">{movie.release_date}</p>
          </div>
        ))}
        <IoIosArrowForward
          className="arrow right upcoming"
          onClick={handleClickRight}
        />
      </div>
    </Chart>
  );
};

export default UpcomingChart;
